/*------------------------FONCTIONS SUR LES TABLEAUX---------------------*/

// Créer un tableau d'animaux ('chat', 'chien', 'tigre', 'lion', 'requin', 'panda')
const animals = ["chat", "chien", "tigre", "lion", "requin", "panda"];

// Ajouter un ou plusieurs éléments à la fin d'un tableau
//  Renvoie la nouvelle longueur du tableau
const response = animals.push("dauphin", "loup");
console.log(response);

//  Suprimer le dernier mot du tableau
// Renvoie l'élement suprimé
// response = animals.pop();
// console.log(response);

//  Ajouter un ou plusieurs éléments au début tableau
// Renvoie la nouvelle longueur du tableau
// response = animals.unshift("hiboux");
// console.log(response);

//  Suprimer le premier element du tableau
// Renvoie l'élement suprimé
// response = animals.shift();
// console.log(response);

// Réorganise le tabeau de la fin vers le début
animals.reverse();
console.log(animals);

//  Modifier ou ajouter ou supprimer un élement dans un tableau
// Ajouter un 'raton laveur' en deuxieme position
animals.splice(1, 0, "raton laveur");
console.log(animals);

// Modifier chien en 'aigle'
animals.splice(1, 0, "aigle");
console.log(animals);

//  Supprimer
animals.splice(2, 0);
console.log(animals);

//  for (..of..) {} permet de parcourir les elements d'un objet itérable (ex: tableau , string)

//  sur le tableau animals faire une boucle for() pour afficher tous les elements du tableau
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//  sur le tableau animals faire une boucle for (...of...) pour afficher tous les elements du tableau
for (let animal of animals) {
  console.log(animal);
}

// foreach() {} est une méthode javascript qui permet d'itérer sur les elements d'un tableau
// animals.forEach(function (animal).........

// Déclarer un tableau contenant (Paris, Berlin, Rome, Londres, Madrid)
/*

Créer une fonction qui prend en paramètre un tableau
Retire Madrid
Ajout au debut Vienne
Rome devient ALger
Retourne la taille du tableau 

*/

// const cities = ['Paris', 'Berlin', 'Rome', 'Londres', 'Madrid'];
// animals.splice(4, 0);
// console.log(cities);

// response = cities.unshift("Vienne");
// console.log(response);

const capitalCities = ["Paris", "Berlin", "Rome", "Londres", "Madrid"];

const modifyArray = () => {
  capitalCities.pop();
  capitalCities.unshift("Vienne");
  capitalCities.splice(3, 2, "Alger");

  return Array.length;
};

const capitalCitiesLength = modifyArray(capitalCities);
