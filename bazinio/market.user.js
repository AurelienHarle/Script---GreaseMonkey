// ==UserScript==
// @name        market
// @namespace   anarchy
// @description deal each hour
// @include     https://www.bazinio.com/marche.c
// @include     https://www.bazinio.com//login.php?id=*
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/market.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/market.user.js
// @version     1
// @grant       none
// ==/UserScript==

/**
Create the market array for sell or buy
*/
function createDrug(){
	
	console.log("Hey master I create the drug market for you");
	
	if(document.getElementsByName('dep')[0] != undefined){
		document.getElementsByName('dep')[0].click();
	}
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	if(cash > 2000000){
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
	
	console.log("Wow all this drug look amasing let's go to do something with it");
	setTimeout(achatVente,1000);
	
}

function achatVente(){
	
	console.log("let me check what we need to do with each drug");
	
	for(i = 0;i < Drug.length;i++){
		if(Drug[i].action == "vendre/acheter"){
			
			if(Drug[i].price <= 4){
				
				console.log("Great price let me buy !");
				Drug[i].boutton = Drug[i].Aboutton;
				buy();
				break;
				
			}
			
			if(Drug[i].price >= 5){
				
				console.log("Great price let me sell !");
				Drug[i].boutton = Drug[i].Vboutton;
				sell();
				break;
			}
	
		}else if(Drug[i].action == "acheter"){
			console.log("let me look if the price are ok for buy");
			if(Drug[i].price <= 4){
				
				console.log("Great price let me buy !");
				buy();
				break;
			}
			
		}else if(Drug[i].action == "vendre"){
			console.log("let me look if the price are ok for sell");
			if(Drug[i].price >= 5){
				
				console.log("Great price let me sell !");
				sell();
				break;
			}
			
		}else{
			
			console.log("Nothing to do :(");
			
		}
		
	}
	
	setTimeout(changementCompte,randomTimeout());
}


/**
Vente du marcher
*/
function sell(){
	
	console.log("Click for sell!");
	
	Drug[i].boutton.click();
	
	//setTimeout(cooldown,1000);
}

/**
Achat du marcher
*/
function buy(){
	
	console.log("Click for buy!");
	
	Drug[i].boutton.click();
	//setTimeout(cooldown,1000);
}

/**
Change de compte
*/
function changementCompte(){
	
	/* Suivant la lite 1 10 100 101 peux etre trier*/
	console.log("Time to swap master !");
	
	currentNumber = localStorage.number;
	
	if(currentNumber == undefined){
		currentNumber = 1;
		localStorage.number = 1;
	}
	
	nextNumber = parseInt(currentNumber) + 1;
	
	if(nextNumber > 200){
		nextNumber = 1;
	}
	
	localStorage.number = nextNumber;
	accountList = document.getElementById('chat').getElementsByTagName('a')[nextNumber].click();
	
	/*Par comtpe 1 2 3 4.... */
	//currentAccount = document.getElementsByClassName('lfiche')[0].getElementsByTagName('a')[0].innerHTML;
	//currentNumber = parseInt(currentAccount.split('e')[1]);
	//nextAccount = "Suicide" + nextNumber;
	//for(i = 0;i < accountList.length;i++){
	//	
	//	if(accountList[i].innerHTML ==  nextAccount){
	//		accountList[i].click();
	//	}
	//}
	
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

function banque(){
	
	document.getElementById('banque').click();
	
}


setTimeout(createDrug,randomTimeout());
