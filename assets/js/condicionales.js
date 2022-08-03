// Condicionales
    // AND (&&) Todas las condiciones deben de ser true
        // true && true => true
        // true && false => false
        // false && false => false

    // OR (||) Sólo una condición debe ser true
        // true || false => true
        // false || true => true
        // false || false => false

    // NOT (!) Es la negación a la condición
        // !true => false
        // !false => true


const dineros = false;
const hambre = true;

alert(dineros == hambre); // false

alert(dineros || hambre); // true

// let hora = 8;

// if (hora == 8) {
// 	alert("Buen dia");
// }

// var hora = 8;

// if (hora == 8) {
// 	console.log("Buen dia");
// }

// Not
    // var hora = 3;

    // if (hora != 8) {
    // 	console.log("Buen dia");
    // }


// var hungry = false;

// if (hungry == true) {
// 	alert("Tengo mal del porky");
// } else {

// 	alert("Two mimir");
// }

// Menor que
    // var hour = 20;

    // if (hour < 18) {
    //  alert("Buenos días");
    // } else {
    //   alert("Tardes, ya");
    // }


// Menor o igual
    // var hour = 19;

    // if (hour <= 18) {
    //  alert("Todavía hay sol");
    // } else {
    //   alert("Tardes, ya");
    // }

// Mayor o igual
    // var edad = 21;

    // if (edad >= 18) {
    //     alert("Crear cuenta");
    // } else {
    //     alert("bai bai");
    // }

// Más de una condición 
    // var hora = 12;

    // if (hora <= 7 && hora > 0) {
    //     alert("Buenas madrugadas");
    // } else {
    //     alert("Que tenga un buen dia");
    // }

// if dentro de un if
    // var hora = 12;

    // if (hora > 0) {

    // 	if (hora <= 7) {
    //     	alert("Buenas madrugadas");
    //     } else {
    //     	alert("Que tenga un buen dia");
    //     }
        
    // } else {

    // 	alert("Su hora no existe");
        
    // }

// if seguido de un if

    if(dineros <= 10) {
        alert("concha de vainilla y 4 picafresas");
    } else if (dineros <= 50) {
        alert("Tacos al vapor y una agua de horchata");
    } else if (dineros <= 129) {
        alert("Pizza de liru sisa combo fiesta")
    } else if (dineros <= 500) {
        alert("Boneless + alitas + tarro + aros de cebolla + nieve")
    }

// Switch

// Obtener fecha actual

var fecha = new Date();

// Evaluar el día actual

// var dia = new Date().getDay();

// function evalDate(day) {
// 	switch(day){
// 	case 0:
// 		return "Domingo";
//         break;
//     case 1:
//     	return "Lunes";
//         break;
//     case 2:
//     	return "Martes";
//         break;
//     case 3:
//     	return "Miercoles";
//         break;
//     case 4:
//     	return "Jueves";
//         break;
//     case 5:
//     	return "Viernes";
//         break;
//     case 6:
//     	return "Sabado";
//         break;
// 	}
// }

// alert(evalDate(dia));

// var dia = new Date().getDay();

var dia = -1;
function evalDate(day) {
	switch(day){
	case 0:
		return "Domingo";
        break;
    case 1:
    	return "Lunes";
        break;
    case 2:
    	return "Martes";
        break;
    case 3:
    	return "Miercoles";
        break;
    case 4:
    	return "Jueves";
        break;
    case 5:
    	return "Viernes";
        break;
    case 6:
    	return "Sabado";
        break;
    default:
    	return "Su fecha no es válida";
	}
}

alert(evalDate(dia));

// Para comparaciones con switch el valor de switch debe de ser true
var nineros = prompt("Ingrese su deposito");

function miCarrito(dinero) {
    switch(true) {
        case (dinero <= 10):
            return "Churrumais";
            break;
        case (dinero <= 50):
            return "McTrio";
            break;
        case (dinero <= 100):
            return "Chilaquiles verdes c/ poio y 1/2L de naranja";
            break;
        case (dinero <= 500):
            return "1/2kg de chicharrones y 1 boleto al cine";
            break;
        default:
            return "No hay nineros";
    }
}

alert(miCarrito(nineros));
