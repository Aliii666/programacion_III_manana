console.log("Objetos AliAcademy");

let estudiante = {
    nombre: "Ana",
    edad: 20,
    carrera: "Desarrollo de Software"
};
console.log(estudiante);

console.log(estudiante.nombre);
console.log(estudiante.carrera);

console.log(estudiante["edad"]);

estudiante.nombre = "María";
console.log(estudiante);

estudiante.correo = "maria@aliacademy.edu";
console.log(estudiante);

delete estudiante.correo;
console.log(estudiante);

for (let clave in estudiante) {
    console.log(clave);
}

console.log(Object.keys(estudiante));
console.log(Object.values(estudiante));

let alumno = {
    nombre: "Pedro",
    apellido: "Perez",
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
console.log("Alumno:", alumno);
