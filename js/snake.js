// Variables Globales
var velocidad = 80;
var size = 10;

class objeto {
	constructor() {
		this.size = size;
	}

	// Choque
	choque(obj) {
		var difx = Math.abs(this.x - obj.x);
		var dify = Math.abs(this.y - obj.y);
		if(difx >= 0 && difx < size && dify >= 0 && dify < size) {
			return true;
		} else {
			return false;
		}
	}
}

// Serpiente
class Cola extends objeto {
	constructor(x,y) {
		super();
		this.x = x;
		this.y = y;
	}
	dibujar(ctx) {
		// Color de la Serpiente
		ctx.fillStyle = "#ff002d";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}

// Objetos del Juego
var head = new Cola(20,20);

// Dibujo
function dibujar() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
		//DIBUJO DOWN
		head.dibujar(ctx);
}

function main() {
	dibujar();
}

setInterval("main()", velocidad);