// ==UserScript==
// @name        Attaque
// @namespace   bazinio
// @include     https://www.bazinio.com/ville.c*
// @downloadURL
// @updateURL
// @version     1
// @grant       none
// ==/UserScript==

function attaque(){
	
	cible = document.getElementsByName('cible')[0].getElementsByTagName('option');
	pa = document.getElementById('col_fiche').getElementsByTagName('td')[1].innerHTML;
	pa = parseInt(pa.split('/')[0]);
	if(pa == 10){
			setTimeout(changementCompte,randomTimeout());
	}else{
		for(var i = 0;i< cible.length;i++){
			
			if(cible[i].innerHTML.startsWith("Suicide") == false){
				
				cible[i].selected = true;
				attaque = document.getElementsByName('att')[0].click();
				
			}
		}
		setTimeout(changementCompte,randomTimeout());
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

setTimeout(attaque,randomTimeout());