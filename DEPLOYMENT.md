# Deployment Guide

## Option 1: Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and offers the easiest deployment.

### Steps:
1. **Sign up at [vercel.com](https://vercel.com)** (free tier available)

2. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Deploy your project**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Select your project folder
   - Accept default settings or customize as needed

4. **Custom domain (optional)**
   - In Vercel dashboard, go to project settings
   - Add your domain under "Domains"

### Benefits:
- ✅ Automatic deployments on push to GitHub
- ✅ Preview deployments for pull requests
- ✅ Free SSL certificate
- ✅ Automatic scaling
- ✅ Built-in analytics

---

## Option 2: Deploy to GitHub Pages

Free hosting directly from GitHub.

### Steps:
1. **Update `next.config.js`**
   ```js
   const nextConfig = {
     reactStrictMode: true,
     basePath: '/kenny-portfolio', // your repo name
     assetPrefix: '/kenny-portfolio/',
   }
   module.exports = nextConfig
   ```

2. **Update `package.json` scripts**
   ```json
   "scripts": {
     "export": "next export"
   }
   ```

3. **Build and export**
   ```bash
   npm run build
   npm run export
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to "GitHub Pages"
   - Source: Select `gh-pages` branch
   - Save

---

## Option 3: Deploy to Netlify

Alternative free hosting with excellent Next.js support.

### Steps:
1. **Sign up at [netlify.com](https://netlify.com)**

2. **Connect GitHub repository**
   - Click "New site from Git"
   - Authorize GitHub
   - Select your repository

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `.next` or `out`

4. **Deploy**
   - Netlify automatically deploys on push

---

## Option 4: Deploy to Your Own Server

If you have server hosting (VPS, AWS, etc.)

### Steps:
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install PM2 (process manager)**
   ```bash
   npm install -g pm2
   ```

3. **Start the application**
   ```bash
   pm2 start "npm start"
   pm2 save
   pm2 startup
   ```

4. **Configure reverse proxy (Nginx)**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

5. **Set up SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

## Environment Variables

Create a `.env.local` file for sensitive information:

```
NEXT_PUBLIC_CONTACT_EMAIL=jikenny@outlook.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/contactkennyji-netizen
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/kennyji
```

---

## Domain Setup

### For custom domain (jikenny.com):

1. **Register domain**
   - GoDaddy, Namecheap, Google Domains, etc.

2. **Point DNS records**
   - For Vercel: Follow instructions in project settings
   - For GitHub Pages: Add CNAME record → `username.github.io`
   - For Netlify: Update nameservers or add DNS records

3. **SSL Certificate**
   - Automatic with Vercel, Netlify, and GitHub Pages
   - Use Let's Encrypt for self-hosted

---

## Post-Deployment Checklist

- [ ] Test website on mobile and desktop
- [ ] Verify all links work (contact, projects, LinkedIn)
- [ ] Check that images load correctly
- [ ] Test contact form
- [ ] Verify SEO meta tags
- [ ] Check page speed (Lighthouse)
- [ ] Enable HTTPS/SSL
- [ ] Set up monitoring/alerts
- [ ] Configure analytics (Google Analytics)

---

## Continuous Deployment

### With Vercel/Netlify:
- Push to main branch → automatic deployment
- Create pull request → preview deployment

### Manual with GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        run: npm run deploy
```

---

## Monitoring & Analytics

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `_document.tsx`

### Performance Monitoring
- Vercel: Built-in analytics dashboard
- Netlify: Built-in analytics dashboard
- Self-hosted: Use tools like New Relic, DataDog

---

## Troubleshooting

### Build fails
- Clear cache: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (16+)

### Site not updating
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check deployment logs

### Domain not pointing
- Wait 24-48 hours for DNS propagation
- Verify DNS records with `nslookup` or `dig`

---

**Ready to deploy? Choose your platform above and follow the steps!** 🚀
