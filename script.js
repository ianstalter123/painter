var currentColor = 'blue';
var grid = document.querySelectorAll("div");
var square1 = false;
var total = 1300;

var gridArr = [];
for(var i = 0; i < total; i++)
{
	gridArr.push(i);

}

var paint= function() {
		grid = document.querySelectorAll("div");
		for(var i = 0; i < grid.length; i++)
		{
			grid[i].addEventListener("mousedown", function(){
			this.style.background = currentColor;


		for(var i = 0; i < grid.length; i++)
		{
			grid[i].className = grid[i].className + "drag";

		}
		})

		grid[i].addEventListener("mouseover", function(event) 
			{
				if(this.className === "square")
		{
				console.log('square');
			}
				if(this.className === "drag")
		{
		this.style.background = currentColor;
		this.nextSibling.style.background = currentColor;
		this.previousSibling.style.background = currentColor;
			}}, false);

		grid[i].addEventListener("mouseup", function(){
		this.style.background = currentColor;
		this.nextSibling.style.background = currentColor;
		this.previousSibling.style.background = currentColor;

		for(var i = 0; i < grid.length; i++)
		{
			grid[i].className = "";
		}
		})}}

var makePalette = function(color) {
	var square = document.createElement("div");
		square.style.width = "1%";
		square.style.height = "20px";
		square.style.border = "3px dotted grey";
		square.style.background = color;
		square.style.float = "left";
		square.addEventListener("click", function() {
 	currentColor = color;
 	})
		document.body.appendChild(square);
}

var makeSquare = function(color) {
	var square = document.createElement("div");
		square.style.width = "1%";
		square.style.height = "20px";
		square.style.border = "3px dotted grey";
		square.style.background = color;
		square.style.float = "left";
		document.body.appendChild(square);
		square.addEventListener("click", function() {
 	currentColor = color;
 	square1 = true;
 	
 }),
  grid1 = document.querySelectorAll("div");
		for(var j = 0; j < grid1.length; j++)
		{
			
			grid1[j].addEventListener("mousedown", function() {
			var id = this.id;
			if(square1 === true) {
			// console.log(id + "\n");

document.getElementById(parseInt(id) - 44).style.background = currentColor; 
document.getElementById(parseInt(id) + 44).style.background = currentColor;
document.getElementById(parseInt(id) - 43).style.background = currentColor;
document.getElementById(parseInt(id) - 45).style.background = currentColor;
document.getElementById(parseInt(id) + 43).style.background = currentColor;
document.getElementById(parseInt(id) + 45).style.background = currentColor;
document.getElementById(parseInt(id) + 1).style.background = currentColor;
document.getElementById(parseInt(id) - 1).style.background = currentColor;
square1 = false;
}
		})
		}
	}
 		//this.nextSibling.style.background = currentColor;
		//this.previousSibling.style.background = currentColor;
		//+44 , -44

		
		//document.getElementById(parseInt(this.id) + 44).background = currentColor;
		

var makeGrid = function() {
var bod = document.querySelector("body");
for (var i =0 ; i<1300; i++)
{
		
		var square = document.createElement("div");
		square.style.width = "2%";
		square.style.height = "20px";
		square.style.border = "1px dotted grey";
		square.style.background = "white";
		square.style.float = "left";
		document.body.appendChild(square);	
		square.id = i;
	
}
}
makeGrid();
paint();

function RGB2Color(r,g,b)
  {
    return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
  }
var frequency = .1;
for (var i = 0; i < 55; ++i)
{
	
   red   = Math.sin(frequency*i + 0) * 127 + 128;
   green = Math.sin(frequency*i + 2) * 127 + 128;
   blue  = Math.sin(frequency*i + 4) * 127 + 128;

   makePalette( '' + RGB2Color(red,green,blue) + '');
}
makePalette('white');
 makeSquare('black');
