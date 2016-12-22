// ==UserScript==
// @name        market
// @namespace   anarchy
// @description deal each hour
// @include     https://www.bazinio.com/marche.c
// @include     https://www.bazinio.com//login.php?id=*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/market.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/market.user.js
// @version     1.01c
// @grant       none
// ==/UserScript==

/**
Creer la collection marcher avec chaque objet drogue et envoie vers la fonction achatVente() pour selectionner l'action a realisé
*/
function createDrug(){
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	niveau = document.getElementsByClassName('lfiche')[1].innerHTML;
	niveau = niveau.split('<')[0];
	niveau = parseInt(niveau.replace(/N/g,""));
	
	if(cash > 30000000 && niveau > 1){
		localStorage.banque = "cnd";
		banque();
	}
	
	market = document.getElementsByClassName('tableau market')[0].getElementsByTagName('tr');
	
	carriage = market[1].getElementsByTagName('th')[1].innerHTML;
	carriageMax = carriage.split('/')[1];
	carriage = carriage.split('/')[0];
	
	Drug = new Array();
	
	for(i = 2,x = 0;i < market.length;i++,x++ ){
		
		Drug[x] = new Object();
		Drug[x].name = market[i].getElementsByTagName('td')[0].innerHTML;
		
		if(market[i].getElementsByTagName('td')[1].getElementsByTagName('img')[0] != undefined){
			
			Drug[x].price = market[i].getElementsByTagName('td')[1].getElementsByTagName('img')[0].title;
			
		}else{
			
			Drug[x].price = undefined;
			
		}
		
		if(market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[2] != undefined && market[i].getElementsByTagName('td')[4] != undefined ){ //achat et vente
			
				Drug[x].Vquantity = market[i].getElementsByTagName('td')[4].getElementsByTagName('input')[1];
				Drug[x].Aquantity = market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[1];
				Drug[x].Vboutton = market[i].getElementsByTagName('td')[4].getElementsByTagName('input')[2];
				Drug[x].Aboutton = market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[2];
				
				Drug[x].action = "vendre/acheter";
						
		}else if(market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[2] != undefined && market[i].getElementsByTagName('td')[4] == undefined){ //achat
				
				Drug[x].quantity = market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[1];
				Drug[x].boutton = market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[2];
				
				Drug[x].action = "acheter";
		
		}else if(market[i].getElementsByTagName('td')[3].getElementsByTagName('input')[2] == undefined && market[i].getElementsByTagName('td')[4] != undefined){ //vente
		
			Drug[x].quantity = market[i].getElementsByTagName('td')[4].getElementsByTagName('input')[1];
			Drug[x].boutton = market[i].getElementsByTagName('td')[4].getElementsByTagName('input')[2];
			Drug[x].action = "vendre";
			
		}
	}
	
	setTimeout(achatVente,1000);
	
}

/**
Renvoie vers les fonction d'achat/vente celons le marcher
*/
function achatVente(){
	
	for(i = 0;i < Drug.length;i++){
		if(Drug[i].action == "vendre/acheter"){
			
			if(Drug[i].price <= 4){
				
				Drug[i].boutton = Drug[i].Aboutton;
				buy();
				break;
				
			}
			
			if(Drug[i].price >= 5){
				
				Drug[i].boutton = Drug[i].Vboutton;
				sell();
				break;
			}
	
		}else if(Drug[i].action == "acheter"){
			
			if(Drug[i].price <= 4){
				
				buy();
				break;
				
			}
			
		}else if(Drug[i].action == "vendre"){
			
			if(Drug[i].price >= 5){
				
				sell();
				break;
				
			}
			
		}
	}
	setTimeout(changementCompte,randomTimeout());
}

/**
Action vente du marcher
*/
function sell(){
	
	Drug[i].boutton.click();

}

/**
action achat du marcher
*/
function buy(){

	Drug[i].boutton.click();

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
	
	var max = 1000;
	var min = 250;
    var randTimeout = min + (max-min+1) * Math.random();
    randTimeout = Math.trunc(randTimeout)
	return randTimeout;
	
}

/**
Renvoie vers la page banque TODO a supprimer
*/
function banque(){
	
	document.getElementById('banque').click();
	
}


setTimeout(createDrug,randomTimeout());
