// ==UserScript==
// @name        sac
// @namespace   bazinio
// @include     https://www.bazinio.com/garage.c
// @downloadURL
// @updateURL
// @version     1
// @grant       none
// ==/UserScript==

function sac(){

	sac = document.getElementsByName('new_car')[0];
	if(sac != undefined){
		sac = document.getElementsByName('new_car')[0].click();
	}else{
		setTimeout(changementCompte,randomTimeout);
	}
}

/**
Change de compte
*/
function changementCompte(){
	
	currentNumber = localStorage.number;
	
	if(currentNumber == undefined){
		currentNumber = 1;
		localStorage.number = 1;
	}
	
	nextNumber = parseInt(currentNumber) + 1;
	
	if(nextNumber > 200){
		nextNumber = 1;
	}
	
	localStorage.number = nextNumber;
	accountList = document.getElementById('chat').getElementsByTagName('a')[nextNumber].click();
	
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