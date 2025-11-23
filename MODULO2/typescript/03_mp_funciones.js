function saludar(nombre) {
    return "Bienvenido " + nombre + " a AliAcademy";
}
console.log(saludar("Estudiante"));

var sumar = function (a, b) {
    return a + b;
};
console.log(sumar(10, 5));

function mensajeBienvenida() {
    console.log("Hola");
    console.log("Bienvenido al sistema académico de AliAcademy");
}
mensajeBienvenida();

function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

function calcularAreaCirculoVoid(radio) {
    console.log(Math.PI * radio * radio);
}

console.log(calcularAreaCirculo(6));
calcularAreaCirculoVoid(8);
