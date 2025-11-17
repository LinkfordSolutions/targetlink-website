#!/bin/bash

# Expand SSL certificate to include brand.targetlink.net

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}🔐 Expanding SSL certificate for brand.targetlink.net...${NC}"

# Check if DNS is configured
echo -e "${YELLOW}🔍 Checking DNS for brand.targetlink.net...${NC}"
DNS_IP=$(dig +short brand.targetlink.net @8.8.8.8 | tail -1)

if [ -z "$DNS_IP" ]; then
    echo -e "${RED}❌ DNS not configured for brand.targetlink.net${NC}"
    echo -e "${YELLOW}Please add A record in Cloudflare:${NC}"
    echo -e "   Type: A"
    echo -e "   Name: brand"
    echo -e "   Value: 45.91.237.114"
    exit 1
fi

echo -e "${GREEN}✓ DNS found: $DNS_IP${NC}"

# Stop Nginx
echo -e "${YELLOW}🛑 Stopping Nginx...${NC}"
systemctl stop nginx

# Expand certificate
echo -e "${YELLOW}📜 Expanding SSL certificate...${NC}"
certbot certonly --standalone \
  -d targetlink.net \
  -d www.targetlink.net \
  -d brand.targetlink.net \
  --expand \
  --non-interactive \
  --agree-tos \
  --email admin@targetlink.net \
  --preferred-challenges http

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ SSL certificate expanded successfully${NC}"
else
    echo -e "${RED}❌ Failed to expand certificate${NC}"
    echo -e "${YELLOW}Starting Nginx anyway...${NC}"
    systemctl start nginx
    exit 1
fi

# Start Nginx
echo -e "${YELLOW}🚀 Starting Nginx...${NC}"
systemctl start nginx

# Check if brand site is accessible
echo -e "\n${YELLOW}🔍 Checking HTTPS accessibility...${NC}"
sleep 2

if curl -Ik https://brand.targetlink.net 2>&1 | grep -q "200 OK"; then
    echo -e "${GREEN}✅ brand.targetlink.net is accessible via HTTPS${NC}"
else
    echo -e "${YELLOW}⚠️  HTTPS check inconclusive. Please verify manually.${NC}"
fi

echo -e "\n${GREEN}✨ SSL expansion complete!${NC}"
echo -e "${GREEN}🌐 Brand guidelines: https://brand.targetlink.net${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo -e "1. In Cloudflare, enable proxy (orange cloud) for brand.targetlink.net"
echo -e "2. Set SSL/TLS mode to 'Full (strict)'"
