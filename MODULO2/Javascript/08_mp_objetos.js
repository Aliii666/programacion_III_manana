console.log("ALIACADEMY - EJEMPLOS DE OBJETOS");

let estudiante = {
    nombre: "Ana",
    edad: 20,
    ciudad: "Quito",
    carrera: "Desarrollo de Software"
};

console.log("Datos del estudiante:", estudiante);
console.log("Nombre del estudiante:", estudiante.nombre);
console.log("Ciudad:", estudiante.ciudad);

console.log("Edad (accedida por clave):", estudiante["edad"]);


console.log("Actualizando datos del estudiante...");
estudiante.nombre = "María";
console.log("Datos actualizados:", estudiante);


console.log("Agregando correo institucional...");
estudiante.correo = "maria@aliacademy.edu";
console.log("Estudiante con nuevo dato:", estudiante);

console.log("Eliminando correo institucional...");
delete estudiante.correo;
console.log("Estudiante actualizado:", estudiante);

console.log("Listado de propiedades del estudiante:");
for (let clave in estudiante) {
    console.log("Propiedad:", clave, "=>", estudiante[clave]);
}

console.log("Claves del objeto:", Object.keys(estudiante));
console.log("Valores del objeto:", Object.values(estudiante));

console.log("Registro académico del alumno");
let alumno = {
    nombre: "Pedro",
    apellido: "Pérez",
    contacto: {
        correo: "pedro@aliacademy.edu",
        telefono: "02213472",
        celular: "0992577664"
    },
    materias: [
        { nombre: "Programación III", nota: 8 },
        { nombre: "Base de Datos II", nota: 9 }
    ]
};

console.log("Alumno registrado:", alumno);
