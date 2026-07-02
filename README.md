# Portfolio — Théophile Sèdonou DOUNON

Site portfolio personnel, multi-pages, en HTML/CSS/JS pur (sans framework), bilingue FR/EN, thème Noir & Or, avec dark/light mode.

## 📁 Structure

```
theophile-portfolio/
├── index.html          → Accueil
├── a-propos.html        → À propos
├── competences.html     → Compétences
├── projets.html         → Projets
├── ressources.html       → Ressources
├── galerie.html          → Galerie (avec filtres + lightbox)
├── blog.html            → Blog
├── contact.html          → Contact (formulaire Web3Forms)
├── 404.html              → Page d'erreur
├── vercel.json           → Config déploiement Vercel
├── css/
│   └── style.css         → Tous les styles (thème Noir & Or)
├── js/
│   ├── components.js     → Header/footer injectés, dark mode, FR/EN, menu mobile
│   ├── contact.js        → Intégration Web3Forms
│   └── gallery.js        → Filtres + lightbox de la galerie
└── assets/
    └── photo-profil.jpg  → ⚠️ À AJOUTER (votre photo, voir ci-dessous)
```

## ✅ À FAIRE avant déploiement

### 1. Ajouter votre photo de profil
Placez votre photo dans `assets/photo-profil.jpg` (format carré recommandé, min. 400x400px).
Si le fichier est absent, un avatar par défaut s'affiche automatiquement (aucun bug).

### 2. Configurer le formulaire de contact (Web3Forms)
1. Allez sur https://web3forms.com et créez une clé gratuite avec votre email.
2. Ouvrez `js/contact.js`.
3. Remplacez `REMPLACEZ_PAR_VOTRE_CLE_WEB3FORMS` par votre clé d'accès.

Sans cette étape, le formulaire affichera un message d'erreur explicite (pas de plantage silencieux).

### 3. Vérifier vos liens (déjà configurés)
- **GitHub** : github.com/theophiledounon-dotcom
- **Email** : theophiledounon@gmail.com
- **WhatsApp** : +229 01 63 28 04 09
- **LinkedIn** et **Facebook** : déjà intégrés dans la page Contact et le footer

## 🚀 Déploiement sur Vercel

1. Créez un compte sur https://vercel.com (connectez-vous avec GitHub).
2. Poussez ce dossier vers un nouveau dépôt GitHub (`theophiledounon-dotcom/portfolio` par exemple).
3. Sur Vercel : **New Project** → importez le dépôt → laissez les réglages par défaut (site statique) → **Deploy**.
4. Le `vercel.json` fourni est volontairement minimal pour éviter les erreurs de configuration malformée.

## 🎨 Personnalisation rapide

- **Couleurs** : modifiez les variables `--primary`, `--accent`, `--secondary` en haut de `css/style.css`.
- **Textes bilingues** : chaque page contient un objet JS `P = { fr: {...}, en: {...} }` à la fin du fichier HTML — modifiez les clés correspondantes.
- **Projets / Ressources / Galerie** : dupliquez les blocs `<div class="card ...">` existants dans les fichiers HTML correspondants.

## 🌓 Fonctionnalités incluses

- Mode sombre / clair (mémorisé via `localStorage`, respecte les préférences système au premier chargement)
- Bilingue FR/EN (bouton de bascule dans le header, mémorisé via `localStorage`)
- Menu mobile responsive
- Animations au scroll (reveal)
- Galerie filtrable avec lightbox
- Formulaire de contact fonctionnel (Web3Forms, sans backend)
- Design 100% responsive (mobile, tablette, desktop)

## 📌 Notes techniques

- Aucune dépendance externe sauf Google Fonts (Inter, Poppins) — chargées en CDN.
- Aucun framework : HTML/CSS/JS natif, compatible avec n'importe quel hébergeur statique (Vercel, GitHub Pages, InfinityFree, etc.).
- Compatible navigateurs modernes (Chrome, Firefox, Edge, Safari).
