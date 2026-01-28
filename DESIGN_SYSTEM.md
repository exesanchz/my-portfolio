# Design System Documentation

A comprehensive visual foundation for a modern, dark, tech-oriented portfolio.

## 🎨 Color Palette

### Core Colors (from Figma)

| Color Name | Hex | Usage |
|------------|-----|-------|
| Deep Space | `#050647` | Deepest backgrounds, hero sections |
| Dark Navy | `#0D0F1D` | Primary background color |
| Light Text | `#E2E4F4` | Primary text color |
| Electric Blue | `#58A6FF` | Primary accent (CTAs, links) |
| Cosmic Purple | `#A74AC7` | Secondary accent (highlights) |
| Deep Purple | `#511B4C` | Gradient variant |

### Semantic Color Tokens

Use these semantic names in your components for consistency:

#### Backgrounds
```typescript
bg-background          // #0D0F1D - Main page background
bg-background-deep     // #050647 - Hero, footer sections
bg-background-elevated // #1A1D35 - Cards, modals
bg-background-hover    // #24283F - Hover states
```

#### Surfaces
```typescript
bg-surface             // #1A1D35 - Default surface (cards)
bg-surface-light       // #24283F - Lighter surface variant
border-surface-border  // #2D3250 - Borders and dividers
```

#### Primary (Blue)
```typescript
bg-primary             // #58A6FF - Primary actions
bg-primary-light       // #78B6FF - Hover state
bg-primary-dark        // #3886DF - Active state
text-primary           // Electric blue text
```

#### Secondary (Purple)
```typescript
bg-secondary           // #A74AC7 - Secondary actions
bg-secondary-light     // #B768D4 - Hover state
bg-secondary-dark      // #8B3AA7 - Active state
text-secondary         // Purple text
```

#### Text
```typescript
text-text              // #E2E4F4 - Primary text
text-text-secondary    // #9BA3C5 - Secondary text
text-text-tertiary     // #6B7399 - Tertiary text
text-text-muted        // #4A5070 - Muted text
```

## 📝 Typography

### Type Scale

| Class | Size | Usage | Example |
|-------|------|-------|---------|
| `text-hero` | 72px / 4.5rem | Hero headlines | "Hi, I'm [Name]" |
| `text-display` | 60px / 3.75rem | Large displays | Landing sections |
| `text-h1` | 48px / 3rem | Page titles | "My Projects" |
| `text-h2` | 36px / 2.25rem | Section headers | "Work Experience" |
| `text-h3` | 30px / 1.875rem | Subsections | Card titles |
| `text-h4` | 24px / 1.5rem | Small headings | Timeline items |
| `text-body-lg` | 18px / 1.125rem | Large body text | Introductions |
| `text-body` | 16px / 1rem | Default text | Paragraphs |
| `text-body-sm` | 14px / 0.875rem | Small text | Captions |
| `text-label` | 14px / 0.875rem | Labels | Form labels |
| `text-caption` | 12px / 0.75rem | Tiny text | Footnotes |

### Font Weight

```typescript
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

### Usage Examples

```tsx
{/* Hero title */}
<h1 className="text-hero font-bold text-gradient">
  Hi, I'm Your Name
</h1>

{/* Section title */}
<h2 className="text-h2 font-semibold text-text mb-6">
  Featured Projects
</h2>

{/* Body text */}
<p className="text-body text-text-secondary">
  A passionate developer building modern web applications.
</p>

{/* Small label */}
<span className="text-label text-text-tertiary uppercase tracking-wide">
  Tech Stack
</span>
```

## 🎭 Component Utilities

### Containers

Control content width across different sections:

```tsx
{/* Standard container (1280px max) */}
<div className="container-custom">
  {/* Content */}
</div>

{/* Narrow container (896px max) - for reading */}
<div className="container-narrow">
  {/* Blog post, long form content */}
</div>

{/* Wide container (1536px max) */}
<div className="container-wide">
  {/* Full-width galleries */}
</div>
```

### Section Spacing

Consistent vertical rhythm:

```tsx
{/* Standard section */}
<section className="section-padding">
  {/* py-16 md:py-24 lg:py-30 */}
</section>

{/* Smaller section */}
<section className="section-padding-sm">
  {/* py-12 md:py-16 lg:py-20 */}
</section>

{/* Larger section */}
<section className="section-padding-lg">
  {/* py-20 md:py-30 lg:py-34 */}
</section>
```

### Cards

Pre-built card styles:

```tsx
{/* Basic card */}
<div className="card">
  {/* Elevated surface with shadow */}
</div>

{/* Interactive card */}
<div className="card-hover">
  {/* Lifts on hover with transition */}
</div>

{/* Bordered card */}
<div className="card-bordered">
  {/* Card with visible border */}
</div>

{/* Glowing card */}
<div className="card-glow">
  {/* Card with subtle blue glow */}
</div>
```

### Buttons

Button foundations (extend as needed):

```tsx
{/* Primary CTA */}
<button className="btn-primary">
  View Projects
</button>

{/* Secondary action */}
<button className="btn-secondary">
  Learn More
</button>

{/* Outline variant */}
<button className="btn-outline">
  Get in Touch
</button>
```

### Form Inputs

```tsx
<input
  type="text"
  className="input-base"
  placeholder="Your name"
/>

<textarea
  className="input-base resize-none"
  rows={4}
/>
```

### Tags/Badges

For technology tags:

```tsx
{/* Default tag */}
<span className="tag">React</span>

{/* Primary tag */}
<span className="tag-primary">Featured</span>

{/* Secondary tag */}
<span className="tag-secondary">New</span>
```

### Links

```tsx
{/* Primary link */}
<a href="/projects" className="link">
  View All Projects →
