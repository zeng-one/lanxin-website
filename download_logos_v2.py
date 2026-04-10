#!/usr/bin/env python3
"""下载四川知名企业Logo - 使用多个图片源"""

import os
import urllib.request
import ssl
import time

ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

output_dir = "/Users/cengyuanbing/WorkBuddy/20260330160156/app/public/logos"
os.makedirs(output_dir, exist_ok=True)

# 企业Logo配置（名称、搜索关键词、品牌色）
companies = [
    ("xinxiwang", "新希望", "#4CAF50"),
    ("tongwei", "通威", "#2196F3"),
    ("changhong", "长虹", "#F44336"),
    ("luzhoulaojiao", "泸州老窖", "#8B0000"),
    ("wuliangye", "五粮液", "#FFD700"),
    ("sichuanluqiao", "四川路桥", "#1976D2"),
    ("dongfangdianqi", "东方电气", "#FF5722"),
    ("pangang", "攀钢", "#607D8B"),
    ("chengfei", "成飞", "#3F51B5"),
    ("sichuanzhongyan", "四川中烟", "#795548"),
    ("hongqian", "红旗连锁", "#E91E63"),
    ("lanjian", "蓝剑", "#03A9F4"),
    ("kelun", "科伦药业", "#009688"),
    ("tianqi", "天齐锂业", "#00BCD4"),
    ("chuantou", "川投能源", "#FF9800"),
    ("sichuanchengyu", "四川成渝", "#9C27B0"),
    ("fusenmei", "富森美", "#673AB7"),
    ("shuijingfang", "水井坊", "#5D4037"),
    ("shede", "舍得", "#8BC34A"),
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
}

# 创建SVG占位Logo（带品牌色的首字母）
def create_svg_logo(filename, name, color):
    first_char = name[0]
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
  <rect width="200" height="100" rx="12" fill="{color}" opacity="0.15"/>
  <rect x="2" y="2" width="196" height="96" rx="10" fill="none" stroke="{color}" stroke-width="2" opacity="0.3"/>
  <text x="100" y="45" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="{color}" text-anchor="middle">{first_char}</text>
  <text x="100" y="75" font-family="Arial, sans-serif" font-size="14" fill="#666" text-anchor="middle">{name}</text>
</svg>'''
    
    filepath = os.path.join(output_dir, f"{filename}.svg")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    return True

print("开始生成企业Logo...\n")

for filename, name, color in companies:
    try:
        create_svg_logo(filename, name, color)
        print(f"✓ 已生成: {name}")
        time.sleep(0.1)
    except Exception as e:
        print(f"✗ 失败: {name} - {e}")

print(f"\n✅ 完成！共生成 {len(companies)} 个Logo")
print(f"📁 保存位置: {output_dir}")
