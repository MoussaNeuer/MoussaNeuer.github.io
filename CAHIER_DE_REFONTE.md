# Cahier de refonte — Portfolio Moussa Lo V2.0

## 1. Objectif
Faire évoluer `https://moussaneuer.github.io/` vers un portfolio professionnel qui sert deux objectifs : attirer des clients pour des services numériques et soutenir les candidatures/opportunités professionnelles.

## 2. Contraintes
- Stack conservée : HTML5, CSS3 et JavaScript natif.
- Hébergement cible : GitHub Pages.
- Aucun build step, framework ou serveur PHP requis.
- Mobile-first, performant, accessible et maintenable.
- Aucun chiffre, témoignage, client, livraison ou résultat ne doit être inventé.
- Les projets dont le statut est incertain doivent être étiquetés « concept », « en cours » ou « état à confirmer » jusqu'à validation.
- Ne pas remplacer les fichiers de production avant d'avoir une copie de sauvegarde.

## 3. Direction visuelle
- Minimalisme noir/blanc/gris ; accent vert limité aux états ou détails ponctuels.
- Typographie lisible, espaces généreux, grille simple, cartes sobres.
- Animations discrètes et respect de `prefers-reduced-motion`.
- Aucun effet ne doit nuire à la lisibilité ou aux performances sur mobile.

## 4. Architecture proposée
- `index.html` : contenu et structure sémantique.
- `styles.css` : variables, thèmes, composants et responsive.
- `script.js` : thème, navigation mobile, filtres, contact.
- `assets/` : CV PDF, favicon, captures et images optimisées.
- `README.md` : installation, publication, checklist.
- `robots.txt`, `sitemap.xml` : à ajouter seulement après validation des URL finales.

## 5. Sections
1. En-tête avec navigation, logo texte et thème clair/sombre.
2. Hero : rôle, proposition de valeur, localisation si souhaitée, CTA vers projets et contact.
3. À propos : présentation factuelle et mention de Jëf Tech.
4. Projets avec filtres et fiches détaillées.
5. Compétences regroupées par domaines, sans pourcentages arbitraires.
6. Services : sites web, e-commerce, applications/SaaS, UI/UX.
7. Contact avec méthode d'envoi explicitement fonctionnelle.
8. Pied de page avec année dynamique et liens confirmés.

## 6. Projets sélectionnés
- Jëf Tech : initiative de services numériques ; préciser le rôle exact et l'état du site/entreprise.
- Les Jumeaux Fitness : projet de gestion de salle ; confirmer les fonctionnalités réellement implémentées.
- SeneCard : concept de carte de visite numérique ; ne pas présenter comme produit lancé sans preuve.
- Welli Store : projet e-commerce nutrition sportive ; confirmer état et URL.
- MD Store : projet e-commerce en équipe ; préciser les contributions personnelles et celles du coéquipier.
- Moussa Business : boutique mobile avec prise de commande WhatsApp ; vérifier le lien public et l'état réel.

Chaque projet doit préciser : objectif, rôle personnel, état, technologies réellement utilisées, fonctionnalités terminées, capture réelle et liens valides. Ne pas utiliser de faux liens ni de captures illustratives présentées comme produit réel.

## 7. Fonctionnalités
- Navigation responsive accessible au clavier.
- Mode clair/sombre mémorisé si le navigateur l'autorise.
- Filtres projets accessibles avec `aria-pressed`.
- Contact : mailto avec adresse confirmée, ou fournisseur de formulaire externe configuré et testé.
- SEO : title, description, canonical, Open Graph, favicon et données structurées exactes.
- CV PDF téléchargeable seulement s'il est à jour.
- Liens externes avec `target="_blank"` et `rel="noopener noreferrer"` quand nécessaire.

## 8. Nettoyage prioritaire
- Supprimer les liens `example-*`, faux dépôts, fausses démos et URLs de placeholder.
- Supprimer ou justifier les statistiques de type « années d'expérience », « clients » et « projets ».
- Éliminer les pourcentages de compétences non mesurables.
- Corriger les domaines incohérents dans canonical, Open Graph et JSON-LD.
- Ne pas afficher de formulaire comme fonctionnel si aucun envoi n'est configuré.
- Vérifier chaque lien, chaque ancre et chaque asset.

