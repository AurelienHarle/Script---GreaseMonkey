// ==UserScript==
// @name        medecin
// @namespace   bazinio
// @include     https://www.bazinio.com/medecin.c
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Medecin.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Medecin.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

vie = document.getElementById('col_fiche').getElementsByTagName('td')[0].innerHTML;
vie = parseInt(vie.split('/')[0]);
	
cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
cash = cash.replace(/µ/,"");
cash = parseInt(cash.replace(/\s+/g,""));	
	
function medecin(){
	
	if(vie == 50){
		document.getElementById('head_l').getElementsByTagName('a')[0].click();
	}else if (vie != 50 && cash > 1000000){
		document.getElementsByName('soigner')[0].click();
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

function controleMedecin(){

	if(vie != 50){
		setTimeout(medecin,randomTimeout());
	}else{
		document.getElementById('head_l').getElementsByTagName('a')[0].click();
	}
	
}

controleMedecin();
