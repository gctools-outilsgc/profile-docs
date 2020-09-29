---
path: "/profile/quick-start"
subnav: "1/Profile/Profil/2"
lang: "en"
title: "Quick Start"
---

<helmet>
<title> Profile - Quick Start</title>
</helmet>

# Quick Start

In this section we will quickly go over a few ways to get you up and running for your project to leverage PaaS. We will provide some links to resources regarding GraphQL clients that you can use depending on your project.

## Authentication

You are free to query data from profile as a service without authentication. If you would like access for your users to modify their data in PaaS you will need to authenticate your users through GCaccount. To create a GCaccount client for your app, please [contact the GCTools helpdesk](https://support.gccollab.ca/en/support/home).

## API Endpoint
The endpoint can be accessed via `paas.gccollab.ca`
```javascript
paas.gccollab.ca
```

## Recommended GQL Client Libraries

Here we will recommend some libraries to leverage the GQL API. You can visit the [Use Cases](/profile/usecases) section for examples on how to format your queries.

### Curated List of GQL Clients
Visit this link for a list of GQL Clients you can use depending on your project: 
* <a href="https://graphql.org/code/#graphql-clients" target="_blank">GQL Clients</a>

### Clients Used in GCTools Projects

#### ReactJS

The [Directory](https://profile.gccollab.ca/) leverages [React Apollo Client](https://www.apollographql.com/docs/react/)

#### PHP

GCcollab leverages [php graphql-client](https://github.com/euautomation/graphql-client) to query and mutate data in PaaS