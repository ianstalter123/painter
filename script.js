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
		square.style.width = "3%";
		square.style.height = "50px";
		square.style.border = "3px solid grey";
		square.style.background = color;
		square.style.float = "left";
		square.addEventListener("click", function(){
 currentColor = color;
 console.log("hello");
})
		document.body.appendChild(square);
}
var makeGrid = function() {
var bod = document.querySelector("body");
for (var i =0 ; i<30; i++)
{
	for (var j = 0; j < 8; j++)
	{
		
		var square = document.createElement("div");
		square.style.width = "5%";
		square.style.height = "50px";
		square.style.border = "1px solid grey";
		square.style.background = "white";
		square.style.float = "left";
		document.body.appendChild(square);	
	} 
}
}
makeGrid();
paint();
makePalette('red');
makePalette('blue');
makePalette('green');
makePalette('yellow');
makePalette('pink');
makePalette('brown');
makePalette('black');
}

document.addEventListener("DOMContentLoaded", loadingFunction);