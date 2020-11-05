---
path: "/notifications/mutations"
subnav: "1/Notifications/Notifications/4"
lang: "fr"
title: "Modifications des données"
---

<helmet>
<title> Notifications - Modifications des données</title>
</helmet>

## Mutations

Les mutations nécessitent une authentification sous la forme de jeton d’accès valide au GCcompte de l’utilisateur. Le jeton d’accès doit être saisi dans l’en-tête de la demande du formulaire `Authorization: Bearer {jeton d’accès}`.

### mutations de notification

#### Créer une notification

Arguments disponibles pour envoyer une mutation :

* `appID` *ID de l’application tel qu’il est indiqué dans le GCcompte* (string)
* `actionLink` *URL vers la page où la notification peut être traitée* (string)
* `actionLevel` *liste ENUM de `NoUserAction`, `Featured` ou `UserActionRequired`* (enum)
* `email` *objet de notification par courriel* (objet de notification email)
* `online` *objet de notification en ligne* (objet de notification online)
* `whoDunIt` *objet qui définit l’auteur ou l’action qui déclenché l’événement* (object whoDunIt)

Exemple : Une mutation pour créer une notification avec un composant de notification en ligne et par courriel

```javascript
    mutation{
        createNotification(
            appID:"651368451sasedf",
            actionLink:"https://app.somewhere.ca/89413268416",
            actionLevel: "UserActionRequired",
            email:{
                from:"noreply.somewhere.ca",
                to:"user@somewhere.com",
                subject:"You really need to action this",
                body:"Something that you really neeed to do",
                html: False
            },
            online:{
                titleEn: "Something you need to do",
                titleFr: "Quelque chose que vous devez faire",
                descriptionEn: "You really need to action this as soon as possible",
                descriptionFr: "Vous devez vraiment agir dès que possible"                
            },
            whoDunIt:{
                teamID: "861a3sdf6815asdf"
            }
         ){
             id,
             online{
                 viewed
             }
         }
    }
```

#### Modifier une notification

Arguments disponibles pour envoyer une mutation :


* `id` *unique identifier of the team to modify* (int)
* `online` *objet de notification en ligne* (objet de notification en ligne)

Example mutation to modify a Notification

```javascript
    mutation{
        updateNotification(
            id:2,
            online:{
                viewed: True
            }
        ){
            id,
            online,
            viewed
        }
    }
```