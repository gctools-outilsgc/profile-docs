---
path: "/profile/data-models"
subnav: "1/Profile/Profil/2"
lang: "fr"
title: "Modèles de données"
---

<helmet>
<title> Profile - Modèles de données </title>
</helmet>

## Modèles de données d’objet

### Profil

* `gcId` *un identificateur d’utilisateur unique* (string)
* `name` *nom de l’utilisateur* (string)
* `email` *courriel de l’utilisateur* (string)
* `avatar` *url de l’avatar du profil de l’utilisateur* (url)
* `titleEn` *titre du poste en anglais de l’utilisateur* (string)
* `titleFr` *titre du poste en français de l’utilisateur* (string)
* `mobilePhone` *numéro de téléphone cellulaire* (string)
* `officePhone` *Numéro de téléphone au bureau* (string)
* `address` *adresse de travail de l’utilisateur* (objet address)
* `team` *objet d’équipe auquel l’utilisateur est associé. Cet objet est utilisé pour trouver le superviseur et l’organisation actuels de l’utilisateur* (objet team)
* `ownerOfTeams` *tableau des objets d’équipe dont cet utilisateur est propriétaire. Cet objet est utilisé pour trouver les employés de l’utilisateur* (tableau d'objet team)
* `outstandingApprovals` *tableau des objets d’approbation nécessitant l’approbation ou le rejet de l’utilisateur* (tableau d'objet approval)
* `submittedApprovals` *tableau des objets d’approbation soumis par l’utilisateur* (tableau d'objet approval)
* `role` - *enum qui peut être soit `User` or `Admin` pour vérifier si l’utilisateur est un administrateur ou pas* (enum)

### Adresse

* `id` *identificateur d’objet d’adresse unique* (int)
* `streetAddress` (string)
* `city` (string)
* `province` (string)
* `postalCode` (string)
* `country` (string)

### Équipe

* `id` *identificateur d’objet de niveau organisationnel unique* (int)
* `nameEn` *Nom en anglais de l’équipe* (string)
* `nameFr` *Nom en français de l’équipe* (string)
* `descriptionEn` *Description en anglais de l’équipe* (string)
* `descriptionFr` *Description en français de l’équipe* (string)
* `colour` *couleur personnalisée pour l’équipe* (string)
* `avatar` *avatar facultatif pour l’équipe* (string)
* `organization` *objet organisation de niveau supérieur* (objet organization)
* `owner` *objet de profil de l’utilisateur répertorié comme propriétaire de cette équipe* (objet user)
* `members` *tableau d’objets utilisateur associés à ce niveau d’organisation* (tableau objet user)

### Organisation

* `id` *identificateur d’objet d’organisation unique* (int)
* `nameEn` *Nom en anglais de l’organisation* (string)
* `nameFr` *Nom en français de l’organisation* (string)
* `acronymEn` *Sigle en anglais de l’organisation* (string)
* `acronymFr` *Sigle en français de l’organisation* (string)
* `teams` *tableau d’équipes associées à cette organisation* (tableau team)
* `orgType` *type d’organisation (`Federal`, `Provincial`, `Municipal`, `University`, `College`, `Other`)* (enum)

### Approbation

### Objet d’approbation

* `id` *identificateur unique d’objet d’approbation* (int)
* `gcIDApprover` *objet de profil de l’utilisateur répertorié comme étant en mesure d’approuver ou de refuser cette demande* (objet profile)
* `gcIDSubmitter` *objet de profil de l’utilisateur qui a soumis la demande d’approbation* (objet profile)
* `requestedChange` *objet de changement demandé qui contient les changements demandés pour approbation* (objet requestedChange)
* `createdOn` *horodatage en temps Unix de la création de la date d’approbation* (string)
* `actionedOn` *horodatage de la dernière modification de l’approbation en temps Unix* (string)
* `deniedComment` *message à l’expéditeur si la demande est refusée par l’approbateur* (string)
* `status` *ENUM qui peut être soit `Pending`, `Approved`, ou `Denied` pour décrire l’état de l’approbation* (enum)
* `changeType` *ENUM qui peut être soit `Membership` ou `Informational` pour décrire la nature du changement demandé* (enum)

#### Objet de changement demandé

* `id` *identificateur d’objet de changement demandé unique (int)
* `name` *nom de l’utilisateur* (string)
* `email` *courriel de l’utilisateur* (string)
* `avatar` *url de l’avatar du profil de l’utilisateur* (url)
* `titleEn` *titre du poste en anglais de l’utilisateur* (string)
* `titleFr` *titre du poste en français de l’utilisateur* (string)
* `mobilePhone` *numéro de téléphone cellulaire* (string)
* `officePhone` *Numéro de téléphone au bureau* (string)
* `address` *adresse de travail de l’utilisateur* (objet address)
* `team` *objet équipe à laquelle l’utilisateur souhaite être associé* (objet team)
