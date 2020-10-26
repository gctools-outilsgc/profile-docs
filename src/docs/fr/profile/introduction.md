---
path: "/profile/introduction"
subnav: "1/Profile/Profil/1"
lang: "fr"
title: "Introduction"
---
<helmet>
<title> Profil - Introduction </title>
</helmet>

# Introduction

À l’instar d’autres services comme Google, Facebook et Github, l’outil Profi en tant un service (PAAS) permet une approche « une fois suffit » pour établir des renseignements communs sur les profils sur toutes les applications de l’espace numérique ouvert et accessible. Profil en tant que service tire également parti de la plateforme d’ouverture de session GCcompte.

PAAS peut actuellement stocker le nom, le courriel, l’avatar, le titre, les coordonnées ainsi que les renseignements sur l’organisation d’un utilisateur. Nous avons construit ce service autour de la prémisse que l’utilisateur est la source faisant autorité en ce qui concerne ses propres renseignements. Le profil en tant que service peut quand même recevoir des renseignements provenant d’autres sources.  L’utilisateur doit valider les changements par toutes les sources de renseignements externes (RHGC, PeopleSoft, etc.) avant qu’ils ne prennent effet.

## Service endpoint

Vous pouvez accéder au service endpoint à l’aide de `paas.gccollab.ca`

## Pile technologique

L’architecture du profil en tant que service est fondée sur le serveur Apollo et ce service tire parti de Prisma et PostgreSQL pour le stockage de données. Ces technologies ont été choisies après avoir effectué des tests de performance d’autres cadres tels que Python Django.

* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Communication avec d’autres services

Le profil en tant que service écoute les événements particuliers de la File d’attente des messages qui déclenchent ensuite des fonctions particulières. Par exemple, lorsqu’un nouvel utilisateur valide son compte sur GCcompte, un message est envoyé à la File d’attente des messages pour indiquer qu’il y a un nouvel utilisateur et il fournit les renseignements qui ont été utilisés pendant l’inscription. Le profil en tant que service écoute cet événement, ainsi que d’autres applications, et déclenche la création automatique du profil de cet utilisateur avec les renseignements qui ont été utilisés pendant l’inscription à GCcompte.

## Authentification et autorisation

Le service Profil s’appuie sur le jeton d’accès à GCcompte pour s’assurer que les renseignements seules les personnes autorisées peuvent accéder à ces renseignements et les modifier. Le jeton d’accès est la clé de toutes les applications de l’espace numérique ouvert et accessible et contient des renseignements propres à l’utilisateur et à l’application qui tentent d’accéder aux données. Ces données sont ensuite utilisées pour déterminer si l’utilisateur et/ou l’application peuvent avoir accès pour lire ou modifier les renseignements.