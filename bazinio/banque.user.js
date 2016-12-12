// ==UserScript==
// @name        banque
// @namespace   Anarchy
// @description depose en banque le surplus
// @include     https://www.bazinio.com/banque.c
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/banque.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/banque.user.js
// @version     1
// @grant       none
// ==/UserScript==


function depose(){
	
	if(document.getElementsByName('dep')[0] != undefined){
		document.getElementsByName('dep')[0].click();
	}
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	depose = cash - 2000000
	if(depose == 0){
		
		document.getElementById('marche').click();
		
	}
	document.getElementById('banque_depot').value = depose;
	document.getElementsByClassName('btn')[0].click();
	
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

setTimeout(depose,randomTimeout());
