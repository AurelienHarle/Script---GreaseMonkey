// ==UserScript==
// @name        menu
// @namespace   Bazinio
// @description Menu de gestion
// @version     1
// @grant       none
// ==/UserScript==


/**
	Creation du localStorage.menu
*/
function createLocalStorageMenu(){
	
	if(localStorage.menu == undefined){
		
		
		menu = new Object();
		
		menu.medecinActiver = false;
		menu.marcherActiver = false;
		menu.deplacementActiver = false;
		menu.deposeActiver = false;
		menu.cndActiver = false;
		menu.retireActiver = false;
		menu.attaqueActiver = false;
		menu.sacActiver = false;
		menu.evolutionActiver = false;
		menu.jeuxActiver = false;
		
		menu.deplacementRadioAuto = false;
		menu.deplacementRadioHeure = false;
		menu.deplacementHeure = '00:00';
		
		menu.deposeMontant = '0';
		
		menu.cndMontant = '0';
		
		menu.retireMontant = '0';
		menu.retireRadioMontant = false;
		menu.retireRadioTout = false;
		
		menu.evolutionNiveau = '1';
		menu.xpForce = '10';
		menu.xpHabilite = '10';
		menu.xpResistance = '10';
		menu.xpEsquive = '10';
		
		localStorage.menu = JSON.stringify(menu);
		
	}
	
	menu = JSON.parse(localStorage.menu)
	createDivMenu();
	
}

/**
	Update le localStorage si un element du menu est changer
*/
function updateLocalStorageMenu(){
	
	menu.medecinActiver = checkboxMedecinMenu.checked;
	menu.marcherActiver = checkboxMarcherMenu.checked;
	menu.deplacementActiver = checkboxDeplacementMenu.checked;
	menu.deposeActiver = checkboxDeposeMenu.checked;
	menu.cndActiver = checkboxCndMenu.checked;
	menu.retireActiver = checkboxRetireMenu.checked;
	menu.attaqueActiver = checkboxAttaqueMenu.checked;
	menu.sacActiver = checkboxSacMenu.checked;
	menu.evolutionActiver = checkboxEvolutionMenu.checked;
	menu.jeuxActiver = checkboxJeuxMenu.checked;
	
	menu.deplacementRadioAuto = radioDeplacementAutoMenu.checked;
	menu.deplacementRadioHeure = radioDeplacementHeureMenu.checked;
	menu.deplacementHeure = heureDeplacementMenu.value;
	
	menu.deposeMontant = montantDeposeMenu.value;
	
	menu.cndMontant = montantCndMenu.value;
	
	menu.retireMontant = montantRetireMenu.value;
	menu.retireRadioMontant = radioRetireMontantMenu.checked;
	menu.retireRadioTout = radioRetireToutMenu.checked;
	
	menu.evolutionNiveau = niveauEvolutionMenu.value;
	menu.xpForce = xpForceEvolutionMenu.value;
	menu.xpHabilite = xpHabiliteEvolutionMenu.value;
	menu.xpResistance = xpResistanceEvolutionMenu.value;
	menu.xpEsquive = xpEsquiveEvolutionMenu.value;
	
	localStorage.menu = JSON.stringify(menu);
	menu = JSON.parse(localStorage.menu)

}

/**
	Creation de la div "menu"
*/
function createDivMenu(){
	
	menuBot = document.createElement("div");
	menuBot.setAttribute('class','menuBot');
	menuBot.style.height = "880px";
	menuBot.style.width = "0px";
	menuBot.style.position = "absolute";
	menuBot.style.top = "0";
	menuBot.style.right = "0";
	menuBot.style.border = "1px solid #336699"
	menuBot.style.webkitTransition = "width 2s";
	menuBot.style.textAlign = "left";
	menuBot.style.overflow = "auto";
	
	createElementMenu();
}	
	
