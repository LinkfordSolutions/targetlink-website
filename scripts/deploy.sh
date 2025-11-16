#!/bin/bash

# TargetLink Website Deployment Script
# This script builds and deploys the website using Docker

set -e

echo "🚀 Starting TargetLink website deployment..."

# Check if we're on the server
if [ -f "/.dockerenv" ] || [ -f "/run/.containerenv" ]; then
    echo "⚠️  Warning: Running inside a container"
fi

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

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed${NC}"
    exit 1
fi

# Stop existing container if running
echo -e "${YELLOW}🛑 Stopping existing container...${NC}"
docker-compose down 2>/dev/null || true

# Build and start new container
echo -e "${YELLOW}🏗️  Building Docker image...${NC}"
docker-compose build

echo -e "${YELLOW}🚀 Starting container...${NC}"
docker-compose up -d

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Website is now running at http://45.91.237.114${NC}"
    echo -e "${GREEN}🌐 Domain: http://targetlink.net${NC}"
else
    echo -e "${RED}❌ Deployment failed!${NC}"
    exit 1
fi

# Show container status
echo -e "\n${YELLOW}📊 Container status:${NC}"
docker-compose ps

echo -e "\n${GREEN}✨ Deployment complete!${NC}"
