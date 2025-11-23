console.log("ALIACADEMY - SISTEMA DE ADMISIONES | FUNCIONES");

console.log("MÓDULO DE BIENVENIDA - FUNCIÓN CLÁSICA");
function saludar(nombre){
    console.log("Bienvenido al módulo de Admisiones AliAcademy");
}
saludar();


console.log("CÁLCULOS DE MATRÍCULA - PARÁMETROS Y RESULTADOS");
function calcularMatricula(costo, descuento){
    return costo - descuento;
}
let total = calcularMatricula(250, 30);
console.log("Valor final de matrícula:", total);


console.log("OPERACIONES RÁPIDAS - FUNCIÓN FLECHA");
const restarCuota = (a, b) => {
    return a - b;
}
let cuotaRestante = restarCuota(200, 80);
console.log("Cuota pendiente:", cuotaRestante);


console.log("CÁLCULO DIRECTO ACADÉMICO (CUADRADO DE UN VALOR)");
const cuadrado = x => x * x;
console.log("Evaluación cuadrada de 5:", cuadrado(5));

console.log("SALUDO PERSONALIZADO - PARÁMETRO POR DEFECTO");
function saludoPersonal(nombre, saludo = "Bienvenido al sistema de AliAcademy"){
    return saludo + " " + nombre;
}
let sp1 = saludoPersonal("Ana");
let sp2 = saludoPersonal("Luis", "Hola, tu proceso de admisión está activo");
console.log(sp1);
console.log(sp2);


console.log("CÁLCULO DE ÁREAS - EJEMPLOS ACADÉMICOS");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const a1 = areaTriangulo(4, 3);
const a2 = areaTriangulo(10, 5);
const a3 = areaTriangulo(6, 8);

console.log("Área 4x3 =", a1);
console.log("Área 10x5 =", a2);
console.log("Área 6x8 =", a3);
