// ==UserScript==
// @name        heal
// @namespace   bazinio
// @include     https://www.bazinio.com/*
// @exclude     https://www.bazinio.com/medecin.c
// @version     1
// @grant       none
// ==/UserScript==

vie = document.getElementById('col_fiche').getElementsByTagName('td')[0].innerHTML;
vie = parseInt(vie.split('/')[0]);
	
if(vie < 50){
	
	document.getElementById('medecin').click();
	
}