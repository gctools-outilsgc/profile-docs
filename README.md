# README

([Français](#système-de-conception-aurora))

### How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md)

**Do not post any security issues on github!** Security vulnerabilities must be reported by creating a ticket with the Digital Collaboration Division [help desk](https://gccollab.ca/help/knowledgebase).

### License

Unless otherwise noted, the source code of this project is covered under Crown Copyright, Government of Canada, and is distributed under the [MIT licence](LICENSE).

## Install

Download this repo and move into it, then run:

```sh
yarn
```

To start your local dev env:

```sh
yarn run develop
```

## Deploy

To push your site to gh-pages:

```sh
yarn run deploy
```

## Adding Content

### Adding Documentation

To add documentation in the form of markdown files, you need to add the markdown files for **both languages** in the section of your choice:

```
src/docs/en/{yourSection}/yourEnglishFile.md
src/docs/fr/{yourSection}/yourFrenchFile.md
```

At the top of the file, you will need to add a small section that provides context. For example, at the top of my `src/docs/en/component/badges.md`...

```
---
path: "/component/badges"
subnav: "1/Standard/Standard/2"
lang: "en"
title: "Badges"
---
```

- The `path` should be the **same** for both English and French file.
- The `subnav` is the `order_of_the_subnav`/`subnav_english_name`/`subnav_french_name`/`order_in_the_subnav`. It should be the **same** in both files.
- The `lang` should be either `en` or `fr`. 
- The `title` will be added in the side navigation of the section. It should be in French in the French file.

Now the file should be processed by Gatsby and should appear at the `path` specified in both frontmatters.

The dynamic side navigation should show your new documentation section when you run the `yarn run develop` command. If it does not appear on the path, try deleting the `public` and `.cache` folder before running the `yarn run develop` command again.

When you see that your documentation has appeared in both French and English, you may commit your changes and push upstream. Run the `yarn run deploy` command to update the live site.

**If you do not interact with commands when working with a github project**, you can add your files to a new branch and it will be tested and merged. 

______________________

Voir [CONTRIBUTING.md](CONTRIBUTING.md)

**Ne publiez aucun problème de sécurité sur github!** Les vulnérabilités de sécurité doivent être signalées en créant un billet avec le [Bureau d'aide](https://gccollab.ca/help/knowledgebase) de la Division de la collaboration numérique.

### Licence

Sauf indication contraire, le code source de ce projet est protégé par le droit d'auteur de la Couronne du gouvernement du Canada et distribué sous la [licence sélectionnée](LICENSE).

## Installation

Téléchargez ce référentiel, ouvrez-le, puis exécutez :

```sh
yarn
```

Pour démarrer votre environnement de développement local :

```sh
yarn run develop
```

## Déploiement

Pour pousser votre site vers les pages GitHub :

```sh
yarn run deploy
```

## Ajout de contenu

### Ajouter des documents

Pour ajouter des documents sous forme de fichiers Markdown, vous devez ajouter les fichiers Markdown pour les deux langues dans la section de votre choix :

```
src/docs/en/{yourSection}/yourEnglishFile.md
src/docs/fr/{yourSection}/yourFrenchFile.md
```

En haut du fichier, vous devrez ajouter une petite section qui fournit du contexte. Par exemple, au sommet de mon  `src/docs/en/component/badges.md`...

```
---
path: "/component/badges"
subnav: "1/Standard/Standard/2"
lang: "en"
title: "Badges"
---
```

- Le `path` doit être le **même** pour les fichiers anglais et français.

- La `subnav` est`order_of_the_subnav`/`subnav_english_name`/`subnav_french_name`/`order_in_the_subnav`. Il doit être le **même** dans les deux fichiers.
- La `lang` doit être  `en` ou `fr`. 
- Le `title` sera ajouté dans la navigation latérale de la section. Il doit être en français dans le fichier en français.

Maintenant, le fichier doit être traité par Gatsby et devrait apparaître sur le  `path` indiqué dans les deux préliminaires.

La navigation latérale dynamique doit afficher votre nouvelle section de documentation lorsque vous exécutez la commande `yarn run develop`. . Si elle n’apparaît pas sur le chemin d’accès, essayez de supprimer le fichier `public` et `.cache` avant d’exécuter la commande  `yarn run develop` à nouveau.

Lorsque vous voyez que vos documents sont disponibles en français et en anglais, vous pouvez apporter des changements et pousser en amont. Exécutez la commande  `yarn run deploy` pour mettre à jour le site déjà en ligne.

**Si vous n’interagissez pas avec les commandes dans le cadre d’un projet GitHub**, vous pouvez ajouter vos fichiers à une nouvelle branche, qui les analysera et les fusionnera.

