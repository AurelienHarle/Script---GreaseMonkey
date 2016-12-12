// ==UserScript==
// @name        Marcher
// @namespace   Guerre des gangs
// @description Auto-deal each hour
// @include     https://www.guerredesgangs.net/fr/marche.c
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/gdg/Marcher.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/gdg/Marcher.user.js
// @version     1
// @grant       none
// ==/UserScript==

/**
Create the market array for sell or buy
*/
function createDrug(){
	
		
	if(document.getElementsByName('dep')[0] != undefined){
		
		setTimeout(deplacement,1000);
		
	}
	
	console.log("Hey master I create the drug market for you");
	
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
	
	setTimeout(cooldown,1000);
}



function sell(){
	
	console.log("Click for sell!");
	
	Drug[i].boutton.click();
	
	//setTimeout(cooldown,1000);
}

function buy(){
	
	console.log("Click for buy!");
	
	Drug[i].boutton.click();
	//setTimeout(cooldown,1000);
}

function cooldown(){
	console.log("Time to sleep	 master !");
	cooldown = parseInt(document.getElementById('CompteARebours').innerHTML);
	
	setTimeout(reload,1000 * 60 * cooldown + 1);
	
}

function reload(){
	
	//document.location.reload(true);
	document.location.href = "https://www.guerredesgangs.net/fr/home.c";
	
}

function deplacement(){
	
		document.getElementsByName('pot')[0].checked = true;
		ville = document.getElementsByClassName('lfiche')[1].getElementsByTagName('span')[2].innerHTML;
		heure = document.getElementById('heure').innerHTML;
		heure = heure.split(':')[0];
		if(heure == 10 || heure == 16 || heure == 17 || heure == 22 || heure == 04){
			
			if(ville == "Cordeiro"){
				
				depla = document.getElementsByName('city')[0].value = 2;
				
			}else{
				console.log("maitre je sais pas quoi choisir");
			}
			
			document.getElementsByName('dep')[0].click();
				
		}else{
			setTimeout(cooldown,1000);
		}

}

setTimeout(createDrug,1000);
