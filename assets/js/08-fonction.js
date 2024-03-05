/*------------------------FONCTIONS---------------------*/

/*
un fonction est un bloc de code réutilisable qui peut etre appelé à partir d'autres parties de votre code pour effectuer une tâche spécicifique.
Les fonctions sont un myen utile de segmenter votre code en taches plus petites
et plus facile à gérer,

elles permettent de réutiliser le meme code plusieurs fois sans avoir à le copier coller
*/

// Déclaration de fonction
function hello() {
  let firstName = "issa";
  let lastName = "KONTE";
  console.log("Bonjour" + firstName + "" + lastName);
}

//  Déclarer une foncton qui prend 3 paramétres
//  déclarer un variable TVA à 20%
//  elle multiplie les 3 nombres et la TVA
//  récupére le resultat dans une variables

// appeler la fonction

function Burger(x, y, z) {
  const TVA = 20 / 100;
  const result = x * y * z * TVA;
  return result;
}

const resultat = Burger(14, 67, 90);
console.log(resultat);

// function math (x,y) {
//     return x *y
// }

const math = function (x, y) {
  return x * y;
};

const res = math(12, 89);
console.log(res);

// FONCTION ADDITION

const add = function (x, y) {
  return x + y;
};

const plat = add(10, 12);
console.log(plat);

// ARROW FUNCTION (fonction fléché)
const divide = (x, y) => {
  return x / y;
};

const result = divide(23 / 90);
console.log(result);

// Il existe pas des façons enore plus concise d'écrire les fonctions fléchés
const arrow = (x) => x * 2;
const r = arrow(45);
console.log(r);

//    créér une fonction fléché helloYou avec un paramètre qui affiche bonjour + PRENOM.
const helloYou = (name) => {
  const message = `Bonjour, ${name}`;
  return message;
};

const message = helloYou("issa");
console.log(message);

// Demander à l'utilisateur de rentrer un nombre
// Créer une fonction fléché qui prend en paramètre un nombre
//  Et qui affiche dans la console si le nombre est apir ou impair (modulo)
//  Appeler la fonction en lui passant le nombre 5 en paramètre
//  Appeler la fonction en lui passant le nombre 256 en paramètre

const userInput = prompt("Quel est votre nombre?");

const evenOddd = (x) => {
  if (x % 2 == 0) {
    console.log("le nombre est pair");
  } else {
    console.log("le nombre est impair");
  }
};


//  Déclarer une variable qui contient un nombre (demander à l'utilisateur)
//  let response = prompt ('Donnez moi un nombre !)

// if (response % 3 == 0 && response % 5 == 0) {
// console.log('Fizz');
// }else if (response % 5 == 0) {
//     console.log ('Buzz')
// } else if (response % 3 == 0) {
//     console.log('FizzBuzz');
// }




//  Correction exercice 
let response = prompt('Donnez-moi un nombre !');

