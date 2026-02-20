# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Leslie Beauté Institut**, a beauty salon in Saint-Jean-de-Luz. Single-page React application deployed via Docker on a Dokploy server.

## Tech Stack

- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React or Heroicons
- **Production:** Nginx (Alpine) served via multi-stage Docker build

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build locally
docker build -t lbi .      # Build Docker image
docker run -p 8080:80 lbi  # Run container locally → http://localhost:8080
```

## Architecture

Single-page application with smooth-scroll navigation. All content lives on one page with anchor links:

- `#soins` — Services grid (Soins du visage, Massages & Corps, Épilations)
- `#tarifs` — Pricing
- `#institut` — About/presentation section
- `#contact` — Opening hours, address (Saint-Jean-de-Luz), Google Maps link

**Deployment:** Multi-stage Dockerfile — Stage 1 builds with Node.js (`npm run build`), Stage 2 serves `dist/` with Nginx on port 80. An `nginx.conf` must handle static routes and caching.

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary bg | `#FAF6F1` | Cream/light beige background |
| Accent | `#D4A574` | Gold/rose-gold CTAs, borders, highlights |
| Text | `#1A1A1A` | Soft black body text |
| Heading font | Playfair Display (serif) | Section titles, hero |
| Body font | Jost or Inter (sans-serif) | Paragraphs, nav |

Aesthetic: minimalist, accessible luxury, zen. Avoid heavy shadows or cluttered layouts.

## Components

```
src/components/
├── Navbar.jsx    # Sticky, transparent → opaque on scroll, mobile hamburger menu
├── Hero.jsx      # Full-height section, Unsplash image, dual CTA
├── Services.jsx  # 3-card grid (Visage, Massages & Corps, Épilations)
├── Institut.jsx  # Image + text + 3 values (Excellence, Bienveillance, Expertise)
├── Tarifs.jsx    # 3-column pricing table by category
├── Contact.jsx   # Hours + address + Google Maps iframe + CTA
└── Footer.jsx    # Logo, nav links, social icons, legal mentions
```

## Customisation

Real data to replace before production:
- `src/components/Contact.jsx` — address, phone, email, Google Maps iframe URL
- `src/components/Footer.jsx` — real social media links
- `index.html` — meta description, favicon

## Deployment (Dokploy)

Connect this repo to Dokploy, select **Dockerfile** mode, exposed port `80`. Dokploy builds the Docker image directly from the `Dockerfile` at the repo root.