/**
	Creation des elements contenu dans le "menu"
*/
function createElementMenu(){

//Arrow Menu
	 imageMenuBot = document.createElement('img');
	imageMenuBot.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageMenuBot.style.MozTransform = "rotate(180deg)";
	imageMenuBot.style.position = "absolute";
	imageMenuBot.style.top = "424px";
	imageMenuBot.style.right = "0px";
	imageMenuBot.addEventListener("click", ouvreMenu, false);
	imageMenuBot.style.webkitTransition = "right 2s";
	imageMenuBot.style.zIndex = "99";

//Titre
	titreMenuBot = document.createElement('h1');
	titreMenuBot.setAttribute('class','titreMenuBot');
	titreMenuBot.style.textAlign = "center";
	titreMenuBot.style.backgroundColor = "#336699";
	titreMenuBot.style.color = "#000000";
	
//Medecin
	medecinMenu = document.createElement('div');
	medecinMenu.style.borderBottom = "1px solid #336699";
	medecinMenu.style.webkitTransition = "height 2s";
	medecinMenu.style.height = "19px";

	titreMedecinMenu = document.createElement('h2');
	titreMedecinMenu.style.marginBottom = "0px";
	titreMedecinMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverMedecinMenu = document.createElement('label');
	labelActiverMedecinMenu.style.display = "none";

	checkboxMedecinMenu = document.createElement('input');
	checkboxMedecinMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxMedecinMenu.type = "checkbox";
	checkboxMedecinMenu.name = "medecin";
	checkboxMedecinMenu.value = "medecin";
	checkboxMedecinMenu.checked = menu.medecinActiver;
	checkboxMedecinMenu.style.display = "none";

	imageMedecinMenu = document.createElement('img');
	imageMedecinMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageMedecinMenu.style.MozTransform = "rotate(90deg)";
	imageMedecinMenu.style.width = "16px";
	imageMedecinMenu.style.height = "16px";
	imageMedecinMenu.addEventListener("click", ouvreMenuMedecin, false);
	imageMedecinMenu.style.webkitTransition = "right 2s";

//Marcher
	marcherMenu = document.createElement('div');
	marcherMenu.style.borderBottom = "1px solid #336699";
	marcherMenu.style.webkitTransition = "height 2s";
	marcherMenu.style.height = "19px";

	titreMarcherMenu = document.createElement('h2');
	titreMarcherMenu.style.marginBottom = "0px";
	titreMarcherMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverMarcherMenu = document.createElement('label');
	labelActiverMarcherMenu.style.display = "none";

	checkboxMarcherMenu = document.createElement('input');
	checkboxMarcherMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxMarcherMenu.type = "checkbox";
	checkboxMarcherMenu.name = "marcher";
	checkboxMarcherMenu.value = "marcher";
	checkboxMarcherMenu.checked = menu.marcherActiver;
	checkboxMarcherMenu.style.display = "none";

	 imageMarcherMenu = document.createElement('img');
	imageMarcherMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageMarcherMenu.style.MozTransform = "rotate(90deg)";
	imageMarcherMenu.style.width = "16px";
	imageMarcherMenu.style.height = "16px";
	imageMarcherMenu.addEventListener("click", ouvreMenuMarcher, false);
	imageMarcherMenu.style.webkitTransition = "right 2s";

//Deplacement
	deplacementMenu = document.createElement('div');
	deplacementMenu.style.borderBottom = "1px solid #336699";
	deplacementMenu.style.webkitTransition = "height 2s";
	deplacementMenu.style.height = "19px";

	titreDeplacementMenu = document.createElement('h2');
	titreDeplacementMenu.style.marginBottom = "0px";
	titreDeplacementMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverDeplacementMenu = document.createElement('label');
	labelActiverDeplacementMenu.style.display = "none";

	labelHeureDeplacementMenu = document.createElement('label');
	labelHeureDeplacementMenu.style.display = "none";
	
	labelAutoDeplacementMenu = document.createElement('label');
	labelAutoDeplacementMenu.style.display = "none";
	
	checkboxDeplacementMenu = document.createElement('input');
	checkboxDeplacementMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxDeplacementMenu.type = "checkbox";
	checkboxDeplacementMenu.name = "deplacement";
	checkboxDeplacementMenu.value = "deplacement";
	checkboxDeplacementMenu.checked = menu.deplacementActiver;
	checkboxDeplacementMenu.style.display = "none";

	radioDeplacementAutoMenu = document.createElement('input');
	radioDeplacementAutoMenu.addEventListener('click',updateLocalStorageMenu,false);
	radioDeplacementAutoMenu.type = "radio";
	radioDeplacementAutoMenu.name = "heure";
	radioDeplacementAutoMenu.value = "heure";
	radioDeplacementAutoMenu.checked = menu.deplacementRadioAuto;
	radioDeplacementAutoMenu.style.display = "none";

	radioDeplacementHeureMenu = document.createElement('input');
	radioDeplacementHeureMenu.addEventListener('click',updateLocalStorageMenu,false);
	radioDeplacementHeureMenu.type = "radio";
	radioDeplacementHeureMenu.name = "heure";
	radioDeplacementHeureMenu.value = "auto";
	radioDeplacementHeureMenu.checked = menu.deplacementRadioHeure;
	radioDeplacementHeureMenu.style.display = "none";

	heureDeplacementMenu = document.createElement('input');
	heureDeplacementMenu.addEventListener('change',updateLocalStorageMenu,false);
	heureDeplacementMenu.name = "heure";
	heureDeplacementMenu.value = menu.deplacementHeure;
	heureDeplacementMenu.style.display = "none";

	imageDeplacementMenu = document.createElement('img');
	imageDeplacementMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageDeplacementMenu.style.MozTransform = "rotate(90deg)";
	imageDeplacementMenu.style.width = "16px";
	imageDeplacementMenu.style.height = "16px";
	imageDeplacementMenu.addEventListener("click", ouvreMenuDeplacement, false);
	imageDeplacementMenu.style.webkitTransition = "right 2s";

//Depose
	deposeMenu = document.createElement('div');
	deposeMenu.style.borderBottom = "1px solid #336699";
	deposeMenu.style.webkitTransition = "height 2s";
	deposeMenu.style.height = "19px";

	titreDeposeMenu = document.createElement('h2');
	titreDeposeMenu.style.marginBottom = "0px";
	titreDeposeMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverDeposeMenu = document.createElement('label');
	labelActiverDeposeMenu.style.display = "none";

	labelMontantDeposeMenu = document.createElement('label');
	labelMontantDeposeMenu.style.display = "none";

	checkboxDeposeMenu = document.createElement('input');
	checkboxDeposeMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxDeposeMenu.type = "checkbox";
	checkboxDeposeMenu.name = "depose";
	checkboxDeposeMenu.value = "depose";
	checkboxDeposeMenu.checked = menu.deposeActiver;
	checkboxDeposeMenu.style.display = "none";

	montantDeposeMenu = document.createElement('input');
	montantDeposeMenu.addEventListener('change',updateLocalStorageMenu,false);
	montantDeposeMenu.name = "depose";
	montantDeposeMenu.value = menu.deposeMontant;
	montantDeposeMenu.style.display = "none";

	imageDeposeMenu = document.createElement('img');
	imageDeposeMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageDeposeMenu.style.MozTransform = "rotate(90deg)";
	imageDeposeMenu.style.width = "16px";
	imageDeposeMenu.style.height = "16px";
	imageDeposeMenu.addEventListener("click", ouvreMenuDepose, false);
	imageDeposeMenu.style.webkitTransition = "right 2s";

//Cnd
	cndMenu = document.createElement('div');
	cndMenu.style.borderBottom = "1px solid #336699";
	cndMenu.style.webkitTransition = "height 2s";
	cndMenu.style.height = "19px";

	titreCndMenu = document.createElement('h2');
	titreCndMenu.style.marginBottom = "0px";
	titreCndMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverCndMenu = document.createElement('label');
	labelActiverCndMenu.style.display = "none";

	labelMontantCndMenu = document.createElement('label');
	labelMontantCndMenu.style.display = "none";

	checkboxCndMenu = document.createElement('input');
	checkboxCndMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxCndMenu.type = "checkbox";
	checkboxCndMenu.name = "cnd";
	checkboxCndMenu.value = "cnd";
	checkboxCndMenu.checked = menu.cndActiver;
	checkboxCndMenu.style.display = "none";

	montantCndMenu = document.createElement('input');
	montantCndMenu.addEventListener('change',updateLocalStorageMenu,false);
	montantCndMenu.name = "cnd";
	montantCndMenu.value = menu.cndMontant;
	montantCndMenu.style.display = "none";

	imageCndMenu = document.createElement('img');
	imageCndMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageCndMenu.style.MozTransform = "rotate(90deg)";
	imageCndMenu.style.width = "16px";
	imageCndMenu.style.height = "16px";
	imageCndMenu.addEventListener("click", ouvreMenuCnd, false);
	imageCndMenu.style.webkitTransition = "right 2s";
	
//Retire
	retireMenu = document.createElement('div');
	retireMenu.style.borderBottom = "1px solid #336699";
	retireMenu.style.webkitTransition = "height 2s";
	retireMenu.style.height = "19px";

	titreRetireMenu = document.createElement('h2');
	titreRetireMenu.style.marginBottom = "0px";
	titreRetireMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverRetireMenu = document.createElement('label');
	labelActiverRetireMenu.style.display = "none";

	labelMontantRetireMenu = document.createElement('label');
	labelMontantRetireMenu.style.display = "none";
	
	labelToutRetireMenu = document.createElement('label');
	labelToutRetireMenu.style.display = "none";

	checkboxRetireMenu = document.createElement('input');
	checkboxRetireMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxRetireMenu.type = "checkbox";
	checkboxRetireMenu.name = "retire";
	checkboxRetireMenu.value = "retire";
	checkboxRetireMenu.checked = menu.retireActiver;
	checkboxRetireMenu.style.display = "none";
	
	radioRetireMontantMenu = document.createElement('input');
	radioRetireMontantMenu.addEventListener('click',updateLocalStorageMenu,false);
	radioRetireMontantMenu.type = "radio";
	radioRetireMontantMenu.name = "Retire";
	radioRetireMontantMenu.value = "Montant";
	radioRetireMontantMenu.checked = menu.retireRadioMontant;
	radioRetireMontantMenu.style.display = "none";

	radioRetireToutMenu = document.createElement('input');
	radioRetireToutMenu.addEventListener('click',updateLocalStorageMenu,false);
	radioRetireToutMenu.type = "radio";
	radioRetireToutMenu.name = "Retire";
	radioRetireToutMenu.value = "Tout";
	radioRetireMontantMenu.checked = menu.retireRadioTout;
	radioRetireToutMenu.style.display = "none";
	
	montantRetireMenu = document.createElement('input');
	montantRetireMenu.addEventListener('change',updateLocalStorageMenu,false);
	montantRetireMenu.name = "retire";
	montantRetireMenu.value = menu.retireMontant;
	montantRetireMenu.style.display = "none";

	imageRetireMenu = document.createElement('img');
	imageRetireMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageRetireMenu.style.MozTransform = "rotate(90deg)";
	imageRetireMenu.style.width = "16px";
	imageRetireMenu.style.height = "16px";
	imageRetireMenu.addEventListener("click", ouvreMenuRetire, false);
	imageRetireMenu.style.webkitTransition = "right 2s";
	
//Attaque
	attaqueMenu = document.createElement('div');
	attaqueMenu.style.borderBottom = "1px solid #336699";
	attaqueMenu.style.webkitTransition = "height 2s";
	attaqueMenu.style.height = "19px";

	titreAttaqueMenu = document.createElement('h2');	
	titreAttaqueMenu.style.marginBottom = "0px";
	titreAttaqueMenu.style.borderBottom = "1px solid #336699";

	labelActiverAttaqueMenu = document.createElement('label');
	labelActiverAttaqueMenu.style.display = "none";

	checkboxAttaqueMenu = document.createElement('input');
	checkboxAttaqueMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxAttaqueMenu.type = "checkbox";
	checkboxAttaqueMenu.name = "attaque";
	checkboxAttaqueMenu.value = "attaque";
	checkboxAttaqueMenu.checked = menu.attaqueActiver;
	checkboxAttaqueMenu.style.display = "none";

	imageAttaqueMenu = document.createElement('img');
	imageAttaqueMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageAttaqueMenu.style.MozTransform = "rotate(90deg)";
	imageAttaqueMenu.style.width = "16px";
	imageAttaqueMenu.style.height = "16px";
	imageAttaqueMenu.addEventListener("click", ouvreMenuAttaque, false);
	imageAttaqueMenu.style.webkitTransition = "right 2s";
	
//Sac
	sacMenu = document.createElement('div');
	sacMenu.style.borderBottom = "1px solid #336699";
	sacMenu.style.webkitTransition = "height 2s";
	sacMenu.style.height = "19px";

	titreSacMenu = document.createElement('h2');
	titreSacMenu.style.marginBottom = "0px";
	titreSacMenu.style.borderBottom = "1px solid #336699";

	labelActiverSacMenu = document.createElement('label');
	labelActiverSacMenu.style.display = "none";

	checkboxSacMenu = document.createElement('input');
	checkboxSacMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxSacMenu.type = "checkbox";
	checkboxSacMenu.name = "sac";
	checkboxSacMenu.value = "sac";
	checkboxSacMenu.checked = menu.sacActiver;
	checkboxSacMenu.style.display = "none";

	imageSacMenu = document.createElement('img');
	imageSacMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageSacMenu.style.MozTransform = "rotate(90deg)";
	imageSacMenu.style.width = "16px";
	imageSacMenu.style.height = "16px";
	imageSacMenu.addEventListener("click", ouvreMenuSac, false);
	imageSacMenu.style.webkitTransition = "right 2s";
	
//Evolution
	evolutionMenu = document.createElement('div');
	evolutionMenu.style.borderBottom = "1px solid #336699";
	evolutionMenu.style.webkitTransition = "height 2s";
	evolutionMenu.style.height = "19px";

	titreEvolutionMenu = document.createElement('h2');
	titreEvolutionMenu.style.marginBottom = "0px";
	titreEvolutionMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverEvolutionMenu = document.createElement('label');
	labelActiverEvolutionMenu.style.display = "none";
	
	labelNiveauEvolutionMenu = document.createElement('label');
	labelNiveauEvolutionMenu.style.display = "none";
	
	labelXPFEvolutionMenu = document.createElement('label');
	labelXPFEvolutionMenu.style.display = "none";
	
	labelXPHEvolutionMenu = document.createElement('label');
	labelXPHEvolutionMenu.style.display = "none";
	
	labelXPEEvolutionMenu = document.createElement('label');
	labelXPEEvolutionMenu.style.display = "none";
	
	labelXPREvolutionMenu = document.createElement('label');
	labelXPREvolutionMenu.style.display = "none";
	
	niveauEvolutionMenu = document.createElement('input');
	niveauEvolutionMenu.addEventListener('change',updateLocalStorageMenu,false);
	niveauEvolutionMenu.name = "niveau";
	niveauEvolutionMenu.value = menu.evolutionNiveau;
	niveauEvolutionMenu.style.display = "none";
	
	xpForceEvolutionMenu = document.createElement('input');
	xpForceEvolutionMenu.addEventListener('change',updateLocalStorageMenu,false);
	xpForceEvolutionMenu.name = "retire";
	xpForceEvolutionMenu.value = menu.xpForce;
	xpForceEvolutionMenu.style.display = "none";
	
	xpHabiliteEvolutionMenu = document.createElement('input');
	xpHabiliteEvolutionMenu.addEventListener('change',updateLocalStorageMenu,false);
	xpHabiliteEvolutionMenu.name = "retire";
	xpHabiliteEvolutionMenu.value = menu.xpHabilite;
	xpHabiliteEvolutionMenu.style.display = "none";
	
	xpResistanceEvolutionMenu = document.createElement('input');
	xpResistanceEvolutionMenu.addEventListener('change',updateLocalStorageMenu,false);
	xpResistanceEvolutionMenu.name = "retire";
	xpResistanceEvolutionMenu.value = menu.xpResistance;
	xpResistanceEvolutionMenu.style.display = "none";
	
	xpEsquiveEvolutionMenu = document.createElement('input');
	xpEsquiveEvolutionMenu.addEventListener('change',updateLocalStorageMenu,false);
	xpEsquiveEvolutionMenu.name = "retire";
	xpEsquiveEvolutionMenu.value = menu.xpEsquive;
	xpEsquiveEvolutionMenu.style.display = "none";
	
	checkboxEvolutionMenu = document.createElement('input');
	checkboxEvolutionMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxEvolutionMenu.type = "checkbox";
	checkboxEvolutionMenu.name = "evolution";
	checkboxEvolutionMenu.value = "evolution";
	checkboxEvolutionMenu.checked = menu.evolutionActiver
	checkboxEvolutionMenu.style.display = "none";

	imageEvolutionMenu = document.createElement('img');
	imageEvolutionMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageEvolutionMenu.style.MozTransform = "rotate(90deg)";
	imageEvolutionMenu.style.width = "16px";
	imageEvolutionMenu.style.height = "16px";
	imageEvolutionMenu.addEventListener("click", ouvreMenuEvolution, false);
	imageEvolutionMenu.style.webkitTransition = "right 2s";

//Jeux
	jeuxMenu = document.createElement('div');
	jeuxMenu.style.borderBottom = "1px solid #336699";
	jeuxMenu.style.webkitTransition = "height 2s";
	jeuxMenu.style.height = "19px";

	titreJeuxMenu = document.createElement('h2');
	titreJeuxMenu.style.marginBottom = "0px";
	titreJeuxMenu.style.borderBottom = "1px solid #336699";
	
	labelActiverJeuxMenu = document.createElement('label');
	labelActiverJeuxMenu.style.display = "none";

	checkboxJeuxMenu = document.createElement('input');
	checkboxJeuxMenu.addEventListener('click',updateLocalStorageMenu,false);
	checkboxJeuxMenu.type = "checkbox";
	checkboxJeuxMenu.name = "jeux";
	checkboxJeuxMenu.value = "jeux";
	checkboxJeuxMenu.checked = menu.jeuxActiver;
	checkboxJeuxMenu.style.display = "none";

	 imageJeuxMenu = document.createElement('img');
	imageJeuxMenu.src = "http://www.truckingtruth.com/cdn/misc-images/arrow-32-32.png";
	imageJeuxMenu.style.MozTransform = "rotate(90deg)";
	imageJeuxMenu.style.width = "16px";
	imageJeuxMenu.style.height = "16px";
	imageJeuxMenu.addEventListener("click", ouvreMenuJeux, false);
	imageJeuxMenu.style.webkitTransition = "right 2s";
	
	createTextNode();
}

