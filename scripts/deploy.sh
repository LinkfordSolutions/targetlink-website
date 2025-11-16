#!/bin/bash

# TargetLink Website Deployment Script
# This script builds and deploys the website using Nginx

set -e

echo "🚀 Starting TargetLink website deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Build the project
echo -e "${YELLOW}📦 Building the project...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully${NC}"

# Deploy to web directory
echo -e "${YELLOW}📂 Deploying files to /var/www/targetlink.net...${NC}"
mkdir -p /var/www/targetlink.net
cp -r dist/* /var/www/targetlink.net/

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Files deployed successfully${NC}"
else
    echo -e "${RED}❌ File deployment failed!${NC}"
    exit 1
fi

# Check if Nginx config exists
if [ ! -f "/etc/nginx/sites-enabled/targetlink.net" ]; then
    echo -e "${YELLOW}⚙️  Nginx config not found, creating it...${NC}"
    ln -sf /etc/nginx/sites-available/targetlink.net /etc/nginx/sites-enabled/targetlink.net
fi

# Test Nginx configuration
echo -e "${YELLOW}🔍 Testing Nginx configuration...${NC}"
nginx -t

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Nginx configuration test failed!${NC}"
    exit 1
fi

# Reload Nginx
echo -e "${YELLOW}🔄 Reloading Nginx...${NC}"
systemctl reload nginx

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Website is now running at http://45.91.237.114${NC}"
    echo -e "${GREEN}🌐 Domain: http://targetlink.net${NC}"
else
    echo -e "${RED}❌ Nginx reload failed!${NC}"
    exit 1
fi

# Check if website is accessible
echo -e "\n${YELLOW}🔍 Checking website accessibility...${NC}"
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo -e "${GREEN}✅ Website is accessible${NC}"
else
    echo -e "${RED}❌ Website is not accessible${NC}"
fi

echo -e "\n${GREEN}✨ Deployment complete!${NC}"
