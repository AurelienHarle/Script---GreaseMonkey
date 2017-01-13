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
	console.log('vie : ' + vie)
	if(document.getElementsByName('soigner')[0] == undefined){
		document.getElementById('marche').click();
	}else if (vie != 50 && cash > 3000000){
		
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
		console.log('vie : ' + vie)
		console.log('manque de vie');
	}else{
		document.getElementById('marche').click();
		console.log('vie : ' + vie)
		console.log('retour marcher');
	}
	
}
console.log('Execution du script');
setTimeout(controleMedecin,randomTimeout());
