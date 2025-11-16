#!/bin/bash

# Check website status

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}📊 TargetLink Website Status${NC}"
echo "============================"

# Check if container is running
if docker ps | grep -q targetlink-website; then
    echo -e "${GREEN}✅ Container: Running${NC}"
else
    echo -e "${RED}❌ Container: Not running${NC}"
fi

# Show container stats
docker-compose ps

# Check if website is accessible
echo -e "\n${YELLOW}🌐 Testing website accessibility...${NC}"
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo -e "${GREEN}✅ Website: Accessible${NC}"
else
    echo -e "${RED}❌ Website: Not accessible${NC}"
fi

# Show disk usage
echo -e "\n${YELLOW}💾 Disk Usage:${NC}"
docker system df

echo -e "\n${GREEN}Done!${NC}"
