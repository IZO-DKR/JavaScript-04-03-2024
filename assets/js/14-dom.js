/*------------------------MANIPULATION EN DOM---------------------*/

/*
le DOM (Document Objet Model) en javascript est une représentation en mémoire d'un doment HTML chargé par le navigateur
Le DOM represente chaque element du document comme un objet javascript  qui peut etre manipulé et modifié à travers le code javascript  
*/

/*---------------------------------------------------------------------
                      Methode de selecteurs Javascript
---------------------------------------------------------------------*/
const mainTitle = document.getElementById("main-title");
mainTitle.style.color = "red";
console.log(mainTitle);

mainTitle.style.fontFamily = "Arial";

const paragraphes = document.getElementsByName("p");
// Faire une boucle sur l'HTMLCollection paragraphes

for (let i = 0; i < paragraphes.length; i++) {
  console.log(paragraphes[i]);

  paragraphes[i].style.color = "green";
}

/*
La méthode "getElementsByClassName"
*/

const title = document.getElementsByClassName("title");
console.log(title);

// mettre en violet la couleur de fond des elements qui ont la class title

for (let i = 0; i < title.length; i++) {
  title[i].style.color = "purpule";
}

// Nouveaux selecteurs JS
const paragraphe = document.querySelector("#title");
console.log(paragraphe);

/*
La méthode "querySelector()"
*/

const cssProperties = document.querySelector("#title");
cssProperties.style.fontSize = "30px";
console.log(paragraphe);

/*
La méthode "querySelectorAll"
*/

//  recuperer tous les paragraphes avec la méthode querySelectorAll()
//  souligner les paragraphes

const newParagraphes = document.querySelectorAll("p");
for (let paragraphe of newParagraphes) {
  paragraphe.style.textDecoration = "underline";
}


newParagraphes.forEach(function(paragraphe) {
    paragraphe.style.textDecoration = "underline";
}
)
    
// selectionner tous les elements qui ont la class txt-uppercase 
//  Tous les mettre en majuscule