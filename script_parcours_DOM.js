var p = document.getElementsByTagName('p');
console.log("1- Le nombre d'élément <p> dans la page est : " + p.length);

var c = document.getElementById('coucou');
console.log("2- Le contenu du texe de l'élément portant l'id 'coucou' : " + c);

var a = document.getElementsByTagName('a');
console.log("3- L'URL vers laquelle pointe le 3ème élément <a> de la page : " + a[2]);

var compte = document.getElementsByClassName('compte-moi');
console.log("4- Le nombre d'élément qui porte la classe compte-moi est : " + compte);

var liCompte = document.querySelectorAll('li.compte-moi');
console.log("5- Le nombre d'élément <li> qui porte la classe compte-moi est : " + liCompte.length);

var olliCompte = document.querySelectorAll('ol>li.compte-moi');
console.log("6- Le nombre d'élément <li> et situé dans une liste ordonnée qui porte la classe compte-moi est : " + liCompte.length);

var jeu = document.getElementsByTagName('div>ul');
console.log("7- 1ère élément du 2ème 'ul' du 'div' : " + jeu.length);