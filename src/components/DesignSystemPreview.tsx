/**
 * Design System Preview Component
 * 
 * This component showcases all design tokens and utilities.
 * NOT meant for production - use only for design system reference.
 * 
 * To preview: Import this in any page temporarily
 */

export default function DesignSystemPreview() {
  return (
    <div className="bg-background min-h-screen py-16">
      <div className="container-custom space-y-16">
        
        {/* Typography Scale */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Typography Scale
          </h2>
          <div className="space-y-4">
            <div className="text-hero font-bold text-gradient">Hero Text (72px)</div>
            <div className="text-display font-bold text-text">Display Text (60px)</div>
            <div className="text-h1 font-bold text-text">Heading 1 (48px)</div>
            <div className="text-h2 font-semibold text-text">Heading 2 (36px)</div>
            <div className="text-h3 font-semibold text-text">Heading 3 (30px)</div>
            <div className="text-h4 font-semibold text-text">Heading 4 (24px)</div>
            <div className="text-body-lg text-text-secondary">Body Large (18px) - For introductions and emphasis</div>
            <div className="text-body text-text-secondary">Body (16px) - Default paragraph text</div>
            <div className="text-body-sm text-text-tertiary">Body Small (14px) - Captions and secondary info</div>
            <div className="text-label text-text-muted">Label (14px, Medium) - Form labels</div>
            <div className="text-caption text-text-muted">Caption (12px) - Tiny text</div>
          </div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Color Palette
          </h2>
          
          <div className="space-y-8">
            {/* Backgrounds */}
            <div>
              <h3 className="text-h4 font-semibold text-text mb-4">Backgrounds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 bg-background rounded-card border border-surface-border"></div>
                  <p className="text-body-sm text-text-secondary">background</p>
                  <code className="text-caption text-text-muted">#0D0F1D</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-background-deep rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">background-deep</p>
                  <code className="text-caption text-text-muted">#050647</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-background-elevated rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">background-elevated</p>
                  <code className="text-caption text-text-muted">#1A1D35</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-background-hover rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">background-hover</p>
                  <code className="text-caption text-text-muted">#24283F</code>
                </div>
              </div>
            </div>

            {/* Primary */}
            <div>
              <h3 className="text-h4 font-semibold text-text mb-4">Primary (Blue)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 bg-primary rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">primary</p>
                  <code className="text-caption text-text-muted">#58A6FF</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-primary-light rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">primary-light</p>
                  <code className="text-caption text-text-muted">#78B6FF</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-primary-dark rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">primary-dark</p>
                  <code className="text-caption text-text-muted">#3886DF</code>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div>
              <h3 className="text-h4 font-semibold text-text mb-4">Secondary (Purple)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 bg-secondary rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">secondary</p>
                  <code className="text-caption text-text-muted">#A74AC7</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-secondary-light rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">secondary-light</p>
                  <code className="text-caption text-text-muted">#B768D4</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-secondary-dark rounded-card"></div>
                  <p className="text-body-sm text-text-secondary">secondary-dark</p>
                  <code className="text-caption text-text-muted">#8B3AA7</code>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h3 className="text-h4 font-semibold text-text mb-4">Text Colors</h3>
              <div className="bg-surface rounded-card p-6 space-y-2">
                <p className="text-body text-text">Primary text (#E2E4F4)</p>
                <p className="text-body text-text-secondary">Secondary text (#9BA3C5)</p>
                <p className="text-body text-text-tertiary">Tertiary text (#6B7399)</p>
                <p className="text-body text-text-muted">Muted text (#4A5070)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Card Variants
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card">
              <h3 className="text-h4 font-semibold text-text mb-2">Basic Card</h3>
              <p className="text-body-sm text-text-secondary">Standard elevated surface</p>
            </div>
            <div className="card-hover">
              <h3 className="text-h4 font-semibold text-text mb-2">Hover Card</h3>
              <p className="text-body-sm text-text-secondary">Lifts on hover</p>
            </div>
            <div className="card-bordered">
              <h3 className="text-h4 font-semibold text-text mb-2">Bordered Card</h3>
              <p className="text-body-sm text-text-secondary">With visible border</p>
            </div>
            <div className="card-glow">
              <h3 className="text-h4 font-semibold text-text mb-2">Glow Card</h3>
              <p className="text-body-sm text-text-secondary">Subtle blue glow</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Buttons
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-outline">Outline Button</button>
          </div>
        </section>

        {/* Tags */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Tags & Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="tag">Default Tag</span>
            <span className="tag-primary">Primary Tag</span>
            <span className="tag-secondary">Secondary Tag</span>
          </div>
        </section>

        {/* Form Elements */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Form Elements
          </h2>
          <div className="max-w-md space-y-4">
            <input 
              type="text" 
              className="input-base" 
              placeholder="Text input"
            />
            <textarea 
              className="input-base resize-none" 
              rows={4}
              placeholder="Textarea input"
            />
          </div>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Links
          </h2>
          <div className="space-y-3">
            <div>
              <a href="#" className="link">Primary link with underline →</a>
            </div>
            <div>
              <a href="#" className="link-subtle">Subtle link without underline</a>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Shadow Effects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-card p-6 shadow-glow-primary">
              <h3 className="text-h4 font-semibold text-text mb-2">Primary Glow</h3>
              <p className="text-body-sm text-text-secondary">Blue glow effect</p>
            </div>
            <div className="bg-surface rounded-card p-6 shadow-glow-secondary">
              <h3 className="text-h4 font-semibold text-text mb-2">Secondary Glow</h3>
              <p className="text-body-sm text-text-secondary">Purple glow effect</p>
            </div>
            <div className="bg-surface rounded-card p-6 shadow-glow-subtle">
              <h3 className="text-h4 font-semibold text-text mb-2">Subtle Glow</h3>
              <p className="text-body-sm text-text-secondary">Soft blue glow</p>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Gradient Effects
          </h2>
          <div className="space-y-4">
            <div className="h-32 rounded-card bg-gradient-primary flex items-center justify-center">
              <span className="text-h4 font-bold text-white">Primary Gradient</span>
            </div>
            <div className="h-32 rounded-card bg-gradient-hero flex items-center justify-center">
              <span className="text-h4 font-bold text-white">Hero Gradient</span>
            </div>
            <div className="text-hero font-bold text-gradient text-center">
              Gradient Text Effect
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-h2 font-bold text-text mb-8 border-b border-surface-border pb-4">
            Section Spacing
          </h2>
          <div className="space-y-6">
            <div className="bg-surface rounded-card section-padding-sm">
              <p className="text-body text-text text-center">section-padding-sm</p>
            </div>
            <div className="bg-surface rounded-card section-padding">
              <p className="text-body text-text text-center">section-padding (default)</p>
            </div>
            <div className="bg-surface rounded-card section-padding-lg">
              <p className="text-body text-text text-center">section-padding-lg</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
