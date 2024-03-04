/*---------------------------AFFICHAGE------------------------*/
// Afficher les informations dans la console de debbugage du navigateur
console.log("je suis un message en console");

// Afficher une boite de dialogue avec un champs à remplir
prompt("Quel âge avez-vous ?");

// On peut récuprer ce quiest tapé par l'utilisateur en affcetant prompt à une variable
const message = prompt("Que voulez-vous dire ?");
console.log(message);

// Afficher des informations dans une pop'up
alert("Hello, world");

// Inserer du code HTML dans ma page
document.write('<h2>Un h2 crée en javascript</h2>')