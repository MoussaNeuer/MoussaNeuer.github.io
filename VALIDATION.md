# Rapport de validation — Portfolio V2

- **Date** : 28 octobre 2026
- **Branche** : `portfolio-v2`
- **Référence de livraison** : dernier commit de la branche (`git log -1`).
- **État** : validé pour relecture, **non publié**. `main` n'a pas été modifiée.

## 1. Tests réellement exécutés

### 1.1 Validation statique

| Contrôle | Commande / méthode | Résultat |
|---|---|---|
| Syntaxe JavaScript | `node --check script.js` | ✅ OK |
| Structure HTML | Parseur HTML Python : imbrication, IDs, ancres, assets | ✅ 0 erreur, 0 avertissement |
| Équilibre CSS | Comptage des accolades hors commentaires | ✅ OK |
| IDs recherchés par le JS | Comparaison `getElementById` / IDs du HTML | ✅ Tous présents |
| Assets locaux | Existence sur disque de chaque `src`/`href` local | ✅ 8/8 |
| Nombre de `h1` | Parseur | ✅ 1 |
| Liens internes | 22 ancres internes comparées aux IDs | ✅ Toutes valides |

### 1.2 Navigateur

Environnement : Chromium intégré, viewport de la fenêtre d'aperçu (531 px), serveur local `http://127.0.0.1:8123/`.

