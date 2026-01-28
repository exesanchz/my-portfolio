# Design Tokens Quick Reference

A quick lookup for all design tokens. Keep this handy while building components.

## 🎨 Colors

### Background
```
bg-background          → #0D0F1D (main)
bg-background-deep     → #050647 (hero/footer)
bg-background-elevated → #1A1D35 (cards)
bg-background-hover    → #24283F (hover)
```

### Surface
```
bg-surface             → #1A1D35
bg-surface-light       → #24283F
border-surface-border  → #2D3250
```

### Primary (Blue)
```
bg/text-primary        → #58A6FF
bg/text-primary-light  → #78B6FF
bg/text-primary-dark   → #3886DF
```

### Secondary (Purple)
```
bg/text-secondary      → #A74AC7
bg/text-secondary-light→ #B768D4
bg/text-secondary-dark → #8B3AA7
```

### Text
```
text-text              → #E2E4F4 (primary)
text-text-secondary    → #9BA3C5 (secondary)
text-text-tertiary     → #6B7399 (tertiary)
text-text-muted        → #4A5070 (muted)
```

## 📝 Typography

### Sizes
```
text-hero      → 72px / 4.5rem    (Hero headlines)
text-display   → 60px / 3.75rem   (Large displays)
text-h1        → 48px / 3rem      (Page titles)
text-h2        → 36px / 2.25rem   (Sections)
text-h3        → 30px / 1.875rem  (Subsections)
text-h4        → 24px / 1.5rem    (Small headings)
text-body-lg   → 18px / 1.125rem  (Large body)
text-body      → 16px / 1rem      (Default)
text-body-sm   → 14px / 0.875rem  (Small body)
text-label     → 14px / 0.875rem  (Labels)
text-caption   → 12px / 0.75rem   (Captions)
```

### Weights
```
font-normal    → 400
font-medium    → 500
font-semibold  → 600
font-bold      → 700
```

## 📦 Spacing

### Section Padding
```
section-padding    → py-16 md:py-24 lg:py-30
section-padding-sm → py-12 md:py-16 lg:py-20
section-padding-lg → py-20 md:py-30 lg:py-34
```

### Extended Scale
```
space-18 → 72px
space-22 → 88px
space-26 → 104px
space-30 → 120px
space-34 → 136px
```

## 📐 Border Radius
```
rounded-card    → 16px (Cards)
rounded-button  → 12px (Buttons)
rounded-input   → 8px  (Inputs)
rounded-tag     → 6px  (Tags)
```

## 🎭 Shadows
```
shadow-card           → Subtle card depth
shadow-card-hover     → Elevated card on hover
shadow-glow-primary   → Blue glow effect
shadow-glow-secondary → Purple glow effect
shadow-glow-subtle    → Subtle blue glow
```

## 🎨 Gradients
```
bg-gradient-primary  → Blue to Purple
bg-gradient-hero     → Deep space effect
bg-gradient-surface  → Subtle surface gradient
bg-gradient-glow     → Radial glow from top
```

## 🧩 Component Classes

### Containers
```
.container-custom  → Standard (1280px)
.container-narrow  → Narrow (896px)
.container-wide    → Wide (1536px)
```

### Cards
```
.card              → Basic elevated card
.card-hover        → Interactive card
.card-bordered     → With border
.card-glow         → With glow effect
```

### Buttons
```
.btn-primary       → Primary CTA
.btn-secondary     → Secondary action
.btn-outline       → Outlined button
```

### Inputs
```
.input-base        → Form input foundation
```

### Tags
```
.tag               → Default tag
.tag-primary       → Blue tag
.tag-secondary     → Purple tag
```

### Links
```
.link              → Primary link with underline
.link-subtle       → Subtle link without underline
```

### Text Effects
```
.text-gradient     → Blue-purple gradient text
```

### Utilities
```
.divider           → Horizontal divider
.divider-vertical  → Vertical divider
.focus-ring        → Accessible focus state
```

## 💡 Quick Tips

**Most Common Patterns:**

```tsx
// Hero Section
<section className="section-padding-lg bg-background-deep">
  <div className="container-custom">
    <h1 className="text-hero font-bold text-gradient">Title</h1>
  </div>
</section>

// Standard Section
<section className="section-padding">
  <div className="container-custom">
    <h2 className="text-h2 font-semibold text-text mb-8">Heading</h2>
  </div>
</section>

// Project Card
<div className="card-hover">
  <h3 className="text-h4 font-semibold text-text">Title</h3>
  <p className="text-body text-text-secondary">Description</p>
  <span className="tag-primary">Tech</span>
</div>

// CTA Button
<button className="btn-primary">Action</button>

// Form Input
<input className="input-base" placeholder="Text" />
```

**Color Combinations:**

| Background | Text | Use Case |
|------------|------|----------|
| `bg-background` | `text-text` | Page body |
| `bg-background-deep` | `text-text` | Hero sections |
| `bg-surface` | `text-text` | Cards |
| `bg-surface-light` | `text-text-secondary` | Subtle cards |
| `bg-primary` | `text-white` | CTAs |
| `bg-secondary` | `text-white` | Secondary CTAs |

---

**Pro Tip:** Use semantic tokens (like `bg-background` instead of `bg-dark-navy`) for easier theme changes later.
