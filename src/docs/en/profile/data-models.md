---
path: "/profile/data-models"
subnav: "1/Profile/Profil/2"
lang: "en"
title: "Data Models"
---

<helmet>
<title> Profile - Data Models </title>
</helmet>

## Object Data Models

### Profile

* `gcId` *a unique user identifier* (string)
* `name` *user's name* (string)
* `email` *user's email* (string)
* `avatar` *url to user's profile avatar* (url)
* `titleEn` *user's English position title* (string)
* `titleFr` *user's French position title* (string)
* `mobilePhone` *mobile phone number* (string)
* `officePhone` *office phone number* (string)
* `address` *user's work address* (address object)
* `team` *team object the user is associated to.  This object is used to find the user's current supervisor and organization* (team object)
* `ownerOfTeams` *array of team objects that have this user as its owner. This object is used to find the user's employees* (team object array)
* `outstandingApprovals` *array of approval objects that require the user's approval or rejection* (approval object array)
* `submittedApprovals` *array of approval objects that have been submitted by the user* (approval object array)
* `isAdmin` - *enum that can be either `User` or `Admin` to check if user is an admin or not* (enum)

### Address

* `id` *unique address object identifier* (int)
* `streetAddress` (string)
* `city` (string)
* `province` (string)
* `postalCode` (string)
* `country` (string)

### Team

* `id` *unique organizational tier object identifier* (int)
* `nameEn` *English name of team* (string)
* `nameFr` *French name of team* (string)
* `descriptionEn` *English description of team* (string)
* `descriptionFr` *French description of team* (string)
* `colour` *custom colour for team* (string)
* `avatar` *optional avatar for team* (string)
* `organization` *top level organization object* (organization object)
* `owner` *profile object of the user who is listed as the owner of this team* (user object)
* `members` *array of user objects who are associated with this org tier* (user object array)

### Organization

* `id` *unique organization object identifier* (int)
* `nameEn` *English name of organization* (string)
* `nameFr` *French name of organization* (string)
* `acronymEn` *English acronym of the organization* (string)
* `acronymFr` *French acronym of the organization* (string)
* `teams` *array of teams that are associated with this organization* (team array)
* `orgType` *type of organisation (`Federal`, `Provincial`, `Municipal`, `University`, `College`, `Other`)* (enum)

### Approval

#### Approval Object

* `id` *unique approval object identifier* (int)
* `gcIDApprover` *profile object of the user who is listed as being able to approve or deny this request* (profile object)
* `gcIDSubmitter` *profile object of the user who has submitted the approval request* (profile object)
* `requestedChange` *requested change object that contains the requested changes for approval* (requestedChange object)
* `createdOn` *timestamp in unix time of creation date of approval* (string)
* `actionedOn` *timestamp of the last modification of the approval in unix time* (string)
* `deniedComment` *message to submitter if the request is denied by the approver* (string)
* `status` *enum that can be either `Pending`, `Approved`, or `Denied` to describe the state of the approval* (enum)
* `changeType` *enum that can be either `Membership` or `Informational` to describe the nature of the change being requested* (enum)

#### Requested Change Object

* `id` *unique requestedChange object identifier(int)
* `name` *user's name* (string)
* `email` *user's email* (string)
* `avatar` *url to user's profile avatar* (url)
* `titleEn` *user's English position title* (string)
* `titleFr` *user's French position title* (string)
* `mobilePhone` *mobile phone number* (string)
* `officePhone` *office phone number* (string)
* `address` *user's work address* (address object)
* `team` *team object the user would like to be associated to* (team object)