| Test | Résultat |
|---|---|
| Chargement de la page | ✅ Aucune erreur console, aucun avertissement |
| Thème initial | ✅ Suit le système (sombre dans l'environnement de test) |
| Bascule du thème | ✅ Sombre → clair, `aria-pressed="false"`, libellé mis à jour |
| Persistance du thème | ✅ `localStorage["theme"] = "light"` conservé après rechargement |
| Réinitialisation | ✅ Suppression de la clé → retour au thème système |
| Menu mobile | ✅ `aria-expanded="true"`, panneau visible, libellé « Fermer » |
| Fermeture par Échap | ✅ Menu fermé, focus rendu au bouton |
| Filtres projets | ✅ « E-commerce » → 3 projets, un seul `aria-pressed="true"` |
| Annonce filtre | ✅ « 3 projets affichés. » |
| Retour à « Tous » | ✅ 6 projets |
| Formulaire vide | ✅ Message d'erreur, pas de `mailto:` |
| Formulaire valide | ✅ Message de succès, aucun départ de page, 0 erreur console |
| Lien d'évitement | ✅ Premier Tab, focus visible, cible `#main` |
| Ancres et header sticky | ✅ `#projets` à 88 px du haut |
| Copie de l'e-mail | ⚠️ Presse-papiers bloqué dans l'outil ; le repli affiche l'adresse et le statut |
| Sans JavaScript | ✅ Navigation visible, boutons JS masqués, aucun débordement |
| Animations d'entrée du hero | ✅ `rise-soft`, `rise-title` et `portrait-in` appliquées, puis `transform: none` |
| Révélation au défilement | ✅ 25 cibles au chargement en haut de page ; `.is-visible` ajouté par `IntersectionObserver` |
| Contenu masqué par erreur | ✅ Aucun élément `.reveal` non révélé présent dans la fenêtre, même après saut direct en bas de page |
| Scrollspy | ✅ `#apropos`, `#projets`, `#competences`, `#services`, `#contact` activés dans l'ordre ; `#contact` actif en bas de page |
| Ombre du header | ✅ `.site-header.is-scrolled` ajouté au-delà de 8 px ; ombre calculée `0 12px 32px` |
| Navigation fluide | ✅ Défilement animé, `#projets` s'arrête à 88 px du haut, menu mobile refermé |
| Survol des cartes | ✅ `transform` de survol conservé malgré la révélation (`translate` séparé) |

### 1.3 Responsive

Test par iframes de largeur imposée, contenu réel chargé dans chacune.

| Largeur | Débordement horizontal | Colonnes projets | Menu |
|---|---|---|---|
| 320 px | 0 px | 1 | mobile |
| 360 px | 0 px | 1 | mobile |
| 375 px | 0 px | 1 | mobile |
| 768 px | 0 px | 2 | mobile |
| 1024 px | 0 px | 2 | desktop |
| 1440 px | 0 px | 2 | desktop |

### 1.4 Lighthouse

Audit de l'onglet sur `http://127.0.0.1:8123/` :

| Catégorie | Score |
|---|---|
| Accessibilité | **100** |
| Bonnes pratiques | **100** |
| SEO | **100** |

Le premier passage signalait un échec `label-content-name-mismatch` sur sept liens. Les `aria-label` ont été remplacés par du texte visible complété d'un libellé masqué. Le second passage ne remonte **aucun échec**.

Un passage supplémentaire a été effectué après l'ajout des animations, du scrollspy et de l'état du header : **100 / 100 / 100**, aucun échec.

> L'outil Lighthouse intégré ne fournit pas de score de performance. Aucun score de performance n'est donc annoncé.

### 1.5 Liens externes

| URL | Statut | Décision |
|---|---|---|
| `https://moussaneuer.github.io/` | 200 | Conservé |
| `https://github.com/MoussaNeuer/jef_tech` | 200 | Conservé |
| `https://github.com/MoussaNeuer/SeneCard` | **404** | Lien retiré, remplacé par « Dépôt non public » |
| `https://moussaneuer.github.io/md-store/` | 200 | Conservé |
| `https://github.com/MoussaNeuer/md-store` | 200 | Conservé |
| `https://moussaneuer.github.io/MoussaBusiness/` | 200 | Conservé |
| `https://github.com/MoussaNeuer/MoussaBusiness` | 200 | Conservé |
| `https://wa.me/221768461853` | 200 | Conservé |
| `https://www.linkedin.com/in/moussa-neuer-lo-b8b0b93a8` | 999 | Conservé, anti-bot LinkedIn ; à vérifier manuellement |
| `https://github.com/MoussaNeuer` | 200 | Conservé |
| `https://x.com/neuerlo` | 200 | Conservé |

## 2. Tests non exécutés ou partiels

| Test | Raison | À faire |
|---|---|---|
| Score de performance Lighthouse / Web Vitals | Non fourni par l'outil intégré | Chrome DevTools ou PageSpeed Insights après déploiement |
| `prefers-reduced-motion` en conditions réelles | Pas d'émulation disponible dans l'outil | DevTools → Rendering → Emulate CSS media feature |
| Animations sur appareil réel | Pas d'appareil disponible | Vérifier le rendu sur iPhone et Android, y compris le défilement lent |
| Copie dans le presse-papiers | Permission refusée dans le navigateur de test | Clic réel dans Chrome/Safari |
| Ouverture réelle du client e-mail | Dépend du système | Test avec Gmail/Outlook/Apple Mail |
| Safari iOS | Pas d'appareil disponible | iPhone réel ou Simulator |
| Android Chrome | Pas d'appareil disponible | Appareil réel |
| GitHub Pages | Aucun déploiement effectué | Fusion sur `main` puis vérification post-publication |
| Rendu imprimé | Non exporté en PDF | Aperçu avant impression |
| Ouverture directe en `file://` | Le navigateur intégré refuse les URLs `file://` | Ouvrir `index.html` par double-clic dans Chrome, Edge et Firefox |
| Lecteur d'écran | Non testé | NVDA/VoiceOver sur les parcours principaux |

## 3. Points de vigilance confirmés

1. **SeneCard** : le dépôt public renvoie 404 depuis le 28/10/2026. Le lien a été retiré du site. Si le dépôt redevient public, il faudra le réintégrer.
2. **LinkedIn** : le statut 999 est un blocage anti-bot, pas une preuve que le profil est indisponible. Vérification manuelle nécessaire.
3. **Adresse e-mail** : `ml.moussalo1@gmail.com` est celle du README, mais le CV contient encore `moussaneuer06@gmail.com`. Une seule adresse doit être confirmée.
4. **CV** : le PDF obsolète a été retiré de la V2. Il reste dans `backup-v1` et dans la sauvegarde externe.
5. **URL canonique** : `https://moussaneuer.github.io/` répond 200. Si un domaine personnalisé est utilisé plus tard, canonical, OG, robots et sitemap devront être mis à jour ensemble.

## 4. Verdict

La V2 est **prête pour relecture et tests manuels complémentaires**. Les animations, le scrollspy, l'état du header et la navigation fluide ont été vérifiés dans Chromium. Elle ne doit pas être publiée avant :

- confirmation de l'adresse e-mail et du CV ;
- validation des rôles et statuts de projets ;
- test sur au moins un vrai mobile et un vrai client de messagerie ;
- mesure de performance sur l'URL déployée ;
- validation explicite de Moussa.

Aucune publication n'a été effectuée.
