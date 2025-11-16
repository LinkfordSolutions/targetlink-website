#!/bin/bash

# SSL Setup Script for TargetLink Website
# This script sets up Let's Encrypt SSL certificates

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

DOMAIN="targetlink.net"
EMAIL="admin@targetlink.net"

echo -e "${YELLOW}🔒 Setting up SSL certificate for ${DOMAIN}...${NC}"

# Check if certbot is installed
if ! command -v certbot &> /dev/null; then
    echo -e "${YELLOW}📦 Installing certbot...${NC}"
    apt-get update
    apt-get install -y certbot
fi

# Stop the website container temporarily
echo -e "${YELLOW}🛑 Stopping website container...${NC}"
docker-compose down

# Get certificate
echo -e "${YELLOW}📜 Obtaining SSL certificate...${NC}"
certbot certonly --standalone \
    -d ${DOMAIN} \
    -d www.${DOMAIN} \
    --non-interactive \
    --agree-tos \
    --email ${EMAIL} \
    --preferred-challenges http

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ SSL certificate obtained successfully${NC}"

    # Copy certificates to project
    mkdir -p ssl
    cp /etc/letsencrypt/live/${DOMAIN}/fullchain.pem ssl/
    cp /etc/letsencrypt/live/${DOMAIN}/privkey.pem ssl/

    echo -e "${GREEN}✅ Certificates copied to ssl/ directory${NC}"

    # Update nginx config to use SSL
    cat > nginx-ssl.conf << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name targetlink.net www.targetlink.net;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name targetlink.net www.targetlink.net;

    # SSL Configuration
    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location ~* \.html$ {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    location ~ /\. {
        deny all;
    }
}
EOF

    echo -e "${GREEN}✅ SSL nginx config created (nginx-ssl.conf)${NC}"
    echo -e "${YELLOW}ℹ️  To enable SSL, replace nginx.conf with nginx-ssl.conf${NC}"

    # Setup auto-renewal
    echo -e "${YELLOW}⚙️  Setting up auto-renewal...${NC}"
    (crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet --post-hook 'cd /root/targetlink-website && cp /etc/letsencrypt/live/${DOMAIN}/fullchain.pem ssl/ && cp /etc/letsencrypt/live/${DOMAIN}/privkey.pem ssl/ && docker-compose restart'") | crontab -

    echo -e "${GREEN}✅ Auto-renewal cron job added${NC}"
else
    echo -e "${RED}❌ Failed to obtain SSL certificate${NC}"
    echo -e "${YELLOW}ℹ️  Make sure DNS is pointing to this server (45.91.237.114)${NC}"
    exit 1
fi

# Restart container
echo -e "${YELLOW}🚀 Restarting website container...${NC}"
cd /root/targetlink-website
docker-compose up -d

echo -e "${GREEN}✨ SSL setup complete!${NC}"
echo -e "${GREEN}🌐 Your site is now accessible via HTTPS${NC}"
