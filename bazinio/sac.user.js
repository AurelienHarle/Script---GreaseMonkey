// ==UserScript==
// @name        sac
// @namespace   bazinio
// @include     https://www.bazinio.com/garage.c
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/sac.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/sac.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

/**
Achete tout les sac disponibles
*/
function sac(){

	sac = document.getElementsByName('new_car')[0];
	
	if(sac != undefined){
		
		sac = document.getElementsByName('new_car')[0].click();
		
	}else{
		
		setTimeout(changementCompte,randomTimeout);
		
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
	
	var max = 2550;
	var min = 950;
    var randTimeout = min + (max-min+1) * Math.random();
    randTimeout = Math.trunc(randTimeout)
	return randTimeout;
	
}

setTimeout(sac,randomTimeout());