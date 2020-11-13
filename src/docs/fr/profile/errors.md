---
path: "/profile/errors"
subnav: "1/Profile/Profil/8"
lang: "fr"
title: "Erreurs"
---

<helmet>
<title> Profil - Erreur</title>
</helmet>

# Codes d’erreur
Voici les codes des erreurs qui pourraient survenir. Si d’autres erreurs surviennent,[veuillez consulter les
documents d’Apollo](https://www.apollographql.com/docs/apollo-server/data/errors/).

|Codes d’erreur |Description |
| --------- | ---------- |
| E1ProfileNotExist | Profil n'existe pas |
| E2TeamNotExist | Équipe n'existe pas |
| E3OrgNotExist | Organisation n'existe pas |
| E4ApprovalNotExist | Approbation n'existe pas |
| E6NotAuthorized | Non authorisé(e) |
| E7CircularRelationship | Sélecionner le superviseur créerait une relation hiérarchique circulaire |
| E8TokenProfileNotExist | Profil n'existe pas |
| E9MustBeAuthenticated | Doit être authentifié |
| E10MustBeOwnerOrSupervisor | Doit être propriétaire ou superviseur du profil pour mofidier |
| E11MustBeTeamOwner | Doit être propriétaire de l'équipe pour modifier |
| E12ApprovalOnlyRevokedBySubmitter | L'approbation peut être révoquée par le demandeur |
| E13MustBeSupervisorInfo | Doit être le superviseur de l'utilisateur pour modifier l'information de l'approbation |
| E14MustBeSupervisorTransfer | Doit être le superviseur de l'équipe pour accecpter la demande de transfert |
| E15MustBeApprover | Doit être l'approbateur de l'approbation pour pouvoir modifier. |
| E16AddressFieldMissing | Tous les champs de l'adresse sont obligatoires |