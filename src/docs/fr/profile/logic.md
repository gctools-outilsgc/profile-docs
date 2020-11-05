---
path: "/profile/logic"
subnav: "1/Profile/Profil/6"
lang: "fr"
title: "Logique d'entreprise"
---

<helmet>
<title> Profil - logique opérationnelle</title>
</helmet>

## Logique opérationnelle

L’utilisateur est la source de vérité pour l’information, à l’exception des champs qui nécessitent une validation supplémentaire, comme l’organisation, l’équipe ou le superviseur de l’utilisateur. L’utilisateur propriétaire de l’équipe qu’un utilisateur tente de joindre doit approuver sa demande. Jusqu’à ce que l’approbation soit traitée, l’utilisateur continuera de faire partie de l’équipe ou de l’organisation dont il fait actuellement partie.

### Superviseur

Il n’y a pas de validation externe du statut de « supervision ». On suppose plutôt qu’un utilisateur est un superviseur lorsqu’un seul utilisateur l’identifie comme son superviseur, ce qui crée une relation hiérarchique entre les deux utilisateurs.

#### Équipes

Les équipes sont la façon dont les utilisateurs sont regroupés dans les relations hiérarchiques et permettent la création et l’affichage dynamiques des graphiques des relations hiérarchiques.
Il est important de noter que la relation hiérarchique avec les équipes suivra l’utilisateur d’une équipe à l’autre ou d’une organisation à l’autre, à moins qu’elle ne soit explicitement transférée à un autre utilisateur.

**Vous pouvez :**
* Créer des équipes
* Modifier vos équipes
* Supprimer vos équipes
* Transférer vos équipes

**Vous ne pouvez pas :**
* Créer les équipes de quelqu’un d’autre
* Modifier les équipes de quelqu’un d’autre
* Supprimer les équipes de quelqu’un d’autre
* Supprimer votre équipe par défaut

#### Approbations

**Vous pouvez :**
* Approuver ou refuser les demandes d’adhésion à une équipe que vous possédez.
* Approuver ou refuser les demandes d’information des champs d’information de l’utilisateur déclarant nécessitant une validation

**Vous ne pouvez pas :**
* Approuver une autre demande, à l’exception des utilisateurs qui ont une relation hiérarchique directe avec vous

### Utilisateur

Tout le monde est un utilisateur, même s’il a un statut de supervision et tout utilisateur doit veiller à ce que ses renseignements soient à jour.

### Superviseur

**Vous pouvez :**
* Sélectionner un autre utilisateur comme superviseur. La relation hiérarchique ne sera créée qu’une fois que l’autre utilisateur aura approuvé votre demande.

**Vous ne pouvez pas :**
* Sélectionner un autre utilisateur comme superviseur sans son consentement.

#### Organisation

Par défaut, tout le monde fait partie de l’« Organisation mondiale » lorsqu’un profil est créé. Cette organisation par défaut contient le profil de toute personne qui n’est pas directement associée à une organisation déterminée.

**Vous pouvez :**
* Joindre directement une organisation sans identifier un superviseur. Vous serez ainsi membre de l’équipe par défaut de l’organisation.
* Joindre une organisation en identifiant un autre utilisateur comme votre superviseur qui fait partie de l’organisation que vous souhaitez oindre

**Vous ne pouvez pas :**
* Créer une organisation
* Identifier un utilisateur comme votre superviseur, mais ne pas faire partie de son organisation
* Modifier une organisation
* Supprimer une organisation