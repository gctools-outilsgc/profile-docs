---
path: "/profile/avatars"
subnav: "1/Profile/Profil/5"
lang: "fr"
title: "Avatars"
---

<helmet>
<title> Profil - Avatars</title>
</helmet>

## Serveur des ressources avatar

Le profil en tant que service s’appuie sur [PictShare](https: //github.com/chrisiaut/pictshare) qui est une application multilingue d’hébergement d’images de sources ouvertes avec une API de redimensionnement et de téléchargement simple pour l’hébergement d’images profil avatar. PictShare est autorisé sous licence [Apache-2.0 License](https: //github.com/chrisiaut/pictshare/blob/master/LICENCE)

### Caractéristiques 

* API simple pour télécharger n’importe quelle image depuis des serveurs distants vers votre instance
* 100 % de fichiers – aucune base de données nécessaire
* Fonctions d’album simples avec support d’intégration
* Convertit gif en MP4 (beaucoup plus petit)
* Redimensionnement MP4
* PictShare supprime toutes les données exif pour que vous puissiez télécharger des photos de votre téléphone et toutes les balises GPS et informations de modèle de caméra sont effacées
* Fonctionnalités intelligentes [redimensionnement, filtre et rotation] (système-requête-#smart)
* Les doublons ne prennent pas d’espace. Si les mêmes images sont téléchargées deux fois, le deuxième téléversement sera lié au premier.
* Statistiques détaillées sur le trafic et la vue de vos images via [Pictshare stats](https://github.com/chrisiaut/pictshare_stats)

### Système de requête intelligent

Les images PictShare peuvent être modifiées après le téléchargement juste en modifiant l’URL. Cela fonctionne comme suit :

https: //base.domain/<options>/<image>

Exemple : `https: //avatar.gccollab.ca/100x100/negative/b260e36b60.jpg` vous montrera l’image téléchargée `b260e36b60.jpg` mais redimensionnez-la à 100x100 pixels et appliquez le filtre « négatif ». L’image d’origine sur le serveur de ressources restera intacte.

### Options disponibles

URL d’origine : `https://www.pictshare.net/b260e36b60.jpg`

Nota : Si une option a besoin d’une valeur, elle fonctionne comme suit : `optionname_value`. Par exemple : `pixelate_10`
S’il y a une option demandée qui n’est pas reconnue par PictShare, elle est simplement ignorée, donc cela fonctionnera : https: //www.pictshare.net/pictshare-is-awesome/b260e36b60.jpg et même cela fonctionnera : https: //www.pictshare.net/b260e36b60.jpg/how-can-this-Still/work/

### Redimensionnement

| Option | Paramètre | Exemple d’URL
| :---: | :---: | :--- |
| <width>x<height>     |   -aucun-      | `https://pictshare.net/20x20/b260e36b60.jpg`  |
| forcecesize | -none- | `https://pictshare.net/100x400/forcesize/b260e36b60.jpg `|


#### Rotation

| Option | Paramètre | Exemple d’URL|
| :---: | :---: | :---|
| gauche    | -aucun-  | `https://pictshare.net/left/b260e36b60.jpg` |
| droit  | -aucun-   | `https://pictshare.net/right/b260e36b60.jpg` |
| à l’envers | -aucun-  | `https://pictshare.net/upside/b260e36b60.jpg`  |

#### Filtres

| Option | Paramètre | Exemple d’URL|| 
| :---: | :---: | :---|
|      négatif        |      -aucun-      | `https://pictshare.net/negative/b260e36b60.jpg`          |
|      niveaux de gris       |      -aucun-      | `https://pictshare.net/grayscale/b260e36b60.jpg`         |
|      luminosité      |   -255 à 255    | `https://pictshare.net/brightness_100/b260e36b60.jpg`    |
|      détercterl’angle      |      -aucun-      | `https://pictshare.net/edgedetect/b260e36b60.jpg`        |
|       doux         |   -10 à 2048    |  `https://pictshare.net/smooth_3/b260e36b60.jpg`          |
|       contraste       |   -100 à 100    | `https://pictshare.net/contrast_40/b260e36b60.jpg`       |
|       pixéliser       |     0 à 100     | `https://pictshare.net/pixelate_10/b260e36b60.jpg`       |
|        flou          | -aucun- ou 0 à 5 | `https://pictshare.net/blur/b260e36b60.jpg`              |
|        sépia         |      -aucun-      | `https://pictshare.net/sepia/b260e36b60.jpg`             |
|       aiguiser        |      -aucun-      | `https://pictshare.net/sharpen/b260e36b60.jpg`           |
|       bandes         |      -aucun-      | `https://pictshare.net/emboss/b260e36b60.jpg`            |
|        frais          |      -aucun-      | `https://pictshare.net/cool/b260e36b60.jpg`              |
|        lumière         |      -aucun-      | `https://pictshare.net/light/b260e36b60.jpg`            |
|        aqua          |      -aucun-      | `https://pictshare.net/aqua/b260e36b60.jpg`              |
|        flou         |      -aucun-      | `https://pictshare.net/fuzzy/b260e36b60.jpg`            |
|        renforcer         |      -aucun-      | `https://pictshare.net/boost/b260e36b60.jpg`           |
|        gris          |      -aucun-      | `https://pictshare.net/gray/b260e36b60.jpg`              |

Vous pouvez également combiner autant d’options que vous le souhaitez. Même plusieurs fois! Vous voulez que votre image soit négative, redimensionnée, en nuances de gris, avec une luminosité accrue et l’annuler à nouveau? Pas de problème! https://pictshare.net/500x500/grayscale/negative/brightness_100/negative/b260e36b60.jpg`


### Sécurité et vie privée

* Aucune donnée exif n’est stockée sur le serveur, tous les JPG sont nettoyés pendant le téléchargement