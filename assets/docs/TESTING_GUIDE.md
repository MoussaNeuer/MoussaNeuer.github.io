# 🧪 Tests SEO & Performance - Guide Pratique

## 🔍 Tests SEO en Ligne

### 1. Vérifier l'Indexation Google
```bash
# Dans Google Search
site:moussa-lo.com

# Doit afficher toutes les pages indexées
# Résultat attendu : Au moins 5+ pages
```

**Résultat OK** : ✅ Pages indexées
**Résultat NOK** : ❌ 0 pages (consulter Deployment Checklist)

### 2. Vérifier le Mobile-Friendly
Allez sur : [https://search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

```
Entrez : https://moussa-lo.com
Résultat OK : "Page is mobile friendly" ✅
```

### 3. Vérifier les Meta Tags
Allez sur : [https://www.headseoanalyzer.com/](https://www.headseoanalyzer.com/)

```
Entrez : https://moussa-lo.com
Vérifier :
✅ Title (< 60 caractères)
✅ Description (150-160 caractères)
✅ H1 unique
✅ Keywords
```

### 4. Vérifier les Backlinks
Outils gratuits :
- [ahrefs.com/backlink-checker](https://ahrefs.com/backlink-checker)
- [moz.com/link-explorer](https://moz.com/link-explorer)
- [similarweb.com](https://www.similarweb.com/)

```
Entrez : moussa-lo.com
Cibles semaine 1 : 0-5 backlinks
Cibles mois 3 : 10+ backlinks
```

### 5. Vérifier le Contenu Dupliqué
Allez sur : [copy-check.com](https://copy-check.com/)

```
Coller votre texte ou URL
Résultat OK : < 5% dupliqué
```

## ⚡ Tests Performance Locale

### Sur Windows (DevTools)

#### 1. Ouvrir les DevTools
```
F12 → Onglet Performance
ou
Clique droit → Inspecter → Performance tab
```

#### 2. Enregistrer Performance
```
1. Cliquez sur le cercle rouge (Record)
2. Refresher la page
3. Cliquez sur le carré (Stop)
```

**Résultats à Vérifier**:
- LCP (Largest Contentful Paint) : **< 2.5s** ✅
- FID (First Input Delay) : **< 100ms** ✅
- CLS (Cumulative Layout Shift) : **< 0.1** ✅

#### 3. Onglet Network
```
Cliquez sur Onglet "Network"
Refresher la page
Vérifier :
- Nombre de requêtes : < 50 ✅
- Taille totale : < 5MB ✅
- Temps de chargement : < 3s ✅
```

**Goulots d'étranglement** :
- Images trop grandes
- CSS non minifiée
- JS non minifiée
- Trop de requests

#### 4. Onglet Lighthouse
```
DevTools → Onglet "Lighthouse"
Cliquer "Generate report"
```

**Résultats OK** :
- Performance : 90+ 🟢
- Accessibility : 90+ 🟢
- Best Practices : 90+ 🟢
- SEO : 90+ 🟢

## 📊 Tests SEO En Ligne Avancés

### Google PageSpeed Insights
**URL** : [https://pagespeed.web.dev](https://pagespeed.web.dev)

```
1. Entrez : https://moussa-lo.com
2. Attendez l'analyse (30-60 secondes)
3. Vérifiez scores :
   - Mobile : 90+ 
   - Desktop : 90+
```

**Problèmes Communs** :
- Images non optimisées
- CSS render-blocking
- JavaScript bloquant
- Lazy loading manquant

### Semrush Site Audit (Gratuit - limité)
**URL** : [https://www.semrush.com/](https://www.semrush.com/)

```
1. Créer compte gratuit
2. Ajouter site : moussa-lo.com
3. Lancer "Site Audit"
4. Vérifier :
   - Erreurs 4xx/5xx
   - Pages non indexables
   - Problèmes de redirects
```

### Ahrefs Backlink Checker
**URL** : [https://ahrefs.com/backlink-checker](https://ahrefs.com/backlink-checker)

```
Entrez : moussa-lo.com
Résultats :
- Domain Rating (DR)
- Backlinks trovés
- Domaines référents
- Top pages
```

## 🔗 Tests de Liens

### Vérifier les Liens Brisés
**URL** : [https://www.brokenlinkcheck.com](https://www.brokenlinkcheck.com)

```
Entrez : https://moussa-lo.com
Résultat OK : 0 liens brisés ✅
```

### Vérifier les Redirects
**URL** : [https://httpstatus.io/](https://httpstatus.io/)

```
Entrez chaque URL :
- https://moussa-lo.com
- https://moussa-lo.com/about
- https://moussa-lo.com/contact

Résultat OK : Code 200 ✅
Résultat Alerte : Code 301/302 (redirection)
Résultat Erreur : Code 404/500 ❌
```

## 📱 Tests Responsiveness

### Tester sur Vrais Appareils
**Sur Mobile** :
```
1. Ouvrir https://moussa-lo.com
2. Vérifier :
   - Menu responsive ✅
   - Images lisibles ✅
   - Texte lisible ✅
   - Boutons cliquables ✅
   - Pas de scroll horizontal ✅
```

**Sur Tablette** :
```
Même vérification que mobile
Vérifier layout optimize pour 768px+
```

### DevTools Device Mode
```
F12 → Ctrl+Shift+M (ou Cmd+Shift+M sur Mac)
Ou : F12 → Toggle device toolbar

Tester résolutions :
- iPhone SE (375x667)
- iPhone 12 (390x844)
- iPad (768x1024)
- Pixel 5 (393x851)
- Desktop (1920x1080)
```

## ✉️ Tests du Formulaire

### Tester le Contact Email
1. Allez à [http://localhost/portfolio/#contact](http://localhost/portfolio/#contact)
2. Remplissez le formulaire :
   ```
   Nom: Test User
   Email: test@example.com
   Sujet: Test Portfolio
   Message: Ceci est un message test
   ```
3. Cliquez "Envoyer le message"

**Résultat OK** :
- ✅ Notification "Message envoyé"
- ✅ Email reçu dans boîte
- ✅ Formulaire reset

**Résultat NOK** :
- ❌ Erreur notification
- ❌ Pas d'email reçu
- Consulter [`EMAILJS_SETUP.md`](../assets/docs/EMAILJS_SETUP.md)

## 🎨 Tests de Design

### Dark Mode
1. Cliquez l'icône Lune (haut droit)
2. Vérifiez :
   - ✅ Tous les textes lisibles
   - ✅ Contraste acceptable
   - ✅ Images visibles
   - ✅ Couleurs adaptées

### Animations
1. Scrollez la page
2. Vérifiez :
   - ✅ Typing animation (titre)
   - ✅ Fade animations (sections)
   - ✅ Hover effects (boutons)
   - ✅ Smooth scroll

### Couleurs & Contraste
**Vérifier avec** : [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)

```
Couleurs du portfolio :
- Fond blanc / Texte noir : PASS ✅
- Fond noir / Texte blanc : PASS ✅
- Boutons bleus : PASS ✅
```

## 📋 Checklist Tests À Faire

### Avant Déploiement ✅
- [ ] Lighthouse score 90+ (Desktop & Mobile)
- [ ] PageSpeed Insights 90+ (Desktop & Mobile)
- [ ] Mobile friendly : PASS
- [ ] 0 liens brisés
- [ ] Dark mode fonctionnel
- [ ] Formulaire contact fonctionne
- [ ] Pas d'erreurs console (F12)
- [ ] Pas de warnings DevTools

### Après Déploiement (J+1) ✅
- [ ] Site accessible en HTTPS
- [ ] Indexation Google (site:...)
- [ ] Sitemap.xml soumis GSC
- [ ] Analytics fonctionnel
- [ ] Emails contact reçus
- [ ] Performance stable

### Après 1 Semaine ✅
- [ ] Pages commencent indexer
- [ ] Quelques pages en résultats
- [ ] Traffic visible dans Analytics
- [ ] Au moins 1 backlink généré
- [ ] Pas de 404 errors

## 🆘 Dépannage

### Lighthouse Score Bas
```
Problèmes courants :
1. Images pas optimisées
   → Utilisez TinyPNG ou Squoosh

2. CSS/JS pas minifiés
   → Utilisez minifiers online

3. Lazy loading manquant
   → Code déjà implémenté ✅

4. Fonts bloquantes
   → Font display: swap ✅ (déjà fait)

5. Third-party scripts
   → Réduire ou async charger
```

### Pages Non Indexées
```
1. Vérifier sitemap.xml valide
   → Outils : XML Sitemaps

2. Vérifier robots.txt
   → Ne doit pas bloquer /

3. Vérifier HTTPS & certificat
   → Doit être valide

4. Demander indexation GSC
   → URL Inspection → Request

5. Attendre 2-4 semaines
```

### Performance Lente
```
1. Vérifier images optimisées
2. Vérifier compression GZIP (.htaccess)
3. Vérifier cache navigateur
4. Vérifier lazy loading actif
5. Vérifier CDN utilisé
```

---

**Ressources** :
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [Screaming Frog (gratuit)](https://www.screamingfrog.co.uk/)

**Besoin d'aide** → Consultez [`SEO_PERFORMANCE.md`](SEO_PERFORMANCE.md) 🚀
