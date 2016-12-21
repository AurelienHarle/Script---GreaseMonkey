// ==UserScript==
// @name        banque
// @namespace   Anarchy
// @description depose en banque le surplus
// @include     https://www.bazinio.com/banque.c*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/banque.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/banque.user.js
// @version     1.01a
// @grant       none
// ==/UserScript==


function depose(){
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	depose = cash - 2000000
	if(depose == 0){
		
		document.getElementById('marche').click();
		
	}
	document.getElementById('banque_depot').value = depose;
	document.getElementsByClassName('btn')[0].click();
	
}
	
function retire(){
	
	inputRetire = document.getElementById('banque_retrait');
	if(inputRetire == null){
		setTimeout(changementCompte,randomTimeout());
	}else{
		btnRetire = document.getElementsByClassName('btn')[1].click();
	}
	
	
}	

function cnd(){
	
	cnd = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[2].innerHTML;
	cnd = cnd.replace(/µ/,"");
	cnd = parseInt(cnd.replace(/\s+/g,""));
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	cdnDepose = cash - 30000000
	if(cash == 30000000){
		
		document.getElementById('marche').click();
		//setTimeout(changementCompte,randomTimeout());
		
	}else{
		
		document.getElementById('magot_depot').value = cdnDepose;
		document.getElementsByClassName('btn')[1].click();
		
	}
	
	
}

/**
Change de compte
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


if(localStorage.banque == "depose"){
	
	setTimeout(depose,randomTimeout());
	
}else if (localStorage.banque == "retire"){
	
	setTimeout(retire,randomTimeout());
	
}else if (localStorage.banque == "cnd"){
	
	setTimeout(cnd,randomTimeout());
	
}
