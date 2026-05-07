# CI/CD — Leslie Beauté Institut

## Architecture de déploiement

| Branche | Environnement | URL |
|---------|--------------|-----|
| `develop` | Recette (dev) | http://lbiproto.sc1coja1420.universe.wf |
| `main` | Production | *(domaine client à définir)* |

---

## Hébergement O2Switch

**Compte :** `sc1coja1420`

### Sous-domaine de recette
- **Dossier sur le serveur :** `/home/sc1coja1420/lbiproto.sc1coja1420.universe.wf/`
- **Racine du document (cPanel) :** `lbiproto.sc1coja1420.universe.wf/lbi/public_html`
- **Racine FTP du compte utilisé :** `/home/sc1coja1420/lbiproto.sc1coja1420.universe.wf/lbi/`
- **server-dir dans le workflow :** `/public_html/`

### Structure du sous-domaine sur le serveur

```
lbiproto.sc1coja1420.universe.wf/
├── index.html          ← ancienne page (ignorée par Apache)
└── lbi/
    ├── .ftpquota       ← racine FTP
    └── public_html/    ← racine document cPanel (ce qu'Apache sert)
        ├── index.html  ← notre React app
        └── assets/
```

> ⚠️ La racine FTP est dans `lbi/` et non à la racine du sous-domaine. La racine du document dans cPanel doit pointer vers `lbi/public_html` — ne pas modifier cette configuration.

---

## Secrets GitHub

Configurés dans **Settings → Secrets and variables → Actions → Repository secrets** :

| Secret | Description |
|--------|-------------|
| `FTP_SERVER` | Adresse du serveur FTP O2Switch |
| `FTP_USERNAME` | Identifiant FTP |
| `FTP_PASSWORD` | Mot de passe FTP |

---

## Workflow GitHub Actions

Fichier : `.github/workflows/deploy.yml`

### Déclencheur
- Push sur `develop` → déploiement en recette
- Push sur `main` → déploiement en production

### Étapes
1. **build** — `npm ci && npm run build` → génère `dist/` → uploadé en artifact
2. **deploy-dev** — télécharge l'artifact → dépose via FTP dans `/public_html/` (recette)
3. **deploy-prod** — télécharge l'artifact → dépose via FTP dans `/public_html/` (production)

---

## Workflow de travail quotidien

```bash
# 1. Travailler sur develop
git checkout develop

# 2. Modifier le code, tester en local
npm run dev

# 3. Committer et pousser
git add <fichiers>
git commit -m "Description de la modification"
git push origin develop
# → déploiement automatique sur lbiproto.sc1coja1420.universe.wf

# 4. Valider avec le client sur l'URL de recette

# 5. Quand le client valide → merger sur main
git checkout main
git merge develop
git push origin main
# → déploiement automatique en production
```

---

## Mise en production (domaine final)

Quand le domaine client est connu :

1. Configurer le DNS pour pointer vers O2Switch
2. Dans cPanel → Sous-domaines (ou domaine principal), vérifier la **Racine du document**
3. Confirmer le `server-dir` dans `deploy-prod` du workflow (a priori `/public_html/`)
4. Merger `develop` → `main` pour le premier déploiement prod

---

## Suivre les déploiements

Onglet **Actions** du dépôt GitHub :
`https://github.com/Gerardit64/projet-lbi/actions`
