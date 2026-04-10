#!/usr/bin/env python3
"""下载四川知名企业Logo"""

import os
import urllib.request
import ssl

# 创建SSL上下文（跳过证书验证）
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

# Logo图片URL（从Clearbit Logo API等免费源获取）
logos = {
    "xinxiwang": "https://logo.clearbit.com/newhope.cn",
    "tongwei": "https://logo.clearbit.com/tongwei.com",
    "changhong": "https://logo.clearbit.com/changhong.com",
    "luzhoulaojiao": "https://logo.clearbit.com/lzlj.com",
    "wuliangye": "https://logo.clearbit.com/wuliangye.com.cn",
    "sichuanluqiao": "https://logo.clearbit.com/scrb.cn",
    "dongfangdianqi": "https://logo.clearbit.com/dongfang.com",
    "pangang": "https://logo.clearbit.com/pangang.com",
    "chengfei": "https://logo.clearbit.com/cac-cifa.com",
    "sichuanzhongyan": "https://logo.clearbit.com/sc.tobacco.com.cn",
    "hongqian": "https://logo.clearbit.com/hongqiancn.com",
    "lanjian": "https://logo.clearbit.com/blue-sword.com",
    "kelun": "https://logo.clearbit.com/kluspharma.com",
    "tianqi": "https://logo.clearbit.com/tianqilithium.com",
    "chuantou": "https://logo.clearbit.com/sctg.cn",
    "sichuanchengyu": "https://logo.clearbit.com/scgs.com.cn",
    "fusenmei": "https://logo.clearbit.com/fusenmei.com",
    "shuijingfang": "https://logo.clearbit.com/swellfun.com",
    "shede": "https://logo.clearbit.com/tuopaishede.cn",
}

output_dir = "/Users/cengyuanbing/WorkBuddy/20260330160156/app/public/logos"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for name, url in logos.items():
    try:
        output_path = os.path.join(output_dir, f"{name}.png")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ssl_context, timeout=10) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        print(f"✓ Downloaded: {name}")
    except Exception as e:
        print(f"✗ Failed: {name} - {e}")

print("\nDownload complete!")
