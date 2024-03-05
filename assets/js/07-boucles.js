/*-----------------------BOUCLES----------------------*/
// Les boucles sont des structures permettant d'excuter plusieurs fois des instuctions

/*
La principale diffèrence entre 'for' et 'while'.
'for' est généralement utilisé lorsque le nombre d'itération est connu à l'avance
'while' est utilisé lorsque le nombre d'itération est inconnu à l'avance et dépend d'une condition spécifique
*/

//  Ecrir un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10

//  si la réponse n'est pas entre 1 et 10 , afficher que le message devait être compris entre 1 et 10

// Le programme doit ensuite dessiner un sapin de Noel composé d'étoiles (*)
// *
// **
// ***
// ****
// *****

let power = prompt("donne moi un nombre entre 1 et 10");

while (power < 1 || power > 10) {
  power = prompt("donne moi un nombre entre 1 et 10");
}

// let stars
// for (let = 0; i < stars; i++) {
//     stars = stars + '*'
//     console.log(stars);
// }

// Boucle : for() {.......}
// boucle for qui affiche les nombres paires
let show;
for (i = 10; i <= 20; i = i + 1);
{
  console.log(i);
}

// boucle : while() {......}
//  afficher les nombres paires de 10 à 20

let i = 10;

while (i <= 20) {
  console.log(i);
  i = i + 2;
}


//  demander un nombre au utilisateur  tant que ce nombre n'est pas bon dites le nombre est plus grand ou le nombre est plus petit
let something = prompt("donnez moi un nombre");
while (something != 18) {
if (somethng < 18)
        something = prompt("nombre est plus grand")
else {
    something = prompt ("nombre est plus petit")

    };
} 
        
    



let userInput = prompt('Donnez moi un nombre');
const magicNumber = 99;

while (userInput != magicNumber) {
    if (userInput < magicNumber) {
    userInput = prompt("nombre est plus grand")
}
}
