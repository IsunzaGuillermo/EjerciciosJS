// Mejores prácticas
// Simplificar la f(x) lo más que se pueda, de preferencia menos de 100 líneas

// 1.- Utilzar keyword "function"
// 2.- Nombrar nuestra función
// 3.- Utilizar () y abrir y cerrar la función { }

// function myFunction() {
//     // Aquí va el cuerpo de la función
//     console.log("Hola Mundo");
// }
// myFunction();

// function myName() {
//     let name = "Guillermo";
//     console.log(name);
// }

// myName();

// Variable con scope local
// function scopeFuntion() {
//     let local = "Esto se encuentra dentro de la función";
//     console.log(local);
// }

// scopeFunction();
// console.log(local);

// var nombre = "Guillermo"

// function globalScope() {
//     console.log(nombre);
// }

// globalScope();

// Scope de Variables
// Let 
// Scope global, local
// Hoisting la variable no existe para nuestro intérprete de JS

// console.log(a);
// let a = "Hoisting let";

// Var
// Scope global, local
// Hoisting no se puede utilizar o invocar antes de declararla

// console.log(z);
// var x = "Hoisting var";

// Const
// Scope global, local
// Hoisting no se puede utilizar. No existe para nuestro intérprete de JS

// console.log(z);
// const z = "Hoisting const";

// Input
const miNombre = "Guillermo";

function fiuFiu(x) {
    console.log(x);
}

fiuFiu(miNombre);

fiuFiu("Guillermo Arturo");
fiuFiu(2);

// Function con más de 1 parámetro
function dosParam(x, y) {
    console.log(x + y);
}

// Invocación con 2 parámetros aleatorios 
dosParam("Hola ", "Mundo");

///////////////////////////////////////////////////////////

// Output

function out() {
    let x = "Hola";
    return x;
}

// Podemos recibir el dato de forma directa
// console.log(out())

// Podemos guardar el output en una variable y utilizarla después
const receive = out();

// console.log(receive);

// Funtion con parámetros y return

function areaRectangulo(b, a) {
    var resultado = b * a;
    return resultado;
}

console.log(areaRectangulo(6, 3));

function areaTriangulo(b, a) {
    var resultado = (b * a) / 2;
    return resultado;
}

console.log(areaTriangulo(8, 4));