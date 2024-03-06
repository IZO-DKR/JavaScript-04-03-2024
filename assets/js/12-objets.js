

/*------------------------OBJETS---------------------*/
// les objets sont des structures de données compléxes qui permettent de stocker des valeurs et des fonctions ensemble

const person = {
  firstName: "Issa",
  lastName: "KONTE",
  age: 28,
  formation: ["algorthme", "html", "git", "javascrit"],
  job: {
    name: "formateur",
    hour: 35,
  },
  getIdentify: function () {
    return `je m'appelle Issa KONTE`;
  },
};

//  Pour accéder à la propriété d'un objet
console.log(person.lastName);

// créer un objet car
//  model => 'audi'
//  année => 2023
//  couleur => red
//  option => tableau => siege chauffant, vitre electrique
//  moteur => objet => cylindre, nombre de chauvaux
//  description => function => 'je suis une audi sortie en 2023

//  Afficher le model
// Afficher la première option
// Afficher la description

const car = {
  model: "audi",
  année: 2023,
  couleur: red,

  option: ["siege chauffant", "vitre electrique"],
  moteur: {
    cylindre: 6,
    nombrecheuvaux: 100,
  },
  // discription: function () {
  //     return `je suis une audi sortie en 2023`
  discription: function () {
    return `je suis une ${this.model} sortie en 2023`;
  },
};

console.log(car.description());
window.console.log();

for (let key in car in car) {
  console.log(key);
}
