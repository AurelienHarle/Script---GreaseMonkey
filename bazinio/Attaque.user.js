// ==UserScript==
// @name        Attaque
// @namespace   bazinio
// @include     https://www.bazinio.com/ville.c*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Attaque.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Attaque.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

/**
Selectionn la cible et attaque 3 fois
*/
function attaque(){
	
	cible = document.getElementsByName('cible')[0].getElementsByTagName('option');
	pa = document.getElementById('col_fiche').getElementsByTagName('td')[1].innerHTML;
	pa = parseInt(pa.split('/')[0]);
	if(pa < 10){
			setTimeout(changementCompte,randomTimeout());
	}else{
		for(var i = 0;i< cible.length;i++){
			
			if(cible[i].innerHTML.startsWith("Suicide") == false){
				
				cible[i].selected = true;
				attaque = document.getElementsByName('att')[0].click();
				//break;
			}
		}
		setTimeout(changementCompte,randomTimeout());
	}
}

/**
Changement de compte
*/
function changementCompte(){
	
	accountList = document.getElementById('chat').getElementsByTagName('a');
	currentAccount = document.getElementsByClassName('lfiche')[0].getElementsByTagName('a')[0].innerHTML;
	currentNumber = parseInt(currentAccount.split('e')[1]);
	
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
	
	var max = 1000;
	var min = 500;
    var randTimeout = min + (max-min+1) * Math.random();
    randTimeout = Math.trunc(randTimeout)
	return randTimeout;
}

setTimeout(attaque,randomTimeout());
