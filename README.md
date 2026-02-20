# Leslie Beauté Institut

Landing page pour l'institut de beauté **Leslie Beauté Institut**, situé à Saint-Jean-de-Luz (Pays Basque).

Single-page React application — déployée via Docker sur un serveur [Dokploy](https://dokploy.com).

---

## Aperçu

Page unique avec navigation smooth-scroll :

| Section | Ancre | Contenu |
|---------|-------|---------|
| Hero | — | Image plein écran, titre, CTA |
| Soins | `#soins` | 3 cartes : Visage, Massages & Corps, Épilations |
| L'Institut | `#institut` | Présentation, valeurs |
| Tarifs | `#tarifs` | Grille de prix par catégorie |
| Contact | `#contact` | Horaires, adresse, carte Google Maps |
| Footer | — | Navigation, réseaux sociaux, mentions légales |

---

## Stack technique

- **Vite** + **React 18**
- **Tailwind CSS v3** — design tokens custom (cream, gold, soft-black)
- **Lucide React** — icônes
- **Nginx Alpine** — serveur de production via **Docker Compose** (build multi-stage inline)

### Design system

| Token | Valeur | Usage |
|-------|--------|-------|
| `cream` | `#FAF6F1` | Fond principal |
| `gold` | `#D4A574` | Accent, CTAs, bordures |
| `soft-black` | `#1A1A1A` | Texte |
| `font-serif` | Playfair Display | Titres, hero |
| `font-sans` | Jost | Corps de texte, navigation |

---

## Développement local

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Build production → dist/
npm run preview   # Prévisualiser le build
```

---

## Docker

```bash
# Build et démarrage (foreground)
docker compose up --build

# Build et démarrage (arrière-plan)
docker compose up --build -d

# Test
open http://localhost

# Arrêt
docker compose down
```

Le `docker-compose.yml` est **auto-suffisant** — le build multi-stage et la config Nginx sont embarqués en inline :
1. **Stage builder** — Node 20 Alpine, `npm ci` + `vite build`
2. **Stage final** — Nginx Alpine, sert `dist/` sur le port 80
3. **Config Nginx** — gzip, SPA routing, cache assets, security headers (inline via `configs.content`)

---

## Déploiement Dokploy

1. Créer une nouvelle application dans Dokploy
2. Connecter ce dépôt GitHub
3. Sélectionner le mode **Docker Compose**
4. Déclencher le déploiement

Dokploy utilise le `docker-compose.yml` à la racine du dépôt. Aucune configuration supplémentaire requise.

---

## Personnalisation

Les données à remplacer avant la mise en production :

- `src/components/Contact.jsx` — adresse réelle, téléphone, email, iframe Google Maps
- `src/components/Footer.jsx` — liens réseaux sociaux réels
- `index.html` — balise `<meta name="description">`, favicon

---

## Structure du projet

```
├── docker-compose.yml
├── index.html
├── vite.config.js
├── tailwind.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Institut.jsx
        ├── Tarifs.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
