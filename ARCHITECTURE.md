# Architecture — Portfolio V2

## 1. Principe

Le site est une page statique autonome, sans framework, sans étape de build, sans dépendance npm et sans back-end. Il doit fonctionner :

- sur GitHub Pages ;
- en ouvrant directement `index.html` dans un navigateur ;
- depuis un serveur local (WAMP, XAMPP, `python -m http.server`).

Toute la logique tient dans trois fichiers à la racine : `index.html`, `styles.css`, `script.js`.

## 2. Arborescence

```text
portfolio/
├── index.html              # Structure, contenu, SEO, JSON-LD
├── styles.css              # Design system, thèmes, responsive, impression
├── script.js               # Thème, menu, filtres, formulaire, copie
├── assets/
│   └── images/
│       ├── moussa-480.webp     # Portrait, source principale
│       ├── moussa.webp         # Portrait haute résolution (srcset)
│       ├── og-cover.png        # Image de partage 1200×630
│       ├── favicon.svg         # Favicon vectoriel
│       ├── favicon-32.png      # Favicon PNG
│       └── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── .htaccess               # Optionnel : Apache uniquement
├── README.md
├── AUDIT.md
├── ARCHITECTURE.md
├── PLAN_TESTS.md
├── VALIDATION.md
├── VALEURS_A_CONFIRMER.md
└── CAHIER_DE_REFONTE.md    # Cahier initial + bilan de mise en œuvre
```

Les anciens fichiers `assets/css/style.css`, `assets/js/main.js`, les documents EmailJS/SEO et le CV obsolète ont été retirés de la V2. Ils restent disponibles dans la branche `backup-v1`.

## 3. Couches

### HTML (`index.html`)

- Un seul `<h1>`, des sections nommées par `aria-labelledby`.
- Navigation principale unique, réutilisée en mobile par disclosure.
- Contenu éditorial statique : aucun texte de projet n'est généré par JavaScript.
- Métadonnées SEO dans le `<head>` : title, description, canonical, Open Graph, Twitter, favicon, JSON-LD.
- Formulaire avec `action="mailto:…"`, `method="post"` et `enctype="text/plain"` pour rester compréhensible sans JavaScript.
- Aucune ressource tierce (police système, icônes SVG inline).

### CSS (`styles.css`)

- Variables CSS pour les couleurs, espacements, rayons, ombres et la largeur du shell.
- Deux thèmes : clair par défaut, sombre via `[data-theme="dark"]`.
- Approche mobile-first dans les intentions, avec des points de rupture en `max-width` :
  - `1024px` : ajustements de grilles ;
  - `880px` : menu mobile et passage en une colonne ;
  - `760px` : projets et services en une colonne ;
  - `620px` : approche, compétences et contact compactés ;
  - `420px` : très petits écrans ;
  - `360px` : ajustements extrêmes (shell, titre, colonnes de faits).
- Animations discrètes : entrée du hero, portrait, révélation au défilement, survol des cartes, ombre du header et lien de navigation actif.
- `prefers-reduced-motion` désactive les animations, les révélations et le défilement fluide.
- Styles d'impression dédiés, avec contenu révélé et contrôles masqués.
- Aucune police web : pas de requête réseau ni de Flash of Unstyled Text.

### JavaScript (`script.js`)

IIFE en `"use strict"`, sans dépendance. Six modules logiques :

1. **Stockage** : `localStorage` encapsulé dans `try/catch`.
2. **Thème** : bascule clair/sombre, `aria-pressed`, persistance, suivi du système si aucune préférence.
3. **Navigation mobile** : disclosure non modal, `aria-expanded`, fermeture par Échap, clic extérieur, clic sur un lien et passage au desktop.
4. **Filtres projets** : `hidden`, `aria-pressed`, compteur `aria-live`.
5. **Contact** : validation native, construction d'un `mailto:` prérempli, statut lisible ; copie de l'adresse avec repli manuel.
6. **Animations et défilement** : `IntersectionObserver` pour révéler uniquement les blocs sous la ligne de flottaison, scrollspy `aria-current="location"`, ombre du header via `.is-scrolled`.

