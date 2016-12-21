// ==UserScript==
// @name        localstorage
// @namespace   bazinio
// @include     https://www.bazinio.com/*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/localstorage.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/localstorage.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

/**
Ces script ne sont pas a lancé automatiquement mais manuellement pour recupéré
les données de chaque compte
*/


function minMaxCash(){
	
	accounts = JSON.parse(localStorage.accounts);
	
	max = 0;
	min = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].cash > max){
			max = accounts[i].cash;
			maxAccount = accounts[i].name;
		}
		if(accounts[i].cash < min){
			min = accounts[i].cash;
			minAccount = accounts[i].name;
		}
	}
	
	console.log('Mini ' + min)
	console.log('Maxi ' + max)
	console.log('Account min ' + minAccount)
	console.log('Account max ' + maxAccount)
	
}

function minMaxBanque(){
	
	accounts = JSON.parse(localStorage.accounts);
	
	max = 0;
	min = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].banque > max){
			max = accounts[i].banque;
			maxAccount = accounts[i].name;
		}
		if(accounts[i].banque < min){
			min = accounts[i].banque;
			minAccount = accounts[i].name;
		}
	}
	
	console.log('Mini ' + min)
	console.log('Maxi ' + max)
	console.log('Account min ' + minAccount)
	console.log('Account max ' + maxAccount)
}

function minMaxCnd(){
	
	accounts = JSON.parse(localStorage.accounts);
	
	max = 0;
	min = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].cnd > max){
			max = accounts[i].cnd;
			maxAccount = accounts[i].name;
		}
		if(accounts[i].cnd < min){
			min = accounts[i].cnd;
			minAccount = accounts[i].name;
		}
	}
	
	console.log('Mini ' + min)
	console.log('Maxi ' + max)
	console.log('Account min ' + minAccount)
	console.log('Account max ' + maxAccount)
}
