// ID
// function idCard() {
//     let nombre = "Guillermo Garibay";
//     let ubicacion = "Guadalajara";
//     let hobby = "Tocar bajo";
//     return `Hola mi nombre es ${nombre}. Vivo en ${ubicacion} y disfruto el ${hobby}.`
// }

// console.log(idCard("Hola ", "mi nombre es ", "Guillermo ", "Garibay"));

// Edad mascota
// function calcMascotAge(b, a) {
//     var resultado = b * a;
//     return `La edad de mi perro es ${resultado}`;
// }

// console.log(calcMascotAge(15, 7));

// ¿Par o no?
let numero;
numero= prompt("Ingresa tu numero");
    if(numero%2==0){
        document.write("El numero" + numero + "es Par");
    }else{
        document.write("El numero " + numero + " es Impar");
    }

// Verificar edad
var añoNacimiento = prompt("Ingresa tu año de nacimiento");
 
if (añoNacimiento <= 0  || añoNacimiento >=2022 ){
    alert("perate Aun no naces ");
} else if(añoNacimiento >= 1900 && añoNacimiento <= 2004){
    alert("Tas wrandote");
} else{
    alert("Tas chiquito");
}

