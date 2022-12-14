// /* Arrays o arreglos

//     Un arreglo o array es un conjunto de datos que se pueden almacenar en una sola variable

//     Cuando tenemos una variable la usamos para almacenar un solo dato.
//     En cambio, en un arreglo, guardamos muchos datos a manera de lista. 
//     Ej:

// */
// let nombre = "Guillermo";

// nombres = ["Guillermo", "Karlos", "Fer 1", "Fer 2"];

// /*
//     Un array puede tener distintas distintos tipos de datos.

//     Un array ya no es un dato primitivo, se considera un objeto porque es una estructura de datos.¨
 
//  /////////////////////////////////////////////////////////////////////////////////////////////////////   

// Formas de crear un array

//    1.- Utilizando la palabra reservada new y el metodo Array para especificarle a nuestro navagador que queremos crear un array. Hasta este momento, este array esta vacio por que no tenemos ningun dato dentro del parentesis (que es donde vamos a guardar los datos). Ej:

// */
// var marcaDeColores = new Array("Mapita", "Prismacolor", "Norma", "Faber Castell", "Barrilito");

// var colores = new Array(3); //Esta forma nos permite crear un array con un numero de elementos especificado, pero aún no sabemos que datos va a guardar.

// var colores = new Array("rojo", "verde", "azul"); //En este punto estamos creando el array y ya le asignamos los valores en las posiciones que queremos mostrar.

//     // 2.- La segunda forma se trata de crear el arreglo solo usando corchetes []. Esta forma es la mas usada para crear arreglos en JS.

// var marcaDeColores2 = ["Mapita", "Norma", "Vividel", "Faber Castell", "BlancaNieves"];

// //Ejemplos de Arreglos
// listaDePerritos = ["Chihuahua", "Calupoh", "Mestizos", "Callejeros", "Pug"];
// console.log(listaDePerritos);

// //Ejemplo de Arreglo 2
// listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
// console.log(listaDelSuper)

// // Ejercicio en equipo
// var peces = ["Pez globo","Pez Bruja","Pez Moly","Pez Angel"];

// var bebidas = ["Chocomilk","Margaritas","Horchata","Jamaica","Cerveza"];

// var comidaMexicana = ["Chilaquiles","Tacos","Tamales","Mole","Pozole"];

// var pasaTiempos = ["Escuchar Musica","Patinar","Correr","Dibujar","Dormir","SAT"];

// var paises = ["Mexico","Alemania","Costa Rica","Brasil","Suiza","Egpito"];

// console.log(bebidas);
// console.log(peces);
// console.log(comidaMexicana);
// console.log(pasaTiempos);
// console.log(paises);
// // alert(bebidas);

// //Ejemplo de Arreglo 2
// listaDelSuper = ["Leche", "Papitas", "Jabon", "Nachos", "Huevos"];
// console.log(listaDelSuper)

// console.log("El producto en la posicion 1 es : " + listaDelSuper[1]);
// console.log("El producto en la posicion 4 es : " + listaDelSuper[4]);
// console.log("El producto en la posicion 2 es : " + listaDelSuper[2]);
// console.log("El producto en la posicion 6 es : " + listaDelSuper[6]);

// //Encontramos que al tratar de seleccionar un elemento de nuestro que no existe, aparecera el mensaje undefined. Esto es porque la gran ventaja que tienen los arreglos en JS es que podemos crecer su tamanio cuando nosotros queramos. Para esto, el arreglo se prepara por si en algun momento recibe mas informacion.

// // Sintaxis de un arreglo  asociativo

// console.log(propiedadesDeMiComputadora);
// console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);
// console.log("El tamaño de pantalla es de: ", propiedadesDeMiComputadora["tamañodepantalla"]);

// //Ejemplo de una Ecommerce
// let propiedadesDeMiComputadora = {
//     marca: "Asus", //la marca es mi identificador, y "Asus" es mi valor
//     modelo: "GL552JX",
//     procesador: "Intel Core i7",
//     ram: "16 GB",
//     almacenamiento: "1 TB",
//     precio: "15000"
// }

