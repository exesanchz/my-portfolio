# Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (via next/font)

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with Navbar & Footer
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles & Tailwind imports
│   │   ├── projects/
│   │   │   └── page.tsx       # Projects page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page
│   │   └── resume/
│   │       └── page.tsx       # Resume page
│   └── components/            # Reusable React components
│       ├── Navbar.tsx         # Navigation component
│       └── Footer.tsx         # Footer component
├── public/                    # Static assets
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🏗️ Architecture Decisions

### App Router (Next.js 14+)
- Uses the modern App Router for better performance and developer experience
- Server Components by default for optimal loading
- Client Components marked with 'use client' where needed (e.g., Navbar with hooks)

### Layout System
- **Root Layout**: Provides consistent structure across all pages (Navbar, Footer)
- **Metadata**: SEO-friendly with page-specific overrides
- **Flexbox Layout**: Ensures footer stays at bottom with `flex-1` main content

### Component Organization
- **components/**: Shared, reusable components
- **app/**: Page-specific components and route handlers
- Clean separation of concerns for maintainability

### Styling Approach
- **Tailwind CSS**: Utility-first CSS for rapid development
- **Dark Mode**: Built-in support via CSS variables and Tailwind
- **Custom Classes**: Container utility in globals.css for consistent spacing
- **Responsive**: Mobile-first responsive design

### TypeScript
- Strict mode enabled for type safety
- Path aliases configured (`@/*` → `src/*`)
- Proper typing for components and metadata

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Customization Guide

### Personal Information
1. Update metadata in `src/app/layout.tsx`:
   - Site title, description, keywords
   - Open Graph tags
   - Author information

2. Replace placeholder content:
   - Name and introduction in `src/app/page.tsx`
   - Projects data in `src/app/projects/page.tsx`
   - Contact information in `src/app/contact/page.tsx`
   - Resume details in `src/app/resume/page.tsx`
   - Social links in `src/components/Footer.tsx`

### Styling
- Modify `tailwind.config.js` to add custom colors, fonts, etc.
- Update `src/app/globals.css` for global styles and CSS variables
- Add custom utility classes in the `@layer components` section

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Export metadata and default component
4. Add link to `src/components/Navbar.tsx` if needed

## 🎯 Next Steps

### Features to Implement
- [ ] Add project images and optimize with next/image
- [ ] Implement contact form functionality (Server Actions or API route)
- [ ] Add PDF generation/download for resume
- [ ] Integrate with a CMS for dynamic content
- [ ] Add blog section
- [ ] Implement animations (Framer Motion)
- [ ] Add unit and E2E tests
- [ ] Set up analytics (Vercel Analytics, Google Analytics)

### SEO & Performance
- [ ] Add sitemap.xml
- [ ] Add robots.txt customization
- [ ] Implement structured data (JSON-LD)
- [ ] Optimize images with next/image
- [ ] Add meta tags for social sharing

### Deployment
- [ ] Deploy to Vercel (recommended)
- [ ] Set up custom domain
- [ ] Configure environment variables
- [ ] Set up CI/CD pipeline

## 📦 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Configure build settings (auto-detected for Next.js)
4. Deploy

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Docker

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and customize for your own use!

---

Built with ❤️ using Next.js and Tailwind CSS
