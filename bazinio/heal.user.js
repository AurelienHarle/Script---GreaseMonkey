// ==UserScript==
// @name        heal
// @namespace   bazinio
// @include     https://www.bazinio.com/*
// @exclude     https://www.bazinio.com/medecin.c
// @version     1.01
// @grant       none
// ==/UserScript==

vie = document.getElementById('col_fiche').getElementsByTagName('td')[0].innerHTML;
vie = parseInt(vie.split('/')[0]);

cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
if(vie < 50 && cash > 2000000){
	
	document.getElementById('medecin').click();
	
}