/**
	Creation des TextNode
*/
function createTextNode(){
	
//Titre
	 textTitreMenuBot = document.createTextNode("Menu Bot V.1");

//Medecin
	 textTitreMedecinMenu = document.createTextNode("Medecin");
	 textLabelActiveMedecinMenu = document.createTextNode("Activer");

//Marcher
	 textTitreMarcherMenu = document.createTextNode("Marcher");
	 textLabelActiveMarcherMenu = document.createTextNode("Activer");

//Deplacement
	 textTitreDeplacementMenu = document.createTextNode("Deplacement");
	 textLabelActiveDeplacementMenu = document.createTextNode("Activer");
	 textLabelHeureDeplacementMenu = document.createTextNode("Heure");
	 textLabelAutoDeplacementMenu = document.createTextNode("Auto");

//Depose
	 textTitreDeposeMenu = document.createTextNode("Depose");
	 textLabelActiveDeposeMenu = document.createTextNode("Activer");
	 textLabelMontantDeposeMenu = document.createTextNode("Montant");
	
//Cnd
	 textTitreCndMenu = document.createTextNode("Cnd");
	 textLabelActiveCndMenu = document.createTextNode("Activer");
	 textLabelMontantCndMenu = document.createTextNode("Montant");
	
//Retire
	 textTitreRetireMenu = document.createTextNode("Retire");
	 textLabelActiveRetireMenu = document.createTextNode("Activer");
	 textLabelMontantRetireMenu = document.createTextNode("Montant");
	 textLabelToutRetireMenu = document.createTextNode("Tout");
	
//Attaque
	 textTitreAttaqueMenu = document.createTextNode("Attaque");
	 textLabelActiveAttaqueMenu = document.createTextNode("Activer");
	
//Sac
	 textTitreSacMenu = document.createTextNode("Sac");
	 textLabelActiveSacMenu = document.createTextNode("Activer");
	
//Evolution
	 textTitreEvolutionMenu = document.createTextNode("Evolution");
	 textLabelActiveEvolutionMenu = document.createTextNode("Activer");
	
	 textNiveauEvolutionMenu = document.createTextNode("Niveau");
	 textForceEvolutionMenu = document.createTextNode("Force");
	 textHabiliteEvolutionMenu = document.createTextNode("Habilite");
	 textResistanceEvolutionMenu = document.createTextNode("Resistance");
	 textEsquiveEvolutionMenu = document.createTextNode("Esquive");
	
//Jeux
	 textTitreJeuxMenu = document.createTextNode("Jeux");
	 textLabelActiveJeuxMenu = document.createTextNode("Activer");
	
	addChildElementToParent();
}
/**
Ajout des elements enfants au parent
*/
function addChildElementToParent(){
//Ajout a Menu Bot
	menuBot.appendChild(titreMenuBot);
	menuBot.appendChild(medecinMenu);
	menuBot.appendChild(imageMedecinMenu);
	menuBot.appendChild(marcherMenu);
	menuBot.appendChild(imageMarcherMenu);
	menuBot.appendChild(deplacementMenu);
	menuBot.appendChild(imageDeplacementMenu);
	menuBot.appendChild(deposeMenu);
	menuBot.appendChild(imageDeposeMenu);
	menuBot.appendChild(cndMenu);
	menuBot.appendChild(imageCndMenu);
	menuBot.appendChild(retireMenu);
	menuBot.appendChild(imageRetireMenu);
	menuBot.appendChild(attaqueMenu);
	menuBot.appendChild(imageAttaqueMenu);
	menuBot.appendChild(sacMenu);
	menuBot.appendChild(imageSacMenu);
	menuBot.appendChild(evolutionMenu);
	menuBot.appendChild(imageEvolutionMenu);
	menuBot.appendChild(jeuxMenu);
	menuBot.appendChild(imageJeuxMenu);

//Ajout a titreMenuBot
	titreMenuBot.appendChild(textTitreMenuBot);

//Ajout a medecinMenu
	medecinMenu.appendChild(titreMedecinMenu);
	
	medecinMenu.appendChild(labelActiverMedecinMenu);
	medecinMenu.appendChild(checkboxMedecinMenu);
	
	titreMedecinMenu.appendChild(textTitreMedecinMenu);
	labelActiverMedecinMenu.appendChild(textLabelActiveMedecinMenu);	
	
	
//Ajout a marcherMenu
	marcherMenu.appendChild(titreMarcherMenu);
	
	marcherMenu.appendChild(checkboxMarcherMenu);
	marcherMenu.appendChild(labelActiverMarcherMenu);
	
	titreMarcherMenu.appendChild(textTitreMarcherMenu);
	labelActiverMarcherMenu.appendChild(textLabelActiveMarcherMenu);
	

//Ajout a deplacementMenu
	deplacementMenu.appendChild(titreDeplacementMenu);
	
	deplacementMenu.appendChild(labelActiverDeplacementMenu);
	deplacementMenu.appendChild(checkboxDeplacementMenu);
	deplacementMenu.appendChild(document.createElement('br'));
	
	deplacementMenu.appendChild(labelAutoDeplacementMenu);
	deplacementMenu.appendChild(radioDeplacementAutoMenu);
	deplacementMenu.appendChild(document.createElement('br'));
	
	deplacementMenu.appendChild(labelHeureDeplacementMenu);
	deplacementMenu.appendChild(radioDeplacementHeureMenu);
	deplacementMenu.appendChild(heureDeplacementMenu);
	deplacementMenu.appendChild(document.createElement('br'));
	
	titreDeplacementMenu.appendChild(textTitreDeplacementMenu);
	labelActiverDeplacementMenu.appendChild(textLabelActiveDeplacementMenu);
	labelHeureDeplacementMenu.appendChild(textLabelHeureDeplacementMenu);
	labelAutoDeplacementMenu.appendChild(textLabelAutoDeplacementMenu);

//Ajout a deposeMenu
	deposeMenu.appendChild(titreDeposeMenu);
	
	deposeMenu.appendChild(labelActiverDeposeMenu);
	deposeMenu.appendChild(checkboxDeposeMenu);
	deposeMenu.appendChild(document.createElement('br'));
	
	deposeMenu.appendChild(labelMontantDeposeMenu);
	deposeMenu.appendChild(montantDeposeMenu);
	deposeMenu.appendChild(document.createElement('br'));
	
	titreDeposeMenu.appendChild(textTitreDeposeMenu);	
	labelActiverDeposeMenu.appendChild(textLabelActiveDeposeMenu);
	labelMontantDeposeMenu.appendChild(textLabelMontantDeposeMenu);
	labelActiverDeposeMenu.appendChild(textLabelActiveDeposeMenu);

//Ajout a cndMenu
	cndMenu.appendChild(titreCndMenu);
	
	cndMenu.appendChild(labelActiverCndMenu);
	cndMenu.appendChild(checkboxCndMenu);
	cndMenu.appendChild(document.createElement('br'));
	
	cndMenu.appendChild(labelMontantCndMenu);
	cndMenu.appendChild(montantCndMenu);
	cndMenu.appendChild(document.createElement('br'));
	
	titreCndMenu.appendChild(textTitreCndMenu);
	labelActiverCndMenu.appendChild(textLabelActiveCndMenu);
	labelMontantCndMenu.appendChild(textLabelMontantCndMenu);
	

//Ajout a retireMenu
	retireMenu.appendChild(titreRetireMenu);
	
	retireMenu.appendChild(labelActiverRetireMenu);
	retireMenu.appendChild(checkboxRetireMenu);
	retireMenu.appendChild(document.createElement('br'));
	
	retireMenu.appendChild(labelMontantRetireMenu);
	retireMenu.appendChild(radioRetireMontantMenu);
	retireMenu.appendChild(montantRetireMenu);
	retireMenu.appendChild(document.createElement('br'));
	
	retireMenu.appendChild(labelToutRetireMenu);
	retireMenu.appendChild(radioRetireToutMenu);
	retireMenu.appendChild(document.createElement('br'));
	
	titreRetireMenu.appendChild(textTitreRetireMenu);
	labelActiverRetireMenu.appendChild(textLabelActiveRetireMenu);
	labelMontantRetireMenu.appendChild(textLabelMontantRetireMenu);
	labelToutRetireMenu.appendChild(textLabelToutRetireMenu);

//Ajout a attaqueMenu
	attaqueMenu.appendChild(titreAttaqueMenu);
	attaqueMenu.appendChild(labelActiverAttaqueMenu);
	attaqueMenu.appendChild(checkboxAttaqueMenu);
	titreAttaqueMenu.appendChild(textTitreAttaqueMenu);
	labelActiverAttaqueMenu.appendChild(textLabelActiveAttaqueMenu);
	
//Ajout a sacMenu
	sacMenu.appendChild(titreSacMenu);
	sacMenu.appendChild(labelActiverSacMenu);
	sacMenu.appendChild(checkboxSacMenu);
	titreSacMenu.appendChild(textTitreSacMenu);
	labelActiverSacMenu.appendChild(textLabelActiveSacMenu);
	
//Ajout a evolutionMenu
	evolutionMenu.appendChild(titreEvolutionMenu);
	
	evolutionMenu.appendChild(labelActiverEvolutionMenu);
	evolutionMenu.appendChild(checkboxEvolutionMenu);
	evolutionMenu.appendChild(document.createElement('br'));
	
	evolutionMenu.appendChild(labelNiveauEvolutionMenu);
	evolutionMenu.appendChild(niveauEvolutionMenu);
	evolutionMenu.appendChild(document.createElement('br'));
	
	evolutionMenu.appendChild(labelXPFEvolutionMenu);
	evolutionMenu.appendChild(xpForceEvolutionMenu);
	evolutionMenu.appendChild(document.createElement('br'));
	
	evolutionMenu.appendChild(labelXPHEvolutionMenu);
	evolutionMenu.appendChild(xpHabiliteEvolutionMenu);
	evolutionMenu.appendChild(document.createElement('br'));
	
	evolutionMenu.appendChild(labelXPREvolutionMenu);
	evolutionMenu.appendChild(xpResistanceEvolutionMenu);
	evolutionMenu.appendChild(document.createElement('br'));
	
	evolutionMenu.appendChild(labelXPEEvolutionMenu);
	evolutionMenu.appendChild(xpEsquiveEvolutionMenu);
	evolutionMenu.appendChild(document.createElement('br'));
	
	titreEvolutionMenu.appendChild(textTitreEvolutionMenu);
	labelActiverEvolutionMenu.appendChild(textLabelActiveEvolutionMenu);
	labelNiveauEvolutionMenu.appendChild(textNiveauEvolutionMenu);
	labelXPFEvolutionMenu.appendChild(textForceEvolutionMenu);
	labelXPHEvolutionMenu.appendChild(textHabiliteEvolutionMenu);
	labelXPREvolutionMenu.appendChild(textResistanceEvolutionMenu);
	labelXPEEvolutionMenu.appendChild(textEsquiveEvolutionMenu);
	
//Ajout a jeuxMenu
	jeuxMenu.appendChild(titreJeuxMenu);
	jeuxMenu.appendChild(labelActiverJeuxMenu);
	jeuxMenu.appendChild(checkboxJeuxMenu);
	titreJeuxMenu.appendChild(textTitreJeuxMenu);
	labelActiverJeuxMenu.appendChild(textLabelActiveJeuxMenu);
	
	addMenuToDocument();
	
}

