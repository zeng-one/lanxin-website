import type { VercelRequest, VercelResponse } from '@vercel/node';

const DINGTALK_WEBHOOK = 'https://oapi.dingtalk.com/robot/send?access_token=e747ace1b6a735fd2cccbfb6d75cd7f8df6db203f26c8b1ff4db3f6f53c3537e';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 设置 CORS 头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, company, message } = req.body;

    // 验证必填字段
    if (!name || !phone || !message) {
      return res.status(400).json({ error: '请填写必填项' });
    }

    // 构造钉钉消息
    const dingtalkMessage = {
      msgtype: 'markdown',
      markdown: {
        title: '网站留言通知',
        text: `## 📝 网站新留言\n\n**姓名：** ${name}\n\n**电话：** ${phone}\n\n**公司：** ${company || '未填写'}\n\n**留言内容：**\n> ${message}\n\n---\n⏰ 时间：${new Date().toLocaleString('zh-CN')}`
      }
    };

    // 发送到钉钉
    const response = await fetch(DINGTALK_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dingtalkMessage),
    });

    const result = await response.json();

    if (result.errcode === 0) {
      return res.status(200).json({ success: true, message: '提交成功' });
    } else {
      console.error('钉钉推送失败:', result);
      return res.status(500).json({ error: '推送失败，请稍后重试' });
    }
  } catch (error) {
    console.error('处理请求失败:', error);
    return res.status(500).json({ error: '服务器错误' });
  }
}
