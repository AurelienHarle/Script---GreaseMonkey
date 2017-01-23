// ==UserScript==
// @name        LowConnection
// @namespace   Utilitaire
// @include     https://*
// @include     http://*
// @version     1
// @grant       none
// ==/UserScript==

/**
	Recupere toute les sources des image
*/
function imageToButton(){
	
	tabImage = document.getElementsByTagName('img');
	size = tabImage.length;
	for(var i = 0;i < size;i++){
		
		parentImage = tabImage[i].parentElement;
		
		largeur = tabImage[i].width;
		hauteur = tabImage[i].height;
		
		newElement = document.createElement('input');
		newElement.value = "Charger l'image...";
		newElement.type = "button";
		newElement.width = largeur;
		newElement.height = hauteur;
		
		newTextNode = document.createTextNode("Charger l'image");
		newElement.appendChild(newTextNode);
		
		newElement.src = tabImage[i].src;
		newElement.addEventListener('click',buttonToImage);
		
		parentImage.replaceChild(newElement,tabImage[i]);
		i--;
	}
}

/**
	Retransforme une image si on appuys sur le  boutton qui la remplace
*/
function buttonToImage(){
	
	console.log("Click click")
	
}

imageToButton();