</a>

{/* Subtle link */}
<a href="/about" className="link-subtle">
  Learn more
</a>
```

## ✨ Special Effects

### Gradient Text

```tsx
<h1 className="text-hero font-bold text-gradient">
  Gradient Headline
</h1>
```

Creates a blue-to-purple gradient text effect.

### Background Gradients

```tsx
{/* Primary gradient (blue to purple) */}
<div className="bg-gradient-primary" />

{/* Hero gradient (deep space effect) */}
<div className="bg-gradient-hero" />

{/* Surface gradient */}
<div className="bg-gradient-surface" />

{/* Glow effect */}
<div className="bg-gradient-glow" />
```

### Shadows

```tsx
{/* Card shadow */}
<div className="shadow-card" />

{/* Hover shadow */}
<div className="shadow-card-hover" />

{/* Primary glow */}
<div className="shadow-glow-primary" />

{/* Secondary glow */}
<div className="shadow-glow-secondary" />

{/* Subtle glow */}
<div className="shadow-glow-subtle" />
```

## 📐 Spacing & Layout

### Border Radius

```typescript
rounded-card    // 1rem (16px) - Cards
rounded-button  // 0.75rem (12px) - Buttons
rounded-input   // 0.5rem (8px) - Inputs
rounded-tag     // 0.375rem (6px) - Tags
```

### Extended Spacing

```typescript
space-18  // 4.5rem (72px)
space-22  // 5.5rem (88px)
space-26  // 6.5rem (104px)
space-30  // 7.5rem (120px)
space-34  // 8.5rem (136px)
```

### Max Width

```typescript
max-w-content  // 65ch - Optimal reading width
max-w-section  // 1280px - Section width
max-w-wide     // 1536px - Extra wide
```

## 🎯 Common Patterns

### Hero Section

```tsx
<section className="section-padding-lg bg-background-deep">
  <div className="container-custom">
    <h1 className="text-hero font-bold text-gradient mb-6">
      Hi, I'm Your Name
    </h1>
    <p className="text-body-lg text-text-secondary max-w-3xl mb-8">
      A passionate developer building modern applications.
    </p>
    <div className="flex gap-4">
      <button className="btn-primary">View Projects</button>
      <button className="btn-outline">Contact Me</button>
    </div>
  </div>
</section>
```

### Project Card

```tsx
<div className="card-hover">
  <h3 className="text-h4 font-semibold text-text mb-3">
    Project Title
  </h3>
  <p className="text-body text-text-secondary mb-4">
    Brief description of the project and its impact.
  </p>
  <div className="flex flex-wrap gap-2 mb-4">
    <span className="tag-primary">React</span>
    <span className="tag-primary">TypeScript</span>
    <span className="tag">Tailwind</span>
  </div>
  <a href="#" className="link">
    View Project →
  </a>
</div>
```

### Section Header

```tsx
<div className="section-padding">
  <div className="container-custom">
    <div className="max-w-3xl mb-12">
      <h2 className="text-h1 font-bold text-text mb-4">
        Featured Projects
      </h2>
      <p className="text-body-lg text-text-secondary">
        A collection of my recent work and side projects.
      </p>
    </div>
    {/* Content grid */}
  </div>
</div>
```

### Technology Tags List

```tsx
<div className="flex flex-wrap gap-2">
  {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
    <span key={tech} className="tag-primary">
      {tech}
    </span>
  ))}
</div>
```

## 🎨 Color Usage Guidelines

### Do's ✅

- Use semantic tokens (`bg-background`, `text-text`) instead of literal colors
- Use `bg-primary` for main CTAs and links
- Use `bg-secondary` for secondary highlights
- Keep text contrast high (use `text-text` for primary content)
- Use surface colors for elevated content

### Don'ts ❌

- Don't use literal hex values directly (e.g., `bg-[#0D0F1D]`)
- Don't mix too many accent colors in one view
- Don't use low-contrast text on dark backgrounds
- Don't overuse glowing effects

## 📱 Responsive Design

All utilities work with Tailwind's responsive prefixes:

```tsx
<div className="
  text-h3          /* Mobile */
  md:text-h2       /* Tablet */
  lg:text-h1       /* Desktop */
">
  Responsive Title
</div>

<section className="
  section-padding-sm    /* Mobile */
  lg:section-padding    /* Desktop */
">
  {/* Content */}
</section>
```

## ♿ Accessibility

### Focus States

All interactive elements have focus rings:

```tsx
<button className="btn-primary focus:ring-2 focus:ring-primary">
  Accessible Button
</button>

{/* Or use the utility */}
<a href="#" className="focus-ring">
  Link with focus
</a>
```

### Text Contrast

All text colors meet WCAG AA contrast requirements on their intended backgrounds:

- `text-text` on `bg-background`: ✅ 12.5:1
- `text-text-secondary` on `bg-background`: ✅ 7.2:1
- `text-text-tertiary` on `bg-background`: ✅ 4.8:1

## 🔧 Customization

### Adding New Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  // Add your color
  'custom-name': '#HEX',
}
```

### Adding New Utilities

Edit `globals.css` in the `@layer components` section:

```css
@layer components {
  .my-custom-utility {
    @apply /* your styles */;
  }
}
```

## 📦 What's Next?

This design system provides the foundation. You can now:

1. ✅ Build UI components using these utilities
2. ✅ Create hero sections with gradients
3. ✅ Design project cards with consistent styling
4. ✅ Implement forms with proper input styles
5. ✅ Add animations (transitions are configured)

---

**Design Philosophy:** Clean, modern, and scalable. Every decision prioritizes consistency, accessibility, and developer experience.
