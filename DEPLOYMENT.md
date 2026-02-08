# Vercel Deployment Guide

Complete guide to deploy your Next.js portfolio to Vercel.

---

## ✅ Pre-Deployment Checklist

### Build Verification
- ✅ **Production build successful** - No TypeScript errors
- ✅ **All routes are static** - Optimal performance
- ✅ **Assets organized** - `/public` folder properly structured
- ✅ **Dependencies up to date** - All packages installed

### Project Status
```
Route (app)                              Size     First Load JS
┌ ○ /                                    6.74 kB         103 kB
└ ○ /_not-found                          142 B          87.4 kB

○  (Static)  prerendered as static content
```

**Result**: Your site is fully static and optimized! 🎉

---

## 📁 Public Assets Check

Current structure:
```
/public
├── favicon.ico ✅
├── images/
│   ├── bg/home-bg.svg ✅
│   └── features/ ✅
├── resume/resume-exequiel-sanchez.pdf ✅
├── robots.txt ✅
└── manifest.json ✅
```

**All assets are correctly placed!**

---

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

#### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "chore: prepare for deployment"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Vercel auto-detects Next.js settings ✅

#### 3. Configure Project

**Framework Preset**: Next.js (auto-detected)  
**Root Directory**: `./` (leave as is)  
**Build Command**: `npm run build` (auto-detected)  
**Output Directory**: `.next` (auto-detected)  
**Install Command**: `npm install` (auto-detected)

**Environment Variables**: None required ✅

#### 4. Deploy

Click **"Deploy"** and wait ~2 minutes.

**Done!** 🎉 Your portfolio is live!

---

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? my-portfolio
# - Directory? ./
# - Override settings? N

# Deploy to production
vercel --prod
```

---

## ⚙️ Vercel Configuration

### Do You Need `vercel.json`?

**NO** - Not needed for this project! ✅

Vercel auto-detects Next.js and uses optimal settings.

### When You WOULD Need `vercel.json`

Only if you need:
- Custom headers
- Redirects/rewrites
- Custom build settings
- Specific region deployment

**For your static portfolio**: Default settings are perfect!

---

## 🌍 Custom Domain (Optional)

### Add Your Domain

1. Go to **Project Settings** → **Domains**
2. Click **"Add"**
3. Enter your domain (e.g., `exequiel-sanchez.com`)
4. Follow DNS configuration instructions

### Free Vercel Domain

You automatically get:
- `your-project.vercel.app` (production)
- `your-project-git-branch.vercel.app` (previews)

---

## 🔄 Deployment Flow

### Automatic Deployments

Vercel automatically deploys:

| Branch | Type | URL |
|--------|------|-----|
| `main` | **Production** | `your-project.vercel.app` |
| Other branches | **Preview** | `your-project-git-feature.vercel.app` |
| Pull Requests | **Preview** | `your-project-pr-123.vercel.app` |

### Manual Redeployment

**From Dashboard:**
1. Go to **Deployments**
2. Click **"..."** on any deployment
3. Click **"Redeploy"**

**From CLI:**
```bash
vercel --prod
```

**From Git:**
```bash
git commit --allow-empty -m "trigger: redeploy"
git push
```

---

## 🎯 Environment Variables

### Current Setup
**None required!** ✅

Your portfolio is fully static with no backend or API calls.

### If You Add Dynamic Features Later

**Add environment variables in Vercel Dashboard:**
1. Go to **Project Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

Example:
```
Name: NEXT_PUBLIC_API_URL
Value: https://api.example.com
Environment: Production
```

**Note**: Variables starting with `NEXT_PUBLIC_` are exposed to the browser.

---

## 🚀 Performance Optimizations

### Automatic Optimizations (Enabled by Default)

✅ **Edge Network** - 100+ global locations  
✅ **Smart CDN** - Automatic caching  
✅ **Image Optimization** - When you use `next/image`  
✅ **Compression** - Gzip/Brotli  
✅ **HTTP/2** - Faster connections  
✅ **Automatic HTTPS** - Free SSL certificate  

### Recommendations

#### 1. Use Next.js Image Component

Replace `<img>` with `<Image>` from `next/image`:

```tsx
// Before
<img src="/images/photo.jpg" alt="Photo" />

// After
import Image from 'next/image';
<Image 
  src="/images/photo.jpg" 
  alt="Photo" 
  width={500} 
  height={300}
/>
```

**Benefits:**
- Automatic lazy loading
- Responsive images
- WebP conversion
- Quality optimization

#### 2. Add Caching Headers (Optional)

Only if you need custom caching:

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

#### 3. Enable Analytics (Free Tier)

1. Go to **Project Settings** → **Analytics**
2. Click **"Enable Web Analytics"**
3. Get visitor insights for free!

---

## 🧪 Post-Deployment Verification

### 1. Check Your Live Site

Visit: `https://your-project.vercel.app`

