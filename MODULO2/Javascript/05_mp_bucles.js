console.log("Procesos con Bucles");

console.log("Listado de Estudiantes");
for (let i = 1; i <= 10; i++) {
    console.log("Estudiante:", i);
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("Total de matrículas registradas:", suma);

let curso = "ADMISIONES";
for (let i = 0; i < curso.length; i++) {
    console.log(curso[i]);
}

console.log("Cuadrados Académicos");
for (let i = 1; i <= 10; i++) {
    console.log("Cuadrado de", i, "es", i ** 2);
}

console.log("Ciclo While");
let i = 1;
while (i <= 6) {
    console.log("Revisión:", i);
    i++;
}

let notas = [8, 9, 7, 10, 6];
let indice = 0;
while (indice < notas.length) {
    console.log("Nota", indice, "=", notas[indice]);
    indice++;
}

let num = 1;
while (num <= 10) {
    if (num % 2 === 0)
        console.log("Número par:", num);
    num++;
}

let x = 5;
do {
    console.log("Contador:", x);
    x--;
} while (x !== 0);

let numero = 7;
let z = 1;
while (z <= 10) {
    console.log(numero, "x", z, "=", numero * z);
    z++;
}

let valores = [7, 12, 15, 10, 9];
let mayor = valores[0];
let p = 1;
while (p < valores.length) {
    if (valores[p] > mayor) {
        mayor = valores[p];
    }
    p++;
}
console.log("Mayor puntaje:", mayor);
