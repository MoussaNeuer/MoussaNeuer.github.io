# Audit de la V1 et état de la refonte

- **Date de l'audit** : 28 octobre 2026
- **Périmètre** : `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/docs/`, `assets/images/`, `robots.txt`, `sitemap.xml`, `.htaccess`, documentation.
- **Branche de sauvegarde** : `backup-v1` (commit `ba5b0a1`)
- **Branche de travail** : `portfolio-v2`
- **Publication** : effectuée le 28 octobre 2026 sur `main` (commit `799eead`), site en ligne sur <https://moussaneuer.github.io/>.

## 1. Méthode

1. Lecture complète des fichiers de la V1.
2. Inventaire des liens internes, externes, images, documents et fichiers de configuration.
3. Vérification réseau des URLs externes (HTTP 200/404/999) et des dépôts GitHub via l'API.
4. Audit des six projets locaux dans `C:\wamp64\www` (fichiers, fonctionnalités, liens réels).
5. Comparaison entre le contenu affiché, le CV et les preuves disponibles.
6. Tests de la V2 dans le navigateur intégré : HTML, CSS, JavaScript, responsive, clavier, thème, filtres, formulaire, console et Lighthouse.

## 2. Constats prioritaires

### P0 — À corriger avant toute publication

| # | Constat dans la V1 | Risque | Correction appliquée |
|---|---|---|---|
| P0-1 | Statistiques non prouvées : « 3+ ans », « 20 projets », « 15 clients ». | Information inventée, perte de crédibilité. | Supprimées. Remplacées par des faits vérifiables (localisation, focus, projets réels). |
| P0-2 | Projets fictifs et liens `example.com`, faux dépôts, fausses démos. | Liens morts et promesses fausses. | Six projets réels uniquement, avec statut explicite et liens vérifiés. |
| P0-3 | Formulaire EmailJS présenté comme fonctionnel sans envoi vérifié. | Le visiteur croit avoir envoyé un message ; il ne se passe rien. | Remplacé par un composeur `mailto:` explicite, avec repli sans JavaScript. |
| P0-4 | URL canonique, Open Graph et sitemap pointant vers `moussa-lo.com`, domaine non déployé. | Indexation et partages vers une mauvaise adresse. | URL alignée sur `https://moussaneuer.github.io/` partout. |
| P0-5 | Liens de projets non valides, dont `https://github.com/MoussaNeuer/SeneCard` (404 constaté le 28/10/2026) et un lien Dribbble 404. | Navigation cassée. | SeneCard affiche « Dépôt non public » ; Dribbble retiré. |
| P0-6 | CV téléchargeable contenant l'ancienne adresse `moussaneuer06@gmail.com`, une mention « junior/étudiant » et des projets non retenus. | Incohérence avec le site et exposition d'un document obsolète. | CV retiré du site public ; remplacé par « CV à jour sur demande ». |
| P0-7 | Jauges de compétences en pourcentages non mesurables. | Fausse précision. | Remplacées par des listes d'outils réellement utilisés. |
| P0-8 | Anciennes coordonnées et positionnement incohérents entre README, CV et page. | Confusion pour les recruteurs et clients. | Une seule adresse publique proposée : `ml.moussalo1@gmail.com` (à confirmer). |

### P1 — Important

| # | Constat | Correction |
|---|---|---|
| P1-1 | Dépendances externes : EmailJS, Font Awesome, Google Fonts, CDN. | Supprimées. Le site ne charge plus aucune ressource tierce. |
| P1-2 | `robots.txt` avec `Crawl-delay`, règles inutiles et ancien domaine ; `sitemap.xml` avec fragments (`#projets`, etc.). | Réécrits pour l'URL réelle, sans fragment ni règle obsolète. |
| P1-3 | Absence de lien d'évitement, focus peu visible, menu mobile sans état accessible. | Lien d'évitement, `:focus-visible`, `aria-expanded`, fermeture par Échap, clic extérieur et retour au desktop. |
| P1-4 | Thème sombre dépendant de `localStorage` sans protection contre les erreurs. | Lecture/écriture dans `try/catch`, respect du thème système si aucune préférence, script anti-flash dans le `<head>`. |
| P1-5 | Absence de `prefers-reduced-motion`, de styles d'impression et de dimensions d'images explicites. | Ajoutés, avec `srcset`, `width`/`height` et `loading`/`fetchpriority` maîtrisés. |
| P1-6 | Images lourdes et inutilisées (`about.jpg` 534 Ko, doublon JPEG). | Supprimées ; portrait WebP en deux tailles et visuels générés. |
| P1-7 | Documentation obsolète (EmailJS, stats, structure, déploiement). | README réécrit ; anciens documents archivés dans `backup-v1` puis retirés de la V2. |
| P1-8 | `.htaccess` avec encodage abîmé, redirection HTTPS inadaptée à GitHub Pages et en-têtes obsolètes. | Réécrit, documenté comme optionnel pour Apache uniquement. |

