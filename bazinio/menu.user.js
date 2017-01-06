// ==UserScript==
// @name        menu
// @namespace   Bazinio
// @description Menu de gestion
// @version     1
// @grant       none
// ==/UserScript==

/**
	Creation de la div "menu"
*/
var menuBot = document.createElement("div");
	menuBot.setAttribute('class','menuBot');
	menuBot.style.height = "880px";
	menuBot.style.width = "430px";
	menuBot.style.position = "absolute";
	menuBot.style.top = "0";
	menuBot.style.right = "0";
	menuBot.style.border = "1px solid #336699"
	
/**
	Creation des elements contenu dans le "menu"
*/

//Titre
var titreMenuBot = document.createElement('h1');
titreMenuBot.setAttribute('class','titreMenuBot');
titreMenuBot.style.textAlign = "center";
titreMenuBot.style.backgroundColor = "#336699";
titreMenuBot.style.color = "#000000";

//Medecin
var medecinMenu = document.createElement('p');
var checkboxMedecinMenu = document.createElement('input');
checkboxMedecinMenu.type = "checkbox";
checkboxMedecinMenu.name = "medecin";
checkboxMedecinMenu.value = "medecin";
checkboxMedecinMenu.style.position = "absolute"
checkboxMedecinMenu.style.left = "110px"

//Marche
var marcheMenu = document.createElement('p');
var checkboxMarcheMenu= document.createElement('input');
checkboxMarcheMenu.type = "checkbox";
checkboxMarcheMenu.name = "marche";
checkboxMarcheMenu.value = "marche";
checkboxMarcheMenu.style.position = "absolute"
checkboxMarcheMenu.style.left = "110px"

//Deplacement
var deplacementMenu = document.createElement('p');
var checkboxDeplacementMenu= document.createElement('input');
checkboxDeplacementMenu.type = "checkbox";
checkboxDeplacementMenu.name = "deplacement";
checkboxDeplacementMenu.value = "deplacement";
checkboxDeplacementMenu.style.position = "absolute"
checkboxDeplacementMenu.style.left = "110px"

//Depose
var deposeMenu = document.createElement('p');
var checkboxDeposeMenu= document.createElement('input');
checkboxDeposeMenu.type = "checkbox";
checkboxDeposeMenu.name = "depose";
checkboxDeposeMenu.value = "depose";
checkboxDeposeMenu.style.position = "absolute"
checkboxDeposeMenu.style.left = "110px"

//CND
var cndMenu = document.createElement('p');
var checkboxCndMenu= document.createElement('input');
checkboxCndMenu.type = "checkbox";
checkboxCndMenu.name = "cnd";
checkboxCndMenu.value = "cnd";
checkboxCndMenu.style.position = "absolute"
checkboxCndMenu.style.left = "110px"

//Retire
var retireMenu = document.createElement('p');
var checkboxRetireMenu= document.createElement('input');
checkboxRetireMenu.type = "checkbox";
checkboxRetireMenu.name = "retire";
checkboxRetireMenu.value = "retire";
checkboxRetireMenu.style.position = "absolute"
checkboxRetireMenu.style.left = "110px"

//Attaque
var attaqueMenu = document.createElement('p');
var checkboxAttaqueMenu= document.createElement('input');
checkboxAttaqueMenu.type = "checkbox";
checkboxAttaqueMenu.name = "attaque";
checkboxAttaqueMenu.value = "attaque";
checkboxAttaqueMenu.style.position = "absolute"
checkboxAttaqueMenu.style.left = "110px"

//Sac
var sacMenu = document.createElement('p');
var checkboxSacMenu= document.createElement('input');
checkboxSacMenu.type = "checkbox";
checkboxSacMenu.name = "sac";
checkboxSacMenu.value = "sac";
checkboxSacMenu.style.position = "absolute"
checkboxSacMenu.style.left = "110px"

