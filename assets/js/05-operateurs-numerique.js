/*-------------------------OPERATEUR ARITHMETIQUE-----------------*/

// +, -,*,%,**

//  Déclarer une constante opérationa a qui on affecte l'addition de 6786786 et 78798
//  Afficher en console le resultat du calcul

const operation = 6786786 + 78798; // addition
console.log(`le resultat du calcul est : ${operation}`);

operation = 6786786 - 78798; // soustration
console.log(`le resultat du calcul est : ${operation}`);

operation = 6786786 * 78798; // multiplication
console.log(`le resultat du calcul est : ${operation}`);

operation = 6786786 / 78798; // Division
console.log(`le resultat du calcul est : ${operation}`);

operation = 10 % 3; // Modulo (reste de la division)
console.log(`le resultat du calcul est : ${operation}`);
console.log(operation);

// demander à l'utilisateur un nombre
// demander à l'utilisateur un deuxieme nombre

// si le nombre est divisble par le premier
// afficher ce nombre est   un multiple du deuxieme
// sinon
// ce n'est pas un multiple
// soustration, multiplication et division

const response = prompt("Donne moi un nombre");
const response2 = prompt("Donne moi un autre nombre");

if (response % response2 == 0) {
  console.log("${response2} est un multiple de ${response}");
} else {
  console.log("faux");
}
