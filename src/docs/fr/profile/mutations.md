---
path: "/profile/mutations"
subnav: "1/Profile/Profil/4"
lang: "fr"
title: "Modifications des données"
---

<helmet>
<title> Profil - Modifications des données</title>
</helmet>

## Mutations

Les mutations nécessitent une authentification sous la forme d’un jeton d’accès valide de l’utilisateur GCcompte. Le jeton d’accès doit être inscrit dans l’en-tête de la demande sous la forme `Authorization: Bearer {jeton d’accès}`. Si le `role` de l'utilisateur est `Admin`, il aura la possibilité de modifier le profil des autres utilisateurs.

### Mutations de profil

Arguments disponibles pour envoyer une mutation :

* `gcId` *un identificateur d’utilisateur* (string)
* `data` *un objet avec des valeurs à modifier* (dict)
  * `name` *nom de l’utilisateur* (string)
  * `email` *courriel de l’utilisateur* (string)
  * `titleEn` *titre du poste en anglais de l’utilisateur* (string)
  * `titleFr` *titre du poste en français de l’utilisateur* (string)
  * `mobilePhone` *numéro de téléphone cellulaire* (string)
  * `officePhone` *Numéro de téléphone au bureau* (string)
  * `address` *adresse de travail de l’utilisateur* (objet address)
    * `streetAddress` (string)
    * `city` (string)
    * `province` (string)
    * `postalCode` (string)
    * `country` (string)
  * `team` *objet d’équipe de l’équipe associée* (objet team)
    * `id` *identificateur unique d’une équipe* (string)

Exemple de mutation utilisant tous les arguments disponibles :

```javascript
    mutation{
        modifyProfile(
            gcId:2,
            profileInfo:{
            name:"string",
            email:"string",
            titleEn:"string",
            titleFr:"string",
            mobilePhone:"string",
            officePhone:"string",
            address:{
                streetAddress:"string",
                city:"string",
                province:"string",
                postalCode:"string",
                country:"string",
            },
            team:{
                id:1243
            }
        }
        )
    }
```

### Mutations d’équipe

#### Créer une équipe

Arguments disponibles pour envoyer une mutation :

* `nameEn` *Nom en anglais de l’équipe* (string)
* `nameFr` *Nom en français de l’équipe* (string)
* `descriptionEn` *Description en anglais de l’équipe* (string)
* `descriptionFr` *Description en français de l’équipe* (string)
* `organization` *identificateur unique d’objet d’organisation* (objet organization)
* `owner` *utilisateur unique du propriétaire de l’équipe. Peut être identifié par courriel ou par gcID* (objet profile)

Exemple de mutation pour créer un OrgTier :

```javascript
    mutation{
        createOrgTier(
            nameEn:"string",
            nameFr:"string",
            descriptionEn:"English Description",
            descriptionFR:"French Description",
            organization:{
                id:1243
            },
            owner:{
                gcID:"5433245",
                email:"joe.smith@canada.ca"
            }
         )
    }
```

#### Modifier une équipe

Arguments disponibles pour envoyer une mutation :

*identificateur unique de l’équipe à modifier*
* `data` *objet d’information à modifier* (dict)
  * `nameEn` *Nom en anglais de l’équipe* (string)
  * `nameFr` *Nom en français de l’équipe* (string)
  * `descriptionEn` *Description en anglais de l’équipe* (string)
  * `descriptionFr` *Description en français de l’équipe* (string)
  * `organization` *identificateur unique d’objet d’organisation* (objet organization)
  * `owner` *utilisateur unique du propriétaire de l’équipe. Peut être identifié par courriel ou par gcID* (objet profile)

Exemple de mutation pour modifier un OrgTier :

```javascript
    mutation{
        modifyOrgTier(
            id:2,
            nameEn:"string",
            nameFr:"string",
            descriptionEn:"English Description",
            descriptionFR:"French Description",
            organization:{
                id:1243
            },
            owner:{
                gcID:"5433245",
                email:"joe.smith@canada.ca"
            }
        )
    }
```

#### Supprimer une équipe :

Arguments disponibles pour envoyer une mutation :

* `id` *identificateur unique de l’équipe* (int)

Exemple de mutation pour supprimer un OrgTier :

```javascript
    mutation{
        deleteOrgTier(
            id:6
            )
    }
```

### Approbations :

Arguments disponibles pour envoyer une mutation :

* `id` *identificateur unique de l’approbation à modifier* (int)
* `data` *objet qui contient les modifications à appliquer*
  * `status` *ENUM `Pending`, `Approved`, ou `Denied` (enum)
  * `deniedComment` *raison pour laquelle le statut est `Denied` (string)

Exemple de mutation pour modifier une approbation :

```javascript
    mutation{
        modifyApproval(
            id:23,
            data:{
                status: Denied
                deniedComment: "blah"
            }
        )
    }
```