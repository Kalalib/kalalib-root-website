# KALA Website Style Guide

This document defines the visual and interaction rules for kalalib.com.
Use this as the source of truth for all future UI updates.

## 1. Brand Direction
- Tone: modern, technical, clean, confident.
- Audience: startups and SMEs.
- Visual language: light surfaces, strong readability, gradient accents.
- Accent direction: purple at bottom-left to blue at top-right.

## 2. Color System
### Core tokens (Tailwind `kala.*`)
- `kala.bg`: `#f6f8fb`
- `kala.ink`: `#0f172a`
- `kala.deep`: `#1e293b`
- `kala.accent` (primary): `#D67FFF`
- `kala.secondary` (secondary): `#5EB4FF`
- `kala.accentSoft`: `#F3DCFF`
- `kala.secondarySoft`: `#DFF0FF`

### Usage rules
- Primary CTAs: gradient from `kala.accent` to `kala.secondary`.
- Accent chips/badges: soft gradient backgrounds with readable dark text.
- Body text: use slate/ink tones, not accent colors.
- Avoid introducing new accent hues unless approved.

## 3. Gradient Rules
- Accent gradient direction must be `to-tr`.
- Interpretation: purple appears lower-left, blue appears upper-right.
- Applies to:
  - Primary buttons
  - Accent badges and icon chips
  - Interactive card hover highlights
  - Section-level accent elements

## 4. Typography
- Body font: `Manrope`.
- Heading font: `Sora`.
- Headings should feel concise and confident.
- Keep line lengths readable:
  - Hero heading max width around `max-w-3xl`.
  - Body copy max width around `max-w-2xl` to `max-w-3xl`.

## 5. Layout and Spacing
- Use `.section-shell` as the standard content container.
- Desktop max width: `max-w-6xl`.
- Horizontal padding: `px-6`, `md:px-10`.
- Maintain generous vertical spacing between sections.
- Hero section should feel like a full-screen first impression.

## 6. Surface and Card System
- Shared card style: `.card-surface`.
- Cards should use:
  - rounded corners (`rounded-2xl`)
  - light border (`border-slate-200`)
  - subtle depth (`shadow-soft`)
- Interactive cards should use subtle hover lift and gradient tint, never harsh glow.

## 7. Navigation
- Navbar is sticky.
- Logo should be clear and prominent.
- Desktop navigation uses inline links.
- Mobile navigation uses collapsible menu.

## 8. Buttons and Links
- Primary action:
  - gradient background (`accent -> secondary`, `to-tr`)
  - white text
  - gentle hover transition
- Secondary action:
  - light border and neutral text
- Text links:
  - use accent color family on hover/focus

## 9. Icons
- Use Ionicons (`react-icons/io5`) by default.
- Use another icon set only if Ionicons lacks the needed symbol.
- Keep icon sizing consistent within component groups.

## 10. Motion
- Motion should be subtle and purposeful.
- Preferred defaults:
  - slight upward lift on hover (`-translate-y-1`)
  - soft opacity/transform entry (`rise` animation)
- Avoid exaggerated or distracting animations.

## 11. Forms
- Inputs use neutral borders with accent focus state.
- Maintain high contrast and clear field labels/placeholders.
- Contact submission flow should redirect to a clear thank-you page.

## 12. Accessibility and Quality
- Ensure sufficient color contrast for text and controls.
- Keep focus states visible.
- Use semantic HTML structure.
- Preserve responsive behavior for mobile and desktop.

## 13. Do / Do Not
### Do
- Reuse existing tokens and utility classes.
- Keep gradients consistent with the brand direction.
- Keep spacing and typography calm and readable.

### Do Not
- Reintroduce green as a primary accent color.
- Use flat, harsh, saturated backgrounds for major sections.
- Add multiple competing visual styles in one page.
