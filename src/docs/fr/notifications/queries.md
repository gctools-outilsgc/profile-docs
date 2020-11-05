---
path: "/notifications/queries"
subnav: "1/Notifications/Notifications/3"
lang: "fr"
title: "Récupération des données"
---

<helmet>
<title> Notifications - Récupération des données</title>
</helmet>

## Requêtes

Les requêtes nécessitent l’authentification du client au moyen d’un jeton d’accès. Si le jeton est validé par GCcompte comme étant à jour et que le consentement est autorisé pour l’application, le système Notification en tant que service retournera les données demandées pour l’utilisateur pour lequel le jeton a été généré.

Pour de plus amples renseignements sur la façon d’utiliser la fonction de requête graphQL graphl.org fournit d’excellents [tutoriels](https://graphql.org/learn/query/).

### Requête qui retournerait tous les renseignements disponibles sur les notifications pour un utilisateur particulier, identifié dans un jeton d’accès

```json
    notifications{
        id,
        generatedOn,
        modifiedOn,
        gcID,
        appID,
        actionLink,
        actionLevel,
        email {
            from,
            to,
            subject,
            body,
            status,
            sendError,
            html
        },
        online {
            titleEn,
            titleFr,
            descriptionEn,
            descriptionFr,
            viewed
        },
        whoDunIt {
            gcID,
            teamID,
            organizationID
        }
    }
```

### Critères de recherche d’une requête

Les champs de critères de recherche peuvent être utilisés séparément ou enchaînés ensemble pour filtrer facilement les données.

Arguments disponibles :
* `appID` *Concordance parfaite* (string)
* `actionLevel` *Correspondance parfaite de `NoUserAction`, `Featured` ou `UserActionRequired`* (enum) 


Exemple avec tous les arguments disponibles :

```javascript
    query{
        notifications(
            appID: "string",
            actionLevel: "Featured"
        ){
            id,
            generatedOn,
            modifiedOn,
            gcID,
            appID,
            actionLink,
            actionLevel,
            email {
                from,
                to,
                subject,
                body,
                status,
                sendError,
                html
            },
            whoDunIt {
                gcID,
                teamID,
                organizationID
            }
        }
    }
```

### Pagination

Il n’est pas pratique de récupérer une énorme quantité de données avec une seule demande et cette action peut abîmer votre application. La pagination résout ce problème, en permettant au client de préciser le nombre d’éléments qu’il veut.

La méthode simple définie dans la documentation de pagination GraphQL consiste à découper les résultats en utilisant deux paramètres : `first`, qui renvoie les premiers éléments n et `skip`, qui saute les premiers éléments n.

Ces deux paramètres de pagination ont été mis en œuvre pour toutes les fonctions de requête de recherche.

L’exemple de requête ci-dessous recherche toutes les notifications pour l’application avec l’ID `ddasfoij0923`. Toutefois, au lieu de retourner le tableau complet, la requête ci-dessous demande les éléments 2 et 3 dans le tableau. Sauter le premier élément du tableau et envoyer les 2 suivants dans le tableau.

```javascript
    query{
        notifications(appID:"ddasfoij0923", first:2, skip:1){
            id,
            generatedOn,
            modifiedOn,
            gcID,
            appID,
            actionLink,
            actionLevel,
            online {
                titleEn,
                titleFr,
                descriptionEn,
                descriptionFr,
                viewed
            },
            whoDunIt {
                gcID,
                teamID,
                organizationID
            } 
        }
    }
```