# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Active Arts** (activearts.co.nz) is a charitable trust bringing performing arts to aged care communities across Auckland. This repository is the **site redesign** — a modern React SPA in `site/` to replace the legacy WordPress site.

Server/infrastructure maintenance is handled in a separate project.

## Tech Stack
- **Framework:** React 19 + Vite 7 + React Router 7
- **Styling:** Tailwind CSS 4 + Framer Motion 12
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Fonts:** Inter Variable (headings), Lora Variable (body)
- **Theme:** "Ocean Mist" — forest blue primary, terra orange accent, cream backgrounds
- **Icons:** Lucide React

## Project Structure
```
site/
  src/
    components/
      home/         # Hero, Services, FringeVideo, TeamSection, TeamCard,
                    # Testimonials, VideoFeature, ContactForm
      layout/       # Navbar, Footer
      news/         # NewsPage
      ui/           # shadcn/ui primitives (button, card, input, etc.)
    data/
      content.js    # All site content as structured JS objects
    lib/
      utils.js      # cn() helper (clsx + tailwind-merge)
    App.jsx         # Router & layout shell
    main.jsx        # Entry point
    index.css       # Global styles + theme system
  public/
    images/         # Logo, team photos, hero images
  dist/             # Vite build output
```

## Commands
```bash
cd site
npm run dev       # Start dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Content Management
All site content lives in `site/src/data/content.js` — exports: `siteInfo`, `navLinks`, `services`, `teamIntro`, `team`, `whatWeDo`, `testimonials`, `videos`, `newsArticles`, `newsHighlights`.

## Environment Variables
- `VITE_CONTACT_WEBHOOK_URL` — Contact form POST endpoint (set in `site/.env`, gitignored)

## Theme System
Four alternative themes available via `data-theme` attribute on root: navy, slate, clay, pastel. Default is Ocean Mist (no attribute needed). Theme colors defined as CSS custom properties in `index.css`.

## Key Conventions
- Site content changes go in `site/src/data/content.js`, not in component files
- Never store API tokens or credentials in files — use environment variables

## Other Files
- `.firecrawl/` — Scraped content from the legacy WordPress site (reference for migration)
- `redesign/` — Alternative CSS design system (not in use, was for WordPress customization)
- `palette-preview.html`, `style-guide-*.html` — Color/theme reference files
