# 📧 Configuration EmailJS pour le Portfolio

Ce guide vous explique comment configurer EmailJS pour que le formulaire de contact fonctionne.

## 🚀 Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** (inscription gratuite)
3. Créez votre compte avec votre email

### 2. Connecter votre service email

1. Après connexion, allez dans l'onglet **"Email Services"**
2. Cliquez sur **"Create New Service"**
3. Choisissez votre fournisseur email :
   - **Gmail** (recommandé)
   - Outlook
   - Yahoo
   - Autre...

#### Pour Gmail :
1. Sélectionnez **Gmail**
2. Connectez-vous avec votre compte Gmail
3. Autorisez l'accès
4. Cliquez sur **"Create Service"**

⚠️ **Important** : Notez votre **Service ID** (ex: `service_xxxxx`)

### 3. Créer un template d'email

1. Allez dans l'onglet **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez comme suit :

```
Template Name: Contact Portfolio Message
Service: [Choisissez le service créé]

Email to: votre-email@gmail.com
Email subject: New Message from {{from_name}}

Email template body:
---
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Date: {{date}}

Message:
{{message}}
---
```

4. Cliquez sur **"Save"**
5. Notez votre **Template ID** (ex: `template_xxxxx`)

### 4. Récupérer votre Public Key

1. Allez dans l'onglet **"Account"**
2. Cliquez sur **"API Keys"**
3. Copiez votre **Public Key** (commence par `your_public_key` ou un identifiant comme `3cqVMQ5UwJkvu3wH0`)

### 5. Mettre à jour le fichier JavaScript

Ouvrez **`assets/js/main.js`** et remplacez les valeurs dans la section EmailJS :

```javascript
// ===== EMAILJS CONFIGURATION =====
(function() {
    // ⚠️ REMPLACEZ "3cqVMQ5UwJkvu3wH0" PAR VOTRE PUBLIC KEY
    emailjs.init("VOTRE_PUBLIC_KEY_ICI");
})();

// Dans la fonction handleFormSubmit, remplacez aussi :
const response = await emailjs.send(
    "service_VOTRE_SERVICE_ID",     // ⚠️ Remplacez ici
    "template_VOTRE_TEMPLATE_ID",   // ⚠️ Remplacez ici
    {
        // ...paramètres
    }
);
```

## 📋 Résumé des valeurs à remplacer

| Valeur | Où la trouver | Exemple |
|--------|---------------|---------|
| **Public Key** | Account → API Keys | `3cqVMQ5UwJkvu3wH0` |
| **Service ID** | Email Services → Service name | `service_kemx3x1` |
| **Template ID** | Email Templates → Template name | `template_48smwzh` |

## ✅ Tester votre configuration

1. Accédez à votre portfolio
2. Allez à la section **"Contactez-moi"**
3. Remplissez le formulaire
4. Cliquez sur **"Envoyer le message"**
5. Vous devriez recevoir une notification de succès
6. Vérifiez votre email pour confirmer la réception du message

## 🔒 Sécurité

- ✅ EmailJS est **gratuit** et **sécurisé**
- ✅ Votre Public Key peut être publique (c'est son rôle)
- ✅ Les messages passent par les serveurs d'EmailJS
- ✅ Jusqu'à **200 emails/jour** avec le plan gratuit

## 🆘 Dépannage

### Le bouton d'envoi affiche une erreur

**Problème** : "Service ID not found" ou "Template ID not found"
**Solution** : Vérifiez que vous avez copié les bonnes valeurs

### Les emails ne sont pas reçus

**Problème** : Le formulaire semble fonctionner mais pas d'email
**Solution** : 
- Vérifiez le dossier Spam/Indésirable
- Vérifiez que votre service email est connecté dans EmailJS
- Redémarrez le service EmailJS

### Erreur de connexion

**Problème** : "Network error" ou "Connection refused"
**Solution** :
- Vérifiez votre connexion internet
- Vérifiez que EmailJS n'est pas bloqué par un proxy/firewall

## 📚 Ressources

- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Support EmailJS](https://www.emailjs.com/help/)

---

**Besoin d'aide ?** Contactez-moi via le formulaire une fois configuré ! 😊
