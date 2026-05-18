#!/bin/bash
# =============================================
# 蓝信网站部署脚本 - lanxinsl.com
# =============================================

set -e

# 配置
SERVER_HOST="8.137.197.142"
SERVER_USER="root"
SERVER_PORT="22"
DOMAIN="lanxinsl.com"
DEPLOY_PATH="/var/www/lanxin-website"

echo "=========================================="
echo "蓝信网站部署脚本"
echo "=========================================="

# 1. 本地打包
echo "[1/5] 本地构建..."
npm run build
echo "构建完成"

# 2. 传输文件到服务器
echo "[2/5] 传输文件到服务器..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "mkdir -p $DEPLOY_PATH"
rsync -avz --delete -e "ssh -p $SERVER_PORT" dist/ $SERVER_USER@$SERVER_HOST:$DEPLOY_PATH/
echo "文件传输完成"

# 3. 安装Nginx（如果未安装）
echo "[3/5] 检查Nginx..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "which nginx || echo 'Nginx未安装，将提示安装命令'"

# 4. 配置Nginx
echo "[4/5] 配置Nginx..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "cat > /etc/nginx/sites-available/$DOMAIN << 'EOF'
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    root $DEPLOY_PATH;
    index index.html;

    # SPA路由支持
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;
}
EOF"

# 5. 启用站点并重启Nginx
echo "[5/5] 启用站点..."
ssh -p $SERVER_PORT $SERVER_USER@$SERVER_HOST "
    ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
    nginx -t && systemctl reload nginx
"

echo ""
echo "=========================================="
echo "基础部署完成！"
echo "=========================================="
echo ""
echo "下一步 - 配置HTTPS："
echo "1. 确保域名DNS已解析到服务器IP"
echo "2. 在服务器上运行以下命令安装SSL证书："
echo ""
echo "   # 安装Certbot"
echo "   sudo apt update && sudo apt install -y certbot python3-certbot-nginx"
echo ""
echo "   # 获取SSL证书（会自动配置HTTPS）"
echo "   sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN"
echo ""
echo "=========================================="
