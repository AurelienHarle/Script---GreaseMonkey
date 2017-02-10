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
	currentAccount = accounts[currentNumber];
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	console.log("Liste de compte regénerée.");
	
	setTimeout(aiguilleur,randomTimeout);
	
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
	
	console.log("Selection de la procedure a suivre maitre.");
	
	if(boolMedecin == true && currentAccount.vie < 50){
		
		console.log("Medecin.");
		document.getElementById('medecin').click();
		
	}else if(boolMarcher == true && localStorage.boolDeal == "false"){
		
		console.log("Marcher.");
		document.getElementById('marche').click();
		
	}else if(boolDepose == true && cash > menu.deposeMontant){
		
		console.log("Banque depose.");
		document.getElementById('banque').click();
		
	}else if(boolCnd == true && currentAccount.cash > menu.cndMontant){
		
		console.log("Banque CND.");
		document.getElementById('banque').click();
		
	}else if(boolRetire == true){
		
		console.log("Banque retire.");
		document.getElementById('banque').click();
		
	}else if(boolAttaque == true){
		
		console.log("Attaque.");
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[5].click();
		
	}else if(boolSac == true){
		
		console.log("Sac.");
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[3].click();

	}else if(boolEvolution == true && currentAccount.niveau < menu.evolutionNiveau){
		
		console.log("Evolution.");
		document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[4].click();
		
	}
	
	setTimeout(changementCompte,3000);
}

/**
Changement de compte
*/
function changementCompte(){
	
	accountList = document.getElementById('chat').getElementsByTagName('a');
	//currentAccount = document.getElementsByClassName('lfiche')[0].getElementsByTagName('a')[0].innerHTML;
	//currentNumber = parseInt(currentAccount.split('e')[1]);
	
	localStorage.boolDeal = false;
	
	if(currentNumber == 200){
		
		nextNumber = 1
		
	}else{
		
		nextNumber = currentNumber + 1;
		
	}
	
	nextAccount = "Suicide" + nextNumber;
	
	for(i = 0;i < accountList.length;i++){
		
		if(accountList[i].innerHTML ==  nextAccount){
			accountList[i].click();
		}
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