#!/bin/bash

# Check website status

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}📊 TargetLink Website Status${NC}"
echo "============================"

# Check Nginx status
echo -e "\n${YELLOW}🔧 Nginx Status:${NC}"
if systemctl is-active --quiet nginx; then
    echo -e "${GREEN}✅ Nginx: Running${NC}"
    systemctl status nginx --no-pager | head -10
else
    echo -e "${RED}❌ Nginx: Not running${NC}"
fi

# Check if website files exist
echo -e "\n${YELLOW}📁 Website Files:${NC}"
if [ -d "/var/www/targetlink.net" ] && [ -f "/var/www/targetlink.net/index.html" ]; then
    echo -e "${GREEN}✅ Files: Present${NC}"
    echo "   Directory: /var/www/targetlink.net"
    echo "   Files: $(ls -1 /var/www/targetlink.net | wc -l) files"
else
    echo -e "${RED}❌ Files: Missing${NC}"
fi

# Check Nginx configuration
echo -e "\n${YELLOW}⚙️  Nginx Configuration:${NC}"
if [ -f "/etc/nginx/sites-enabled/targetlink.net" ]; then
    echo -e "${GREEN}✅ Config: Active${NC}"
else
    echo -e "${RED}❌ Config: Not active${NC}"
fi

# Check if website is accessible
echo -e "\n${YELLOW}🌐 Website Accessibility:${NC}"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost)
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✅ Local (http://localhost): Accessible (HTTP $HTTP_CODE)${NC}"
else
    echo -e "${RED}❌ Local: Not accessible (HTTP $HTTP_CODE)${NC}"
fi

HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://45.91.237.114)
if [ "$HTTP_CODE" = "200" ]; then
    echo -e "${GREEN}✅ IP (http://45.91.237.114): Accessible (HTTP $HTTP_CODE)${NC}"
else
    echo -e "${RED}❌ IP: Not accessible (HTTP $HTTP_CODE)${NC}"
fi

# Show disk usage
echo -e "\n${YELLOW}💾 Disk Usage:${NC}"
df -h /var/www/targetlink.net 2>/dev/null || df -h /

# Show recent access logs
echo -e "\n${YELLOW}📋 Recent Access Logs (last 5):${NC}"
if [ -f "/var/log/nginx/targetlink.net.access.log" ]; then
    tail -5 /var/log/nginx/targetlink.net.access.log
else
    echo "No logs available yet"
fi

echo -e "\n${GREEN}Done!${NC}"
