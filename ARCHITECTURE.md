# Architecture Documentation

## Overview

This portfolio website follows Next.js 14 best practices with the App Router architecture. The structure is designed for scalability, maintainability, and optimal performance.

## Directory Structure Explained

### `/src/app` - App Router Directory

The `app` directory is the core of Next.js 14's App Router. Each folder represents a route:

```
app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Home page (/)
├── globals.css         # Global styles
├── loading.tsx         # Global loading UI
├── not-found.tsx       # 404 page
├── projects/
│   └── page.tsx        # /projects route
├── contact/
│   └── page.tsx        # /contact route
└── resume/
    └── page.tsx        # /resume route
```

#### Key Concepts:

1. **layout.tsx**: Special file that wraps all child pages
   - Only one root layout per app
   - Cannot be nested at root level
   - Persists across navigation (doesn't re-render)
   - Perfect for Navbar/Footer

2. **page.tsx**: Makes a route publicly accessible
   - Each folder with a page.tsx becomes a route
   - Default export is the page component
   - Can export metadata for SEO

3. **loading.tsx**: Automatic loading states
   - Shown while page loads
   - Uses React Suspense under the hood
   - Improves perceived performance

4. **not-found.tsx**: Custom 404 page
   - Automatically shown for non-existent routes
   - Can be scoped to specific route segments

### `/src/components` - Shared Components

Reusable React components used across multiple pages:

```
components/
├── Navbar.tsx          # Navigation bar
└── Footer.tsx          # Site footer
```

**Guidelines:**
- Keep components pure and reusable
- Use TypeScript for all props
- Document complex components with JSDoc
- Use 'use client' directive only when needed (hooks, events)

### `/src/types` - TypeScript Definitions

Centralized type definitions:

```
types/
└── index.ts            # Shared types and interfaces
```

**Best Practices:**
- Define shared types here to avoid duplication
- Use interfaces for object shapes
- Use types for unions and complex types
- Export all public types

## Styling Architecture

### Tailwind CSS Strategy

1. **Utility-First**: Use Tailwind utilities directly in JSX
2. **Custom Components**: Define in `@layer components` for reusable patterns
3. **Global Styles**: Minimal global CSS in `globals.css`
4. **Dark Mode**: CSS variables + Tailwind's dark: variant

### Custom Utilities

Defined in `globals.css`:

```css
@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}
```

This provides consistent container spacing across all pages.

## Server vs Client Components

### Server Components (Default)

Most components are Server Components by default:
- layout.tsx
- page.tsx files
- Footer.tsx

**Benefits:**
- Zero JavaScript sent to client
- Direct database access (if needed)
- Better SEO
- Faster initial load

### Client Components ('use client')

Only Navbar.tsx uses 'use client' because it needs:
- usePathname() hook for active link highlighting
- Browser APIs

**Rule of Thumb:**
- Use Server Components by default
- Add 'use client' only when you need:
  - React hooks (useState, useEffect, etc.)
  - Browser APIs
  - Event handlers

## Metadata & SEO

### Root Metadata (layout.tsx)

Default metadata inherited by all pages:

```typescript
export const metadata: Metadata = {
  title: {
    default: 'Your Name - Portfolio',
    template: '%s | Your Name', // Page titles use this template
  },
  description: '...',
  // ... more metadata
};
```

### Page-Specific Metadata

Each page.tsx can override:

```typescript
export const metadata: Metadata = {
  title: 'Projects', // Becomes "Projects | Your Name"
  description: 'Custom description',
};
```

## Routing & Navigation

### File-Based Routing

Routes are automatically created from folder structure:

| File Path | URL Route |
|-----------|-----------|
| app/page.tsx | / |
| app/projects/page.tsx | /projects |
| app/contact/page.tsx | /contact |
| app/resume/page.tsx | /resume |

### Navigation Best Practices

1. **Use Next.js Link**: Client-side navigation, prefetching
   ```tsx
   import Link from 'next/link';
   <Link href="/projects">Projects</Link>
   ```

2. **Active Link Highlighting**: Use usePathname()
   ```tsx
   'use client';
   const pathname = usePathname();
   const isActive = pathname === '/projects';
   ```

## Performance Optimizations

### Built-in Optimizations

1. **Automatic Code Splitting**: Each route is a separate bundle
2. **Image Optimization**: Use next/image (not implemented yet)
3. **Font Optimization**: next/font/google for Inter font
4. **Prefetching**: Links automatically prefetch on hover

### Future Optimizations

- [ ] Use next/image for all images
- [ ] Implement dynamic imports for heavy components
- [ ] Add bundle analyzer
- [ ] Implement ISR (Incremental Static Regeneration) if needed

## Scalability Patterns

### Adding New Pages

1. Create folder in `src/app/`
2. Add `page.tsx` with component and metadata
3. Optionally add `loading.tsx` for custom loading state
4. Update Navbar links if needed

### Adding Features

**Blog Section:**
```
app/
└── blog/
    ├── page.tsx           # Blog listing
    └── [slug]/
        └── page.tsx       # Individual post
```

**API Routes:**
```
app/
└── api/
    └── contact/
        └── route.ts       # POST /api/contact
```

### Data Fetching Patterns

For future dynamic content:

1. **Server Components**: Fetch directly in component
   ```tsx
   async function getData() {
     const res = await fetch('...');
     return res.json();
   }
   
   export default async function Page() {
     const data = await getData();
     // ...
   }
   ```

2. **Client Components**: Use SWR or React Query
3. **Hybrid**: Server Component fetches, passes to Client Component

## Testing Strategy (Future)

Recommended testing approach:

1. **Unit Tests**: Jest + React Testing Library
   - Test individual components
   - Mock external dependencies

2. **Integration Tests**: Test page interactions
   - User flows
   - Navigation

3. **E2E Tests**: Playwright or Cypress
   - Critical user journeys
   - Form submissions
   - Cross-browser testing

## Deployment Considerations

### Build Process

```bash
npm run build  # Builds optimized production bundle
npm start      # Runs production server
```

### Environment Variables

- Use `.env.local` for local development
- Set in platform dashboard for production
- Prefix with `NEXT_PUBLIC_` for client-side access

### Static Export (if needed)

For fully static sites:

```js
// next.config.js
module.exports = {
  output: 'export',
}
```

## Maintenance Guidelines

### Code Quality

1. **TypeScript**: Strict mode enabled - maintain type safety
2. **ESLint**: Run before commits - `npm run lint`
3. **Formatting**: Use Prettier (recommended)
4. **Comments**: Document complex logic and architectural decisions

### Git Workflow

1. Feature branches for new pages/features
2. Keep commits atomic and descriptive
3. Review README.md after major changes

### Content Updates

Most content can be updated by editing:
- `src/app/page.tsx` - Home page content
- `src/app/projects/page.tsx` - Projects array
- `src/app/resume/page.tsx` - Experience and education
- `src/components/Footer.tsx` - Social links

## Security Best Practices

1. **No Secrets in Code**: Use environment variables
2. **Validate Form Input**: Implement validation when adding form functionality
3. **CSP Headers**: Consider Content Security Policy headers
4. **Dependencies**: Regularly update with `npm audit`

## Accessibility (a11y)

Current implementations:
- Semantic HTML elements
- ARIA labels on links
- Keyboard navigation support
- Focus states on interactive elements

Future improvements:
- [ ] Add skip to content link
- [ ] Test with screen readers
- [ ] Ensure sufficient color contrast
- [ ] Add loading announcements

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
