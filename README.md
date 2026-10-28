# 🎨 Portfolio - Moussa LO

Portfolio personnel présentant mes projets en développement web et design UX/UI.

## ✨ Caractéristiques

✅ **Design moderne et responsive** - Adapté à tous les appareils (mobile, tablet, desktop)
✅ **Dark Mode** - Toggle jour/nuit avec localStorage
✅ **Animations fluides** - Typing effect, scroll animations, hover effects
✅ **Formulaire de contact** - Intégration EmailJS pour recevoir les messages
✅ **Sections complètes** :
   - Hero avec animation de typing
   - À propos avec stats animées
   - Compétences avec barres de progression
   - Projets filtrables par catégorie
   - Contact avec formulaire fonctionnel
   - Footer avec liens réseaux sociaux

## 🚀 Technologies utilisées

- **HTML5** - Sémantique
- **CSS3** - Flexbox, Grid, Variables CSS, Animations
- **JavaScript (ES6+)** - Interactions dynamiques
- **EmailJS** - Service d'envoi d'emails
- **Font Awesome** - Icônes
- **Google Fonts** - Polices (Poppins, Inter)

## 📁 Structure du projet

```
portfolio/
├── index.html                 # Page principale
├── README.md                  # Ce fichier
├── assets/
│   ├── css/
│   │   └── style.css         # Styles complets (responsive + dark mode)
│   ├── js/
│   │   └── main.js           # JavaScript avec toutes les fonctionnalités
│   ├── images/               # Images et photos
│   │   ├── moussa.webp       # Photo de profil
│   │   └── about.jpg         # Photo section À propos
│   └── docs/
│       ├── cv.pdf            # CV à télécharger
│       └── EMAILJS_SETUP.md   # Guide de configuration EmailJS
```

## 🎯 Sections du Portfolio

### 1. **Navigation (Navbar)**
- Logo avec style
- Liens de navigation
- Toggle Dark/Light Mode
- Menu mobile responsive

### 2. **Hero Section**
- Présentation avec animation de typing
- Photo de profil avec animation
- Badges animés (Disponible)
- Appels à l'action (CTA)

### 3. **À Propos**
- Photo professionnel
- Bio courte
- Stats animées (projets, expérience, clients)
- Bouton télécharger CV

### 4. **Compétences**
- Grille de compétences
- Barres de progression animées
- Icônes Font Awesome
- Pourcentages de maîtrise

### 5. **Projets**
- Grille de projets
- Filtres par catégorie (Web, Design, Mobile)
- Cards avec descriptions
- Tags de technologies
- Liens démo et code

### 6. **Contact**
- Formulaire complet avec validation
- Infos de contact (email, téléphone, localisation)
- Liens réseaux sociaux
- Intégration EmailJS

### 7. **Footer**
- Liens rapides
- Ressources (CV, mentions légales)
- Réseaux sociaux avec animations
- Année dynamique
- Légende avec typing effect

## ⚙️ Configuration

### Activer le formulaire de contact

📧 **Important** : Le formulaire de contact utilise **EmailJS**. Pour le rendre fonctionnel :

1. Consultez le guide : [`assets/docs/EMAILJS_SETUP.md`](assets/docs/EMAILJS_SETUP.md)
2. Créez un compte gratuit sur [emailjs.com](https://www.emailjs.com)
3. Configurez votre service email (Gmail, Outlook, etc.)
4. Récupérez votre :
   - **Public Key**
   - **Service ID**
   - **Template ID**
5. Mettez à jour `assets/js/main.js` avec vos identifiants

### Personnaliser les données

#### Compétences
Modifiez le tableau `skills` dans [`assets/js/main.js`](assets/js/main.js) (ligne ~120) :

```javascript
const skills = [
    { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' },
    { name: 'PHP', level: 90, icon: 'fab fa-php' },
    // ... plus de compétences
];
```

#### Projets
Modifiez le tableau `projects` dans [`assets/js/main.js`](assets/js/main.js) (ligne ~150) :

```javascript
const projects = [
    {
        title: 'Nom du projet',
        description: 'Description',
        category: 'web',      // web, design, ou mobile
        tech: ['React', 'Node.js'],
        demoLink: 'https://...',
        codeLink: 'https://github.com/...'
    },
    // ... plus de projets
];
```

#### Infos personnelles
- Modifiez le titre et description dans l'HTML
- Changez les liens des réseaux sociaux
- Mettez à jour votre email de contact

## 🎨 Dark Mode

Le mode sombre est automatiquement mémorisé grâce à `localStorage`. Le thème actuel est stocké sous la clé `'theme'`.

Pour forcer un thème au chargement, modifiez la fonction `initTheme()` dans `main.js`.

## 📱 Responsive

Le portfolio est **100% responsive** avec des breakpoints :
- **Desktop** : > 992px
- **Tablet** : 768px - 992px
- **Mobile** : < 768px

## 🔍 SEO

- ✅ Meta tags complets
- ✅ Descriptions optimisées
- ✅ Images optimisées
- ✅ Structure sémantique HTML5
- 📝 À ajouter : Structured data (JSON-LD), Sitemap XML

## 🚀 Déploiement

### Déployer sur GitHub Pages

1. Créez un repo `username.github.io`
2. Poussez ce dossier sur la branche `main`
3. Votre site sera accessible sur `https://username.github.io`

### Déployer localement (WAMP/XAMPP)

1. Placez le dossier dans `www/` (WAMP) ou `htdocs/` (XAMPP)
2. Lancez Apache
3. Accédez à `http://localhost/portfolio/`

## 🐛 Dépannage

**Le formulaire n'envoie pas les emails ?**
- Vérifiez que EmailJS est configuré correctement
- Consultez la console du navigateur (F12) pour les erreurs
- Vérifiez votre connexion internet

**Les animations sont lentes ?**
- C'est normal sur les vieux appareils
- Les animations utilisent CSS3 natives et JavaScript optimisé

**Le dark mode ne se souvient pas ?**
- Vérifiez que localStorage n'est pas désactivé
- Essayez en mode normal (pas navigation privée)

## 📈 Améliorations futures

- [ ] Blog section
- [ ] Testimonials clients
- [ ] Filtres de compétences interactifs
- [ ] Pagination des projets
- [ ] Intégration GitHub API pour les repos
- [ ] Analytics
- [ ] Performance optimisations

## 📞 Contact

Pour toute question ou collaboration :
- 📧 Email : ml.moussalo1@gmail.com
- 📱 WhatsApp : +221 76 846 18 53
- 🔗 LinkedIn : [Moussa LO](https://www.linkedin.com/in/moussa-neuer-lo-b8b0b93a8)
- 💻 GitHub : [MoussaNeuer](https://github.com/MoussaNeuer)

## 📄 License

Ce projet est sous licence MIT.

---

**Dernière mise à jour** : Mai 2026  
**Version** : 1.0