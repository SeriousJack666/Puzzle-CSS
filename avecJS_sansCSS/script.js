//==================== h4 =================

var groTitre = document.getElementsByTagName('h4');
var titre = groTitre.item(0);

titre.style.width ='800px' ;
titre.style.margin = '20px auto' ;
titre.style.padding = '20px' ;
titre.style.color = '#072160' ;
titre.style.fontFamily = 'sans-serif' ;
titre.style.border = 'solid #072160' ;




//=================== main ======================

var cadreHT = document.getElementsByTagName('main');
var cadre = cadreHT.item(0);

cadre.style.width ='845px' ;
cadre.style.height ='1024px' ;
cadre.style.margin ='auto' ;
cadre.style.backgroundImage = 'url("original.jpg")'; 
cadre.style.position ='relative' ;




//================= Pièces du puzzle ==============

var pieceS = document.getElementsByTagName('img');
var piece = new Array();

for (var i = 0; i < pieceS.length; i++) {
	piece.push(pieceS.item(i));

}

		//======//======// Img's //======//

		piece[0].style.transform ='rotate(-90deg)' ;
		piece[0].style.position = 'absolute' ;
		piece[0].style.left = '-28px' ;
		piece[0].style.top = '28px' ;



		piece[1].style.position = 'absolute' ;
		piece[1].style.left = '208px' ;
		piece[1].style.top = '0px' ;


		piece[2].style.position = 'absolute';
		piece[2].style.right = '0px';
		piece[2].style.top = '0px';


		piece[3].style.position = 'absolute' ;
 		piece[3].style.left = '0px' ;
 		piece[3].style.top = '266px' ;
 

		piece[4].style.position = 'absolute' ;
		piece[4].style.left = '288px' ;
		piece[4].style.top = '193px' ;


		piece[5].style.position = 'absolute' ;
		piece[5].style.right = '0px' ;
		piece[5].style.top = '195px' ;


		piece[6].style.position = 'absolute' ;
		piece[6].style.bottom = '155px' ;
		piece[6].style.left = '0px' ;


		piece[7].style.transform = 'rotate(90deg)' ;
		piece[7].style.position = 'absolute' ;
		piece[7].style.right = '240px' ;
		piece[7].style.bottom = '194px' ;


		piece[8].style.transform = 'rotate(-180deg)' ;
		piece[8].style.position = 'absolute' ;
		piece[8].style.right = '0px' ;
		piece[8].style.bottom = '218px' ;



		piece[9].style.position = 'absolute' ;
		piece[9].style.bottom = '0px' ;
		piece[9].style.left = '0px' ;


		piece[10].style.transform = 'rotate(-90deg)' ;
		piece[10].style.position = 'absolute' ;
		piece[10].style.bottom = '-60px' ;
		piece[10].style.left = '341px' ;



		piece[11].style.transform = 'rotate(-90deg)' ;
		piece[11].style.position = 'absolute' ;
		piece[11].style.bottom = '8px' ;
		piece[11].style.right = '-8px' ;


