# ✅ Checklist Déploiement - SEO & Performance

## 🚀 Phase 1 : Préparation Locale

### Images & Assets
- [ ] Images compressées (< 200KB chacune)
- [ ] Format WebP avec fallback PNG/JPG
- [ ] Alt text descriptifs sur toutes les images
- [ ] Favicon 16x16, 32x32, 64x64, 192x192, 512x512

### Contenu
- [ ] Title < 60 caractères
- [ ] Meta description 150-160 caractères
- [ ] Aucun lien brisé (vérifier avec [broken-link-checker.com](https://www.brokenlinkcheck.com))
- [ ] Pas de contenu dupliqué
- [ ] Formulation naturelle & SEO-friendly

### Technique
- [ ] Lighthouse score Desktop ≥ 90
- [ ] Lighthouse score Mobile ≥ 85
- [ ] Pas d'erreurs Console (F12)
- [ ] Pas de warnings dans DevTools
- [ ] Mobile responsive (F12 → Toggle Device Toolbar)

### Code
- [ ] CSS minifié & optimisé
- [ ] JavaScript minifié
- [ ] HTML valide (W3C Validator)
- [ ] JSON-LD structuré valide
- [ ] Aucun code console.log() en production

## 🌐 Phase 2 : Déploiement

### Avant de Go Live
- [ ] HTTPS activé obligatoirement
- [ ] Certificat SSL valide
- [ ] .htaccess configuré (compression, cache)
- [ ] robots.txt en place
- [ ] sitemap.xml généré
- [ ] Redirection HTTP → HTTPS

### Déploiement
- [ ] Fichiers uploadés (FTP/Git/SSH)
- [ ] Permissions fichiers correctes (644 fichiers, 755 dossiers)
- [ ] Base de données migré si nécessaire
- [ ] Variables d'environnement configurées
- [ ] Email notifications testées

### Post-Déploiement Immédiat
- [ ] Vérifier accès site en HTTPS
- [ ] Tester formulaire contact
- [ ] Tester Dark Mode
- [ ] Tester Mobile responsive
- [ ] Tester tous les liens

## 📊 Phase 3 : Indexation Google

### Google Search Console
1. [ ] Créer compte GSC
2. [ ] Ajouter propriété (domaine)
3. [ ] Vérifier propriété (DNS/HTML)
4. [ ] Soumettre sitemap.xml
   ```
   Settings → Sitemaps → https://moussa-lo.com/sitemap.xml
   ```
5. [ ] Demander indexation page d'accueil
   ```
   URL Inspection → Paste URL → Request Indexing
   ```

### Google Business Profile
- [ ] Créer profil business
- [ ] Ajouter catégorie (Freelancer/Designer)
- [ ] Vérifier localisation (Dakar, Sénégal)
- [ ] Ajouter horaires
- [ ] Ajouter description complète
- [ ] Ajouter photos

### Google Analytics 4
- [ ] Ajouter GA4 tracking
- [ ] Vérifier données collectées
- [ ] Configurer Goals/Events
- [ ] Setup notifications

## 🔗 Phase 4 : Backlinks & Promotion

### Social Media
- [ ] LinkedIn : Publier URL
- [ ] Twitter/X : Tweeter URL
- [ ] GitHub : Ajouter lien README
- [ ] Facebook : Partager
- [ ] TikTok : Faire vidéo promo

### Annuaires & Portfolios
- [ ] Behance : Publier projets
- [ ] Dribbble : Publier designs
- [ ] CodePen : Publier codes
- [ ] GitHub : Stars recherchés
- [ ] Dev.to : Publier articles

### Email & Réseaux
- [ ] Envoyer à contacts professionnels
- [ ] Partager sur forums dev (Reddit, Dev.to, etc)
- [ ] Contacter autres portfolios pour backlinks
- [ ] Ajouter URL à signature email

## 📈 Phase 5 : Monitoring Continu

### Quotidien (semaine 1)
- [ ] Vérifier pageviews Google Analytics
- [ ] Vérifier erreurs 404 GSC
- [ ] Vérifier indexation (site:moussa-lo.com)
- [ ] Tester formulaire contact
- [ ] Vérifier performance Lighthouse

### Hebdomadaire
- [ ] Analyser trafic Google Analytics
- [ ] Vérifier positions Google (keywords)
- [ ] Vérifier backlinks (Ahrefs, Moz)
- [ ] Répondre aux messages contact
- [ ] Publier contenu / MAJ projets

### Mensuel
- [ ] Complet audit SEO
- [ ] Rapport PageSpeed Insights
- [ ] Rapport Lighthouse
- [ ] Optimiser pages mal classées
- [ ] Ajouter nouveau contenu

## 🎯 Objectifs de Performance

### SEO
- [ ] **Indexation** : 100% pages indexées
- [ ] **Rankings** : Top 10 sur 5+ keywords
- [ ] **CTR** : > 3% sur SERPs
- [ ] **Impressions** : > 50/mois (semaine 1)

### Performance
- [ ] **Lighthouse** : 90+ score
- [ ] **LCP** : < 2.5s (large contentful paint)
- [ ] **FID** : < 100ms (first input delay)
- [ ] **CLS** : < 0.1 (layout shift)
- [ ] **Page Load** : < 3s

### Traffic
- [ ] **Semaine 1** : 10-50 visites
- [ ] **Semaine 2-4** : 50-200 visites
- [ ] **Mois 2** : 200-500 visites
- [ ] **Mois 3** : 500+ visites

## 📚 Documentation à Vérifier

- [ ] [`README.md`](../README.md) - Vue d'ensemble
- [ ] [`SEO_PERFORMANCE.md`](SEO_PERFORMANCE.md) - Guide SEO détaillé
- [ ] [`QUICKSTART.md`](../QUICKSTART.md) - Configuration rapide
- [ ] [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md) - Configuration Email

## 🔧 Outils Utiles

### Gratuit
- [ ] Google PageSpeed Insights
- [ ] Lighthouse (DevTools)
- [ ] Google Search Console
- [ ] Google Analytics 4
- [ ] Bing Webmaster Tools
- [ ] W3C Validator

### Payant (Trial gratuit)
- [ ] Ahrefs
- [ ] SEMrush
- [ ] Moz Pro
- [ ] Ubersuggest

## 📞 Support en Cas de Problème

### Problème : Pages non indexées après 1 semaine
**Solution** :
1. Vérifier sitemap.xml est valide
2. Vérifier robots.txt ne bloque pas
3. Vérifier HTTPS & certificat
4. Demander indexation manuelle GSC
5. Attendre 2-4 semaines

### Problème : Mauvais score Lighthouse
**Solution** :
1. Vérifier images optimisées
2. Minifier CSS/JS
3. Lazy loading activé
4. Compression GZIP activé
5. Fonts optimisées

### Problème : Formulaire contact ne fonctionne pas
**Solution** :
1. Vérifier EmailJS configuré
2. Vérifier IDs corrects
3. Vérifier console erreurs (F12)
4. Vérifier connexion internet
5. Consulter [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md)

## ✨ Après 3 Mois

- [ ] Analyser 90 jours de data
- [ ] Identifier pages best performers
- [ ] Optimiser pages mal classées
- [ ] Créer stratégie de contenu
- [ ] Planifier ajout nouvelles sections
- [ ] Penser à blog/articles

---

**Status** : À compléter avant déploiement  
**Dernière mise à jour** : 2026-05-04  
**Version** : 1.0
