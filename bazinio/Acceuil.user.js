// ==UserScript==
// @name        Acceuil
// @namespace   anarchy
// @include     https://www.bazinio.com/home.c*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Acceuil.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Acceuil.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

console.log("Initialisation de l'IA");
console.log("Bienvenu maitre.");

/**
	Fonction qui recupere les données stocker dans le localStorage aussi bien le menu
	que le compte courant
*/
function recupLocalStorage(){
	
	currentNumber = document.getElementsByClassName('lfiche')[0].getElementsByTagName('a')[0].innerHTML;
	currentNumber = parseInt(currentNumber.split('e')[1]);
	
	menu = JSON.parse(localStorage.menu);
	accounts = JSON.parse(localStorage.accounts);
	currentAccout = accounts[currentNumber];
	
}

/**
Cette fonction changera de page celon les fonctionallité activé
et les valeurs rentrer
*/
function aiguilleur(){
	
	boolMedecin = menu.medecinActiver;
	boolMarcher = menu.marcherActiver;
	boolDeplacement = menu.deplacementActiver;
	boolDepose = menu.deposeActiver;
	boolCnd = menu.cndActiver;
	boolRetire = menu.retireActiver;
	boolAttaque = menu.attaqueActiver;
	boolSac = menu.sacActiver;
	boolEvolution = menu.evolutionActiver;
	
	if(boolMedecin == true && currentAccout.vie < 50){
		
		document.getElementById('medecin').click();
		
	}else if(boolMarcher == true){
		
		document.getElementById('medecin').click();
		
	}else if(boolDepose == true && currentAccount.cash > menu.deposeMontant){
		
		document.getElementById('banque').click();
		
	}else if(boolCnd == true && currentAccount.cash >menu.cndMontant){
		
		document.getElementById('banque').click();
		
	}else if(boolRetire == true){
		
		document.getElementById('banque').click();
		
	}else if(boolAttaque == true){
		
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[5].click();
		
	}else if(boolSac == true){
		
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[3].click();

	}else if(boolEvolution == true && currentAccount.niveau < menu.evolutionNiveau){
		
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[4].click();
		
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

setTimeout(recupLocalStorage,randomTimeout());


