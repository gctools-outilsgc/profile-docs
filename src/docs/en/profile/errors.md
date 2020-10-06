---
path: "/profile/errors"
subnav: "1/Profile/Profil/8"
lang: "en"
title: "Errors"
---

<helmet>
<title> Profile - Errors </title>
</helmet>

# Error Codes
Here are error codes you may encounter. If you are encountering other errors please [refer to the apollo docs](https://www.apollographql.com/docs/apollo-server/data/errors/).

|Error Code |Description |
| --------- | ---------- |
| E1ProfileNotExist | Profile does not exist |
| E2TeamNotExist | Team does not exist |
| E3OrgNotExist | Organization does not exist |
| E4ApprovalNotExist | Approval does not exist |
| E6NotAuthorized | Not authorized |
| E7CircularRelationship | Selected supervisor would create a circular reporting relationship |
| E8TokenProfileNotExist | Profile does not exist |
| E9MustBeAuthenticated | Must be authenticaticated |
| E10MustBeOwnerOrSupervisor | Must be owner or supervisor of profile to modify |
| E11MustBeTeamOwner | Must be owner of team to modify |
| E12ApprovalOnlyRevokedBySubmitter | Approvals can only be revoked by the submitter |
| E13MustBeSupervisorInfo | Must be supervisor of user to modify informational approval |
| E14MustBeSupervisorTransfer | Must be supervisor of the team to accept transfer request |
| E15MustBeApprover | Must be approver on approval to modify |
| E16AddressFieldMissing | All address fields are required |