# Plan de tests — Portfolio V2

- **Branches testées** : `portfolio-v2` en local, `main` en ligne (commit `799eead`)
- **Environnement** : navigateur Chromium intégré à l'application, serveur local `python -m http.server 8123`, site publié <https://moussaneuer.github.io/>, Windows.
- **Date** : 28 octobre 2026
- **Statuts** : ✅ exécuté et conforme · ⚠️ partiel ou limite d'environnement · ⬜ restant à faire

## 1. Validation technique

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T01 | Structure HTML | Balises correctement imbriquées, un seul `h1`, pas d'ID dupliqué | ✅ | Vérification par parseur Python : 0 erreur, 28 ID, 41 liens `<a>` dont 22 internes, 8 assets, 29 titres. |
| T02 | Syntaxe JavaScript | Aucune erreur de syntaxe | ✅ | `node --check script.js` : OK. |
| T03 | Équilibre CSS | Accolades équilibrées, aucune règle orpheline | ✅ | Vérification automatique : OK. |
| T04 | IDs utilisés par le JS | Chaque `getElementById` trouve sa cible | ✅ | Aucun avertissement. |
| T05 | Assets référencés | Toutes les images, feuilles et scripts existent | ✅ | 8 références locales valides. |
| T06 | Console navigateur | Aucune erreur ni avertissement au chargement | ✅ | 0 erreur, 0 avertissement. |
| T07 | Erreurs après interactions | Menu, thème, filtres, formulaire | ✅ | 0 erreur console. |

## 2. Responsive et mise en page

| ID | Largeur | Attendu | Statut | Note |
|---|---|---|---|---|
| T08 | 320 px | Aucun débordement horizontal, une colonne | ✅ | `scrollWidth = clientWidth` (304 px utiles, barre de défilement comprise). |
| T08b | 360 px | Aucun débordement, titre et faits ajustés | ✅ | 0 débordement ; `hero h1` à 3 rem, shell à 0,85 rem. |
| T09 | 375 px | Aucun débordement, menu mobile | ✅ | 0 débordement, menu visible. |
| T10 | 768 px | Deux colonnes de projets, hero une colonne | ✅ | 0 débordement. |
| T11 | 1024 px | Navigation desktop, grilles deux colonnes | ✅ | Menu masqué, nav statique, 0 débordement. |
| T12 | 1440 px | Mise en page desktop complète | ✅ | 0 débordement. |
| T13 | Sans JavaScript | Contenu et navigation utilisables | ✅ | Test par iframe `sandbox` sans scripts à 375 et 1024 px : 0 classe `.reveal`, 0 texte masqué, nav visible, 0 débordement. |
| T14 | Impression | Sections lisibles, contrôles masqués | ⚠️ | Règles `@media print` présentes, dont la neutralisation de `.reveal` ; rendu PDF non vérifié. |
| T14b | Ouverture directe `file://` | Site fonctionnel sans serveur | ⚠️ | Non testable dans le navigateur intégré, qui refuse les URLs `file://` ; à vérifier par double-clic. |

## 3. Navigation et clavier

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T15 | Ouvrir le menu mobile | `aria-expanded="true"`, libellé « Fermer », panneau visible | ✅ | Vérifié à 531 px et dans les iframes 320/375/768. |
| T16 | Fermer par Échap | Menu fermé, focus rendu au bouton | ✅ | Vérifié. |
| T17 | Fermer par clic extérieur | Menu fermé | ✅ | Code relu ; le clic sur un lien ferme aussi le menu. |
| T18 | Passage au desktop | Menu refermé | ✅ | Écoute `matchMedia("(min-width: 881px)")`. |
| T19 | Lien d'évitement | Apparaît au premier Tab, mène à `#main` | ✅ | Focus visible, cible correcte. |
| T20 | Focus visible | Contour visible sur liens et boutons | ✅ | Outline accent, offset 3,6 px. |
| T21 | Ancres avec header sticky | La section ne passe pas sous le header | ✅ | `#projets` s'arrête à 88 px du haut (header 72 px + marge). |
| T22 | Ordre de tabulation | Suit l'ordre visuel | ✅ | Vérifié sur les premiers éléments. |

## 4. Thème

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T23 | Basculer le thème | `data-theme` change, `aria-pressed` suit | ✅ | Sombre → clair vérifié. |
| T24 | Persistance après rechargement | Le choix est conservé | ✅ | `localStorage["theme"] = "light"` puis rechargement : thème clair. |
| T25 | Aucune préférence enregistrée | Suit le thème système | ✅ | Système sombre → site sombre. |
| T26 | `localStorage` indisponible | Le site reste utilisable, thème clair | ⚠️ | Protection `try/catch` relue ; non simulée dans le navigateur. |
| T27 | Absence de flash | Thème appliqué avant le premier rendu | ✅ | Script inline dans le `<head>`. |

## 5. Projets et filtres

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T28 | Filtre « Tous » | 6 projets | ✅ | Vérifié. |
| T29 | Filtre « E-commerce » | 3 projets | ✅ | Welli Store, MD Store, Moussa Business. |
| T30 | `aria-pressed` | Un seul filtre actif | ✅ | Vérifié. |
| T31 | Annonce du résultat | « 3 projets affichés. » | ✅ | Zone `role="status"`, `aria-live="polite"`. |
| T32 | Filtres au clavier | Activation par Entrée/Espace | ✅ | Boutons natifs. |
| T33 | Filtre « Concept » | SeneCard uniquement | ✅ | Compteur cohérent. |

