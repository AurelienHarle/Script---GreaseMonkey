// ==UserScript==
// @name        medecin
// @namespace   gdg
// @include     https://www.guerredesgangs.net/fr/medecin.c
// @version     1
// @grant       none
// ==/UserScript==

function soin(){
	
	if(document.getElementsByName('soigner')[0] != undefined){
		document.getElementsByName('soigner')[0].click()
	}else{
		setTimeout(reload,10000);
	}
	
}

function reload(){
	
	document.location.href = "https://www.guerredesgangs.net/fr/medecin.c";
	
}

/**
Genere un chiffre aleatoire entre 750 et 2000, et est retourné pour generé un timeout aleatoire en milliseconde
*/
function randomTimeout(){
	
	var max = 1000;
	var min = 250;
    var randTimeout = min + (max-min+1) * Math.random();
    randTimeout = Math.trunc(randTimeout)
	return randTimeout;
}

setTimeout(soin,randomTimeout);