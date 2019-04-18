// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!

  var gridHeight = document.querySelector("#inputHeight");
var gridWidth = document.querySelector("#inputWidth");
var tableElement = document.querySelector("#pixelCanvas");
  var paint = document.querySelector("#colorPicker");
  var rows = gridHeight.value;
	var cols = gridWidth.value;
	
	while(tableElement.firstChild) {
		
		tableElement.removeChild(tableElement.firstChild);
		
	}

	for(var i= 1; i <= rows; i++) {
		
		var tr = document.createElement("tr");
		
		for(var n = 1; n <= cols; n++) {
			
		var td = document.createElement("td");
			td.addEventListener("click", function() {
				
				this.style.backgroundColor = paint.value;
			});
			
			tr.appendChild(td);

		}
		
		tableElement.appendChild(tr);

	}

}
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});