// ==UserScript==
// @name        localstorage
// @namespace   bazinio
// @include     https://www.bazinio.com/*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/localstorage.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/localstorage.user.js
// @version     1.01b
// @grant       none
// ==/UserScript==

/**
Ces script ne sont pas a lancé automatiquement mais manuellement pour recupéré
les données de chaque compte
*/

/**
Retourne le min et max cash des comptes et les compte min et max
*/
function minMaxCash(){
	
	accounts = JSON.parse(localStorage.accounts);
	
	maxCash = 0;
	minCash = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].cash > maxCash){
			maxCash = accounts[i].cash;
			maxAccountCash = accounts[i].name;
		}
		if(accounts[i].cash < minCash){
			minCash = accounts[i].cash;
			minAccountCash = accounts[i].name;
		}
	}
	
	console.log('Cash Mini ' + minCash)
	console.log('Cash Maxi ' + maxCash)
	console.log('Cash Account min ' + minAccountCash)
	console.log('Cash Account max ' + maxAccountCash)
	
}
minMaxCash();

/**
Retourne le min et max banque des comptes et les compte min et max
*/
function minMaxBanque(){
	
	accounts = JSON.parse(localStorage.accounts);
	
	maxBanque = 0;
	minBanque = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].banque > maxBanque){
			maxBanque = accounts[i].banque;
			maxAccountBanque = accounts[i].name;
		}
		if(accounts[i].banque < minBanque){
			minBanque = accounts[i].banque;
			minAccountBanque = accounts[i].name;
		}
	}
	
	console.log('Banque Mini ' + minBanque)
	console.log('Banque Maxi ' + maxBanque)
	console.log('Banque Account min ' + minAccountBanque)
	console.log('Banque Account max ' + maxAccountBanque)
	
}
minMaxBanque();

/**
Retourne le min et max CND des comptes et les compte min et max
*/
function minMaxCnd(){
	
	accounts = JSON.parse(localStorage.accounts);
	
	maxCnd = 0;
	minCnd = 4000000000000000;
	
	for(var i = 1;i < accounts.length;i++){
		
		if(accounts[i].cnd > maxCnd){
			maxCnd = accounts[i].cnd;
			maxAccountCnd = accounts[i].name;
		}
		if(accounts[i].cnd < minCnd){
			minCnd = accounts[i].cnd;
			minAccountCnd = accounts[i].name;
		}
	}
	
	console.log('Cnd Mini ' + minCnd)
	console.log('Cnd Maxi ' + maxCnd)
	console.log('Cnd Account min ' + minAccountCnd)
	console.log('Cnd Account max ' + maxAccountCnd)
	
}
minMaxCnd();
