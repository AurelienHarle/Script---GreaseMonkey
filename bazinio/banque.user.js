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
	
	depose = cash - 5000000
	
	if(depose == 0){
		
		document.getElementById('marche').click();
		
	}
	document.getElementById('banque_depot').value = depose;
	document.getElementsByClassName('btn')[0].click();
	
}

/**
Fonction qui retire TOUT de la banque TODO qui retire seulement la somme souhaiter
*/	
function retire(){
	
	inputRetire = document.getElementById('banque_retrait');
	
	if(inputRetire == null){
		setTimeout(changementCompte,randomTimeout());
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
	
	cdnDepose = cash - 50000000
	if(cash == 50000000){
		
		document.getElementById('marche').click();
		
	}else{
		
		document.getElementById('magot_depot').value = cdnDepose;
		document.getElementsByClassName('btn')[1].click();
		
	}
}

/**
Changement de compte
*/
function changementCompte(){
	
	accountList = document.getElementById('chat').getElementsByTagName('a');
	currentAccount = document.getElementsByClassName('lfiche')[0].getElementsByTagName('a')[0].innerHTML;
	currentNumber = parseInt(currentAccount.split('e')[1]);
	
	if(currentNumber == 200){
		nextNumber = 1
	}else{
		nextNumber = currentNumber + 1;
	}
	nextAccount = "Suicide" + nextNumber;
	for(i = 0;i < accountList.length;i++){
		
		if(accountList[i].innerHTML ==  nextAccount){
			accountList[i].click();
		}
	}
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
	
	if(localStorage.banque == "depose"){
		
		setTimeout(depose,randomTimeout());
		
	}else if (localStorage.banque == "retire"){
		
		setTimeout(retire,randomTimeout());
		
	}else if (localStorage.banque == "cnd"){
		
		setTimeout(cnd,randomTimeout());
		
	}

}

setTimeout(controleBanque,randomTimeout());