/**
	Ajout du menu a la page
*/
function addMenuToDocument(){
	
	 currentDiv = document.getElementById("chatedicon"); 
	parentElement = currentDiv.parentNode;
	parentElement.insertBefore(menuBot, currentDiv);
	parentElement.insertBefore(imageMenuBot,currentDiv);

}

/**
	Ouvre le Menu Bot
*/
function ouvreMenu(){
	
	if (menuBot.style.width == "0px"){
		
		menuBot.style.width = '420px';
		imageMenuBot.style.right = '425px';
		imageMenuBot.style.MozTransform = "rotate(0deg)";
		
		
	}else if (menuBot.style.width == "420px"){
		
		menuBot.style.width = '0px';
		imageMenuBot.style.right = '0px';
		imageMenuBot.style.MozTransform = "rotate(180deg)";
		
	}
}

/**
	Ouvre le Menu Medecin
*/
function ouvreMenuMedecin(){
	
	if (medecinMenu.style.height == "19px"){
		
		medecinMenu.style.height = '40px';
		imageMedecinMenu.style.top = '40px';
		imageMedecinMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuMedecin,2000);
		
	}else if (medecinMenu.style.height == "40px"){
		
		cacheMenuMedecin();
		medecinMenu.style.height = '19px';
		imageMedecinMenu.style.top = '19px';
		imageMedecinMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu marcher
*/
function ouvreMenuMarcher(){
	
	if (marcherMenu.style.height == "19px"){
		
		marcherMenu.style.height = '40px';
		imageMarcherMenu.style.top = '40px';
		imageMarcherMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuMarcher,2000);
		
	}else if (marcherMenu.style.height == "40px"){
		
		cacheMenuMarcher();
		marcherMenu.style.height = '19px';
		imageMarcherMenu.style.top = '19px';
		imageMarcherMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Deplacement
*/
function ouvreMenuDeplacement(){
	
	if (deplacementMenu.style.height == "19px"){
		
		deplacementMenu.style.height = '85px';
		imageDeplacementMenu.style.top = '85px';
		imageDeplacementMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuDeplacement,2000);
		
	}else if (deplacementMenu.style.height == "85px"){
		
		cacheMenuDeplacement();
		deplacementMenu.style.height = '19px';
		imageDeplacementMenu.style.top = '19px';
		imageDeplacementMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Depose
*/
function ouvreMenuDepose(){
	
	if (deposeMenu.style.height == "19px"){
		
		deposeMenu.style.height = '65px';
		imageDeposeMenu.style.top = '65px';
		imageDeposeMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuDepose,2000);
		
	}else if (deposeMenu.style.height == "65px"){
		
		cacheMenuDepose();
		deposeMenu.style.height = '19px';
		imageDeposeMenu.style.top = '19px';
		imageDeposeMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Cnd
*/
function ouvreMenuCnd(){
	
	if (cndMenu.style.height == "19px"){
		
		cndMenu.style.height = '65px';
		imageCndMenu.style.top = '65px';
		imageCndMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuCnd,2000);
		
	}else if (cndMenu.style.height == "65px"){
		
		cacheMenuCnd();
		cndMenu.style.height = '19px';
		imageCndMenu.style.top = '19px';
		imageCndMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Retire
*/
function ouvreMenuRetire(){
	
	if (retireMenu.style.height == "19px"){
		
		retireMenu.style.height = '85px';
		imageRetireMenu.style.top = '85px';
		imageRetireMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuRetire,2000);
		
	}else if (retireMenu.style.height == "85px"){
		
		cacheMenuRetire();
		retireMenu.style.height = '19px';
		imageRetireMenu.style.top = '19px';
		imageRetireMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Attaque
*/
function ouvreMenuAttaque(){
	
	if (attaqueMenu.style.height == "19px"){
		
		attaqueMenu.style.height = '40px';
		imageAttaqueMenu.style.top = '40px';
		imageAttaqueMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuAttaque,2000);
		
	}else if (attaqueMenu.style.height == "40px"){
		
		cacheMenuAttaque();
		attaqueMenu.style.height = '19px';
		imageAttaqueMenu.style.top = '19px';
		imageAttaqueMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Sac
*/
function ouvreMenuSac(){
	
	if (sacMenu.style.height == "19px"){
		
		sacMenu.style.height = '40px';
		imageSacMenu.style.top = '40px';
		imageSacMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuSac,2000);
		
	}else if (sacMenu.style.height == "40px"){
		
		cacheMenuSac();
		sacMenu.style.height = '19px';
		imageSacMenu.style.top = '19px';
		imageSacMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Evolution
*/
function ouvreMenuEvolution(){
	
	if (evolutionMenu.style.height == "19px"){
		
		evolutionMenu.style.height = '155px';
		imageEvolutionMenu.style.top = '155px';
		imageEvolutionMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuEvolution,2000);
		
	}else if (evolutionMenu.style.height == "155px"){
		
		cacheMenuEvolution();
		evolutionMenu.style.height = '19px';
		imageEvolutionMenu.style.top = '19px';
		imageEvolutionMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Ouvre le Menu Jeux
*/
function ouvreMenuJeux(){
	
	if (jeuxMenu.style.height == "19px"){
		
		jeuxMenu.style.height = '40px';
		imageJeuxMenu.style.top = '40px';
		imageJeuxMenu.style.MozTransform = "rotate(270deg)";
		setTimeout(afficheMenuJeux,2000);
		
	}else if (jeuxMenu.style.height == "40px"){
		
		cacheMenuJeux();
		jeuxMenu.style.height = '19px';
		imageJeuxMenu.style.top = '19px';
		imageJeuxMenu.style.MozTransform = "rotate(90deg)";
		
	}
}

/**
	Affiche les elements du menu medecin
*/
function afficheMenuMedecin(){
	
	checkboxMedecinMenu.style.display = "inline";
	labelActiverMedecinMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Marcher
*/
function afficheMenuMarcher(){
	
	checkboxMarcherMenu.style.display = "inline";
	labelActiverMarcherMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Deplacement
*/
function afficheMenuDeplacement(){
	
	checkboxDeplacementMenu.style.display = "inline";
	labelActiverDeplacementMenu.style.display = "inline";
	labelHeureDeplacementMenu.style.display = "inline";
	labelAutoDeplacementMenu.style.display = "inline";
	radioDeplacementAutoMenu.style.display = "inline";
	radioDeplacementHeureMenu.style.display = "inline";
	heureDeplacementMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Depose
*/
function afficheMenuDepose(){
	
	checkboxDeposeMenu.style.display = "inline";
	labelActiverDeposeMenu.style.display = "inline";
	labelMontantDeposeMenu.style.display = "inline";
	montantDeposeMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Cnd
*/
function afficheMenuCnd(){
	
	checkboxCndMenu.style.display = "inline";
	labelActiverCndMenu.style.display = "inline";
	labelMontantCndMenu.style.display = "inline";
	montantCndMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Retire
*/
function afficheMenuRetire(){
	
	checkboxRetireMenu.style.display = "inline";
	labelActiverRetireMenu.style.display = "inline";
	labelMontantRetireMenu.style.display = "inline";
	labelToutRetireMenu.style.display = "inline";
	radioRetireMontantMenu.style.display = "inline";
	radioRetireToutMenu.style.display = "inline";
	montantRetireMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Attaque
*/
function afficheMenuAttaque(){
	
	checkboxAttaqueMenu.style.display = "inline";
	labelActiverAttaqueMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Sac
*/
function afficheMenuSac(){
	
	checkboxSacMenu.style.display = "inline";
	labelActiverSacMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Evolution
*/
function afficheMenuEvolution(){
	
	checkboxEvolutionMenu.style.display = "inline";
	labelActiverEvolutionMenu.style.display = "inline";
	labelNiveauEvolutionMenu.style.display = "inline";
	labelXPFEvolutionMenu.style.display = "inline";
	labelXPHEvolutionMenu.style.display = "inline";
	labelXPREvolutionMenu.style.display = "inline";
	labelXPEEvolutionMenu.style.display = "inline";
	niveauEvolutionMenu.style.display = "inline";
	xpForceEvolutionMenu.style.display = "inline";
	xpHabiliteEvolutionMenu.style.display = "inline";
	xpResistanceEvolutionMenu.style.display = "inline";
	xpEsquiveEvolutionMenu.style.display = "inline";
	
}

/**
	Affiche les elements du menu Jeux
*/
function afficheMenuJeux(){
	
	checkboxJeuxMenu.style.display = "inline";
	labelActiverJeuxMenu.style.display = "inline";
	
}

/**
	Cache les elements du menu Medecin
*/
function cacheMenuMedecin(){
	
	checkboxMedecinMenu.style.display = "none";
	labelActiverMedecinMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Marcher
*/
function cacheMenuMarcher(){
	
	checkboxMarcherMenu.style.display = "none";
	labelActiverMarcherMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Deplacement
*/
function cacheMenuDeplacement(){
	
	checkboxDeplacementMenu.style.display = "none";
	labelActiverDeplacementMenu.style.display = "none";
	labelHeureDeplacementMenu.style.display = "none";
	labelAutoDeplacementMenu.style.display = "none";
	radioDeplacementAutoMenu.style.display = "none";
	radioDeplacementHeureMenu.style.display = "none";
	heureDeplacementMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Depose
*/
function cacheMenuDepose(){
	
	checkboxDeposeMenu.style.display = "none";
	labelActiverDeposeMenu.style.display = "none";
	labelMontantDeposeMenu.style.display = "none";
	montantDeposeMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Cnd
*/
function cacheMenuCnd(){
	
	checkboxCndMenu.style.display = "none";
	labelActiverCndMenu.style.display = "none";
	labelMontantCndMenu.style.display = "none";
	montantCndMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Retire
*/
function cacheMenuRetire(){
	
	checkboxRetireMenu.style.display = "none";
	labelActiverRetireMenu.style.display = "none";
	labelMontantRetireMenu.style.display = "none";
	labelToutRetireMenu.style.display = "none";
	radioRetireMontantMenu.style.display = "none";
	radioRetireToutMenu.style.display = "none";
	montantRetireMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Attaque
*/
function cacheMenuAttaque(){
	
	checkboxAttaqueMenu.style.display = "none";
	labelActiverAttaqueMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Sac
*/
function cacheMenuSac(){
	
	checkboxSacMenu.style.display = "none";
	labelActiverSacMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Evolution
*/
function cacheMenuEvolution(){
	
	checkboxEvolutionMenu.style.display = "none";
	labelActiverEvolutionMenu.style.display = "none";
	labelNiveauEvolutionMenu.style.display = "none";
	labelXPFEvolutionMenu.style.display = "none";
	labelXPHEvolutionMenu.style.display = "none";
	labelXPREvolutionMenu.style.display = "none";
	labelXPEEvolutionMenu.style.display = "none";
	niveauEvolutionMenu.style.display = "none";
	xpForceEvolutionMenu.style.display = "none";
	xpHabiliteEvolutionMenu.style.display = "none";
	xpResistanceEvolutionMenu.style.display = "none";
	xpEsquiveEvolutionMenu.style.display = "none";
	
}

/**
	Cache les elements du menu Jeux
*/
function cacheMenuJeux(){
	
	checkboxJeuxMenu.style.display = "none";
	labelActiverJeuxMenu.style.display = "none";
	
}

createLocalStorageMenu();
