/*-----------------------CONCATENATION------------------*/
// CONCATENANTION : afficher du texte et des variables
// declarer des variables
// age, prenom, nom de famille, adress, formation, organisme

// recuperer dans une variablele message
// je m'applle NOM PRENOM, j'ai AGE ans et je suis en formation FORMATION à ORGANISME
//  3 Façons

const firstName = "issa";
console.log(firstName);

const lastName = "KONTE";
console.log(lastName);

const age = 28;
console.log(age);
const adresse = "1 Res du Clos du Pileu 91120 PALAISEAU";
console.log(adresse);
const formation = "Dev web";
const organisation = "DORANCO";

let information = "Je m'appelle" + firstName + '' + lastName + ", j'ai" + age + "ans et j'habite" + adresse + ", je suis en formation" + formation + "à" + organisation;
console.log(information);

 information = "Je m\'appelle" + firstName + '' + lastName + ", j\'ai" + age + "ans et j\'habite" + adresse + ", je suis en formation" + formation + "à" + organisation;
console.log(information);

 information = "Je m/'appelle" + firstName + '' + lastName + ", j'ai" + age + "ans et j'habite" + adresse + ", je suis en formation" + formation + "à" + organisation;
console.log(information);

// template litterals