// console.log(propiedadesDeMiComputadora);
// console.log("La RAM de mi computadora es de: ", propiedadesDeMiComputadora["ram"]);
// console.log("La marca de la computadora que elegiste: ", propiedadesDeMiComputadora["marca"], "y su precio es de: ", propiedadesDeMiComputadora["precio"]);


// //Ejemplo de una Red Social
// let publicacionRedSocial = {
//     nombre: "Felipe",
//     usuario: "@felipecontenis",
//     fecha: "Agosto",
//     likes: "5000",
//     descripcion: "Esta es una bonita foto de lasagna",
//     ubicacion: "Estado de Mexico"
// }

// console.log("Estas son las publicaciones de Agosto: ", publicacionRedSocial["fecha"]);

// // Métodos de los arrays
// // En los arreglos, tenemos ciertos metodos o instrucciones que nos van a permitir manipular los elemenos de este arreglo. Estos nos permiten desde agregar y eliminar elementos, hasta reordenarlos.

// // Podemos dividir estos metodos en 3: 

// //     - Metodos transformadores
// //     - Metodos accesores
// //     - Metodos repetitivos (spoiler)

// // La sintaxis basica del metodo es nombre.Metodo(valorAModificar);

// //Metodos transformadores

// arrayDeEjemplo = [Manzana, Pera, Mango, Mandarina, Uvas, Sandia, Fresas]

// //push(): Agrega un elemento al final del arreglo
// arrayDeEjemplo.push("Pitaya");
// console.log("Agregamos la Pitaya a nuestro arreglo de ejemplo: ", arrayDeEjemplo);

// //pop(): Eliminar el ultimo elemento del arreglo
// arrayDeEjemplo.pop(); //con pop no hace falta especificar el dato
// console.log("Eliminamos el ultimo elemento del arreglo", arrayDeEjemplo);

// // unshif(): Agrega elementos al principio del array
// arrayDeEjemplo.unshif("Bananas", "Tunas", "Aguacate", "Lichis");
// console.log("gregamos 4 elementos al principio de nuestro arreglo", arrayDeEjemplo);

// // shift(): Elimina el rpimer elemento del arreglo y devolver ese valor eliminado
// arrayDeEjemplo.shift()
// console.log("Eliminamos el primer elemento del arreglo", arrayDeEjemplo);

// // sort(): Ordena los elementos del array y devuelve el array ya ordenado de forma ascendente
// arrayDeEjemplo.sort();
// console.log("Este es mi arreglo de ejemplo ordenado", arrayDeEjemplo);

// // reverse(): Invierte el orden de los elementos del array y devuelve el array invertido
// arrayDeEjemplo.reverse();
// console.log("Este es mi arreglo invertido", arrayDeEjemplo);

// //slice(): Extraemos una seccion del arreglo o cadena, y devuelve una cadena nueva, copiando el arreglo (no se modifica nada, sino que creamos una copia)
// var saludo1 = "Hola, estoy aprendiendo arreglos en Generation"
// var saludo2 = saludo1.slice(3, 7);
// console.log("Imprimimos la rebanada del arreglo original", saludo2);

// var saludo3 = saludo1.slice(9);
// console.log("Imprimimos la rebanada del arreglo original", saludo3);

// // Splice(): Modificar el arreglo en 3 formas distintas

//     // Eliminar elementos del array
//     // Agregar elementos del array
//     // Reemplazar elementos ya existentes del arreglo

//     // Sintaxis básica: 

//     // splice(indice de inicio, cantidad de elementos a eliminar, nuevo elemento1, nuevo elemento2, etc.)

//         // - Indice de inicio: la posicion desde donde comenzamos a eliminar elementos (primer numero dentro del parentesis)
//         // - Cantidad de elementos a eliminar: numero de elementos a borrar (segundo numero del parentesis)
//         // - elemento a agregar : los nuevos elementos que se agregan al arreglo(tercer elemento del parentesis)

