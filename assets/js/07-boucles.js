

/*-----------------------BOUCLES----------------------*/
// Les boucles sont des structures permettant d'excuter plusieurs fois des instuctions

//  Ecrir un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10

//  si la réponse n'est pas entre 1 et 10 , afficher que le message devait être compris entre 1 et 10

// Le programme doit ensuite dessiner un sapin de Noel composé d'étoiles (*)
// *
// **
// ***
// ****
// *****


let power = prompt ("donne moi un nombre entre 1 et 10")

while (power < 1 || power > 10) {
    power = prompt('donne moi un nombre entre 1 et 10');
}
let stars
for (let = 0; i < stars; i++) {
    stars = stars + '*'
    console.log(stars);
}