function mostrarBienvenida() {
    console.log("Bienvenido al sistema de Admisiones AliAcademy");
}
mostrarBienvenida();
function calcularMatricula(costo, descuento) {
    return costo - descuento;
}
var total = calcularMatricula(300, 50);
console.log("Total matrícula:", total);
var restarCuota = function (a, b) {
    return a - b;
};
var cuotaRestante = restarCuota(200, 80);
console.log("Cuota restante:", cuotaRestante);
var cuadrado = function (x) { return x * x; };
console.log("Evaluación cuadrada:", cuadrado(5));
function saludoPersonal(nombre, saludo) {
    if (saludo === void 0) { saludo = "Bienvenido"; }
    return saludo + " " + nombre;
}
console.log(saludoPersonal("Ana"));
console.log(saludoPersonal("Luis", "Hola"));
function areaTriangulo(base, altura) {
    var area = (base * altura) / 2;
    return area;
}
console.log("Área calculada:", areaTriangulo(10, 5));
var notas = [10, 8, 7, 9];
var vacio = new Array();
var vacio2 = [];
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
var index = 0;
while (index < notas.length) {
    console.log("Nota", index, "=", notas[index]);
    index++;
}
for (var i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
    var valor = notas_1[_i];
    console.log(valor);
}
notas.forEach(function (valor, indice) {
    console.log(indice, valor);
});
