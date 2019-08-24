// Modification 1
function changeTitles(titre, sous_titre){
	let title = document.querySelector('h1').textContent = titre;
	let sousTitre = document.querySelector('p.lead').textContent = sous_titre;
}
changeTitles("Ce que j'ai appris à THP", "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");


// Modification 2
function changeCallToActions(texte1, texte2){
	let action1 = document.querySelector('a.btn-primary')
	action1.textContent = texte1
	action1.setAttribute("href", "http://www.thehackingproject.org")
	let action2 = document.querySelector('a.btn-secondary')
	action2.textContent = texte2
	action2.setAttribute("href", "https://www.pole-emploi.fr/accueil/")
}
changeCallToActions("OK je veux tester !", "Non Merci");


// Modification 3
function changeLogoName(texte3) {
	let album = document.querySelector('strong')
	album.textContent = texte3
	album.style.color = "2em"
}
changeLogoName("The THP Experience");


// Modification 4
function populateImages(){
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	var images = document.querySelectorAll('img.card-img-top');
	for (let count in images){
		images[count].src = (imagesArray[count]);
	}
}
populateImages();


// Modification 5
function deleteLastCards(){
	var div = document.querySelectorAll('div.col-md-4');
	for (let count in div){
		if (count >= 6){
		div[count].remove();
		}
	}
}
deleteLastCards();


// Modification 6
function changeCardsText() {
	var cardText = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
	var texte = document.querySelectorAll('p.card-text');
	for (let count in cardText){
			texte[count].textContent = cardText[count];
	}	
}
changeCardsText();


// Modification 7
function changeViewButtons(){
	var boutton = document.querySelectorAll('button.btn-outline-secondary');
	for (let count = 0; count < boutton.length; count += 2){
		boutton[count].classList.add("btn-success");
		boutton[count].classList.remove("btn-outline-secondary");
	}	
}
changeViewButtons();



