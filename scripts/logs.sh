#!/bin/bash

# View Nginx logs

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}📋 TargetLink Website Logs${NC}"
echo "=========================="
echo ""
echo -e "${GREEN}Following access logs (Ctrl+C to stop)...${NC}"
echo ""

# Check if log file exists
if [ -f "/var/log/nginx/targetlink.net.access.log" ]; then
    tail -f /var/log/nginx/targetlink.net.access.log
else
    echo "Access log file not found. Showing general nginx logs:"
    tail -f /var/log/nginx/access.log
fi
