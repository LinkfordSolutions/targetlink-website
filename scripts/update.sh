#!/bin/bash

# Update Script - Pull latest changes and redeploy

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${YELLOW}🔄 Updating TargetLink website...${NC}"

# Pull latest changes
echo -e "${YELLOW}📥 Pulling latest changes from GitHub...${NC}"
git pull origin main

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Git pull failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Code updated${NC}"

# Install any new dependencies
echo -e "${YELLOW}📦 Checking for new dependencies...${NC}"
npm install

# Run deployment
echo -e "${YELLOW}🚀 Deploying updated version...${NC}"
./scripts/deploy.sh

echo -e "${GREEN}✨ Update complete!${NC}"
