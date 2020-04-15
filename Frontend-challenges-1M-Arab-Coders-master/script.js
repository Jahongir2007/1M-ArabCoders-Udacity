
var leftArrow = document.querySelector('.left');

var rightArrow = document.querySelector('.right');

leftArrow.addEventListener('click', function() {
	
	plusCards(-1);
	showCards(cardIndex);
	
}); 

rightArrow.addEventListener('click', function() {
	
	plusCards(1);
	showCards(cardIndex);
	
});
var cardIndex = 1;

function plusCards(n) {
  showCards(cardIndex += n);
}





function showCards(n) {
  var i;
	
  var x = document.getElementsByClassName("card-layout");
	
  
	if (n > x.length) {cardIndex = 1}
  
	if (n < 1) {
	  
	  cardIndex = x.length;
		
			 }
  
	for (i = 0; i < x.length; i++) {
	  
    x[i].style.display = "none";
	  
  }
	
  x[cardIndex-1].style.display = "block"; 
	
}



//var cardOne = document.querySelector('.card-1');
//var cardTwo = document.querySelector('.card-2');
//var cardThree = document.querySelector('.card-3');
//rightArrow.addEventListener('click', function() {
//	
//	
//	
//	
//});
//
//leftArrow.addEventListener('click', function() {
//	
//	
//	
//});