// let mesesDelAnio = ["Enero", "Febrero", "Agosto", "Septiembre"];
// console.log("Este es nuestro arrreglo de los meses del anio: ", mesesDelAnio);

// //Eliminar y agregar datos usando splice
// let mesesBorrados = mesesDelAnio.splice(2, 2, "Abril", "Mayo");
// console.log("Este es el nuevo arreglo con los meses borrados: ",mesesDelAnio);

// //Agregar elemenos sin borrar nada del array
// let diasSemana = ["Lunes", "Martes", "Miercoles"];
// console.log("Los dias de la semana son: ", diasSemana);

// diasSemana.splice(5, 0, "Jueves", "Viernes", "Sabado");

// console.log("Los nuevos dias de la semana son: ", diasSemana);

// // Métodos accesores

// var ensalada = ["jitomate", "zanahoria", "lechuga", "chicaros", "cebolla"];

// // length(): Nos permite saber el número de elementos o longitud del arreglo

// console.log("Tenemos estos elementos en el arreglo ensalada ", ensalada.length);

// // join(): Nos permite unir los elementos del array con una cadena de texto

// console.log("Esta es una feliesnsalada", ensalada.join("feli"));

// // concat(): Nos permite unir dos o más arrays en una sola. Devuelve un nuevo arreglo con los elementos de los otros arreglos

// let dulces = ["galletas", "chetos", "glorias", "galletas", "gansitos", "picafresas", "tamborines", "galletas"];

// let mezcla = ensalada.concat(dulces);
// console.log("Esta es mi mezcla: ", mezcla);

// // indexOf(): Nos permite saber la posición de un elemento dentro del arreglo

// console.log("La posicion de los chetos de mi arreglo dulces: ", dulces.indexOf("chetos"));

// //lastindexOf(): Nos permite saber la ultima posicion de un elemento determinado dentro del arreglo

// console.log("La ultima posicion de las galletas es: ", dulces.lastIndexOf("galletas"));

// // Métodos accesores

// // toString(): Nos permite convertir el array en una cadena de texto

// console.log(mezcla.toString());

// // valueOf(): Nos permite devolver el valor de nuestro arreglo

// console.log(mezcla.valoeOf());

// // includes(): Nos permite saber si un elemento existe o no dentro de un arreglo, devuelve true o false

// console.log("Así podremos saber si un elemento está dentro del array ", mezcla.includes("gansitos"));//true
// console.log("Asi podremos saber si un elemento esta dentro del arreglo", mezcla.includes("cacahuates")); //false

// // Métodos repetidores

// // filter(): Recorre el arreglo y devuelve uno nuevo con los elementos que cumplan la condición (Es como un bucle)

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Números del 1 al 10", numeros);

// var numeros1al5 = numero.filter(numero => numero < 5);
// console.log("Estos son los números que cumplen con la condición al ser menores que 5", numeros1al5);

// var numeros6al9 = numero.filter(numero => numero>5 && numero<10);
// console.log("Estos son los numeros mayores a 5 y menores a 10", numeros6al9);

// // map(): Nos permite recorrer el array, modificar los elementos presentes en el y retornar esos valores modificados en uno nuevo con la misma longitd que el arreglo original

// var map = numeros.map(numeros => numeros*3);
// console.log("Estos son los números multiplicados por 3", map);

// // Ejercicio impovisado: Tablas 1 al 10

// var arregloBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var tabla2 = arregloBase.map(arregloBase => arregloBase * 2)
//     console.log(tabla2)
// var tabla3 = arregloBase.map(arregloBase => arregloBase * 3)
//     console.log(tabla2)
// var tabla4 = arregloBase.map(arregloBase => arregloBase * 4)
//     console.log(tabla2)
// var tabla5 = arregloBase.map(arregloBase => arregloBase * 5)
//     console.log(tabla2)
// var tabla6 = arregloBase.map(arregloBase => arregloBase * 6)
//     console.log(tabla2)
// var tabla7 = arregloBase.map(arregloBase => arregloBase * 7)
//     console.log(tabla2)
// var tabla8 = arregloBase.map(arregloBase => arregloBase * 8)
//     console.log(tabla2)
// var tabla9 = arregloBase.map(arregloBase => arregloBase * 9)
//     console.log(tabla2)
// var tabla10 = arregloBase.map(arregloBase => arregloBase * 10)
//     console.log(tabla2)