**Verify:**
- [ ] Hero section loads correctly
- [ ] Images display properly
- [ ] Smooth scrolling works
- [ ] Floating menu appears
- [ ] Skills section visible
- [ ] Resume section displays
- [ ] Contact section shows
- [ ] Footer appears
- [ ] All links work
- [ ] Mobile responsive
- [ ] Fast loading speed

### 2. Test All Routes

```bash
# Home page
curl -I https://your-project.vercel.app/

# 404 page
curl -I https://your-project.vercel.app/nonexistent

# Static assets
curl -I https://your-project.vercel.app/images/bg/home-bg.svg
curl -I https://your-project.vercel.app/resume/resume-exequiel-sanchez.pdf
```

All should return `200 OK` (except 404 route).

### 3. Performance Testing

**Google PageSpeed Insights:**
1. Go to [pagespeed.web.dev](https://pagespeed.web.dev/)
2. Enter your URL
3. Check scores (aim for 90+)

**Lighthouse (in Chrome DevTools):**
1. Open DevTools (F12)
2. Go to **Lighthouse** tab
3. Click **"Analyze page load"**

**Target Scores:**
- Performance: 90-100 ✅
- Accessibility: 90-100 ✅
- Best Practices: 90-100 ✅
- SEO: 90-100 ✅

### 4. Mobile Testing

Test on real devices or:
- Chrome DevTools (F12 → Device toolbar)
- [BrowserStack](https://www.browserstack.com/) (free tier)
- [Responsively](https://responsively.app/) (free tool)

---

## 🔧 Troubleshooting

### Build Fails on Vercel

**Check build logs:**
1. Go to **Deployments**
2. Click on failed deployment
3. View **Build Logs**

**Common issues:**
```bash
# TypeScript errors
npm run build  # Test locally first

# Missing dependencies
npm install    # Ensure package-lock.json is committed

# Environment variables
# Add in Vercel dashboard if needed
```

### 404 on Routes

**For single-page app:**
- Your portfolio works correctly (single page with sections)
- All content is on `/`
- Floating menu handles navigation

**If you add more pages later:**
- Ensure pages are in `/src/app/` folder
- Each route needs a `page.tsx` file

### Images Not Loading

**Check paths:**
```tsx
// ✅ Correct
src="/images/bg/home-bg.svg"

// ❌ Wrong
src="images/bg/home-bg.svg"  // Missing leading slash
src="/public/images/..."      // Don't include /public
```

### Slow Loading

**Optimize images:**
1. Compress images (use [TinyPNG](https://tinypng.com/))
2. Use WebP format
3. Use `next/image` component

**Check bundle size:**
```bash
npm run build
# Look for large chunks
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Free)

**Enable:**
1. Project Settings → Analytics
2. Enable Web Analytics

**See:**
- Page views
- Unique visitors
- Top pages
- Load times

### Vercel Speed Insights (Free)

**Enable:**
1. Project Settings → Speed Insights
2. Enable Speed Insights

**Track:**
- Core Web Vitals
- Real user metrics
- Performance trends

### Google Analytics (Optional)

Add to `layout.tsx`:
```tsx
// Add in <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

---

## 🔄 Continuous Deployment

### Workflow

```
┌──────────────┐
│ Make Changes │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  git commit  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   git push   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Vercel    │
│ Auto-Deploy  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Live in    │
│  ~2 minutes  │
└──────────────┘
```

### Branch Strategy

**Recommended:**
```
main (production)
  ├── dev (preview)
  └── feature/* (preview)
```

**Workflow:**
1. Create feature branch: `git checkout -b feature/new-section`
2. Make changes and commit
3. Push: `git push origin feature/new-section`
4. Vercel creates preview deployment
5. Test preview URL
6. Merge to main: Pull Request → Merge
7. Production auto-deploys!

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Site is live at Vercel URL
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] Links and navigation work
- [ ] Mobile responsive
- [ ] Performance score > 90
- [ ] HTTPS is working
- [ ] Custom domain configured (if applicable)
- [ ] Analytics enabled (optional)
- [ ] Git workflow set up

---

## 📞 Support

### Vercel Support
- [Vercel Documentation](https://vercel.com/docs)
- [Community Discord](https://vercel.com/discord)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)

### Next.js Support
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js Discord](https://nextjs.org/discord)

---

**Your portfolio is now live and automatically deployed with every commit!** 🚀

**Production URL**: `https://your-project.vercel.app`

**Deployment Time**: ~2 minutes per deploy
**Uptime**: 99.99%
**Global CDN**: ✅
**HTTPS**: ✅
**Auto-scaling**: ✅

🎨 **Happy deploying!**
