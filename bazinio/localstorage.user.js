// ==UserScript==
// @name        localstorage
// @namespace   bazinio
// @include     https://www.bazinio.com/*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/localstorage.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/localstorage.user.js
// @version     1
// @grant       none
// ==/UserScript==

/**
Ces script ne sont pas a lancé automatiquement mais manuellement pour recupéré
les données de chaque compte
*/
accounts = JSON.parse(localStorage.accounts);

function minMaxCash(){
	max = 0;
	min = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].banque > max){
			max = accounts[i].banque;
		}
		if(accounts[i].banque < min){
			min = accounts[i].banque;
			minAccount = accounts[i].name
		}
	}
}