// // forEach(): Este método nos permite llamar a una función "callback" especifica una vez por cada elemento sobre el que se itrea del array. Al igual que otros iteradores como map o el filter, este metodo recibe algunos parametros:
// /*

//     - Elemento actual: elemento del arreglo que se va a evaluar o sobre el que se hace la iteracion
//     - Indice: La posicion que tiene el elemento dentro del arreglo
//     - El arreglo objetivo: el arreglo por el cual se esta haciendo esta iteracion.

// ESTE METODO NO CAMBIA EL ARREGLO ORIGINAL, DEVUELVE UNO NUEVO CON LOS ELEMENTOS MODIFICADOS

// */
// //Ejemplo para remover el primer numero impar de un arreglo

// let listaNumeros = [3, 6, 8, 10, 12,];
// let impar = 3;

// var impares = listaNumeros.forEach(function(numero){ //por cada elemento del arreglo, ejecuta la funcion
//     if (numero === impar){
//         listaNumeros.shift();
//     }
// });

// console.log("Estos son los elementos del array que no son impares", listaNumeros);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Bucles o Loops */

// En JS, los bucles o loops son utilizados para realizar tareas repetitivas con base en una condicion. Las condiciones normalmente devuelven un true o false al ser evaluadas, ademas de que el bucle continuara ejecutandose hasta que la condicion devuelva un false

// Normalmente tenemos 3 ciclos
//     - While (mientras)
//     - Do while (hacer mientras)
//     - For (para)

// Tenemos otras sentencias mas especificas:

//     - for in: sirve para recorrer un arreglo y por cada uno de los elementos de este arreglo obtenemos LA POSICION

//     - for of: Sirve para recorrer un arreglo, y por cada uno de los elementos de este arreglo, obtenemos SU VALOR

// Sentencia While()
// Esta sentencia nos va a permitr recorrer un bloque de codigo SIEMPRE que se cumpla una condicion especifica, donde el resultado debe ser true

// la estructura de WHILE es:

// palabraReservada while (condicion que tiene que ser true) {
//     //codigo a ejecutar
// }

//Contador sencillo

let valorInicial = 0; //Declaramos un valor inicial en 0
while (valorInicial < 5) {
  //mientras el valor inicial sea <5
  valorInicial++; //Ejecutamos este bloque de codigo (1 en 1)
  console.log("Este es el contador sencillo", valorInicial); //Imprimimos los resultados
}

//La sentencia while se ejecuta mientras se sigan obtiendo resultados positivos (true), y hasta que el resultado sea false, se para.

//Practica grupal: Escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla todos los numeros impares desde 1 hasta ese numero

let numeroInicial = 1;

let valorLimite = prompt(
  "Hola, por favor ingresa un numero entero positivo que sea el limite"
);

while (numeroInicial <= valorLimite) { //MIENTRAS el numero inicial sea menor que el limite, ejecutamos lo de abajo
  if (numeroInicial % 2 != 0) { //si al dividir el numero inicial entre 2, el residuo es diferente de 0 (es impar)...
    console.log(numeroInicial); //Imprimimos el valor de la variable
  }
  numeroInicial++; // Incrementamos de uno en uno nuestra variable inicial
}

