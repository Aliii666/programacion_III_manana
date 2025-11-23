console.log("Funciones AliAcademy");

function mostrarBienvenida() {
    console.log("Bienvenido al sistema de Admisiones AliAcademy");
}
mostrarBienvenida();

function calcularMatricula(costo, descuento) {
    return costo - descuento;
}
let total = calcularMatricula(300, 50);
console.log("Total matrícula:", total);

const restarCuota = (a, b) => {
    return a - b;
};
let cuotaRestante = restarCuota(200, 80);
console.log("Cuota restante:", cuotaRestante);

const cuadrado = x => x * x;
console.log("Evaluación cuadrada:", cuadrado(5));

function saludoPersonal(nombre, saludo = "Bienvenido") {
    return saludo + " " + nombre;
}
console.log(saludoPersonal("Ana"));
console.log(saludoPersonal("Luis", "Hola"));

function areaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}
console.log("Área calculada:", areaTriangulo(10, 5));

let notas = [10, 8, 7, 9];
let vacio = new Array();
let vacio2 = [];

console.log("Notas registradas:", notas);
console.log(vacio);
console.log(vacio2);

console.log(notas[0]);
console.log(notas[3]);

notas[0] = 100;
console.log(notas);

notas.push(50);
console.log(notas);

notas.unshift(99);
console.log(notas);

notas.pop();
console.log(notas);

notas.shift();
console.log(notas);

let index = 0;
while (index < notas.length) {
    console.log("Nota", index, "=", notas[index]);
    index++;
}

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

for (let valor of notas) {
    console.log(valor);
}

notas.forEach(function(valor, indice) {
    console.log(indice, valor);
});
