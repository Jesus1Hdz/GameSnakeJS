// Variables Globales
var velocidad = 80;
var size = 10;

function dibujar() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
		//DIBUJO DOWN
		ctx.fillRect(10,10, 100,100);
}

function main() {
	dibujar();
}

setInterval("main()", velocidad);