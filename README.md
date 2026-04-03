# Jump Aero — EMS Landing Page

> **When Every Second Counts**
> Rapid emergency medical response for rural communities.

🔗 **Live Site:** [https://el7ias.github.io/jumpaero_ems/](https://el7ias.github.io/jumpaero_ems/)

---

## Overview

A premium, single-page landing site for Jump Aero's Emergency Medical Services (EMS) division. Built to communicate the urgent need for rapid rural emergency response and introduce the JA1 Pulse — a piloted eVTOL aircraft designed to get a paramedic on-scene in under 8 minutes.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (custom properties, CSS Grid, Flexbox) |
| Interactivity | Vanilla JavaScript (no frameworks) |
| Fonts | Google Fonts — Exo 2 (display), Inter (body) |
| Hosting | GitHub Pages via GitHub Actions |
| Version Control | Git + GitHub |

## Project Structure

```
JumpAero/
├── index.html              # Main landing page (single-page app)
├── styles.css              # Full design system + component styles
├── script.js               # Animations, scroll effects, form handling
├── images/                 # Photography assets
│   ├── EMT.jpg             # Mission section — flight paramedic
│   ├── Pilot_Pulse.jpg     # Hero background — pilot with aircraft
│   ├── rural_landscape.png # Parallax divider background
│   ├── ems_deepdive.png    # Supporting graphic
│   ├── potentialImpact.jpg # Impact infographic
│   └── potentialImpact2.jpg# Impact infographic (v2)
├── LOGOs/                  # Brand assets (PNG variants + ZIP)
├── JA-BrandSheet.pdf       # Brand guidelines reference
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deploy workflow
├── .agents/
│   └── workflows/
│       └── deploy.md       # Quick-deploy workflow (/deploy command)
└── README.md               # This file
```

## Page Sections

1. **Hero** — Full-bleed background image, animated stat counters (8 min / 288 mph / 60 sec), dual CTAs
2. **The Crisis** — 4 equal stat cards highlighting rural EMS response time failures
3. **The Human Cost** — Animated bar chart comparing rural vs. metropolitan preventable death rates by condition
4. **Parallax Divider** — Immersive landscape with pull quote
5. **Our Mission** — Split layout with EMT portrait + mission statement + feature highlights
6. **How It Works** — Vertical timeline (dispatch → launch → transit → on-scene care)
7. **Impact** — Response time comparison, cost savings, coverage radius ring animation
8. **Trusted By / Validation** — AFWERX contracts, Falck purchase, MIT pedigree
9. **Join the Club** — Founding membership signup with payment form ($36/yr)
10. **Contact** — Full contact form with subject categories
11. **Potential Impact** — Infographic section
12. **Footer** — Navigation, social links, legal

## Features

- **Smooth scroll navigation** with navbar offset compensation
- **Scroll-triggered reveal animations** with staggered timing
- **Animated stat counters** on hero section
- **Animated bar charts** for rural vs. metro death rates
- **SVG coverage ring** animation
- **Parallax scrolling** on landscape divider
- **Active nav highlighting** based on scroll position
- **Credit card input formatting** (auto-spacing, brand detection)
- **Responsive design** with mobile hamburger menu
- **Dark theme** with custom design token system

## Deployment

The site auto-deploys to GitHub Pages on every push to `main`.

### Manual Deploy

```bash
git add -A
git commit -m "Update EMS landing page"
git push origin main
```

The site updates at [https://el7ias.github.io/jumpaero_ems/](https://el7ias.github.io/jumpaero_ems/) within ~1 minute.

## Changelog

### 2026-04-03 — Initial Release

- **Repository setup** — Initialized Git repo, pushed to GitHub (`El7ias/jumpaero_ems`)
- **GitHub Pages deployment** — Configured GitHub Actions workflow for auto-deploy from `main` branch
- **Image deployment fix** — Resolved 404 errors for EMT.jpg and rural_landscape.png on live site
- **Crisis cards equalized** — Removed `grid-row: span 2` from featured card so all 4 cards display at equal size
- **Metro bar chart readability** — Lightened metropolitan percentage values and bar colors to match disease label brightness
- **Nav scroll anchoring** — Fixed anchor offset calculation to account for fixed navbar height + 24px padding, ensuring sections are fully visible when navigating via menu

---

© 2026 Jump Aero, Inc.
