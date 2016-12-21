// ==UserScript==
// @name        LocalStoreur
// @namespace   anarchy
// @include     https://www.bazinio.com/marche.c
// @downloadURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/LocalStoreur.user.js
// @updateURL	https://github.com/AurelienHarle/Script---GreaseMonkey/master/bazinio/LocalStoreur.user.js
// @version     1.01
// @grant       none
// ==/UserScript==

/**
Recupere toute les données lié a un compte et creer un objet accounts dans une collection.
*/
function createAccount(){
	
	accounts = new Array();
	
	currentAccount = document.getElementsByClassName('lfiche')[0].getElementsByTagName('a')[0].innerHTML;
	currentNumber = parseInt(currentAccount.split('e')[1]);
	
	vie = document.getElementById('col_fiche').getElementsByTagName('td')[0].innerHTML;
	vie = parseInt(vie.split('/')[0]);
	
	pa = document.getElementById('col_fiche').getElementsByTagName('td')[1].innerHTML;
	pa = parseInt(pa.split('/')[0]);
	
	niveau = document.getElementsByClassName('lfiche')[1].innerHTML;
	niveau = niveau.split('<')[0];
	niveau = parseInt(niveau.replace(/N/g,""));
	
	poche = document.getElementsByClassName('tableau market')[0].getElementsByTagName('tr');
	poche = poche[1].getElementsByTagName('th')[1].innerHTML;
	poche = parseInt(poche.split('/')[1]);
	
	cash = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[0].innerHTML;
	cash = cash.replace(/µ/,"");
	cash = parseInt(cash.replace(/\s+/g,""));
	
	banque = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[1].innerHTML;
	banque = banque.replace(/µ/,"");
	banque = parseInt(banque.replace(/\s+/g,""));
	
	cnd = document.getElementsByClassName('liens')[2].getElementsByTagName('td')[2].innerHTML;
	cnd = cnd.replace(/µ/,"");
	cnd = parseInt(cnd.replace(/\s+/g,""));
	
	ville = document.getElementsByClassName('menu_bloc')[0].getElementsByTagName('a')[5].innerHTML;
	
	accounts[currentNumber] = new Object();
	
	accounts[currentNumber].name = currentAccount;
	accounts[currentNumber].nombre = currentNumber;
	accounts[currentNumber].vie = vie;
	accounts[currentNumber].pa = pa;
	accounts[currentNumber].niveau = niveau;
	accounts[currentNumber].poche = poche;
	accounts[currentNumber].cash =	cash;
	accounts[currentNumber].banque = banque;
	accounts[currentNumber].cnd = cnd;
	accounts[currentNumber].ville = ville;
	
	putIntoStorage(accounts,currentNumber);
}

/**
Recupere l'objet accounts et les autres objet accounts deja present dans le local storage et les rajoute au localStorage grace a JSON
*/
function putIntoStorage(accounts,currentNumber){

	var oldAccounts = localStorage.getItem('accounts');
	
	if(oldAccounts != null){
		
		oldAccounts = JSON.parse(oldAccounts);	

		for(var i = 0;i < oldAccounts.length;i++){
		
			if(i != currentNumber){
				
				accounts[oldAccounts[i].nombre] = new Object();
				accounts[oldAccounts[i].nombre].name = oldAccounts[i].name;
				accounts[oldAccounts[i].nombre].nombre = oldAccounts[i].nombre;
				accounts[oldAccounts[i].nombre].vie = oldAccounts[i].vie;
				accounts[oldAccounts[i].nombre].pa = oldAccounts[i].pa;
				accounts[oldAccounts[i].nombre].niveau = oldAccounts[i].niveau;
				accounts[oldAccounts[i].nombre].poche = oldAccounts[i].poche;
				accounts[oldAccounts[i].nombre].cash =	oldAccounts[i].cash;
				accounts[oldAccounts[i].nombre].banque = oldAccounts[i].banque;
				accounts[oldAccounts[i].nombre].cnd = oldAccounts[i].cnd;
				accounts[oldAccounts[i].nombre].ville = oldAccounts[i].ville;
				
			}
		}
	}

	for(var i = 0;i < accounts.length;i++){
		
		if(accounts[i] == undefined){
			
			accounts[i] = new Object();
			accounts[i].name = "Suicide";
			accounts[i].nombre = 0;
			accounts[i].vie = 50;
			accounts[i].pa = 30;
			accounts[i].niveau = 1;
			accounts[i].poche = 25;
			accounts[i].cash =	0;
			accounts[i].banque = 0;
			accounts[i].cnd = 0;
			accounts[i].ville = "Capanio";
			
		}
		
		if(i == 0){
			
			strAccounts = "[";
			strAccounts = strAccounts + JSON.stringify(accounts[i]);
		 
		}else{
			
			strAccounts = strAccounts + ',' + JSON.stringify(accounts[i]);
		}
	}
	
strAccounts = strAccounts + ']';

localStorage.setItem('accounts', strAccounts);
	
}

createAccount();
