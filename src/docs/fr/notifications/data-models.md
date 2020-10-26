---
path: "/notifications/data-models"
subnav: "1/Notifications/Notifications/2"
lang: "fr"
title: "modèles de données"
---

<helmet>
<title> Notifications - modèles de données </title>
</helmet>

## Modèles de données d’objet

### Notification

* `id` *un identificateur de notification unique* (string)
* `generatedOn` *Chaîne Unix DateTime générée par le système* (string)
* `modifiedOn` *Chaîne Unix DateTime générée par le système* (string)
* `gcID` *identificateur unique de l’utilisateur qui reçoit la notification* (string)
* `appID` *ID de l’application tel qu’il est indiqué dans le compte GC* (string)
* `actionLink` *URL vers la page où la notification peut être traitée* (string)
* `actionLevel` *liste ENUM de `aucune action utilisateur`, `en vedette` ou `action utilisateur requise`* (enum)
* `email` *objet de notification par courriel* (objet de notification par courriel)
* `online` *objet de notification en ligne* (objet de notification en ligne)
* `whoDunIt` *objet qui définit qui ou ce qui a généré l’événement* (whoDunIt object)

### Objet en ligne

* `titleEn` *Titre en anglais de la notification en ligne* (string)
* `titleFr` *Titre en français de la notification en ligne* (string)
* `descriptionEn`*Description en anglais/corps de la notification en ligne* (string)
* `descriptionFr` *Description en français/corps de la notification en ligne* (string)
* `viewed` *booléenne décrivant si la notification en ligne a été consultée* (boolean)

### Objet du courriel

* `from` *adresse électronique de l’utilisateur/du système* (string)
* `to` *adresse de courriel du destinataire* (string)
* `subject` *Ligne de l’objet du courriel* (string)
* `body` *corps du courriel qui peut être un texte pur ou en HTML* (string)
* `status` *Liste Enum qui peut être `envoyée` ou `mise en attente`* (enum)
* `sendError` *message d’erreur si le courriel n’a pas pu être envoyé* (string)
* `html` *booléen qui identifie si le corps a HTML* (boolean)

### Objet quiafaitça

* `gcID` *identificateur d’utilisateur fondé sur gcID* (string)
* `teamID` *identificateur d’équipe sur l’ID d’équipe* (string)
* `organizaitonID` *identificateur de l’organisation fondé sur l’ID de l’organisation* (string)