/*

Ingresamos un 5
Inicial vale 1
1 es menor o igual a 5? si
entonces dividimos 1 entre 2. El residuo es diferente de 0? si
entonces imprimimos el inicial que es 1
termina el bucle, imprimimos el numero incial que es 1
sumamos uno al inicial
inicial ahora vale 2

Ingresado limte 5
    Incial ahora vale 2
    2 es menor o igual a 5? si
    entonces dividimos 2 entre 2. El residuo es diferente de 0? no
    No imprimimos el valor del inicial
    Sumar uno al incial
    inicial vale 3

Ingresado es 5
    Inicial vale 3
    3 es menor o igual que 5? si
    entonces dividimos. El residuo de 3 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 3.
    Termina el bucle, imprimimos el numero inicial que es 3.
    Inicial ahora vale 4

Ingresado es 5
    Inicial vale 4
    4 es menor o igual que 5? si
    entonces dividimos. El residuo de 4 entre 2 es diferente de 0? no
    Entonces no imprimimos el numero inicial que es 4.
    Termina el bucle, no imprimimos el numero inicial que es 4.
    Inicial ahora vale 5

Ingresado es 5
    Inicial vale 5
    5 es menor o igual que 5? si, es igual.
    entonces dividimos. El residuo de 5 entre 2 es diferente de 0? si
    entonces imprimimos el numero inicial que es 5.
    Termina el bucle, imprimimos el numero inicial que es 5.
    Inicial ahora vale 6

Ingresado es 5
    Inicial vale 6
    6 es menor o igual que 5? no
    Termina el bucle, no imprimimos el numero inicial que es 6.
    Termina el programa.

*/

// Sentencia do while() 
// El bucle do while nos sirve para ejecutar una sentencia especificada hasta que la condici+on de aprovación se evalua como falsa. La condición se evalua despues de ejecutar la sentencia, dando como resultado que la sentencia especificada se ejecuta al menos una vez.

// En pocas palabras, con el while preguntamos una vez, evaluamos la condicion y ejecutamos la instruccion. Con el do while, ejecutamos la instruccion al menos una vez, y luego preguntamos la condicion.

// Estructura básica de un dowhile

/* palabraReservada do{
    codigo a ejecutar
  }
  while(condicion); */

// Ejemplo 1

let numerito = 0; //Declaramos la variable en 0
do{ //Esto es lo que se va a hacer
    console.log("El número es: " + numerito); //imprimimos
    numerito ++; //añadimos 1 en 1 
}
while (numerito <= 10); //hasta que el número sea mayor o igual a 10

//While vs Do While

console.log("While");
let numeroWhile = 0; //inciamos en 0
//imorime aca
while (numeroWhile <5){ //mientras variable sea menor a 5
    numeroWhile ++; //la incremento en 1
    console.log(numeroWhile); //la imprimo
    
}

console.log("Do WHile");
let numeroDoWhile = 0; //inciamos en 0
do{ //hacemos esto...
    console.log(numeroDoWhile); //imprimir
    numeroDoWhile ++; //aumentar en 1
}
while (numeroDoWhile<5);//...mientras numero sea menor a 5


// Sentencia for

// Este ciclo sirve para iterar sobre una sección de una variable. Es diferente del while porque le podemos pasar una lista de valores y ejecutar una vez por cada uno de ellos. Para esto tenemos tres elementos:

    // El valor inicial de la variable que vamos a iterar (i = 0)
    // La condición que tiene que cumplirse para que el bucle se siga ejecutando (i < 5)
    // La operación que se realiza una vez que termina el bucle (i++)

    // Estructura básica del for:

    // for (valor inicial, condición, operación){}

    // Ejemplo

    console.log();
    for (let i = 0; i < 10; i++){
    console.log(i);
    }

  //let i=0 es mi valor inicial
  // i < 5 establece la condicion para que el bucle se siga ejecutando
  // i++ incrementa el valor e

    let animalitosDelBosque = ["ardillas", "conejos", "venados", "osos", "mariposas"];

    // in: Posiciones en el arreglo

    for (posiciones in animalitosDelBosque){
      console.log(posiciones)
    }
    
    // of: Valores del arreglo

    for (valores of animalitosDelBosque){
      console.log(valores)
  }

// for in (lo que vamos a buscar en el arreglo)
// for of (lo que vamos a buscar del arreglo )