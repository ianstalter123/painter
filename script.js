var loadingFunction = function() {
console.log("JavaScript is alive");

var currentColor = 'blue';

var paint= function() {
		var grid = document.querySelectorAll("div");
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
				if(this.className === "drag")
				{
				this.style.background = currentColor;}}, false);

		grid[i].addEventListener("mouseup", function(){
		this.style.background = currentColor;

		for(var i = 0; i < grid.length; i++)
		{
			grid[i].className = "";
		}
		})
		}}

var makePalette = function(color) {
	var square = document.createElement("div");
		square.style.width = "1%";
		square.style.height = "20px";
		square.style.border = "3px solid grey";
		square.style.background = color;
		square.style.float = "left";
		square.addEventListener("click", function(){
 	currentColor = color;
 	
})
		document.body.appendChild(square);
}
var makeGrid = function() {
var bod = document.querySelector("body");
for (var i =0 ; i<150; i++)
{
	for (var j = 0; j < 8; j++)
	{
		
		var square = document.createElement("div");
		square.style.width = "2%";
		square.style.height = "20px";
		square.style.border = "1px solid grey";
		square.style.background = "white";
		square.style.float = "left";
		document.body.appendChild(square);	
	} 
}
}
makeGrid();
paint();
var x =10;
function RGB2Color(r,g,b)
  {
    return 'rgb(' + Math.round(r) + ',' + Math.round(g) + ',' + Math.round(b) + ')';
  }
var frequency = .3;
for (var i = 0; i < 32; ++i)
{
	
   red   = Math.sin(frequency*i + 0) * 127 + 128;
   green = Math.sin(frequency*i + 2) * 127 + 128;
   blue  = Math.sin(frequency*i + 4) * 127 + 128;

   makePalette( '' + RGB2Color(red,green,blue) + '');
}


;
}

document.addEventListener("DOMContentLoaded", loadingFunction);