class Postulante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    puedeInscribirse() {
        if (this.edad >= 18) {
            console.log("Puede aplicar a AliAcademy");
        } else {
            console.log("No cumple con la edad mínima de ingreso");
        }
    }

    mostrarInfo() {
        console.log(this.nombre, this.edad);
    }
}

const nuevoPostulante = new Postulante("Carlos", 17);
nuevoPostulante.puedeInscribirse();
nuevoPostulante.mostrarInfo();
