let temperatura = 35;

if (temperatura > 30) {
    console.log("Temperatura elevada en el campus");
}

let password = "admin123";
if (password === "AliAcademy2025") {
    console.log("Acceso concedido al panel administrativo");
} else {
    console.log("Acceso denegado");
}

let nota = 7;
if (nota >= 9) {
    console.log("Calificación: Sobresaliente");
} else if (nota >= 6) {
    console.log("Calificación: Aprobado");
} else {
    console.log("Calificación: Reprobado");
}

let edad = 20;
let tiene_licencia = true;
if (edad >= 18) {
    if (tiene_licencia) {
        console.log("Puede ingresar al programa de conducción AliAcademy");
    } else {
        console.log("Debe presentar licencia válida");
    }
} else {
    console.log("No cumple con la edad mínima");
}

edad = 20;
tiene_licencia = true;
if (edad >= 18 && tiene_licencia) {
    console.log("Requisitos completos para registro en el curso");
} else {
    console.log("Requisitos incompletos");
}

let dia = "lunes";
switch (dia) {
    case "lunes":
        console.log("Inicio de actividades académicas");
        break;
    case "viernes":
        console.log("Cierre de semana académica");
        break;
    default:
        console.log("Día regular de clases");
}

let n1 = 10;
let n2 = 5;
let n3 = 8;
switch (true) {
    case (n1 >= n2 && n1 >= n3):
        console.log("El primer puntaje es el mayor");
        break;
    case (n2 >= n1 && n2 >= n3):
        console.log("El segundo puntaje es el mayor");
        break;
    default:
        console.log("El tercer puntaje es el mayor");
}

let a = 10;
let b = 20;
let c = 15;

if (a > b && a > c) {
    console.log("El valor A es el mayor");
} else if (b > a && b > c) {
    console.log("El valor B es el mayor");
} else {
    console.log("El valor C es el mayor");
}
