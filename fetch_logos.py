#!/usr/bin/env python3
"""从搜索引擎下载企业Logo图片"""

import os
import requests
import time
from urllib.parse import quote

# 企业列表
companies = [
    ("新希望集团", "xinxiwang"),
    ("通威集团", "tongwei"),
    ("长虹集团", "changhong"),
    ("泸州老窖", "luzhoulaojiao"),
    ("五粮液集团", "wuliangye"),
    ("四川路桥", "sichuanluqiao"),
    ("东方电气", "dongfangdianqi"),
    ("攀钢集团", "pangang"),
    ("成飞集成", "chengfei"),
    ("四川中烟", "sichuanzhongyan"),
    ("红旗连锁", "hongqian"),
    ("蓝剑饮品", "lanjian"),
    ("科伦药业", "kelun"),
    ("天齐锂业", "tianqi"),
    ("川投能源", "chuantou"),
    ("四川成渝", "sichuanchengyu"),
    ("富森美家居", "fusenmei"),
    ("水井坊", "shuijingfang"),
    ("舍得酒业", "shede"),
]

output_dir = "public/logos"
os.makedirs(output_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# 使用 Bing 图片搜索 API
for company_name, filename in companies:
    try:
        print(f"正在搜索: {company_name}...")
        
        # 构造搜索 URL
        query = quote(f"{company_name} logo")
        search_url = f"https://www.bing.com/images/search?q={query}&form=HDRSC2&first=1"
        
        # 获取搜索结果页面
        resp = requests.get(search_url, headers=headers, timeout=10)
        
        if resp.status_code == 200:
            # 从 HTML 中提取图片 URL
            import re
            # 查找图片 URL
            img_urls = re.findall(r'murl":"(https?://[^"]+\.(?:png|jpg|jpeg|svg))"', resp.text, re.IGNORECASE)
            
            if img_urls:
                # 下载第一张图片
                img_url = img_urls[0]
                print(f"  找到图片: {img_url[:60]}...")
                
                img_resp = requests.get(img_url, headers=headers, timeout=15)
                if img_resp.status_code == 200:
                    # 确定文件扩展名
                    ext = img_url.split('.')[-1].lower()
                    if ext not in ['png', 'jpg', 'jpeg', 'svg']:
                        ext = 'png'
                    
                    filepath = os.path.join(output_dir, f"{filename}.{ext}")
                    with open(filepath, 'wb') as f:
                        f.write(img_resp.content)
                    print(f"  ✓ 已保存: {filepath}")
                else:
                    print(f"  ✗ 下载失败: {img_resp.status_code}")
            else:
                print(f"  ✗ 未找到图片")
        else:
            print(f"  ✗ 搜索失败: {resp.status_code}")
            
    except Exception as e:
        print(f"  ✗ 错误: {e}")
    
    time.sleep(1)  # 避免请求过快

print("\n完成!")
