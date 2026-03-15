---
inclusion: auto
---

# Portfolio Website Standards

## Tech Stack
- React (with Vite as build tool)
- Tailwind CSS for styling
- Plain JavaScript (no TypeScript unless explicitly requested)

## Design System
- Dark base theme using #003049 (deep navy) as primary background
- Color palette:
  - #003049 (deep navy) — primary background, dark surfaces
  - #001d2e (darker navy) — secondary background, card surfaces
  - #D62828 (warm red) — CTA buttons, primary accents, active states
  - #F77F00 (burnt orange) — hover states, secondary accents, links
  - #FCBF49 (warm gold) — badges, tags, subtle highlights, skill chips
  - #EAE2B7 (warm cream) — primary text color
  - #f5f0e1 (light cream) — secondary text, muted content
- Geometric sans-serif font (Outfit or Poppins) for headings
- Clean sans-serif font (Inter) for body text
- Mood: warm, approachable, moody, deeply androgynous — confident but not aggressive
- Clean, geometric layouts with generous whitespace
- Smooth scroll animations (subtle, not distracting)
- Responsive-first design (mobile, tablet, desktop)

## Page Sections (in order)
1. Hero/About — name, title ("Software Engineer | DevOps Specialist"), brief intro, CTA
2. Skills — grouped by category (DevOps Tools, Cloud, CI/CD, Languages, etc.)
3. Projects — divided into two subsections: DevOps and AI
4. Experience — timeline or card-based work history
5. Thoughts — blog-like section for articles/opinions (can be placeholder)
6. Contact — form or contact info with social links

## Key DevOps Skills to Highlight
- Terraform
- CI/CD: Jenkins, GitLab CI, GitHub Actions
- AWS
- Docker
- Process Improvement

## Code Standards
- Functional React components only
- Component-based architecture (one component per file)
- Components in src/components/, organized by section
- Use semantic HTML elements for accessibility
- All images must have alt text
- Interactive elements must be keyboard accessible
- Keep bundle size minimal — avoid unnecessary dependencies

## Design Details
- Warm, moody aesthetic — deep navy base with red/orange/gold accents creating depth
- Subtle hover animations on cards and buttons (orange glow on hover)
- Section transitions with fade-in on scroll
- Navigation: sticky top nav with smooth scroll to sections
- Skill badges styled with gold (#FCBF49) on dark navy
- CTA buttons use red (#D62828) with orange (#F77F00) hover
- Cards use slightly darker navy (#001d2e) with subtle warm border accents
