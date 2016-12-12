// ==UserScript==
// @name        Connexion
// @namespace   anarchy
// @description Connect to the right account
// @include     https://www.bazinio.com/
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Connexion.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/Connexion.user.js
// @version     1
// @grant       none
// ==/UserScript==


//Bienvenu maitre.

console.log("Initialisation de l'IA");

/**
Fonctionnalité qui connecte au premier compte.
*/
function connexion(){
	
	var login = document.getElementById('username').value = "Suicide1";
	var pass = document.getElementById('password').value = "a1z2e3";
	var rememberme = document.getElementsByName('rememberme')[0].checked = true;
	var btnLogin = document.getElementsByName('login')[0].click();
	
}

/**
Genere un chiffre aleatoire entre 750 et 2000, et est retourné pour generé un timeout aleatoire en milliseconde
*/
function randomTimeout(){
	
	var max = 2000;
	var min = 750;
    var randTimeout = min + (max-min+1) * Math.random();
    randTimeout = Math.trunc(randTimeout)
	return randTimeout;
}

setTimeout(connexion,randomTimeout());
