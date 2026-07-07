from flask import Flask, request, jsonify
from datetime import datetime
import json
import urllib.request
import os

app = Flask(__name__)

DINGTALK_WEBHOOK = 'https://oapi.dingtalk.com/robot/send?access_token=e747ace1b6a735fd2cccbfb6d75cd7f8df6db203f26c8b1ff4db3f6f53c3537e'
LOG_FILE = '/var/log/lanxin-api/contact.log'


def log_message(name, phone, company, message):
    os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
    entry = {
        'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'name': name,
        'phone': phone,
        'company': company or '未填写',
        'message': message,
    }
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(json.dumps(entry, ensure_ascii=False) + '\n')


def send_dingtalk(name, phone, company, message):
    payload = {
        'msgtype': 'markdown',
        'markdown': {
            'title': '网站留言通知',
            'text': f'## 📝 网站新留言\n\n**姓名：** {name}\n\n**电话：** {phone}\n\n**公司：** {company or "未填写"}\n\n**留言内容：**\n> {message}\n\n---\n⏰ 时间：{datetime.now().strftime("%Y-%m-%d %H:%M:%S")}'
        }
    }
    data = json.dumps(payload, ensure_ascii=False).encode('utf-8')
    req = urllib.request.Request(
        DINGTALK_WEBHOOK,
        data=data,
        headers={'Content-Type': 'application/json'},
        method='POST'
    )
    with urllib.request.urlopen(req, timeout=10) as resp:
        return json.loads(resp.read().decode('utf-8'))


@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        return '', 200

    try:
        data = request.get_json() or {}
        name = data.get('name', '').strip()
        phone = data.get('phone', '').strip()
        company = data.get('company', '').strip()
        message = data.get('message', '').strip()

        if not name or not phone or not message:
            return jsonify({'error': '请填写必填项'}), 400

        # 先保存到文件，这是基础记录
        log_message(name, phone, company, message)

        # 尝试推送到钉钉，失败不影响提交成功
        try:
            result = send_dingtalk(name, phone, company, message)
            if result.get('errcode') != 0:
                print('钉钉推送失败:', result)
        except Exception as e:
            print('钉钉推送异常:', e)

        return jsonify({'success': True, 'message': '提交成功'}), 200

    except Exception as e:
        print('处理请求失败:', e)
        return jsonify({'error': '服务器内部错误'}), 500


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    return response


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, debug=False)
