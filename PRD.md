# PRD : Landing Page - Leslie Beauté Institut

## 1. Objectif du Projet
Créer une landing page professionnelle, élégante et responsive pour un institut de beauté situé à Saint-Jean-de-Luz. L'application doit être optimisée pour un déploiement via Docker sur un serveur Dokploy.

## 2. Stack Technique
- **Framework :** Vite.js (React de préférence pour la maintenabilité).
- **Stylisation :** Tailwind CSS.
- **Icônes :** Lucide React ou Heroicons.
- **Serveur de Production :** Nginx (Alpine).
- **Conteneurisation :** Docker (Multi-stage build).

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
- **Dockerfile :** Créer un fichier `Dockerfile` fonctionnel.
- **Multi-stage build :** 1. Build de l'app Vite (Node.js).
    2. Serveur final Nginx sur le port 80.
- **Config Nginx :** Inclure un fichier `nginx.conf` pour gérer les routes statiques et le cache.