# 🚀 Démarrage Rapide - Portfolio

Bienvenue ! Voici les étapes pour que votre portfolio soit **complètement fonctionnel** en 10 minutes.

## ✅ Checklist de configuration

### 1. ✨ Vérifier que tout fonctionne (3 min)

- [ ] Ouvrez `http://localhost/portfolio/` dans votre navigateur
- [ ] Testez le **Dark Mode** (bouton lune en haut à droite)
- [ ] Cliquez sur les liens de navigation
- [ ] Vérifiez que l'animation de typing fonctionne

### 2. 📧 Configurer EmailJS pour le contact (5 min)

Le formulaire de contact ne fonctionne **que si** vous configurez EmailJS :

1. Ouvrez [`assets/docs/EMAILJS_SETUP.md`](assets/docs/EMAILJS_SETUP.md)
2. Suivez **toutes les étapes** jusqu'au bout
3. Remplacez les 3 valeurs dans `assets/js/main.js` :
   ```javascript
   // Ligne ~385
   emailjs.init("VOTRE_PUBLIC_KEY_ICI");
   
   // Ligne ~433 (dans handleFormSubmit)
   await emailjs.send(
       "VOTRE_SERVICE_ID_ICI",
       "VOTRE_TEMPLATE_ID_ICI",
       { ... }
   );
   ```
4. Testez le formulaire !

### 3. 👤 Personnaliser vos données (2 min)

#### Votre nom et descriptions
- Modifiez le titre dans le `<title>` de `index.html`
- Mettez à jour la description hero
- Changez les infos de contact

#### Vos compétences
Modifiez le tableau dans `assets/js/main.js` (ligne ~120) :
```javascript
const skills = [
    { name: 'VOS_COMPETENCES', level: 85, icon: 'fas fa-icon' },
    // ...
];
```

#### Vos projets
Modifiez le tableau dans `assets/js/main.js` (ligne ~150) :
```javascript
const projects = [
    {
        title: 'Votre Projet',
        description: 'Description du projet',
        category: 'web',  // ou 'design' ou 'mobile'
        tech: ['Techs', 'Utilisées'],
        demoLink: 'https://demo.com',
        codeLink: 'https://github.com/...'
    },
    // ...
];
```

#### Vos réseaux sociaux
Changez les URLs dans la section contact et footer de `index.html`

## 📸 Ajouter vos images

Place les images dans `assets/images/` :
- `moussa.webp` → Photo de profil (hero section)
- `about.jpg` → Photo pour la section à propos

## 🧪 Tester le formulaire

1. Remplissez le formulaire de contact
2. Cliquez sur **"Envoyer le message"**
3. Vous devriez voir :
   - ✅ Message de succès en haut à droite
   - 📧 Email reçu dans votre boîte

Si ça ne fonctionne pas → Consultez [`EMAILJS_SETUP.md`](assets/docs/EMAILJS_SETUP.md#-dépannage)

## 🎨 Personnaliser les couleurs

Modifiez les variables CSS dans `assets/css/style.css` (ligne 1) :

```css
:root {
    --primary-color: #6C63FF;        /* Couleur principale (bleu) */
    --secondary-color: #FF6584;      /* Accent (rose) */
    --dark-color: #2D2B55;           /* Texte foncé */
    /* ... autres variables */
}
```

## 📱 Tester le responsive

1. Appuyez sur **F12** pour ouvrir les outils de développeur
2. Cliquez sur l'icône **"Toggle device toolbar"** (haut à gauche)
3. Testez avec différentes résolutions (mobile, tablet)

## 🚀 Déployer votre portfolio

### Option 1 : GitHub Pages (gratuit)
1. Créez un repo `username.github.io`
2. Poussez ce dossier
3. Votre site sera en ligne !

### Option 2 : Hébergement classique
- Uploadez le dossier via FTP sur votre serveur
- Laissez le domaine pointer dessus

### Option 3 : Vercel / Netlify (gratuit)
1. Connectez votre repo GitHub
2. Sélectionnez ce dossier
3. Déployé en 30 secondes !

## 📋 Fichiers à modifier

| Fichier | À faire |
|---------|---------|
| `index.html` | Mettez à jour le titre, description, liens réseaux |
| `assets/js/main.js` | EmailJS IDs + données compétences + données projets |
| `assets/css/style.css` | Changez les couleurs (variables CSS) |
| `assets/images/` | Ajoutez votre photo et images |
| `assets/docs/cv.pdf` | Uploadez votre CV |

## ❓ Questions fréquentes

**Q: Le formulaire envoie mais je ne reçois pas l'email ?**
A: Vérifiez votre dossier Spam. Si rien, relisez le guide EmailJS.

**Q: Je peux changer les animations ?**
A: Oui ! Les animations sont en CSS (`style.css`) ou JavaScript (`main.js`).

**Q: Comment ajouter une nouvelle section ?**
A: Copiez une section existante, adaptez-la, et ajoutez du CSS custom.

**Q: Puis-je utiliser un autre service d'email ?**
A: Oui, mais vous devrez adapter le code JavaScript.

## 🎓 Ressources d'apprentissage

- [MDN - HTML/CSS/JS](https://developer.mozilla.org)
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)

## ✨ Prochaines étapes (optionnel)

1. Ajouter un **blog** avec des articles
2. Ajouter des **témoignages** de clients
3. Intégrer avec **GitHub API** pour les repos
4. Ajouter des **animations Scroll** plus avancées
5. Optimiser les images (**WebP**, lazy loading)

## 🆘 Besoin d'aide ?

- 📖 Consultez le [`README.md`](README.md) complet
- 📧 Contactez-moi : moussaneuer06@gmail.com
- 💬 Discord/Twitter/LinkedIn (voir footer)

---

**Bon courage ! 🚀 Votre portfolio est prêt ! ✨**

Pour les questions spécifiques EmailJS → [`EMAILJS_SETUP.md`](assets/docs/EMAILJS_SETUP.md)
