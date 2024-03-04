
/*----------------------INSTRUCTION CONDITIONNELLES-----------------*/

//  Les operateurs de comparaison (==, ===, !=, !==, >=, <,<=)
//  declarer une constante condition vous lui donnez en valeur un nombre
// verifier si ce nombre est superieur ou egal a 18 si c'est le cas affichez vous etes majeur


//  si la condition est vraie (truely), le bloc d'instruction est éxécuté
//  sinon il est ignoré
const condition = 18
if (condition >= 18) {
    console.log('vous etes majeur')
}

// Cas pratiques
//  Déclarer une variable qui contient un nombre (demandez à l'utilisateur)
//  si le nombre est divisible par 3 afficher dans un alert 'Fizz'
//  si le nombre est divisible par 5 afficher dans un alert 'Buzz'
//  si le nombre est divisible par 3 et 5 afficher dans un alter 'FizzBuszz'
// sinon afficher dans un alert le nombre


// const bull = prompt('donnez moi un nombre');
// if (bull % 3 == 0) {
//     console.log('Fizz');
// } else if (bull % 5 ==0) {
//     console.log('Buzz');
// } else if (bull % 3 ==0) && (bull % 5 ==0) {}
//     console.log ('FizzBuzz')
// }; else{
//     console.log(bull)
// }



// demandez un nombre 12
// bravo
// verifiez avec == ==
response = prompt('donne moi un nombre')
console.log(typeof response);

// === vérifie à la fois la valeur et le type des valeurs comprarées (operandes)

if (response === '12') {
    console.log('bravo')
} else {
    console.log('faux');
}

//  demandez à l'utilisateur son animal préféré
//  si c'est un chien
//  vous etes quelqu'un de bien
// si c'est un chat
//  quelle drole d'idée
// si cest un poisson rouge
// je ne veux plus parler avec toi
//  sinon
//  je n'ai pas compris

const animal = prompt('Quel est votre animal préféré')
if (animal == 'chien') {
    console.log("vous etes quelqu'un de bien");
} else if (animal == 'chat') {
    console.log("Quelle drole d'idée");
}else if ("naimal == poisson rouge") {
    console.log('je ne te parle plus');
} else {
    console.log("je n'ai pas compris la réponse")
}


switch (animal) {
    case 'chien':
        console.log("vous etes quelqu'un de bien")
}