## 6. Formulaire et contact

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T34 | Soumission vide | Message d'erreur, pas d'ouverture d'e-mail | ✅ | « Merci de compléter les champs signalés. » |
| T35 | Formulaire valide | Statut de succès, `mailto:` préparé | ✅ | Aucune navigation parasite, 0 erreur console. |
| T36 | Repli sans JavaScript | Formulaire masqué, lien e-mail direct visible | ✅ | `html:not(.js)` masque le formulaire et affiche `.contact-fallback` ; aucun formulaire sans effet. |
| T37 | Copie de l'e-mail | Adresse copiée, statut affiché | ⚠️ | Le presse-papiers est bloqué dans le navigateur de test ; le repli affiche correctement l'adresse. À revalider dans un navigateur réel. |
| T38 | Lien e-mail direct | Ouvre le client de messagerie | ⚠️ | Lien `mailto:` valide ; ouverture réelle dépend du client installé. |
| T39 | CV | Aucun téléchargement obsolète | ✅ | Remplacé par une demande de CV à jour. |

## 7. SEO, accessibilité, performance

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T40 | Lighthouse accessibilité | 100 | ✅ | 100. |
| T41 | Lighthouse bonnes pratiques | 100 | ✅ | 100. |
| T42 | Lighthouse SEO | 100 | ✅ | 100. |
| T43 | Score de performance Lighthouse | ≥ 90 | ⬜ | L'outil intégré ne produit pas de score de performance. À mesurer dans Chrome DevTools ou PageSpeed Insights. |
| T44 | Contraste et labels | Aucun échec axe/Lighthouse | ✅ | 0 échec après correction des noms accessibles. |
| T45 | `prefers-reduced-motion` | Animations désactivées | ⚠️ | Règle CSS présente ; émulation non disponible dans l'outil. À tester dans DevTools. |
| T46 | Métadonnées | Canonical, OG, Twitter et JSON-LD cohérents | ✅ | URL unique `https://moussaneuer.github.io/`. |
| T47 | Image de partage | 1200×630, accessible | ✅ | Fichier présent et référencé. |

## 8. Animations et navigation au défilement

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T54 | Animation d'entrée du hero | Eyebrow, titre, texte, actions, faits et portrait apparaissent en douceur | ✅ | `rise-soft`, `rise-title`, `portrait-in` ; `animation-fill-mode: both`, état final sans transformation. |
| T55 | Révélation au défilement | Les blocs sous la ligne de flottaison apparaissent une seule fois | ✅ | `IntersectionObserver` ; 25 cibles au chargement en haut de page ; `.is-visible` puis `unobserve()`. |
| T56 | Aucun contenu perdu | Rien ne reste masqué dans la fenêtre après un défilement rapide | ✅ | Vérifié après saut direct en bas de page puis remontée : `hiddenInView = 0` à chaque palier. |
| T57 | Repli sans JS / impression | Le contenu reste visible | ✅ | Sans JS : aucune classe `.reveal`, formulaire remplacé par un lien e-mail. Impression : `opacity: 1`, `animation: none`, `translate: none`. |
| T58 | Scrollspy | Le lien de la section visible porte `aria-current="location"` | ✅ | Séquence Profil → Projets → Compétences → Services → Contact ; Contact actif en bas de page. |
| T59 | Header au défilement | Ombre discrète après le défilement | ✅ | `.is-scrolled` au-delà de 8 px, ombre `0 12px 32px`, variante sombre. |
| T60 | Navigation fluide | Défilement animé, offset du header respecté, menu refermé | ✅ | `#projets` s'arrête à 88 px (header 72 px + marge) ; menu mobile fermé au clic. |
| T61 | Survol et révélation | Les deux animations ne se neutralisent pas | ✅ | Révélation en `translate`, survol en `transform` ; transition de survol conservée. |

## 9. Liens et déploiement

| ID | Test | Attendu | Statut | Note |
|---|---|---|---|---|
| T48 | Liens externes | Aucun 404 | ✅ | SeneCard 404 retiré ; LinkedIn 999 = anti-bot, à vérifier manuellement. |
| T49 | Liens internes | Toutes les ancres existent | ✅ | 22 ancres internes vérifiées. |
| T50 | GitHub Pages | Site identique à la version locale | ✅ | Publié sur `main` (commit `799eead`) ; V2 servie en HTTPS, canonical, 6 projets, 25 révélations, 0 erreur console. |
| T51 | Safari iOS | Mise en page, menu, formulaire | ⬜ | À tester sur appareil réel. |
| T52 | Android Chrome | Mise en page, menu, formulaire | ⬜ | À tester sur appareil réel. |
| T53 | Après publication | HTTPS, canonical, sitemap, OG, assets | ✅ | Page, `robots.txt`, `sitemap.xml`, `og-cover.png` (1200×630), favicons, portrait, CSS et JS : HTTP 200 ; aucun Mixed Content. |

## 10. Scénario manuel de recette après publication

1. Ouvrir le site en `file://` puis via un serveur local.
2. À 320 px, vérifier l'absence de défilement horizontal et la lisibilité.
3. Ouvrir le menu, parcourir les liens au clavier, fermer avec Échap.
4. Cliquer sur « Projets » depuis le menu : vérifier le défilement fluide, l'arrêt sous le header et le lien actif.
5. Faire défiler lentement la page : vérifier l'apparition des blocs, l'ombre du header et le changement de lien actif.
6. Basculer le thème, recharger, vérifier la persistance.
7. Filtrer chaque catégorie et vérifier les compteurs.
8. Envoyer un formulaire valide et vérifier le message prérempli dans un vrai client.
9. Cliquer sur chaque lien externe.
10. Vérifier le rendu avec `prefers-reduced-motion` activé, puis désactivé.
11. Lancer Lighthouse sur mobile et desktop, puis PageSpeed Insights sur le site publié (accessibilité, bonnes pratiques et SEO déjà à 100 ; performance encore à mesurer).
12. Vérifier l'image de partage sur LinkedIn et X après publication.
