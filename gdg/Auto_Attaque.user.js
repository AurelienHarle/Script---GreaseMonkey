﻿// ==UserScript==
// @name        Auto Attaque
// @namespace   Guerre des gangs
// @include     https://www.guerredesgangs.net/fr/braquage.c*
// @downloadURL https://github.com/AurelienHarle/Script---GreaseMonkey/master/gdg/Auto_Attaque.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/gdg/Auto_Attaque.user.js
// @version     1
// @grant       none
// ==/UserScript==


function autoAttaque(){
	
	console.log('selection');
	
	bpa = document.getElementById('bpa').style.width;
	parseInt(bpa);
	for(i = 0; i < bpa;i + 3){
		fourgon = document.getElementById("select").getElementsByTagName('option')[0].selected = true;
		attaque = document.getElementsByName('att')[0].click();
	}
}

setTimeout(autoAttaque,5000);
