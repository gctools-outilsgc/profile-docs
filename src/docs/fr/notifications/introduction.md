---
path: "/notifications/introduction"
subnav: "1/Notifications/Notifications/1"
lang: "fr"
title: "Introduction"
---

<helmet>
<title> Notifications - Introduction </title>
</helmet>

## Introduction

Dans le cadre d’un système de microservice décentralisé, la Notification en tant que service (NAAS) permet des notifications en temps réel, tant par application que par vue consolidée. Par exemple, un composant de navigation commun réparti entre de nombreuses applications sur une plateforme peut afficher des notifications aux utilisateurs non seulement pour l’application actuelle, mais aussi pour toutes les applications liées à Notification en tant que service.

Le système NAAS peut stocker divers éléments de métadonnées qu’on retrouve couramment dans les notifications, comme les niveaux d’action, les types de notification par courriel et en ligne, l’auteur ou l’action qui a déclenché la notification.

## Pile technologique

Le système Notification comme service est conçu sur le serveur Apollo et exploite Prisma et PostgreSQL pour le stockage de données.

* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

## Communication avec d’autres services

Le système Notification comme service écoute pour déterminer des événements particuliers sur la file d’attente des messages et déclenche ensuite la création d’un objet de notification pour les applications sur la File d’attente des messages. L’interface API GraphQL peut également créer des notifications pour les applications qui ne se trouvent pas dans la file d’attente des messages. Par exemple, lorsqu’un utilisateur indique qu’un autre utilisateur est son superviseur par à l’aide de Profil comme service, un message est créé et envoyé au moyen de la file d’attente des messages précisant que l’utilisateursuperviseur doit agir pour approuver ou refuser la demande de l’utilisateur. Le système Notification comme service écoute cet événement, ainsi que d’autres applications possibles, et déclenche la création d’un objet de notification avec l'information fournie par la file d’attente des messages.

## Authentification et autorisation

Le système Notification comme service utilise le jeton d’accès à GCcompte pour vérifier que seules les personnes et les applications autorisées peuvent avoir accès à l’information et la modifier. Le jeton d’accès est la clé de toutes les applications de l’espace de travail numérique, ouvert et accessible et contient des renseignements propres à l’utilisateur et à l’application qui tente d’accéder aux données. Ces données permettent de déterminer si l’utilisateur et/ou l’application peuvent avoir un accès permettant de lire ou de modifier l’information.
