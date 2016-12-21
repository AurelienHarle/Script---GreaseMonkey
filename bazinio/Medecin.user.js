// ==UserScript==
// @name        medecin
// @namespace   bazinio
// @include     https://www.bazinio.com/medecin.c
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Medecin.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Medecin.user.js
// @version     1
// @grant       none
// ==/UserScript==

vie = document.getElementById('col_fiche').getElementsByTagName('td')[0].innerHTML;
vie = parseInt(vie.split('/')[0]);
	
function medecin(){
	
	if(vie == 50){
		document.getElementById('head_l').getElementsByTagName('a')[0].click();
	}else{
		document.getElementsByName('soigner')[0].click();
	}
	
}

/**
Change de compte
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

if(vie != 50){
 	setTimeout(medecin,randomTimeout());
}else{
	document.getElementById('head_l').getElementsByTagName('a')[0].click();
}
