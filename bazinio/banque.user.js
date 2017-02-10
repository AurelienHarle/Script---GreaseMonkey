// ==UserScript==
// @name        banque
// @namespace   Anarchy
// @description depose en banque le surplus
// @include     https://www.bazinio.com/banque.c*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/banque.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/banque.user.js
// @version     1.01c
// @grant       none
// ==/UserScript==

/**
Fonction qui depose la somme voulu en banque pour changer la somme voir "depose"
*/
function depose(){
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	depose = cash - menu.deposeMontant;
	
	if(depose != 0){
		
		document.getElementById('banque_depot').value = depose;
		document.getElementsByClassName('btn')[0].click();
		
	}else{
		
		setTimeout(retourAccueil,250);
		
	}
	
	
	
}

/**
Fonction qui retire TOUT de la banque TODO qui retire seulement la somme souhaiter
*/	
function retire(){
	
	inputRetire = document.getElementById('banque_retrait');
	
	if(inputRetire == null){
		
		setTimeout(retourAccueil,randomTimeout());
		
	}else{
		
		btnRetire = document.getElementsByClassName('btn')[1].click();
		
	}
	
	
}	

/**
Depose l'argent au dessu de X en cash voir "cndDepose"
*/
function cnd(){
	
	cnd = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[2].innerHTML;
	cnd = cnd.replace(/µ/,"");
	cnd = parseInt(cnd.replace(/\s+/g,""));
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	cdnDepose = cash - menu.cndMontant;
	if(cdnDepose == 0){
		
		setTimeout(retourAccueil,randomTimeout());
		
	}else{
		
		document.getElementById('magot_depot').value = cdnDepose;
		document.getElementsByClassName('btn')[1].click();
		
	}
}

/**
	Fonction qui recupere les données stocker dans le localStorage aussi bien le menu
	que le compte courant
*/
function recupLocalStorage(){
	
	menu = JSON.parse(localStorage.menu);
	console.log("Information du menu recupérér.");
	setTimeout(controleBanque,randomTimeout());
	
}

/**
Fonction qui retourne a la page d'acceuil du site
*/
function retourAccueil(){
	
	document.getElementById('head_l').getElementsByTagName('a')[0].click();
	
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

/**
Fonction de controle , qui renvoie sur la fonction celon l'action a realisée
*/
function controleBanque(){
	
	console.log("Verification de l'action a realisé");
	
	if(localStorage.banque == "depose"){
		
		console.log('Dépose');
		setTimeout(depose,randomTimeout());
		
	}else if (localStorage.banque == "retire"){
		
		console.log('Retire');
		setTimeout(retire,randomTimeout());
		
	}else if (localStorage.banque == "cnd"){
		
		console.log('CND');
		setTimeout(cnd,randomTimeout());
		
	}

}

setTimeout(recupLocalStorage,randomTimeout());