---
path: "/account/openid"
subnav: "0/Account/Compte/3"
lang: "en"
title: "OpenID"
---

<helmet>
<title> GCaccount - OpenID </title>
</helmet>

# OpenID

We talk about how we and users can use the openid provider

## Endpoints

| Endpoints |Description |
| --------- | ---------- |
| `/openid/.well-known/openid-configuration` | See OpenID configuration |
| `/openid/authorize` | End-user can authorize an application for use |
| `/openid/token` | Post an OAuth 2.0 grant to obtain ID and/or access token |
| `/openid/userinfo` | Retrieve profile information for the logged-in user |
| `/openid/end-session` | Sign out user |
| `/openid/introspect` | Validate an access token |
| `/openid/jwks` | Retrieve the public JSON Web KEy to verify the signature of an issued token |

## OpenID scopes

To learn more about scopes provided by OpenID Connect, please refer to the [OpenID documentiation](https://openid.net/specs/openid-connect-basic-1_0.html#Scopes).

## Custom scopes and claims

GCaccount has custom scopes and claims for you to take advantage of.

| Scope | Claims |
| --------- | ---------- |
| `titles` | This scope gives access to the `titleEn` and `titleFR` claims |