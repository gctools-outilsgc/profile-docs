---
path: "/profile/quick-start"
subnav: "1/Profile/Profil/1"
lang: "fr"
title: "Démarrage rapide"
---

<helmet>
<title> Profil – Démarrage rapide</title>
</helmet>

# Démarrage rapide

Dans cette section, nous expliquerons rapidement comment s’y prendre pour démarrer votre projet visant à tirer parti de PaaS. Nous vous fournirons des liens vers des ressources concernant les clients GraphQL que vous pouvez utiliser en fonction de votre projet.

## Authentification

Vous êtes libre d’interroger les données du profil en tant que service sans authentification. Si vous souhaitez que vos utilisateurs aient accès leur permettant de modifier leurs données dans PaaS, vous devrez authentifier vos utilisateurs à l’aide de GCcompte. Pour créer un client de GCompte pour votre application, veuillez [communiquer avec le service d’aide d’OutilsGC](https: //support.gccollab.ca/fr/support/accueil).

## API Endpoint
Les utilisateurs peuvent accéder à l’outil à l’aide de `paas.gccollab.ca`
```javascript
paas.gccollab.ca
```

## Bibliothèques clients GQL recommandées

Ici, nous recommandons certaines bibliothèques pour tirer parti de l’API GQL. Vous pouvez consulter la section [Cas d’utilisation](/profile/usecases) pour trouver des exemples sur la façon de formater vos requêtes.

### Liste organisée des clients GQL
Visitez ce lien pour obtenir une liste des clients GQL que vous pouvez utiliser selon votre projet : 
* <a href="https://graphql.org/code/#graphql-clients" target="_blank">Clients GQL</a>

### Clients utilisés dans les projets OutilsGC

#### ReactJS
 
Le [Répertoire](https://profile.gccollab.ca/) utilise [React Apollo Client](https://www.apollographql.com/docs/react/)

#### PHP

GCcollab utilise [php graphql-client](https://github.com/euautomation/graphql-client) pour récupérer et muter des données dans PaaS.