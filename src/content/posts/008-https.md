---
title: Jamais sans mon HTTPS
date: 2019-11-30
author: "SocraticDev"
image: /images/https.jpg
tags:
  - web
  - sécurité
is_archived: false
---

Le web est propulsé par le protocole HTTP depuis sa création. Cet acronyme signifie HyperText Transfer Protocol. Ce protocole appartient à la couche applicative et utilise le protocole TCP de la couche transport. C'est-à-dire que le 'processus électronique' utilisant HTTP est une application logicielle. Le plus souvent un navigateur web (Firefox, Chrome, Safari, etc.). Et quand on parle de TCP au niveau transport cela signifie qu'il s'agit de transmissions de données 100% garanties entre deux systèmes. Il n'y aura aucune perte de données pendant la transmission. Le protocole TCP , s'assure que tous les octets transmis furent bien reçus à l'aide d'une séquence de confirmations entre le client et le serveur :

    - serveur : 'je viens de t'envoyer les données "abc"'
    - client : 'je confirme que j'ai bien reçu les données "abc"'
    - serveur : 'je confirme que tu as confirmé avoir bien reçu les données "abc". On continue !'

Toutefois, le protocole HTTP n'est pas sécuritaire. N'importe qui s'y connaissant un peu en informatique est en mesure de consulter les informations circulant sur le réseau entre le serveur et le client. Imaginez que vous transmettez votre mot de passe à un site dont l'URL est 'http://www.mabanque.com' : n'importe quel utilisateur d'Internet (_hacker_) peut intercepter ce mot de passe. Imaginez que vous vivez sous une dictature et que vous consultez une page web traitant des droits de la personne : il est fort probable que votre gouvernement vous inscrive à sa liste de citoyens suspects. Il existe des dizaines d'autres cas problématiques où l'utilisation du protocole HTTP pourrait mettre votre sécurité et votre bien-être en péril.

## HTTPS est la solution

Le protocole HTTPS consiste en l'ajout d'une couche de chiffrement aux transmissions de données sur le réseau. Ce mode de transmission chiffrée fut d'abord mis sur pied pour les transactions avec les sites de commerces en ligne et autres types de transactions financières électroniques. Il y eut d'abord le protocole de chiffrement SSL (secure socket layer) et aujourd'hui nous utilisons une version encore plus sécuritaire : TLS (Transport security layer). Il faut noter que même si les techniciens utilisent encore le mot 'SSL', il s'agit bien de la technologie TLS. C'est une manière de parler communément acceptée : il ne faut jamais corriger quelqu'un qui dit 'SSL' au lieu de 'TLS' !

Le premier avantage de HTTPS est de garantir électroniquement l'identité du site. Grâce au certificat d'authentification émis par une autorité fiable, nous pouvons nous fier que le serveur qui répond à l'adresse https://mabanque.com est bien celui de votre banque et non pas un faux site hébergé au Nigéria ...

Ensuite, le protocole HTTPS ajoute une couche de chiffrement aux transmissions de données. Contrètement, un _hacker_ peut voir que vous vous connectez au site web de votre banque. Mais une fois rendu sur le site sécurisé, il ne sera pas en mesure de voir votre mot de passe ou le contenu de vos transactions financières.

Depuis 2017, Firefox et Chrome affiche une page de mise en garde lorsqu'ils détectent que des données personnelles sont transmises à des sites non-sécurisés. De plus, le protocole HTTPS s'est rapidement démocratisé et répandu aux réseaux sociaux ainsi qu'aux sites web non-transactionnels voulant bénéficier des avantages du standard HTTP/2 (prononcé H-T-T-P bis) : réduction de la latence des transmissions par la compression des en-têtes, utilisation du 'server push', multiplexing des requêtes TCP sur la même connexion, etc.

## HTTPS everywhere : le plugin à ajouter à son navigateur

Malgré l'omniprésence du protocole HTTPS, il existera toujours des situations où votre navigateur se connectera en mode non-sécurisé à un site web. Cela arrive quand le site web offre aussi bien une adresse débutant par HTTP que par HTTPS. Comme le protocole HTTPS demande légèrement plus d'effort de la part du navigateur, il sautera sur l'occasion d'utiliser l'option non-sécurisée du site. Aussi, la plupart des sites web offrent du contenu provenant de sites tiers. Il arrivera que vous échangerez des transmissions avec des serveurs non-sécurisés même si vous êtes sur un site sécurisé.

Le plugin 'HTTPS:// Everywhere' est soutenu par l'Electronic Frontier Foundation [https://www.eff.org/fr/https-everywhere](https://www.eff.org/fr/https-everywhere). Il s'agit simplement d'un mécanisme intelligent s'intégrant à votre navigateur qui réécrit l'url (url rewrite) pour forcer une connexion au protocole HTTPS. Le plugin affiche une page informative conviviale quand le site désiré n'offre pas la possibilité d'une transmission chiffrée. L'utilisateur doit donc décider s'il désire poursuivre sa navigation sur un site non-chiffré ou pas.

Bien sûr, les navigateurs indiquent dans la barre d'adresse si la connexion est sécurisée à l'aide de l'icône d'un cadenas 🔒 ou d'une couleur particulière. Toutefois, il est irréaliste de demander à l'utilisateur de vérifier cette information en tout temps. Le plugin est utile car il effectue cette vérification automatiquement à chaque transmission sur Internet. Ainsi, il nous assure qu'aucun _hacker_ n'ait altéré le contenu d'un site ou ne tente de récupérer des informations confidentielles transmises à un site.

Bien sûr, le protocole HTTPS n'est pas à toute épreuve. Un _hacker_ ou un gouvernement totalitaire sera toujours en mesure de savoir quels sites vous visitez. Il existe même des tactiques pour découvrir avec une bonne précision le contenu que vous consommez ainsi que la nature de vos interactions avec un site sécurisé. Dans ce cas, pour encore plus de confidentialité, il faudra vous tourner vers le réseau TOR : [https://www.torproject.org/](https://www.torproject.org/).
