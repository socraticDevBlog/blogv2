---
title: "Quelques fonctionnalités en JavaScript pour améliorer votre base de code (première partie)"
date: 2020-12-26
author: "SocraticDev"
image: /images/javascript-blog.png
tags:
  - programmation
is_archived: true
---

<!-- Modern js :
{pipeline operator, conditional chaining, console.time, spread operator, optional chaining, rest operators, zip, map, Object.fromEntries} -->

JavaScript, ce langage de programmation indispensable sur le web, suscite des passions. Il y a, d'une part, les adeptes qui s'alimentent aux nouvelles fonctionnalités, librairies et _frameworks_. De l'autre, les grognons et les 'impassibles' tolérant `JavaScript` et se limitant souvent à des frameworks et librairies éprouvées (comme `jQuery`).

Pour ma part, je me considère comme un arbitre impartial et absolument objectif (hep! hep!)

Sérieusement, ce langage interprété et non-typé nous mord constamment l'arrière-train en nous offrant

- des comportements surprenants;
- des performances frustrantes (compiler le blogue de `socraticDev` sous `Windows™` est un supplice de lenteur que je refuse);
- et une qualité de code souvent médiocre (ça c'est la faute des développeurs).

Avec la poussée de `TypeScript`, `ReactJS` et `nodeJS`, je suis loin de fermer la porte à prendre part à un projet utilisant `JavaScript` comme langage de programmation. Au contraire, j'ai récemment assisté (dans le confort de mon divan) à une conférence portant sur le `JavaScript` moderne : "Principles of Modern JavaScript: CodeMash" de Joe Morgan. En suivant la hiérarchie des principes guidant le développement moderne, le développeur originaire du Kansas🇺🇸 présente quelques fonctionnalités offertes en `JavaScript`.

##### Principes du code moderne (en ordre de priorité)

1. Prévisibilité;
2. Lisibilité;
3. Simplicité;
4. Flexibilité.

##### Outil de mesure simple et efficace : `console.time`

Beaucoup de nouvelles fonctionnalités permettent de simplifier le code : au lieu de déclarer une boucle ou juxtaposer quelques appels de fonctions, les concepteurs du langage ont intégré des fonctionnalités qui se chargent de tout. Or, ce "clé en main" se fait parfois au détriment de la performance.

Afin de mesurer la performance d'un bout de code, il suffit de faire précéder le _snippet_ de `console.time('je test X');` et ajouter `console.timeEnd('je test X');`. Cela imprimera le temps d'exécution du code en millisecondes.

> ```
> console.time('testing n² loop');
> for(var i=0; i<1000; i++) {
>   for (var j=0; j<1000; j++) {
>    // do something
>   }
> }
> console.timeEnd('testing n² loop');
> ```

> Résultat:
> `testing n² loop : 346 ms - chronomètre arrêté`

##### Pipeline operator

Les habitués de la ligne de commande (ex.: `bash`) vont immédiatement comprendre l'analogie avec l'opérateur pipe (`|`). Dans l'univers `gnu/linux` et `unix`, on utilise cet opérateur pour transmettre le résultat (output) d'une commande en guise de paramètre (input) à une autre commande.

"L'opérateur de pipeline JavaScript (`|>`) est utilisé pour diriger la valeur d'une expression dans une fonction. Cet opérateur rend les fonctions chaînées plus lisibles. Cette fonction est appelée à l'aide de l'opérateur (`|>`) et la valeur utilisée sur l'opérateur de pipeline est transmise en tant qu'argument à la fonction. Les fonctions sont placées dans l'ordre dans lequel elles opèrent sur l'argument."

> ```
> const double = (n) => n * 2;
> const increment = (n) => n + 1;
>
> // without pipeline operator
> double(increment(5)); // 12
>
> // with pipeline operator
> 5 |> increment |> double; // 12
> ```

Avant d'écrire n'importe quoi, j'ai tenté de tester ce nouvel opérateur. En vain ! Car ce nouvel opérateur n'est encore pris en charge par aucun navigateur. Il est à l'état de proposition mais peut-être utilisé via `Babel`, le compilateur de JavaScript. Cette dépendance peut être facilement installé via `npm`.

##### Chaînage optionnel (_optional chaining_)

L'opérateur de chaînage optionnel (`?`) est déjà connu et utilisé par les programmeurs utilisant `C#`. Cet opérateur permet de gérer les valeurs inexistantes ou nulles d'un objet. Toute action posée sur une valeur nulle génère une erreur en JavaScript. Afin de garder le code simple, on aime pouvoir enchaîner les actions une après l'autre :

> ```
> const perso = {
>  nom: 'Alice',
>  chat: {
>    nom: 'Dinah'
>  }
> };
> var nomChien = perso.chien.nom;
>
> Uncaught TypeError: perso.chien is undefined
> ```

Si le personnage possède bien un animal de compagnie, mais que cet animal est un chat, alors une erreur va briser l'exécution du code. Toutefois, grâce à l'opérateur de chaînage optionnel, on peut éviter l'erreur et obtenir une valeur `undefined` :

> `var nomChien = perso.chien?.nom;`

##### conclusion

Il n'y a aucun doute que la maîtrise du `JavaScript` moderne est un atout. Dans une seconde partie, nous poursuivrons l'exploration et discuterons de :

- `conditional chaining`;
- `spread` operator;
- `rest` operator;
- `zip`, `map`;
- et `Object.FromEntries`.

###### sources

[https://www.tiobe.com/tiobe-index/](https://www.tiobe.com/tiobe-index/)

[https://www.pluralsight.com/courses/codemash-session-33](https://www.pluralsight.com/courses/codemash-session-33)

[https://www.geeksforgeeks.org/javascript-pipeline-operator/](https://www.geeksforgeeks.org/javascript-pipeline-operator/)
