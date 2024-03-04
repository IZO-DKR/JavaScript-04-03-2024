/*-----------------------VARIABLES---------------------------*/

// ? NB : Les noms de variables sont sensibles à la casse
// On fait la différence entre les majuscules et les minuscules

//  Déclaration de variable
let uneVariable;
let UNEVARIABLE;

// AFFECTATION d'une variable (donne une valeur à la variable)
uneVariable = "je suis une variable";

// Les deux peuvent se faire en même temps
let hello = "Hello world !";
console.log(hello);

UneVariable = hello;
console.log(hello);
console.log(uneVariable);

// Le mot clé const permet de déclarer une constante
// Vous ne pouvez pas modifer une constante (on dit qu'elle est immuable)
// 'const va garantir que la valeur ne soit pas modifié tout au long de l'execution du script'

const constate = "je suis une constante";
constante = "autre chose";

// Le mot clé va permettre aussi de déclarer des variables
// C'est une pratique désuète (c'etait la seule façon avant 2015)
var past = "je suis dépassé";
