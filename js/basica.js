/* Declaración de variables */
let btn0, btn1, btn2, btn3, btn4, btn5, btn6, bt7, btn8, btn9, btnPnt;
let btnSum, btnRes, btnProd, btnDiv, btnIgu, btnPor;
let screen;
let inicio;
let navegador;
let desplegable;

/* 
Variables destacadas:
	punto = tiene en cuenta si el punto decimal ha sido utilizado previamente
	resultado = tiene en cuenta si el número que aparece en el screen es un resultado de una operación. De ser así, no se le podrán añadir nuevos numeros ni decimales (congelación del número)
*/

let array, suma = false, resta = false, multi = false, division = false, porcentaje = false, punto = false, resultado = false;

array = []; /* Almacena operandos y resultados generados a lo largo de la operación */

/* Captura de elementos */

btn0 = document.querySelector("#btn0");
btn1 = document.querySelector("#btn1");
btn2 = document.querySelector("#btn2");
btn3 = document.querySelector("#btn3");
btn4 = document.querySelector("#btn4");
btn5 = document.querySelector("#btn5");
btn6 = document.querySelector("#btn6");
btn7 = document.querySelector("#btn7");
btn8 = document.querySelector("#btn8");
btn9 = document.querySelector("#btn9");

screen = document.querySelector("#screen");

inicio = document.querySelector("#inicio");

btnSum = document.querySelector("#btnSum");
btnRes = document.querySelector("#btnRes");
btnProd = document.querySelector("#btnProd");
btnDiv = document.querySelector("#btnDiv");
btnIgu = document.querySelector("#btnIgu");
btnPor = document.querySelector("#btnPor");
btnPnt = document.querySelector("#btnPnt");

desplegable = document.getElementsByTagName("ul")[1];


/* Eventos */

/* Puesta a punto de la aplicación */

init();

/* Botones - números */

btn0.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(0);
	}
});

btn1.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(1);
	}
});

btn2.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(2);
	}
});

btn3.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(3);
	}
});

btn4.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(4);
	}
});

btn5.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(5);
	}
});

btn6.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(6);
	}
});

btn7.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(7);
	}
});

btn8.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(8);
	}
});

btn9.addEventListener("click", function() {
	if ((comprobarLong() && resultado == false)) {
		introducirNumero(9);
	}
});

btnPnt.addEventListener("click", function() {
	if (punto == false && comprobarLong() && screen.textContent != "" && resultado == false) {
		introducirNumero(".");
		punto = true;
	}
});

/* Botones - operadores */

btnSum.addEventListener("click", function(){
	array.push(screen.textContent);
	vaciarScreen();
	suma = true;
	punto = false;
	resultado = false;
});

btnRes.addEventListener("click", function(){
	array.push(screen.textContent);
	vaciarScreen();
	resta = true;
	punto = false;
	resultado = false;
});

btnProd.addEventListener("click", function(){
	array.push(screen.textContent);
	vaciarScreen();
	multi = true;
	punto = false;
	resultado = false;
});

btnDiv.addEventListener("click", function(){
	array.push(screen.textContent);
	vaciarScreen();
	division = true;
	punto = false;
	resultado = false;
});



btnIgu.addEventListener("click", function(){
	if (resultado == false){
		array.push(screen.textContent);
		vaciarScreen();
		calcularOperacion();
		punto = false;
		resultado = true;
	}
});

/* Botón reiniciar */

inicio.addEventListener("click", function(){

	reset();
});



/* Funciones */

function comprobarLong(){
	let valido = false;
	if (screen.textContent.length < 20){
		valido = true;
	}
	return valido;
}

function introducirNumero(num){
	screen.textContent = screen.textContent + num.toString();
}

function vaciarScreen(){
	screen.textContent = "";
}

function calcularOperacion(){
	if (suma){
		let sumador = 0;
		for (let i = 0; i < array.length; i++){
			if (array[i] != "")
				sumador = sumador + parseFloat(array[i]);
		}
		screen.textContent = sumador;
		array = [];
		suma = false;
	} else if (resta){
		let restador = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != "")
				restador = restador - parseFloat(array[i]);
		}
		screen.textContent = restador;
		array = [];
		resta = false;
	} else if (multi) {
		let producto = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != "")
				producto = producto * parseFloat(array[i]);
		}
		screen.textContent = producto;
		array = [];
		multi = false;
	} else if (division){
		let dividendo = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != "")
				dividendo = dividendo / parseFloat(array[i]);
		}
		screen.textContent = dividendo;
		array = [];
		division = false;		
	}
}

function reset(){
	screen.textContent = "";
	array = [];
	suma = false;
	resta = false;
	producto = false;
	division = false;
	porcentaje = false;
	punto = false;
	resultado = false;
}

/* Detectar navegador para configurar menú desplegable oculto */

function detectarNavegador() {
	if (navigator.vendor === "") {
		if (window.screen.width > 1366) {
			desplegable.style.marginTop = "148px";
		} else {
			desplegable.style.marginTop = "106px";
		}
	} else if (navigator.vendor === "Google Inc.") {
		if (window.screen.width > 1366) {
			desplegable.style.marginTop = "74px";
		} else {
			desplegable.style.marginTop = "52px";
		}	
	}		 
};

function init(){
	reset();
	detectarNavegador();
}









