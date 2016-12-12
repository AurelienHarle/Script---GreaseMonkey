// ==UserScript==
// @name        Acceuil
// @namespace   anarchy
// @include     https://www.bazinio.com/home.c*
// @downloadURL https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Acceuil.user.js
// @version     1
// @grant       none
// ==/UserScript==

//Bienvenu maitre.

console.log("Initialisation de l'IA");

/**
Cette fonctionnalité amenera sur les differentes celon les données recupéré sur l'accueil 
et les parties activée ou non du script
*/
function changePage(){
	
	boolmonte = false;
	boolmarche = true;
	
	//Systeme de true false a implementé
	
	//Aiguilleur
	
	if(boolmarche == true){
			document.getElementById('marche').click();
	}else if(boolmonte == true){
		
	}

	
	
}

/**
Genere un chiffre aleatoire entre 750 et 2000, et est retourné pour generé un timeout aleatoire en milliseconde
*/
function randomTimeout(){
	
	var max = 2000;
	var min = 750;
    var randTimeout = min + (max-min+1) * Math.random();
    randTimeout = Math.trunc(randTimeout)
	return randTimeout;
}

setTimeout(changePage,randomTimeout());


