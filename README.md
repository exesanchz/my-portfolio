# Personal Portfolio - Next.js

A modern, production-ready portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

---

## ✨ Features

- 🎨 **Modern Dark Design** - Tech-oriented aesthetic with custom gradients
- ⚡ **Next.js 14 App Router** - Latest Next.js features and optimizations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎯 **Single Page Application** - Smooth scroll navigation between sections
- 🔍 **SEO Optimized** - Complete metadata and semantic HTML
- 🚀 **Performance First** - Static generation for maximum speed
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎨 **Design System** - Consistent tokens and reusable components
- 📝 **Content Management** - Centralized content in easy-to-edit files
- 🌐 **Production Ready** - Deployed on Vercel with CI/CD

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/my-portfolio.git

# Navigate to the project
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page (all sections)
│   │   └── globals.css        # Global styles + design system
│   ├── components/            # React components
│   │   ├── Hero.tsx          # Hero section
│   │   ├── FloatingMenu.tsx  # Navigation menu
│   │   ├── FeatureGrid.tsx   # Feature showcase
│   │   ├── FeatureCard.tsx   # Individual feature cards
│   │   ├── ResumeSection.tsx # Experience & education
│   │   ├── ContactSection.tsx# Contact information
│   │   ├── Footer.tsx        # Site footer
│   │   └── Button.tsx        # Reusable button component
│   ├── content/
│   │   └── home.tsx          # All page content (edit here!)
│   ├── hooks/
│   │   └── useScreenSize.ts  # Screen size detection hook
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── public/                    # Static assets
│   ├── images/               # Images and graphics
│   ├── resume/               # Resume PDF
│   └── favicon.ico
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── tsconfig.json             # TypeScript configuration
```

---

## 🎨 Design System

The project includes a comprehensive design system with:

- **Color Tokens** - Semantic color variables for consistency
- **Typography Scale** - From hero (72px) to caption (12px)
- **Spacing System** - Consistent vertical and horizontal rhythm
- **Component Utilities** - Reusable card, button, and form styles
- **Responsive Breakpoints** - Mobile-first approach

### Key Colors

```css
/* Dark Theme */
--background: #0D0F1D      /* Main background */
--primary: #58A6FF         /* Blue accent */
--secondary: #A74AC7       /* Purple accent */
--text: #E2E4F4           /* Primary text */
```

See `DESIGN_SYSTEM.md` for complete documentation.

---

## 📝 Content Management

All content is centralized in `/src/content/home.tsx` for easy updates:

```tsx
// Update your information here
export const homeContent = {
  hero: {
    highlightedText: "Your Name",
    subtitle: "Your description",
  },
  contact: {
    email: "your@email.com",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
  },
  // ... more sections
};
```

---

## 🧩 Key Components

### FloatingMenu
- **Desktop**: Always visible
- **Mobile**: Appears after scrolling
- **Features**: Active section tracking, smooth scroll

### Hero Section
- Full-width gradient background
- SVG pattern overlay
- Responsive typography
- Call-to-action buttons

### Feature Grid
- Responsive card layout
- Image backgrounds
- Hover effects
- Icon integration

### Resume Section
- Experience timeline
- Education display
- Highlighted current role
- Skills showcase

---

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Run production server

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
npm run format:check     # Check formatting
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your site is live in ~2 minutes! 🎉

**Comprehensive deployment guides:**
- `VERCEL_QUICKSTART.md` - 5-minute deployment guide
- `DEPLOYMENT.md` - Complete deployment documentation
- `PRE_DEPLOYMENT_CHECKLIST.md` - Pre-flight checklist
- `DEPLOYMENT_FAQ.md` - Common questions answered

---

## 📚 Documentation

### Essential Guides
- **DESIGN_SYSTEM.md** - Complete design system documentation
- **DESIGN_TOKENS.md** - Quick token reference
- **USAGE_GUIDE.md** - Component usage examples
- **CONTENT_MANAGEMENT.md** - Content structure guide
- **HOOKS_DOCUMENTATION.md** - Custom React hooks

### Development
- **PRETTIER_SETUP.md** - Code formatting guide
- **SINGLE_PAGE_STRUCTURE.md** - Architecture overview
- **ARCHITECTURE.md** - Technical decisions

### Deployment
- **VERCEL_QUICKSTART.md** - Quick deployment
- **DEPLOYMENT.md** - Full deployment guide
- **PRE_DEPLOYMENT_CHECKLIST.md** - Pre-flight checks
- **DEPLOYMENT_FAQ.md** - Common questions

---

## 🎯 Features & Sections

### Current Sections

1. **Hero** - Introduction and main CTA
2. **Features** - Key highlights and specialties
3. **Skills** - Technologies and tools
4. **Resume** - Experience and education
5. **Contact** - Get in touch

### Easy to Extend

Adding a new section is simple:

1. Add content to `/src/content/home.tsx`
2. Create component in `/src/components/`
3. Import and use in `/src/app/page.tsx`
4. Add to floating menu (optional)

---

## 🛠️ Built With

### Core
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5.3** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS

### UI & Icons
- **Lucide React** - Icon library
- **Next Font** - Optimized web fonts (Outfit)

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

---

## 🎨 Customization

### Update Personal Information

Edit `/src/content/home.tsx`:
```tsx
hero: {
  highlightedText: "Your Name",    // Your name
  subtitle: "Your description",     // Your role/bio
}
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
}
```

### Add Custom Fonts

1. Import in `layout.tsx`:
   ```tsx
   import { YourFont } from 'next/font/google';
   const yourFont = YourFont({ subsets: ['latin'] });
   ```

2. Apply: `<html className={yourFont.className}>`

---

## 📊 Performance

### Lighthouse Scores (Target)

- **Performance**: 90-100 ⚡
- **Accessibility**: 90-100 ♿
- **Best Practices**: 90-100 ✅
- **SEO**: 90-100 🔍

### Optimizations

- ✅ Static generation
- ✅ Code splitting
- ✅ Image optimization ready
- ✅ Minimal bundle size
- ✅ Edge network deployment
- ✅ Automatic caching

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to:

- Fork and customize for your own use
- Report bugs or issues
- Suggest improvements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Next.js Team** - Amazing framework
- **Vercel** - Seamless deployment
- **Tailwind CSS** - Beautiful utility-first CSS
- **Lucide** - Clean icon library

---

## 📞 Contact

- **Email**: [your@email.com](mailto:your@email.com)
- **GitHub**: [@yourname](https://github.com/yourname)
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourname)
- **Portfolio**: [your-site.vercel.app](https://your-site.vercel.app)

---

## 🚀 Deployment Status

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

**Production**: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)

---

**Made with ❤️ using Next.js and Tailwind CSS**

**Ready to deploy?** Follow `VERCEL_QUICKSTART.md` to go live in 5 minutes! 🚀