//Evolution
var evolutionMenu = document.createElement('p');
var checkboxEvolutionMenu= document.createElement('input');
checkboxEvolutionMenu.type = "checkbox";
checkboxEvolutionMenu.name = "evolution";
checkboxEvolutionMenu.value = "evolution";
checkboxEvolutionMenu.style.position = "absolute"
checkboxEvolutionMenu.style.left = "110px"

//Jeux
var jeuxMenu = document.createElement('p');
var checkboxJeuxMenu= document.createElement('input');
checkboxJeuxMenu.type = "checkbox";
checkboxJeuxMenu.name = "jeux";
checkboxJeuxMenu.value = "jeux";
checkboxJeuxMenu.style.position = "absolute"
checkboxJeuxMenu.style.left = "110px"

/**
	Creation des TextNode
*/

//Titre
var textTitreMenuBot = document.createTextNode("Menu Bot V.1");

//Medecin
var textMedecinMenu = document.createTextNode("Medecin");

//Marcher
var textMarcheMenu = document.createTextNode("Marche");

//Deplacement
var textDeplacementMenu = document.createTextNode("Deplacement");

//Depose
var textDeposeMenu = document.createTextNode("Depose");

//Cnd
var textCndMenu = document.createTextNode("Cnd");

//Retire
var textRetireMenu = document.createTextNode("Retire");

//Attaque
var textAttaqueMenu = document.createTextNode("Attaque");

//Sac
var textSacMenu = document.createTextNode("Sac");

//Evolution
var textEvolutionMenu = document.createTextNode("Evolution");

//Jeux
var textJeuxMenu = document.createTextNode("Jeux");

/**
	Ajout des elements enfants au parent
*/

//Ajout a Menu Bot
menuBot.appendChild(titreMenuBot);
menuBot.appendChild(medecinMenu);
menuBot.appendChild(marcheMenu);
menuBot.appendChild(deplacementMenu);
menuBot.appendChild(deposeMenu);
menuBot.appendChild(cndMenu);
menuBot.appendChild(retireMenu);
menuBot.appendChild(attaqueMenu);
menuBot.appendChild(sacMenu);
menuBot.appendChild(evolutionMenu);
menuBot.appendChild(jeuxMenu);

//Ajout a titreMenuBot
titreMenuBot.appendChild(textTitreMenuBot);

//Ajout a medecinMenu
medecinMenu.appendChild(textMedecinMenu);
medecinMenu.appendChild(checkboxMedecinMenu);

//Ajout a marcheMenu
marcheMenu.appendChild(textMarcheMenu);
marcheMenu.appendChild(checkboxMarcheMenu);

//Ajout a deplacementMenu
deplacementMenu.appendChild(textDeplacementMenu);
deplacementMenu.appendChild(checkboxDeplacementMenu);

//Ajout a deposeMenu
deposeMenu.appendChild(textDeposeMenu);
deposeMenu.appendChild(checkboxDeposeMenu);

//Ajout a cndMenu
cndMenu.appendChild(textCndMenu);
cndMenu.appendChild(checkboxCndMenu);

//Ajout a retireMenu
retireMenu.appendChild(textRetireMenu);
retireMenu.appendChild(checkboxRetireMenu);

//Ajout a attaqueMenu
attaqueMenu.appendChild(textAttaqueMenu);
attaqueMenu.appendChild(checkboxAttaqueMenu);

//Ajout a sacMenu
sacMenu.appendChild(textSacMenu);
sacMenu.appendChild(checkboxSacMenu);

//Ajout a evolutionMenu
evolutionMenu.appendChild(textEvolutionMenu);
evolutionMenu.appendChild(checkboxEvolutionMenu);

//Ajout a jeuxMenu
jeuxMenu.appendChild(textJeuxMenu);
jeuxMenu.appendChild(checkboxJeuxMenu);

/**
	Ajout du menu a la page
*/
var currentDiv = document.getElementById("chatedicon"); 
parentElement = currentDiv.parentNode;
parentElement.insertBefore(menuBot, currentDiv);