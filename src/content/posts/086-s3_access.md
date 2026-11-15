---
title: "S3 est-il le nouveau MS Access ?"
date: 2022-02-05
author: "SocraticDev"
image: /images/s3-new-access.png
tags:
  - twitter
  - infonuagique
is_archived: true
---

En perdant mon temps sur twitter aujourd'hui, j'ai lu ce tweet de l'experte en
cybersécurité Alyssa Miller:

> "Just remember S3 is the new MS Access."

"Souvenez-vous que S3 est le nouveau MS Access" (_traduction libre_)

## Microsoft Access

"Microsoft Access est une base de données relationnelle éditée par Microsoft. Ce logiciel fait partie de la suite Microsoft Office.

MS Access est composé de plusieurs programmes : le moteur de base de données Microsoft Jet, un éditeur graphique, une interface de type Query by Example pour interroger les bases de données, et le langage de programmation Visual Basic for Applications."

## AWS S3

"Amazon S3 (Amazon Simple Storage Service) est un site d'hébergement de fichiers proposé par Amazon Web Services. Amazon S3 propose des services de stockage à travers des services Web (REST, SOAP et BitTorrent). "

## explication

Sur quelles similitudes Alysa Miller se base-t-elle pour dire que `S3` serait le nouveau `MS Access` ?

L'explication la plus plausible repose, à brûle-pourpoint, sur la simplicité
d'utilisation et leur potentiel de séduction envers public non-technique ; des
utilisateurs qui ne sont pas des programmeurs professionnels.

`Access` offre une interface graphique permettant à un non-initié de créer et utiliser
une base de données relationnelle. Or, cette approche séduisante mène à d'incalculable
problèmes lorsque des besoins plus complexes doivent être répondus.

Dans l'écosystème infonuagique d'`AWS`, le bucket `S3` peut être utilisé à toutes
les sauces. Pour contenir aussi bien des petits que des gros fichiers. Pour contenir les fichiers source
d'un site web, etc.

En lisant les commentaires sur Twitter, j'ai appris que `AWS` propose
même un langage de requête semblable à `SQL` pour effectuer des recherches dans le contenu
d'un bucket `S3`. Alors, pourquoi ne pas utiliser des buckets `S3` comme base de données au lieu de véritables
systèmes de gestion de base de données éprouvés ?!?🤦

## commentaires des internautes

| user       | tweet                                                                                                                                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| @webguy    | "Sort of - many companies and libraries support any provider and all using the same S3 API or have support for it"                                                                                                                                                                       |
| @michoo_42 | "I agree and I would go further: aws is more like the old dying oracle ( closed, need certification, expansive,…). Of course is not the same technology but it’s the same capitalist system. That’s why I enjoy kube (with nuances)… it’s kind agnostic and you can choose your providr" |
| @lispcat   | "Prone to spontaneously corrupting its data, and to deceiving laypeople into thinking this database thing is easier than those so-called pros try to tell us?"                                                                                                                           |
| @dotyousra | "Yeah let's just build our data lake on s3 who needs a datawarehouse anyways _internal screaming_"                                                                                                                                                                                       |

## conclusion

Dans le cadre de mon travail,
j'ai récemment opté pour l'utilisation d'un bucket `S3` comme solution rapide et
facile pour résoudre un besoin d'affaires. À la lumière de mon investigation ici, je ne regrette pas mon choix. Les
faiblesses de mon choix furent expliquées et le choix fut fait de façon éclairé.

Néanmoins, je suis heureux d'avoir rencontre ce tweet qui m'a poussé à réfléchir
un peu plus au sujet d'une ressource `cloud` centrale dans tout système évoluant
dans l'écosystème d'`AWS`.

À suivre.🕴️

##### sources

https://twitter.com/AlyssaM_InfoSec/status/1489775470379999232

https://web.archive.org/web/20220205014301/https://twitter.com/AlyssaM_InfoSec/status/1489775470379999232

https://www.manning.com/books/cyber-security-career-guide?utm_source=alyssa&utm_medium=affiliate&utm_campaign=book_miller3_cyber_5_21_21&a_aid=alyssa&a_bid=c3f2d52f

https://www.wikiwand.com/fr/Microsoft_Access

https://www.wikiwand.com/fr/Amazon_S3

https://aws.amazon.com/blogs/storage/querying-data-without-servers-or-databases-using-amazon-s3-select/
