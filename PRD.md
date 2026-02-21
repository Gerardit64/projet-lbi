# PRD : Landing Page - Leslie Beauté Institut

## 1. Objectif du Projet
Créer une landing page professionnelle, élégante et responsive pour un institut de beauté situé à Saint-Jean-de-Luz. L'application est déployée via Docker Compose sur un serveur Dokploy.

## 2. Stack Technique
- **Framework :** Vite.js (React de préférence pour la maintenabilité).
- **Stylisation :** Tailwind CSS.
- **Icônes :** Lucide React ou Heroicons.
- **Serveur de Production :** Nginx (Alpine).
- **Conteneurisation :** Docker Compose (multi-stage build inline).

## 3. Structure de la Page (Single Page)
- **Navigation :** Logo, liens fluides (Soins, Tarifs, Institut, Contact).
- **Section Hero :** Image haute qualité, titre élégant, bouton "Prendre Rendez-vous".
- **Nos Soins :** Section en grille (Cards) présentant :
    - Soins du visage
    - Massages & Corps
    - Épilations
- **L'Institut :** Texte de présentation et ambiance.
- **Contact & Accès :**
    - Horaires d'ouverture.
    - Adresse à Saint-Jean-de-Luz.
    - Intégration d'un lien Google Maps.
- **Footer :** Mentions légales et réseaux sociaux.

## 4. Design & Identité Visuelle
- **Ambiance :** Minimaliste, luxe accessible, zen.
- **Palette de couleurs :** - Primaire : #FAF6F1 (Crème/Beige clair)
    - Accent : #D4A574 (Or brossé / Rose gold)
    - Texte : #1A1A1A (Noir doux)
- **Typographie :**
    - Titres : Serif (ex: Playfair Display).
    - Corps de texte : Sans-serif (ex: Jost ou Inter).

## 5. Spécifications de Déploiement (Dokploy-Ready)
- **Orchestration :** `docker-compose.yml` auto-suffisant à la racine du dépôt.
- **Multi-stage build inline :** 1. Build de l'app Vite (Node.js Alpine).
    2. Serveur final Nginx Alpine sur le port 8095.
- **Config Nginx inline :** Gestion des routes SPA, compression gzip, cache assets, headers de sécurité — embarquée via `configs.content` dans le `docker-compose.yml`.
- **Déploiement Dokploy :** Mode **Docker Compose**, aucun fichier `Dockerfile` ou `nginx.conf` séparé.