Le JavaScript est progressif : sans lui, le contenu, les liens, le formulaire `mailto:` et la navigation restent utilisables. Les classes de révélation ne sont ajoutées que par JavaScript ; une page sans script n'a donc aucun contenu masqué.

## 4. Flux du formulaire

```text
Saisie utilisateur
      │
      ▼
Validation HTML native (required, type=email, minlength)
      │
      ├── invalide → message de statut + champs signalés
      │
      ▼
Construction d'un lien mailto: (sujet + corps encodés)
      │
      ▼
Ouverture du logiciel de messagerie de l'utilisateur
      │
      ▼
L'utilisateur relit et envoie lui-même
```

Aucune donnée n'est stockée, transmise ou mesurée par le site. Sans JavaScript, le formulaire utilise son `action="mailto:"` natif.

## 5. Flux du thème

```text
<head> : script inline
   │
   ├── localStorage accessible ? → lit "theme"
   ├── préférence enregistrée ? → l'applique
   ├── sinon → suit prefers-color-scheme
   └── erreur → thème clair
   │
   ▼
Premier rendu sans flash
   │
   ▼
script.js : bouton, aria-pressed, persistance, écoute du système
```

## 6. SEO

- URL canonique unique : `https://moussaneuer.github.io/`.
- Open Graph et Twitter alignés sur la même URL et la même image.
- `robots.txt` et `sitemap.xml` cohérents avec cette URL.
- JSON-LD limité aux données confirmées : nom, rôle, ville, e-mail, liens publics, technologies.
- Aucune donnée structurée inventée (pas d'entreprise, de note, d'avis ou de nombre de clients).
- Le sitemap ne contient qu'une URL : les fragments (`#projets`) ne sont pas des pages indexables.

## 7. Accessibilité

- Lien d'évitement vers `#main`.
- Focus visible global (`:focus-visible`).
- Cibles tactiles d'au moins 44 px pour les contrôles principaux.
- Navigation mobile avec `aria-expanded`, `aria-controls` et libellé qui change.
- Filtres `aria-pressed` + annonce du nombre de résultats.
- Formulaire : labels explicites, autocomplete, messages d'état `aria-live`.
- Contrastes vérifiés par Lighthouse (accessibilité 100).
- `prefers-reduced-motion` respecté.
- Contenu compréhensible sans JavaScript.

## 8. Décisions techniques

| Décision | Raison |
|---|---|
| Pas de framework | Contrainte du cahier ; page unique, contenu statique, maintenance simple. |
| Polices système | Performance, aucune requête tierce, rendu immédiat. |
| Icônes SVG inline | Pas de Font Awesome ni de CDN. |
| Formulaire `mailto:` | Aucun service à configurer, aucune fausse promesse d'envoi. |
| Visuels typographiques | Aucune capture non vérifiée présentée comme produit réel. |
| `hidden` pour les filtres | Simple, accessible, sans suppression du DOM. |
| `.htaccess` optionnel | GitHub Pages l'ignore ; utile seulement en Apache local. |

## 9. Points de vigilance pour la maintenance

- Ne pas changer l'URL canonique sans mettre à jour `index.html`, `robots.txt` et `sitemap.xml`.
- Ne pas ajouter de statistiques, témoignages ou clients sans preuve.
- Ne pas réintroduire de CDN ou de service tiers sans justification et sans mise à jour de la politique de confidentialité.
- Vérifier les liens des projets avant chaque publication : un dépôt peut devenir privé (cas SeneCard).
- Tester le formulaire dans un vrai client de messagerie après toute modification.
- Conserver la branche `backup-v1` tant que la V2 n'est pas publiée.
