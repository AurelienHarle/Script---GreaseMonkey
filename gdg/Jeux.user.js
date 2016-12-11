// ==UserScript==
// @name        Game
// @namespace   Guerre des gangs
// @description Auto play ticket and loto every hour/day
// @include     https://www.guerredesgangs.net/fr/jeux.c
// @version     1
// @grant       none
// ==/UserScript==

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

function jeux(){
	
	
	if(document.getElementsByName('dep')[0] != undefined){
		
		setTimeout(deplacement,1000);
		
	}
	
	if(document.getElementsByName('num')[0] != undefined){
		
		document.getElementsByName('num')[0].value = 27;
		document.getElementsByName('loto')[0].click();
		
	}

	note = document.getElementsByClassName('note');

	if(note.length == 3){

		nombreTicket = note[2].getElementsByTagName('p')[0].innerHTML;
		nombreTicket = nombreTicket.split('>')[1].split('/')[0].slice(-1);

	}else if(note.length == 2){

		nombreTicket = note[1].getElementsByTagName('p')[0].innerHTML;
		nombreTicket = nombreTicket.split('>')[1].split('/')[0].slice(-1);

	}
	
	if(nombreTicket != 5){
		document.getElementsByName('l')[0].click();
	}else{
		
		document.getElementById('classementq').nextSibling.nextSibling.nextSibling.nextSibling.getElementsByTagName('a')[0].click();
		
		
	}
	
	
}

function cooldown(){
	console.log("Time to sleep	 master !");
	cooldown = parseInt(document.getElementById('CompteARebours').innerHTML);
	
	setTimeout(reload,1000 * 60 * cooldown + 1);
	
}

setTimeout(jeux,1000);