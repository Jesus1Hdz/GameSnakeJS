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
		this.next = null;
	}
	dibujar(ctx) {
		if(this.next != null) {
			this.next.dibujar(ctx);
		}
		// Color de la Serpiente
		ctx.fillStyle = "#ff002d";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
	setxy(x,y) {
		if (this.next != null) {
			this.next.setxy(this.x, this.y);
		}
		this.x = x;
		this.y = y;
	}
	meter() {
		if (this.next == null) {
			this.next = new Cola(this.x, this.y);
		} else {
			this.next.meter();
		}
	}
	verNext() {
		return this.next;
	}
}

//Comida
class Comida extends objeto {
	constructor() {
		super();
		this.x = this.generar();
		this.y = this.generar();
	}
	//Generar numeroa aleatorios entre (0-59)*10 y los redondeamos
	generar() {
		var num = (Math.floor(Math.random() * 59))*10;
		return num;
	}
	colocar() {
		this.x = this.generar();
		this.y = this.generar();
	}
	dibujar(ctx) {
		ctx.fillStyle = "#16ffff";
		ctx.fillRect(this.x, this.y, this.size, this.size);
	}
}
// Objetos del Juego
var head = new Cola(20,20);
var comida = new Comida;
var ejex = false;
var ejey = true;
var xdir = 0;
var ydir = 0;

// Movimiento de la Serpiente
function movimiento() {
	var newx = head.x+xdir;
	var newy = head.y+ydir;
	head.setxy(newx,newy);
}

// Teclas de Control
// Código dem las teclas de dirección
// 38=arriba	40=abajo	37=derecha	39=izquierda
function control(event) {
	var cod = event.keyCode;
	if (ejex) {
		if (cod == 38) {
				ydir = -size;
				xdir = 0;
				ejex = false;
				ejey = true;
		}
		if (cod == 40) {
				ydir = size;
				xdir = 0;
				ejex = false;
				ejey = true;
		}
	}
	if (ejey) {
		if (cod == 37) {
				ydir = 0;
				xdir = -size;
				ejey = false;
				ejex = true;
		}
		if (cod == 39) {
				ydir = 0;
				xdir = size;
				ejey = false;
				ejex = true;
		}
	}
}

//Game Over al chocar con el Body
function gameOver() {
	xdir = 0;
	ydir = 0;
	ejex = true;
	ejey = true;
	head = new Cola(20, 20);
	comida = new Comida();
	alert("GAME OVER");
}

// Game Over al chocar con las paredes del canvas
function choquePared() {
	// 590 del canvas
	if (head.x <0 || head.x > 590 || head.y < 0 || head.y > 590) {
		gameOver();
	}
}

//Colision
function ChoqueBody() {
	var temp = null;
	try {
		temp = head.verNext().verNext();
	}catch(error) {
		temp = null;
	}
	while(temp != null) {
		if (head.choque(temp)) {
			//Game Over
			gameOver();
		} else {
			temp = temp.verNext();
		}
	}
}

// Dibujo
function dibujar() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0, canvas.width, canvas.height);
		//DIBUJO DOWN
		head.dibujar(ctx);
		comida.dibujar(ctx);
}

function main() {
	ChoqueBody();
	choquePared();
	dibujar();
	movimiento();
	if (head.choque(comida)) {
		comida.colocar();
		head.meter();
	}
}

setInterval("main()", velocidad);