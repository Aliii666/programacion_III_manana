let edad: number = 20;
let nombre: string = "AliAcademy";
let activo: boolean = true;
let valor: any = 10;

if (edad > 18 && activo) {
    console.log("Estudiante activo");
} else {
    console.log("No habilitado");
}

let cursos: string[] = ["Programación", "Redes", "Base de Datos"];
for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}

enum Estado {
    Pendiente,
    Enviado,
    Procesado
}

console.log(Estado);
console.log(Estado.Procesado);
