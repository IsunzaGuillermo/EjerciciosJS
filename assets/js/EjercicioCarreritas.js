// Versión 1

corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];

var lesionados = corredores.shift("Roberto");

corredores[0] = "Ramiro";
corredores[1] = "Jorge";
corredores[2] = "Sofia";
corredores[3] = "Andrea";
corredores[4] = "Jose";

console.log(corredores);
console.log("Debido a una lesión ", lesionados, " tuvo que salir de la carrera.");

// Posiciones finales [ram, jor, sof, and, jos];

//////////////////////////////////////

// // Versión 2

participantes = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"]

lisiados= participantes.shift("Roberto");

participantes.splice(0, 4, "Ramiro", "Jorge", "Sofia", "Andrea", "Jose");

console.log(participantes);
console.log("El participante ", lisiados, " se ha lesionado y dejara la carrera.");

// Posiciones finales [ram, jor, sof, and, jos];

//////////////////////////////////////

// Versión 3

atletas = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"]

    // Primer cambio
atletas.splice(0, 2,), atletas.splice(1, 2, "Roberto", "Andrea", "Ramiro","Sofia");

console.log(corredores);

    // Segundo cambio
atletas.splice(0,3), atletas.splice(1, 1, "Jorge", "Roberto", "Andrea", "Sofia");

console.log(atletas);

    // Tercer cambio
atletas.splice(0, 2),
accidentados= atletas.shift("Roberto"), 
atletas.splice(0, 1,), 
atletas.push("Andrea"), 
atletas.splice(0, 0, "Ramiro", "Jorge"),

console.log(atletas);
console.log("Lamentamos que el atleta ", accidentados, " se haya accidentado y tenga que abandonar la carrera.");

    // Cuarto cambio
atletas.push("Jose");

console.log(atletas);