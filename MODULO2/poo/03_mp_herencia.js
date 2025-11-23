class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrarRol() {
        console.log("Usuario general del sistema");
    }
}

class Estudiante extends Usuario {}

const est = new Estudiante("María");
const user = new Usuario("Invitado");

est.mostrarRol();
user.mostrarRol();
