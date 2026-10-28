# Portfolio — Moussa Lo (V2)

Refonte statique du portfolio de **Moussa Lo**, développeur web et designer UI/UX à Dakar.

- **URL canonique cible** : <https://moussaneuer.github.io/>
- **Branche de travail** : `portfolio-v2`
- **Branche de sauvegarde** : `backup-v1`
- **État** : refonte terminée, **non publiée**. `main` n'a pas été modifiée.

> La version actuellement en ligne est encore la V1.

## Objectif

Présenter de façon honnête et lisible :

- le profil et la méthode de travail ;
- six projets réels, avec leur statut réel ;
- les compétences réellement utilisées ;
- les services proposés ;
- un moyen de contact qui ne prétend pas envoyer un e-mail à la place du visiteur.

Aucun chiffre, client, témoignage ou résultat n'est inventé. Les informations non vérifiables sont listées dans [`VALEURS_A_CONFIRMER.md`](VALEURS_A_CONFIRMER.md).

## Stack

- HTML5 sémantique
- CSS3 (variables, Grid, Flexbox, thèmes)
- JavaScript natif (IIFE, `"use strict"`, aucune dépendance)
- Aucun framework, aucun npm, aucun build, aucun back-end
- Compatible GitHub Pages et ouverture directe de `index.html`

## Structure

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── images/
│       ├── moussa-480.webp
│       ├── moussa.webp
│       ├── og-cover.png
│       ├── favicon.svg
│       ├── favicon-32.png
│       └── apple-touch-icon.png
├── robots.txt
├── sitemap.xml
├── .htaccess               # Optionnel, Apache uniquement
├── README.md
├── AUDIT.md
├── ARCHITECTURE.md
├── PLAN_TESTS.md
├── VALIDATION.md
├── VALEURS_A_CONFIRMER.md
└── CAHIER_DE_REFONTE.md
```

## Lancer le site en local

### Option 1 — serveur local (recommandé)

```powershell
cd C:\wamp64\www\portfolio
python -m http.server 8123 --bind 127.0.0.1
```

Puis ouvrir <http://127.0.0.1:8123/>.

Avec WAMP, le dossier est aussi accessible via `http://localhost/portfolio/`.

### Option 2 — ouverture directe

Ouvrir `index.html` dans le navigateur. Le site fonctionne sans serveur ; le lien `mailto:` et les ancres restent opérationnels.

## Fonctionnalités

| Fonction | Détail |
|---|---|
| Thème clair/sombre | Bouton accessible, `aria-pressed`, persistance `localStorage` protégée, suivi du thème système. |
| Navigation mobile | Disclosure non modal, `aria-expanded`, fermeture par Échap, clic extérieur ou clic sur un lien. |
| Navigation au défilement | Défilement fluide, lien actif `aria-current="location"`, ombre du header au scroll. |
| Animations | Entrée du hero, révélation des blocs par `IntersectionObserver`, survol des cartes ; désactivées avec `prefers-reduced-motion`. |
| Filtres projets | Boutons `aria-pressed`, compteur, annonce `aria-live`. |
| Formulaire | Prépare un e-mail via `mailto:` ; aucun envoi automatique, aucune donnée stockée. Sans JavaScript, un lien e-mail direct remplace le formulaire. |
| Copie de l'e-mail | Bouton avec retour visuel et repli manuel si le presse-papiers est indisponible. |
| Accessibilité | Lien d'évitement, focus visible, labels, contrastes, `prefers-reduced-motion`. |
| SEO | Title/description uniques, canonical, Open Graph, Twitter, JSON-LD, robots et sitemap. |
| Impression | Styles dédiés, contrôles masqués. |

## Modifier le contenu

### Projets

Les projets sont écrits directement dans `index.html`, dans `#projects-grid`. Pour en ajouter un :

1. dupliquer un `<article class="project">` ;
2. renseigner `data-category` (`services`, `commerce`, `gestion` ou `concept`) ;
3. mettre à jour le statut, le titre, la description, les technologies et les liens ;
4. ajuster les compteurs des boutons de filtre et le nombre annoncé dans l'introduction.

