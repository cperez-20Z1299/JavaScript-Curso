/*
console.log("Hola Mundo");
console.log(2+3);
*/

// ---------------------------------
// Tema 1: Variables y Tipos de Datos
// ---------------------------------

/*
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

var edad = 28;
console.log(edad);
console.log(typeof edad);

var salario = 2050.13;
console.log(salario);
console.log(typeof salario);

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof tieneTrabajo);

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
console.log(typeof puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
console.log(typeof puestoDeTrabajo);
*/

// ---------------------------------
// Tema 2: Operadores Matemáticos
//    +, -, *, /
// ---------------------------------

/*
var edadAna, edadMaria, diferenciaEdad;

edadAna = 34;
edadMaria = 28;
diferenciaEdad = edadAna - edadMaria;
console.log(diferenciaEdad);

var sumaEdades, yearAna, yearMaria, yearActual;

sumaEdades = edadAna + edadMaria;
console.log(sumaEdades);

yearActual = 2022;
yearAna = yearActual - edadAna;
console.log("Año en que nació Ana: " + yearAna);

yearMaria = yearActual - edadMaria;
console.log("Año en que nació María: " + yearMaria);

console.log(yearActual * 5);

console.log(yearActual / 2);
*/

// ---------------------------------
// Tema 3: Operadores Relacionales, lógicos, unarios y de asignación
//          <,>, <=, >=, =
// ---------------------------------

/*
var edadAna = 34;
var edadMaria = 28;

console.log(edadAna < edadMaria);
console.log(edadAna > edadMaria);
console.log(edadAna == edadMaria);
console.log(!(edadAna == edadMaria));
*/

// ---------------------------------
// Tema 4: Sentencia If Else
// ---------------------------------

/*
var nombre = "Jorge";
var edad = -1;

// edad < 12 es niño
// edad > 11 y < 18 es adolescente 
// edad > 17 y < 70 es adulto
// edad > 69 es anciano

if(edad > 0) {
    if(edad < 12) {
        console.log(nombre + " es un niño");
    } else if(edad > 11 && edad < 18) {
        console.log(nombre + " es un adolescente");
    } else if(edad > 17 && edad < 70) {
        console.log(nombre + " es un adulto");
    } else {
        console.log(nombre + " es un anciano");
    }
}else {
    console.log("Ingrese una edad válida");
}
*/

// ---------------------------------
// Tema 5: Switch
// ---------------------------------

/*
var mes = 8;

switch (mes) {
    case 1:
        console.log("Enero");
        break;

    case 2:
        console.log("Febrero");
        break;

    case 3:
        console.log("Marzo");
        break; 

    case 4:
        console.log("Abril");
        break; 

    case 5:
        console.log("Mayo");
        break; 
    
    case 6:
        console.log("Junio");
        break; 

    case 7:
        console.log("Julio");
        break; 

    case 8:
        console.log("Agosto");
        break; 
    
    case 9:
        console.log("Septiembre");
        break; 

    case 10:
        console.log("Octubre");
        break; 

    case 11:
        console.log("Noviembre");
        break; 
    
    case 12:
        console.log("Diciembre");
        break; 

    default:
        console.log("Mes no encontrado");
        break;
}
*/

// ---------------------------------
// Tema 6: For
// ---------------------------------

/*
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(i);
*/

/*
for (var i = 1; i <= 10; i += 2) {
    console.log(i);
}
*/

/*
for (var i = 10; i <=25; i += 5) {
    console.log(i);
}
*/

/*
for (var i = 10; i > 0; i--) {
    console.log(i);
}
*/

// ---------------------------------
// Tema 7: While
// ---------------------------------

/*
var i = 0;

while(i <= 10) {
   console.log(i);
   i++;
}

console.log(i);
*/

/*
var i = 10;

while(i > 0) {
    console.log(i);
    i--;
}
*/

// ---------------------------------
// Tema 7: Do while
// ---------------------------------

/*
var i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);
*/

// ---------------------------------
// Funciones
// ---------------------------------

/*
function saludar(){
    console.log("Hola Mundo")
}

saludar();

function saludar2(msj){
    console.log(msj)
}

saludar2("Say my name");

function saludar3() {
    return "mensaje enviado desde la función";   
}

var resultado = saludar3();
console.log(resultado);

*/

// ---------------------------------
// Tema 12: Argumento de las Funciones
// ---------------------------------

/*
Suma 

function sumar(numero1, numero2){
    return numero1 + numero2;
}

//forma 1
var resultado = sumar(3, 16);
console.log(resultado);

//Forma 2
console.log(sumar(3, 16));
*/
/*
//Resta
function restar(numero1, numero2){
    return numero1 - numero2;
}

var resultado = restar(19, 6);
console.log(resultado);

//Multiplicar
function multiplicar(numero1, numero2){
    return numero1 * numero2;
}

var resultado = multiplicar(3, 8);
console.log(resultado);

//Division
function dividir(numero1, numero2){
    return numero1 / numero2;
}

var resultado = dividir(6, 3);
console.log(resultado);

//Residuo
function residuo(numero1, numero2){
    return numero1 % numero2;
}

var resultado = residuo(5, 2);
console.log(resultado);
*/
/*
//Sumar 3 parametros
function sumar(numero1 , numero2, numero3 = 0){
    return numero1 + numero2 + numero3;
}
console.log(sumar(2,5,3));
*/
// ---------------------------------
// Tema 13: Funciones anónimas / Funciones como expresiones
// ---------------------------------
/*
var sumar = function(numero1 , numero2, numero3 = 0){
    return numero1 + numero2 + numero3;
}
console.log(sumar(2,5,3));

var residuo = function(numero1, numero2){
    return numero1 % numero2;
}

console.log(residuo(5, 2));
*/
/*
// ---------------------------------
// Tema 14: Funciones recursivas
// ---------------------------------

var factorial = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
*/
// ---------------------------------
// Tema 15: Arrays
// ---------------------------------
/*
var nombres = ["Carlos", "Juan", "Mariano", "Estuardo"];
var vegetales = new Array("Tomate", "Lechuga", "Zanahoria");

//Leer
console.log(nombres[1]);
console.log(nombres[3]);
console.log(vegetales[2]);

//Modificar
nombres[2] = "Pablo";
console.log(nombres[2]);
console.log(nombres);

var cantidad= vegetales.length;

console.log(vegetales);
console.log("Tamaño del arreglo vegetales: " + cantidad);
console.log("Indice del último elemento: " + (cantidad-1));
*/
/*
//Recorrer arreglo con ciclo For

var nombres = ["Carlos", "Juan", "Mariano", "Estuardo"];

for(var i = 0; i < nombres.length; i++){
    console.log(i);
    console.log("Nombre: " + nombres[i]);
}
*/
//Recorrer arreglo con ciclo forEach

nombres.forEach(function(indice, elemento){
    console.log(indice, elemento);
});
    