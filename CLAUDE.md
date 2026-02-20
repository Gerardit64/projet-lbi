# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Leslie Beauté Institut**, a beauty salon in Saint-Jean-de-Luz. Single-page React application deployed via Docker on a Dokploy server.

## Tech Stack

- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **Icons:** Lucide React or Heroicons
- **Production:** Nginx (Alpine) served via multi-stage build, orchestré par Docker Compose

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Production build (outputs to dist/)
npm run preview      # Preview production build locally
docker compose up --build  # Build and run locally → http://localhost:8095
docker compose down        # Stop and remove containers
```

## Architecture

Single-page application with smooth-scroll navigation. All content lives on one page with anchor links:

- `#soins` — Services grid (Soins du visage, Massages & Corps, Épilations)
- `#tarifs` — Pricing
- `#institut` — About/presentation section
- `#contact` — Opening hours, address (Saint-Jean-de-Luz), Google Maps link

**Deployment:** `docker-compose.yml` auto-suffisant — le Dockerfile multi-stage et la config Nginx sont embarqués en inline (`dockerfile_inline` + `configs.content`). Aucun fichier `Dockerfile` ou `nginx.conf` séparé.

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
- `src/components/Footer.jsx` — real social media links
- `index.html` — meta description, favicon

## Deployment (Dokploy)

Connect this repo to Dokploy, select **Docker Compose** mode. Dokploy utilise le `docker-compose.yml` à la racine du repo. Le build multi-stage et la config Nginx sont entièrement inline dans ce fichier.
