// ==UserScript==
// @name        deplacement
// @namespace   bazinio
// @include     https://www.bazinio.com/*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/deplacement.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/deplacement.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

if(document.getElementsByName('dep')[0] != undefined){
	
	document.getElementsByName('dep')[0].click();
		
}
