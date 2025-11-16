# Deployment Guide

This document describes how to deploy the TargetLink website to production.

## Domain Configuration

**Production Domain:** `targetlink.net`

## Deployment Options

### Option 1: GitHub Pages (Recommended)

GitHub Pages is configured to automatically deploy when you push to the `main` branch.

#### Setup Steps:

1. **Enable GitHub Pages:**
   - Go to repository settings: https://github.com/LinkfordSolutions/targetlink-website/settings/pages
   - Under "Build and deployment", select "GitHub Actions" as source
   - The workflow will automatically deploy on every push to `main`

2. **Configure Custom Domain:**
   - In the same settings page, under "Custom domain", enter: `targetlink.net`
   - Click "Save"
   - Wait for DNS check to complete

3. **DNS Configuration:**

   Add the following DNS records at your domain registrar:

   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: linkfordsolutions.github.io
   ```

4. **Enable HTTPS:**
   - After DNS propagates (can take up to 24 hours), enable "Enforce HTTPS" in repository settings

#### Manual Deployment:

```bash
npm run build
# Output will be in ./dist folder
```

### Option 2: Vercel

Vercel provides automatic deployments and excellent performance.

#### Setup Steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login and Deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

3. **Configure Custom Domain:**
   - Go to your project settings on Vercel dashboard
   - Add `targetlink.net` as custom domain
   - Follow DNS configuration instructions provided by Vercel

4. **Environment Variables:**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add: `VITE_SITE_URL=https://targetlink.net`

### Option 3: Netlify

Netlify offers similar features to Vercel with drag-and-drop deployment.

#### Setup Steps:

1. **Via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `LinkfordSolutions/targetlink-website`
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy"

3. **Configure Custom Domain:**
   - In site settings, go to "Domain management"
   - Add custom domain: `targetlink.net`
   - Follow DNS configuration instructions

### Option 4: Custom Server (VPS/Dedicated)

For deployment on your own server:

#### Using Nginx:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy dist folder to server:**
   ```bash
   scp -r dist/* user@your-server:/var/www/targetlink.net
   ```

3. **Nginx configuration** (`/etc/nginx/sites-available/targetlink.net`):
   ```nginx
   server {
       listen 80;
       server_name targetlink.net www.targetlink.net;

       root /var/www/targetlink.net;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-XSS-Protection "1; mode=block" always;
   }
   ```

4. **Enable SSL with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d targetlink.net -d www.targetlink.net
   ```

## CI/CD Configuration

The repository includes GitHub Actions workflow that automatically:
- Builds the project on every push to `main`
- Runs tests (when added)
- Deploys to GitHub Pages

## Environment Variables

For production builds, set the following environment variables:

```bash
VITE_SITE_URL=https://targetlink.net
# Add other variables as needed
```

## Monitoring & Analytics

After deployment, consider adding:

- **Google Analytics** or **Plausible Analytics** for visitor tracking
- **Sentry** for error monitoring
- **Cloudflare** for CDN and DDoS protection

## Rollback

If you need to rollback a deployment:

### GitHub Pages:
```bash
git revert HEAD
git push origin main
```

### Vercel/Netlify:
- Use the dashboard to restore a previous deployment

## Performance Optimization

Before deploying to production:

1. **Optimize images** - Use WebP format where possible
2. **Enable compression** - Gzip/Brotli for text assets
3. **Minimize JavaScript** - Already handled by Vite
4. **Use CDN** - Cloudflare or similar
5. **Enable caching** - Configured in deployment configs

## Support

For deployment issues:
- Check GitHub Actions logs: https://github.com/LinkfordSolutions/targetlink-website/actions
- Review Vercel/Netlify deployment logs in their dashboards
- Ensure DNS records are properly configured

## Quick Deploy Commands

```bash
# Build locally
npm run build

# Test production build locally
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```