Statuts disponibles : `status--live` (Livré), `status--progress` (En cours), `status--prototype` (Prototype).

### E-mail et réseaux

L'adresse apparaît dans :

- les liens `mailto:` de `index.html` ;
- le JSON-LD ;
- la constante `EMAIL` de `script.js` ;
- le bouton « Copier ».

Toute modification doit être faite aux quatre endroits.

### URL canonique

Si le domaine change, mettre à jour **ensemble** :

- `<link rel="canonical">` ;
- `og:url`, `og:image`, `twitter:image` ;
- le JSON-LD ;
- `robots.txt` ;
- `sitemap.xml`.

## Tests

- Plan complet : [`PLAN_TESTS.md`](PLAN_TESTS.md)
- Résultats et limites : [`VALIDATION.md`](VALIDATION.md)
- Audit initial et corrections : [`AUDIT.md`](AUDIT.md)
- Architecture et décisions : [`ARCHITECTURE.md`](ARCHITECTURE.md)

Derniers résultats connus :

| Contrôle | Résultat |
|---|---|
| `node --check script.js` | OK |
| Structure HTML / ancres / assets | 0 erreur |
| Console navigateur | 0 erreur |
| 320 / 375 / 768 / 1024 / 1440 px | Aucun débordement horizontal |
| Lighthouse accessibilité | 100 |
| Lighthouse bonnes pratiques | 100 |
| Lighthouse SEO | 100 |
| Performance Lighthouse | Non mesurée |

## Publication sur GitHub Pages

> **Ne pas publier avant validation.** La branche `main` est intacte et correspond à la V1.

Procédure prévue, après validation :

```powershell
git switch main
git merge --no-ff portfolio-v2
git push origin main
```

GitHub Pages publiera la branche `main` du dépôt `MoussaNeuer/MoussaNeuer.github.io` (nom à confirmer). Vérifier ensuite :

1. l'URL réelle et la redirection HTTPS ;
2. le canonical, l'Open Graph et le JSON-LD ;
3. `robots.txt` et `sitemap.xml` ;
4. l'ouverture du formulaire dans un vrai client e-mail ;
5. Lighthouse et PageSpeed Insights sur l'URL publiée.

## Sauvegarde et retour arrière

- Branche `backup-v1` : snapshot complet de la V1.
- Sauvegarde externe : `C:\Users\MOUSSA~1\AppData\Local\Temp\portfolio-v1-backup-20261028-1606` (à vérifier avant suppression).
- Retour arrière : `git switch backup-v1`.

Les anciens fichiers `assets/css/style.css`, `assets/js/main.js`, les documents EmailJS/SEO et le CV obsolète ont été retirés de la V2. Ils restent dans `backup-v1`.

## Confidentialité

- Aucun analytics, aucun cookie, aucun script tiers.
- Aucune donnée de formulaire n'est stockée ni transmise.
- Le bouton de copie utilise uniquement le presse-papiers local du navigateur.
- Les liens externes s'ouvrent dans un nouvel onglet avec `rel="noopener noreferrer"`.

## Limites connues

- Le formulaire dépend du client de messagerie du visiteur ; il ne remplace pas un service d'envoi.
- Aucune capture réelle de projet n'est affichée : les visuels sont typographiques et l'indiquent.
- Le CV public est retiré tant qu'une version à jour n'est pas fournie.
- Le dépôt SeneCard n'est plus public (404 au 28/10/2026).
- Les tests Safari iOS, Android et lecteur d'écran restent à faire.

## Contact

- E-mail : `ml.moussalo1@gmail.com` *(à confirmer)*
- WhatsApp : `+221 76 846 18 53`
- LinkedIn : [moussa-neuer-lo](https://www.linkedin.com/in/moussa-neuer-lo-b8b0b93a8)
- GitHub : [MoussaNeuer](https://github.com/MoussaNeuer)

---

**Dernière mise à jour** : 28 octobre 2026  
**Version** : 2.0 — branche `portfolio-v2`, non publiée.
