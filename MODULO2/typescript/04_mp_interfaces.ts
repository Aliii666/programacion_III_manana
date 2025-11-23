interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 12,
    nombre: "Ali Academy - Administrador"
}

const usuario2: Usuario = {
    id: 13,
    nombre: "Ali Academy - Coordinación de Admisiones",
    correo: "admisiones@aliacademy.com"
}

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);

console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);
