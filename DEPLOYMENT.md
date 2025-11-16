# Deployment Guide

This document describes how to deploy the TargetLink website to production.

## Server Information

**Production Domain:** `targetlink.net`
**Server IP:** `45.91.237.114`
**Location:** `/root/targetlink-website`

## DNS Configuration

Add the following DNS records at your domain registrar:

```
Type: A
Name: @
Value: 45.91.237.114

Type: A
Name: www
Value: 45.91.237.114
```

After DNS propagation (can take up to 48 hours), the website will be accessible at:
- http://targetlink.net
- http://www.targetlink.net

## Quick Start

### First Time Deployment

1. **Install dependencies:**
   ```bash
   cd /root/targetlink-website
   npm install
   ```

2. **Deploy the website:**
   ```bash
   ./scripts/deploy.sh
   ```

That's it! The website will be built, containerized, and deployed automatically.

### Updating the Website

When you push changes to GitHub, update the live site:

```bash
cd /root/targetlink-website
./scripts/update.sh
```

This will:
- Pull latest changes from GitHub
- Install any new dependencies
- Rebuild and redeploy the website

## Management Scripts

The project includes several helper scripts in the `scripts/` directory:

### `./scripts/deploy.sh`
Builds and deploys the website using Docker.

```bash
./scripts/deploy.sh
```

### `./scripts/update.sh`
Pulls latest code from GitHub and redeploys.

```bash
./scripts/update.sh
```

### `./scripts/status.sh`
Checks website status and container health.

```bash
./scripts/status.sh
```

### `./scripts/logs.sh`
Views container logs in real-time.

```bash
./scripts/logs.sh
```

### `./scripts/setup-ssl.sh`
Sets up HTTPS with Let's Encrypt SSL certificate.

```bash
./scripts/setup-ssl.sh
```

**Note:** Run SSL setup only after DNS has propagated!

## Manual Docker Commands

If you prefer to manage Docker manually:

### Build and Start

```bash
# Build the image
docker-compose build

# Start the container
docker-compose up -d

# View logs
docker-compose logs -f
```

### Stop and Remove

```bash
# Stop container
docker-compose down

# Remove all containers and images
docker-compose down --rmi all
```

### Rebuild Everything

```bash
# Rebuild from scratch
docker-compose build --no-cache
docker-compose up -d
```

## SSL/HTTPS Setup

### Automatic Setup (Recommended)

```bash
./scripts/setup-ssl.sh
```

This will:
1. Install certbot if needed
2. Obtain SSL certificates from Let's Encrypt
3. Configure nginx for HTTPS
4. Set up auto-renewal

### Manual SSL Setup

1. **Install Certbot:**
   ```bash
   apt-get update
   apt-get install certbot
   ```

2. **Stop the website temporarily:**
   ```bash
   docker-compose down
   ```

3. **Get certificate:**
   ```bash
   certbot certonly --standalone \
     -d targetlink.net \
     -d www.targetlink.net \
     --agree-tos \
     --email admin@targetlink.net
   ```

4. **Copy certificates:**
   ```bash
   mkdir -p ssl
   cp /etc/letsencrypt/live/targetlink.net/fullchain.pem ssl/
   cp /etc/letsencrypt/live/targetlink.net/privkey.pem ssl/
   ```

5. **Update nginx config to use SSL** (replace nginx.conf with nginx-ssl.conf)

6. **Restart:**
   ```bash
   docker-compose up -d
   ```

### Certificate Renewal

Certificates auto-renew via cron. To manually renew:

```bash
certbot renew
cp /etc/letsencrypt/live/targetlink.net/fullchain.pem ssl/
cp /etc/letsencrypt/live/targetlink.net/privkey.pem ssl/
docker-compose restart
```

## Troubleshooting

### Website not accessible

1. **Check container status:**
   ```bash
   ./scripts/status.sh
   ```

2. **View logs:**
   ```bash
   ./scripts/logs.sh
   ```

3. **Check if port 80/443 is available:**
   ```bash
   netstat -tlnp | grep -E ':(80|443)'
   ```

4. **Restart container:**
   ```bash
   docker-compose restart
   ```

### Build fails

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Docker issues

```bash
# Restart Docker
systemctl restart docker

# Clean up Docker system
docker system prune -a

# Check Docker status
systemctl status docker
```

### DNS not propagating

Check DNS propagation status:
```bash
dig targetlink.net
nslookup targetlink.net
```

Or use online tools:
- https://dnschecker.org
- https://www.whatsmydns.net

## Monitoring

### View Real-time Logs

```bash
docker-compose logs -f
```

### Check Resource Usage

```bash
docker stats targetlink-website
```

### Check Website Response

```bash
curl -I http://localhost
curl -I http://targetlink.net
```

## Backup

### Backup Website Files

```bash
tar -czf targetlink-website-backup-$(date +%Y%m%d).tar.gz /root/targetlink-website
```

### Restore from Backup

```bash
tar -xzf targetlink-website-backup-YYYYMMDD.tar.gz -C /
```

## CI/CD - Automatic Deployment

To set up automatic deployment on git push:

1. **Create webhook endpoint** (optional - advanced setup)
2. **Or use GitHub Actions** to trigger deployment

The repository includes GitHub Actions workflow, but it's currently configured for GitHub Pages. You can modify `.github/workflows/deploy.yml` to trigger SSH deployment to this server.

## Performance Optimization

### Enable Cloudflare (Optional)

1. Add site to Cloudflare
2. Update nameservers at domain registrar
3. Enable CDN, caching, and security features

### Optimize Docker Image

The Dockerfile uses multi-stage build to minimize image size.

Current optimizations:
- Alpine Linux base (minimal size)
- Multi-stage build (builder + production)
- Nginx for serving static files
- Gzip compression enabled

## Security Checklist

- [ ] SSL certificate installed and auto-renewing
- [ ] Firewall configured (allow 80, 443)
- [ ] Nginx security headers enabled
- [ ] Regular backups scheduled
- [ ] Docker containers updated regularly
- [ ] Server OS updated regularly

## Useful Commands

```bash
# Quick deployment
cd /root/targetlink-website && ./scripts/deploy.sh

# Quick update from GitHub
cd /root/targetlink-website && ./scripts/update.sh

# Check status
./scripts/status.sh

# View logs
./scripts/logs.sh

# Setup SSL
./scripts/setup-ssl.sh

# Manual build
npm run build

# Test production build locally
npm run preview
```

## Support

For issues:
1. Check logs: `./scripts/logs.sh`
2. Check status: `./scripts/status.sh`
3. Review GitHub repository: https://github.com/LinkfordSolutions/targetlink-website
4. Check GitHub Actions: https://github.com/LinkfordSolutions/targetlink-website/actions

## Production URLs

- **Website:** http://targetlink.net (https after SSL setup)
- **www:** http://www.targetlink.net
- **IP Direct:** http://45.91.237.114
- **GitHub Repo:** https://github.com/LinkfordSolutions/targetlink-website
