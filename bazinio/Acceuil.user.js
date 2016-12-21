// ==UserScript==
// @name        Acceuil
// @namespace   anarchy
// @include     https://www.bazinio.com/home.c*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Acceuil.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Acceuil.user.js
// @version     1.01b
// @grant       none
// ==/UserScript==

//Bienvenu maitre.

//console.log("Initialisation de l'IA");

vie = document.getElementById('col_fiche').getElementsByTagName('td')[0].innerHTML;
vie = parseInt(vie.split('/')[0]);

/**
Cette fonctionnalité amenera sur les differentes celon les données recupéré sur l'accueil 
et les parties activée ou non du script
*/
function changePage(){
	
	//Choix changeable attention a l'ordre
	
	boolMarche = false;
	boolMonte = true;
	boolRetire = false;
	boolDepose = false;
	boolAttaque = false;
	boolSac = false;
	boolMedecin = false;
	boolCnd = false;
	
	if(vie != 50){
		boolMedecin = true;
	}
	//Aiguilleur
	
	if(boolMedecin){
		
		document.getElementById('medecin').click();
		
	}else if(boolMarche){
		
		document.getElementById('marche').click();
		
	}else if(boolMonte){
		
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[4].click();
		
	}else if (boolRetire){
		
		localStorage.banque = "retire"
		document.getElementById('banque').click();
		
	}else if (boolDepose){
		
		localStorage.banque = "depose"
		document.getElementById('banque').click();
		
	}else if (boolAttaque){
		
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[5].click();
	
	}else if (boolSac){
		
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[3].click()
	
	}else if (boolCnd){
		
		localStorage.banque = "cnd"
		document.getElementById('banque').click();
		
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