## 9. Critères d'acceptation
- Aucun lien interne cassé.
- Aucun lien de démonstration fictif.
- Tous les projets ont un statut honnête.
- Le site est utilisable à 320 px de large et sur desktop.
- Navigation clavier et focus visibles.
- Mode clair/sombre fonctionnel et lisible.
- Les filtres fonctionnent au clavier et au tactile.
- Le formulaire explique exactement ce qui se passe.
- Aucun secret/API privée dans le dépôt.
- Pas d'erreur JavaScript bloquante dans la console.
- Tests sur Safari iOS et Chrome desktop.
- Vérifier Lighthouse (performance, accessibilité, bonnes pratiques, SEO) avant publication ; ne pas annoncer de score avant mesure.

## 10. Publication sûre
1. Télécharger ou cloner le dépôt actuel.
2. Créer une branche `portfolio-v2` ou une copie locale.
3. Tester localement.
4. Vérifier les liens et les métadonnées.
5. Déployer sur une branche de prévisualisation si disponible.
6. Fusionner/publier seulement après validation manuelle.
7. Garder un commit permettant le retour arrière.

## 11. Points à valider avec Moussa avant mise en ligne
- Adresse e-mail publique.
- URL du CV PDF.
- Liens exacts des dépôts/démos des six projets.
- État réel de chaque projet.
- Rôle personnel sur MD Store et les projets collaboratifs.
- Comptes sociaux à afficher.
- Photo professionnelle ou absence de photo.
- Disponibilité réelle pour nouveaux projets.

## 12. Bilan de mise en œuvre — 28 octobre 2026

### Statut

La refonte est implémentée sur la branche `portfolio-v2`. **Aucune publication n'a été effectuée.** `main` reste sur la V1 et une branche `backup-v1` permet le retour arrière.

### Livrables produits

| Livrable | Fichier |
|---|---|
| Page complète | `index.html` |
| Design system et responsive | `styles.css` |
| Interactions | `script.js` |
| Audit initial et corrections | `AUDIT.md` |
| Architecture et décisions | `ARCHITECTURE.md` |
| Plan de tests | `PLAN_TESTS.md` |
| Rapport de validation | `VALIDATION.md` |
| Valeurs à confirmer | `VALEURS_A_CONFIRMER.md` |
| Documentation | `README.md` |
| SEO technique | `robots.txt`, `sitemap.xml`, métadonnées dans `index.html` |

### Décisions appliquées

1. **Contenu** : six projets réels, statuts explicites, aucune statistique inventée, aucun témoignage.
2. **Contact** : formulaire `mailto:` avec repli sans JavaScript ; aucune promesse d'envoi automatique.
3. **Email** : `ml.moussalo1@gmail.com` retenu provisoirement ; à confirmer.
4. **CV** : retiré du téléchargement public car obsolète ; remplacé par une demande de CV à jour.
5. **SeneCard** : dépôt public en 404 ; lien retiré, mention « Dépôt non public ».
6. **URL** : `https://moussaneuer.github.io/` retenue comme canonical après vérification HTTP 200.
7. **Assets** : image OG 1200×630, favicons, portrait WebP en deux tailles ; aucune capture non vérifiée.
8. **Dépendances** : EmailJS, Font Awesome, Google Fonts et CDN supprimés.
9. **Anciens fichiers** : retirés de la V2, conservés dans `backup-v1`.

### Critères d'acceptation

| Critère | État |
|---|---|
| Aucun lien interne cassé | ✅ 22 ancres internes vérifiées |
| Aucun lien de démonstration fictif | ✅ |
| Statuts de projets honnêtes | ✅ |
| Utilisable à 320 px et desktop | ✅ 320/375/768/1024/1440 testés |
| Navigation clavier et focus visibles | ✅ |
| Thème clair/sombre fonctionnel | ✅ |
| Filtres accessibles | ✅ |
| Formulaire explicite | ✅ |
| Aucun secret ou clé privée | ✅ |
| Aucune erreur JavaScript bloquante | ✅ |
| Lighthouse accessibilité / bonnes pratiques / SEO | ✅ 100 / 100 / 100 |
| Performance Lighthouse | ⬜ non mesurée |
| Safari iOS et Chrome desktop réels | ⬜ à faire |
| Validation manuelle de Moussa | ⬜ requise avant publication |

### Points restants avant publication

Voir [`VALEURS_A_CONFIRMER.md`](VALEURS_A_CONFIRMER.md) et [`VALIDATION.md`](VALIDATION.md). Les principaux : adresse e-mail définitive, CV à jour, rôles et déploiements des projets, disponibilité, comptes sociaux, tests sur appareils réels et mesure de performance après déploiement.

