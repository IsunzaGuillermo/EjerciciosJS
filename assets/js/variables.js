//Mejores prácticas

//camelCase 
//Es utilizar mayúsculas como conectores de nuestras variables 

//Palabras reservadas 
//Son aquellas palabras que no podemos usar como variables:
//if, null, true, false, let, var, while.. etc.

// var while;
// var null ;
// var if;
// var true;
// var false;
// var var;
// var const;
// var let;

//Seguir un standard personal 

//Pueden contener numeros, letras, guión bajo, símbolo de dólar

// var a;
// var a1;
// var a_weewee;
// var a$chuchu;

//Declaración de variables
//Type Number
var edad = 26;
var peso = 70;

//Type Booleano
var ciego = true
var hambre = true
var bateria = false

//Type String
var nombre = "Weewee"
var dir = "Guanatos"
var nacionalidad = 'Mexicano'

//Type Null
var ganasDeVivir = null
var dinero = null
var briamonstaciones = null

//Variables declaradas con un mismo valor
var x, y, z = 4;

//Variables undefined
var xx, yy, zz

//Variable tres = 4
//Var dos = tres
//Var uno = tres
var uno = dos = tres = 4;

//Escribir en una sola linea variables undefined de un carrito de compras

// var leche, pan, queso, mantequilla, carne, pollo, cebolla, tomate, ajo, zanahoria, tortillas, panPita, pinol, papelDeBaño, cloro

// typeOf();
// Nos indica el tipo de dato al que pertenece nuestra variable

var a = 2;
typeof (a);
//number

var b = '2';
// string

var c = 'true';
typeof (c);
// boolean

var d = null;
typeof (d);
// object < object de JS

// isNaN() es una función que nos permite verificar si un dato 
// es o no es un número

// NaN es un tipo de dato en JS 
isNaN(Nan)
// True

var e = NaN;
isNaN(e);
// True
typeof (e);
// Number

// Formas de declarar variables
var a = 1;

// Let nos permite modificar su valor actual sin restricciones 
let a = 2;

// Es una constante, su valor no va a cambiar
// Debe mantenerse  con un solo valor
// No es posible cambiarles el valor posterior a su declaración 
const a = 1;

// Arrays 
const carritoCompras = ["Leche", "Tortillas", "Mango", "Maruchan", "Aguacate", "Sandia", "Queso", "Sabritas", "Oreo", "Piña", "Chachitos", "Pollo", "Jamon", "Harina", "Mantequilla", "Chocolate", "Wafflera Plaza Sesamo", "Nutella", "Fresas", "Servilletas", "Xbox Series X"];

const carros = ["BMW", "Volvo", "Mercedes", "Ford"];

const combinacion = [1, "Hola", null, "5"];

var 
hayLuz = true;
hayElectricidad = true;
hayAgua = true;
hayComida = true;
hayDinero = false;
hayAuto = true;
hayBrazos = true;
estoyLimpio = true;
tengoSueño = true;
tengoHambre = false;

var 
nombre = "Guillermo";
segundoNombre = "Arturo";
apellidoPaterno = "Garibay" ;
apellidoMaterno = "Isunza";
licenciatura = "Biología";
mesNacimiento = "Febrero";
ordenMamifero = "Primates";
familiaAve = "Tyrannidae";
generoAnfibio, "Bufo";
especieReptil; "C.basiliscus"

var 
pi = 3.141592;
euler = 2.71828;
edad = 26;
añoNacimiento = 1996;
numOjos = 2;
numAmigdalas = 0;
numDedos = 20;
numAmigos = 3;
aGravTierra = 9.807;
numGanasDeVivir = 0;