---
path: "/profile/usecases"
subnav: "1/Profile/Profil/7"
lang: "fr"
title: "Cas d’utilisation"
---

<helmet>
<title> Profil -  Cas d’utilisation </title>
</helmet>

# Cas d’utilisation

Scénarios et exemples que nous avons déterminés comme des occasions d’intégrer le profil en tant que données de service dans votre application ou projet.

## Obtenir des renseignements de base sur le profil
Si votre projet nécessite des données utilisateur de base, vous pouvez interroger PaaS par le `gcID` ou le nom de l’utilisateur.

### Obtenir le titre du poste, le courriel, le téléphone, l’avatar
```javascript
query {
  profiles(gcID: ID) {
    name
    email
    mobilePhone
    officePhone
    titleEn
    titleFr
    avatar
  }
}
```

## Obtenir les données sur les organisations et le ministère
Votre projet nécessite peut-être des données sur les organisations et les départements. Vous pouvez saisir l’organisation actuelle d’un utilisateur ou toutes les équipes et tous les utilisateurs d’une organisation. (Veuillez noter que ces données peuvent ne pas être à jour puisque c’est l’utilisateur qui doit entrer ces données)

### Obtenir l’organisation actuelle d’un utilisateur
```javascript
query {
  profiles(gcID: ID) {
    team {
      organization {
        id
        nameEn
        nameFr
      }
    }
  }
}
```

### Obtenir tous les utilisateurs dans une organisation
```javascript
query {
	organizations (id: ID) {
    id
    nameEn
    teams {
      id
      nameEn
      members {
        gcID
        name
      }
    }
  }
}
```

## Obtenir le superviseur, l’équipe et les coéquipiers
Vous pouvez voir le superviseur actuel d’un utilisateur, ainsi que les équipes et les coéquipiers des utilisateurs.
### Obtenir le superviseur actuel d’un utilisateur
```javascript
query {
  profiles(gcID: ID) {
    team {
      owner {
        gcID
        name
      }
    }
  }
}
```
### Obtenir une liste des équipes et des membres qu’un utilisateur supervise
```javascript
query {
  profiles(gcID: ID){
    ownerOfTeams {
      id
      nameEn
      members {
        gcID
        name
      }
    }
  }
}
```
## Obtenir l’emplacement du bureau
### Obtenir l’emplacement du bureau d’un utilisateur
```javascript
query {
  profiles(gcID: ID) {
    address {
      streetAddress
      city
      province
      postalCode
      country
    }
  }
}
```