### P2 — Améliorations

| # | Constat | Correction |
|---|---|---|
| P2-1 | Titre, description et structure éditoriale peu différenciés. | Title/description uniques, hiérarchie de titres revue, sections numérotées. |
| P2-2 | Données structurées incomplètes ou incohérentes. | JSON-LD `ProfilePage`/`Person` limité aux données confirmées. |
| P2-3 | Pas de favicon moderne ni d'image de partage. | Favicon SVG + PNG, icône Apple et image OG 1200×630 générées. |
| P2-4 | Pas de filtres accessibles. | Filtres `aria-pressed`, compteur et annonce `aria-live`. |
| P2-5 | Aucun retour visuel lors de la copie de l'e-mail. | Bouton « Copier » avec statut lisible et repli manuel. |
| P2-6 | Textes d'état des projets ambigus. | Statuts « Livré », « En cours », « Prototype » ; aucun « concept » présenté comme produit fini. |

## 3. Vérification des liens externes

Contrôle effectué le 28 octobre 2026 avec un client HTTP et l'API GitHub.

| URL | Résultat | Décision |
|---|---|---|
| `https://moussaneuer.github.io/` | 200 | URL canonique retenue. |
| `https://github.com/MoussaNeuer/jef_tech` | 200, dépôt public | Conservé. |
| `https://github.com/MoussaNeuer/SeneCard` | **404** (API GitHub : 404) | **Lien retiré** ; mention « Dépôt non public ». |
| `https://moussaneuer.github.io/md-store/` | 200 | Conservé. |
| `https://github.com/MoussaNeuer/md-store` | 200 | Conservé. |
| `https://moussaneuer.github.io/MoussaBusiness/` | 200 | Conservé. |
| `https://github.com/MoussaNeuer/MoussaBusiness` | 200 | Conservé. |
| `https://wa.me/221768461853` | 200 (redirection WhatsApp) | Conservé. |
| `https://www.linkedin.com/in/moussa-neuer-lo-b8b0b93a8` | 999 (anti-bot LinkedIn) | Conservé ; vérification manuelle recommandée. |
| `https://github.com/MoussaNeuer` | 200 | Conservé. |
| `https://x.com/neuerlo` | 200 | Conservé. |

## 4. Vérification des assets

| Fichier | État |
|---|---|
| `assets/images/moussa.webp` (722×1080) | Utilisé en `srcset`. |
| `assets/images/moussa-480.webp` (480×718) | Utilisé comme source principale. |
| `assets/images/og-cover.png` (1200×630) | Utilisé pour Open Graph et Twitter. |
| `assets/images/favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Utilisés. |
| `about.jpg`, `moussa.jpeg`, `icon-512.png` | Retirés : non référencés ou redondants. |
| Ancien CV PDF | Retiré de la V2 ; conservé dans `backup-v1` et la sauvegarde externe. |

## 5. Résultat de l'audit

La V1 ne pouvait pas être publiée en l'état : informations inventées, liens cassés, formulaire trompeur et SEO pointant vers un autre domaine. La V2 supprime ces risques, conserve uniquement des informations vérifiables et rend explicites les statuts, les limites et les points à confirmer.

Les éléments qui ne peuvent pas être vérifiés par le code (disponibilité réelle, CV à jour, rôle exact sur certains projets, comptes sociaux) sont listés dans [`VALEURS_A_CONFIRMER.md`](VALEURS_A_CONFIRMER.md).
