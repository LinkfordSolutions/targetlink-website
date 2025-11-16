#!/bin/bash

# View container logs

echo "📋 TargetLink Website Logs"
echo "=========================="
docker-compose logs -f --tail=100
