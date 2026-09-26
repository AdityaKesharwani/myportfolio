---
name: Architectural Tech Atelier
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#46464b'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#77767b'
  outline-variant: '#c7c6cb'
  surface-tint: '#5e5e64'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1b21'
  on-primary-container: '#83838a'
  inverse-primary: '#c7c6cd'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e3e1e9'
  primary-fixed-dim: '#c7c6cd'
  on-primary-fixed: '#1a1b21'
  on-primary-fixed-variant: '#46464c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 4rem
    fontWeight: '600'
    lineHeight: 4.25rem
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '500'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  label-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
  stat-counter:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 3.5rem
    letterSpacing: -0.04em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

The design system embodies an architectural tech studio sensibility: disciplined, structural, precise, and understated. Built for an elite full-stack engineer and digital architect, it bridges high-performance software engineering with European modernist editorial design.

The target audience includes design-forward founders, engineering executives, and tech venture leaders looking for exceptional engineering capability paired with rigorous design execution.

The interface evokes structural permanence, technical mastery, and quiet confidence. It avoids transient trends, bright synthetic gradients, or playful roundness, relying instead on hairline borders, strict alignment grids, tabular data presentation, and deliberate typographic rhythm.

## Colors

The palette operates on a calibrated interplay of cool architectural slates and tactile stone grays, anchored by deep carbon blacks:

- **Base Surfaces**: The primary canvas sits at `#F8FAFC` (slate-50), layered against nested surface panels in `#F4F4F5` (zinc-100) and `#F1F5F9` (slate-100).
- **Structural Outlines**: Demarcations use `#E2E8F0` (slate-200) for internal structural dividers and `#CBD5E1` (slate-300) for prominent borders and frame perimeter strokes.
- **Ink & Typography**: Primary headers and high-impact text deploy `#090A0F` (slate-950/deep carbon) for absolute contrast. Secondary body and technical data use `#334155` (slate-700) and `#64748B` (slate-500) for clear hierarchical degradation.
- **Accenting**: Strictly monochromatic with deep slate ink accents. Interactive states lean on inverted contrasts (carbon black fills with crisp white text) rather than saturated chromatic primaries.

## Typography

Typographic structure balances three distinct roles:
1. **Space Grotesk** commands the display scale, headings, and metric counters, delivering a sharp, structural, engineered presence.
2. **Inter** handles narrative copy, case study prose, and documentation with clean, neutral legibility.
3. **JetBrains Mono** governs the technical metadata, badges, section indices (e.g., `[01/04]`), tabular data values, and code snippets.

All labels in JetBrains Mono use uppercase typesetting with expanded letter spacing to evoke architectural blueprints and terminal viewports. Numbers across all tables and metrics must enforce tabular figures (`tnum`).

## Layout & Spacing

The layout is grounded in a 12-column structural grid system inspired by editorial broadsheets and blueprint registers:

- **Desktop (1024px+)**: 12 columns, 32px gutters, 64px outer page margin, with max-width constrained to 1440px. Adjacent modules share a continuous 1px outline grid, creating a seamless matrix.
- **Tablet (768px - 1023px)**: 8 columns, 24px gutters, 40px outer margin. Side-by-side modules collapse to 2-column or 4-column groupings.
- **Mobile (< 768px)**: 4 columns, 16px gutters, 20px outer margin. Layout reflows into a single vertical index with horizontal hairline borders delineating items.

Rhythm is strictly modular. Content modules utilize internal cell padding (`space-lg` to `space-xl`) bound by persistent borders rather than floating card gaps.

## Elevation & Depth

Visual hierarchy is communicated entirely through tonal layer contrast and precision line borders—never through standard drop shadows or heavy blurs:

- **Borders over Shadows**: Spatial boundaries are defined by `1px solid #CBD5E1` (exterior bounds) and `1px solid #E2E8F0` (interior subdivisions). Shadows are omitted (`box-shadow: none`) to maintain an authentic draftsmanship quality.
- **Tonal Layers**: Nesting is achieved by shifting background tone. Background level 0 sits at `#F8FAFC`, interactive cell containers sit at `#FFFFFF`, and inset tech specs/code displays sit at `#F1F5F9`.
- **Hover Transitions**: Interactive elevations do not lift upward; they transform tonally. A card or table row hover shifts its background from `#FFFFFF` to `#F8FAFC`, or activates a sharp inverted state (`#090A0F` background with `#F8FAFC` ink).

## Shapes

The shape system is strictly sharp (`0px` radius everywhere).

Every interactive touchpoint, project cell, badge, button, and image viewport terminates in clean 90-degree right angles. This discipline reinforces the architectural atelier theme, transforming the web viewport into a high-precision CAD canvas or physical draftsman sheet.

## Components

### Buttons
- **Primary**: Solid `#090A0F` fill, `#F8FAFC` text, sharp 0px radius. JetBrains Mono font, uppercase, tracked. Hover flips to `#334155`.
- **Secondary / Ghost**: Transparent fill with `1px solid #CBD5E1`. On hover, fills `#090A0F` with `#F8FAFC` text.
- **Icon / Action**: Square aspect ratio (1:1), 0px radius, bounded by hairline border with directional arrow glyphs (`↗`, `→`).

### Project Cards & Structural Cells
- Configured as unified grid boxes with continuous 1px borders.
- Top meta row contains project classification number (`[SYS_01]`), client/context, and production year in `JetBrains Mono`.
- Body features a high-ratio viewport frame with an architectural line-drawn thumbnail or grayscale UI screencap.
- Bottom panel displays project title, brief technical scope, and stacked technical badges.

### Technical Badges / Chips
- Pure flat geometry: `0px` radius, `1px solid #E2E8F0`, background `#FFFFFF`.
- Typography: `label-mono-sm` in `#334155`.
- Compact padding (`0.25rem 0.5rem`). No colored status pills; active states employ a simple `■` (black square) or `●` (hollow dot) character glyph.

### Tabular Data & Work History
- Editorial table rows separated by `1px solid #E2E8F0`.
- Columns align by grid fraction: Date/Year (`15%`), Role/Title (`35%`), Organization (`25%`), Stack/Deliverables (`25%`).
- Hovering triggers a full-row background tint to `#F1F5F9` with the title tracking subtly right (`transform: translateX(4px)`).

### Metric Counters
- Minimal stat callouts comprising a massive `stat-counter` number in `Space Grotesk` paired directly above a two-line `label-mono-sm` architectural annotation.
- Flanked by vertical hairline slate dividers.

### Form Inputs & Checkboxes
- **Inputs**: Flat `#FFFFFF` surface with `1px solid #CBD5E1`. Placeholder in muted slate (`#94A3B8`). Focus state switches border to `1px solid #090A0F` with zero outer glow.
- **Checkboxes**: Pure square frame (`16px x 16px`), sharp 0px corner. Checked state renders a solid black fill with an inset white square or tick.