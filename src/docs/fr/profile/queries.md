---
path: "/profile/queries"
subnav: "1/Profile/Profil/3"
lang: "fr"
title: "Récupération des données"
---

<helmet>
<title> Profil - Récupération des données</title>
</helmet>

## Requêtes

Les requêtes n’exigent pas l’authentification du client au moyen d’un jeton d’accès, mais le type de données retournées peut être filtré. Par exemple, si le champ « adresse » exige un certain « rôle d’utilisateur » à afficher, alors si un utilisateur faisant une requête n’a pas ce rôle la valeur `null` sera retournée pour ce champ.

Pour de plus amples renseignements sur la façon d’utiliser la fonction de requête de graphQL graphl.org contient d’excellents [tutoriels](https://graphql.org/learn/query/).

### Requête qui retournerait toutes tous les renseignements disponibles sur les utilisateurs sans critères de recherche

Pour souci de concision `...tous les champs d’objet` ont été utilisés pour réduire la répétition.

```json
    profiles{
        gcID,
        name,
        email,
        avatar,
        mobilePhone,
        officePhone,
        titleEn,
        titleFr,
        address{
            id,
            streetAddress,
            city,
            province,
            postalCode,
            country
        },
        team{
            id,
            nameEn,
            nameFr,
            descriptionEn,
            descriptionFr,
            organization{
                id,
                nameEn,
                nameFr,
                acronymEn,
                acronymFr
            },
            owner{
                ..all profile object fields
                }
            },
            members{
                ...all profile object fields
                }
            }
        },
        ownerOfTeams{
            ...all team object fields
            }
        },
        outstandingApprovals{
            id,
            gcIDApprover{
                ...all profile object fields
            },
            gcIDsubmitter{
                ...all profile object fields
            },
            requestedChange{
                id,
                name,
                email,
                avatar,
                mobilePhone,
                officePhone,
                address,
                titleEn,
                titleFr,
                team{
                    ...all team object fields
                },
                createdOn,
                actionedOn,
                deniedComment,
                status,
                changeType
            }

        }
    }
```

### Critères de recherche d’une requête

Les champs de critères de recherche peuvent être utilisés séparément ou enchaînés ensemble pour filtrer facilement les données.

#### Rechercher automatiquement un profil de nom

Arguments disponibles :

* `partialName` *Le nom contient –sensible à la casse* (string)

Exemple :

```javascript
    query{
        search(
            partialName:"bry"
        )
    }
```

### Profil

Arguments disponibles :

* `gcId` *concordance parfaite* (string)
* `name` *le nom contient – sensible à la casse* (string)
* `email` *concordance parfaite* (string)
* `mobilePhone` *le numéro de téléphone mobile contient* (string)
* `officePhone` *le numéro de bureau contient* (string)
* `titleEn` *le titre contient* (string)
* `titleFr` *le titre contient* (string)

Exemple avec tous les arguments disponibles :

```javascript
    query{
        profiles(
            gcID:"string",
            name:"string",
            email:"string",
            mobilePhone:"string",
            officePhone:"string",
            titleEn:"string",
            titleFr:"string"
        )
    }
```

#### Adresses

Arguments disponibles :

* `id` *concordance parfaite* (int)
* `streetAddress` *l’adresse municipale contient* (string)
* `city` *la ville contient* (string)
* `province` *concordance parfaite* (string)
* `postalCode` *concordance parfaite* (string)
* `country` *concordance parfaite* (string)

Exemple avec tous les arguments disponibles :

```javascript
    query{
        addresses(
            id:2,
            streetAddress:"string",
            city:"string",
            province:"string",
            postalCode:"string",
            country:"string"
        )
    }
```

#### Équipes

Arguments disponibles :

* `id` *concordance parfaite* (int)
* `nameEn` *le nom en anglais contient* (string)
* `nameFr` *le nom français contient* (string)

Exemple avec tous les arguments disponibles :

```javascript
    query{
        teams(
            id:2,
            nameEn:"string",
            nameFr:"string",
        )
    }
```

#### Organisations

Arguments disponibles :

* `id` *concordance parfaite* (int)
* `nameEn` *le nom de l’organisation contient* (string)
* `nameFr` *le nom de l’organisation contient* (string)
* `acronymEn` *concordance parfaite* (string)
* `acronymFr` *concordance parfaite* (string)

```javascript
    query{
        organizations(
            id:1,
            nameEn:"string",
            nameFr:"string",
            acronymEn:"string",
            acronymFr:"string"
        )
    }
```

#### Approbations

Arguments disponibles :

* `id` *concordance parfaite* (int)
* `gcIDApprover` *correspondance parfaite* (gcID de l’objet de profile)
* `gcIDSubmitter` *correspondance parfaite* (gcID de l’objet de profile)
* `status` *ENUM* (enum `Pending`, `Approved`, `Denied`)
* `changeType` *ENUM* (enum `Informational` ou `Membership`)

Exemple de l’utilisation de tous les arguments disponibles

```javascript
    query{
        approvals(
            id:6,
            gcIDApprover:{
                gcID:"12243"
            },
            gcIDSubmitter:{
                gcID:"5431"
            },
            status: Pending
            changeType: Informational
        )
    }
```

### Pagination

Il n’est pas pratique de récupérer une énorme quantité de données avec une seule demande et cette action peut abîmer votre application. La pagination existe pour résoudre ce problème, en permettant au client de préciser le nombre d’éléments qu’il veut.

La méthode simple définie dans la documentation de pagination GraphQL consiste à découper les résultats en utilisant deux paramètres : `first`, qui renvoie les premiers éléments n et `skip`, qui saute les premiers éléments n.

Ces deux paramètres de pagination ont été mis en œuvre pour toutes les fonctions de requête de recherche.

L’exemple de requête ci-dessous recherche tous les profils qui contiennent le nom « Bryan ». Toutefois, au lieu de retourner le tableau complet, la requête ci-dessous demande les éléments 2 et 3 dans le tableau. Sautez le premier élément dans le tableau et envoyez les 2 suivants dans le tableau.

```javascript
    query{
        profiles(name:"Bryan", first:2, skip:1){
            name,
            avatar,
            email
        }
    }
```