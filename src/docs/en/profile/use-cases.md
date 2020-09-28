---
path: "/profile/usecases"
subnav: "1/Profile/Profil/7"
lang: "en"
title: "Use Cases"
---

<helmet>
<title> Profile - Use Cases </title>
</helmet>

# Use Cases

Scenarios and examples we have identified as opportunities to integrate profile as a service data in your app or project.

## Get Basic Profile Information
If your project requires basic user data you can query PaaS by either the user’s `gcID` or their name.

### Get job title, email, phone, avatar
```javascript
query {
  profiles(gcID: ID) {
    name
    email
    mobilePhone
    officePhone
    titleEn
    titleFr
    avatar
  }
}
```

## Get Organisations / Department Data
Perhaps your project requires data around organisations and departments. You can grab a user’s current organisation or all of the teams and users under an organisation. (Note this data may not be up to date as it’s up to the user to fill out this information)

### Get a user's current organisation
```javascript
query {
  profiles(gcID: ID) {
    team {
      organization {
        id
        nameEn
        nameFr
      }
    }
  }
}
```

### Get all users in an organisation
```javascript
query {
	organizations (id: ID) {
    id
    nameEn
    teams {
      id
      nameEn
      members {
        gcID
        name
      }
    }
  }
}
```

## Get Supervisor, Team and Teammates
You are able to see a user’s current supervisor, as well as the teams and teammates of users.
### Get a user's current supervisor
```javascript
query {
  profiles(gcID: ID) {
    team {
      owner {
        gcID
        name
      }
    }
  }
}
```
### Get a list of teams and members a user supervises
```javascript
query {
  profiles(gcID: ID){
    ownerOfTeams {
      id
      nameEn
      members {
        gcID
        name
      }
    }
  }
}
```
## Get Office Location
### Get a user’s office location
```javascript
query {
  profiles(gcID: ID) {
    address {
      streetAddress
      city
      province
      postalCode
      country
    }
  }
}
```