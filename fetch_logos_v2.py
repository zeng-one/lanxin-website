#!/usr/bin/env python3
"""从各公司官网下载Logo"""

import os
import requests
import re
import time

output_dir = "public/logos"
os.makedirs(output_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
}

# 公司官网列表
companies = [
    ("新希望集团", "xinxiwang", "https://www.newhopegroup.com"),
    ("通威集团", "tongwei", "https://www.tongwei.com"),
    ("长虹集团", "changhong", "https://www.changhong.com"),
    ("泸州老窖", "luzhoulaojiao", "https://www.lzlj.com"),
    ("五粮液集团", "wuliangye", "https://www.wuliangye.com.cn"),
    ("四川路桥", "sichuanluqiao", "https://www.scrb.cn"),
    ("东方电气", "dongfangdianqi", "https://www.dongfang.com"),
    ("攀钢集团", "pangang", "https://www.pangang.com"),
    ("成飞集成", "chengfei", "http://www.cac-cfi.com"),
    ("红旗连锁", "hongqian", "http://www.hongqiancorp.com"),
    ("科伦药业", "kelun", "https://www.kelun.com"),
    ("天齐锂业", "tianqi", "https://www.tianqilithium.com"),
    ("水井坊", "shuijingfang", "https://www.swellfun.com"),
    ("舍得酒业", "shede", "https://www.tuopaishede.com"),
]

def extract_logo_from_html(html, base_url):
    """从HTML中提取Logo图片URL"""
    patterns = [
        r'<img[^>]+src="([^"]+logo[^"]*)"[^>]*>',  # 包含logo的图片
        r'<img[^>]+src="([^"]+Logo[^"]*)"[^>]*>',  # 包含Logo的图片
        r'<link[^>]+rel="[^"]*icon[^"]*"[^>]+href="([^"]+)"',  # favicon
        r'<img[^>]+class="[^"]*logo[^"]*"[^>]+src="([^"]+)"',  # class包含logo
        r'<img[^>]+src="([^"]+/images/[^"]+)"[^>]*>',  # images目录下的图片
    ]
    
    for pattern in patterns:
        matches = re.findall(pattern, html, re.IGNORECASE)
        for match in matches:
            if match.startswith('http'):
                return match
            elif match.startswith('//'):
                return 'https:' + match
            elif match.startswith('/'):
                return base_url + match
            else:
                return base_url + '/' + match
    return None

for company_name, filename, url in companies:
    try:
        print(f"正在访问: {company_name} ({url})...")
        
        resp = requests.get(url, headers=headers, timeout=15, allow_redirects=True)
        
        if resp.status_code == 200:
            logo_url = extract_logo_from_html(resp.text, url)
            
            if logo_url:
                print(f"  找到Logo: {logo_url[:60]}...")
                
                img_resp = requests.get(logo_url, headers=headers, timeout=15)
                if img_resp.status_code == 200:
                    # 确定文件扩展名
                    content_type = img_resp.headers.get('Content-Type', '')
                    if 'svg' in content_type:
                        ext = 'svg'
                    elif 'png' in content_type:
                        ext = 'png'
                    elif 'jpeg' in content_type or 'jpg' in content_type:
                        ext = 'jpg'
                    else:
                        ext = 'png'
                    
                    filepath = os.path.join(output_dir, f"{filename}.{ext}")
                    with open(filepath, 'wb') as f:
                        f.write(img_resp.content)
                    print(f"  ✓ 已保存: {filepath} ({len(img_resp.content)} bytes)")
                else:
                    print(f"  ✗ 下载失败: {img_resp.status_code}")
            else:
                print(f"  ✗ 未找到Logo")
        else:
            print(f"  ✗ 访问失败: {resp.status_code}")
            
    except Exception as e:
        print(f"  ✗ 错误: {e}")
    
    time.sleep(1)

print("\n完成!")
