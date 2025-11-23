class Aspirante {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    verificarEdad(){
        if (this.edad >= 18){
            console.log("Registro válido: aspirante mayor de edad. Puede continuar con el proceso de matrícula.");
        } else {
            console.log("Registro condicionado: aspirante menor de edad. Requiere autorización para completar la inscripción.");
        }
    }

    mostrarFicha(){
        console.log(`Ficha del Aspirante — Nombre: ${this.nombre} | Edad: ${this.edad} años | Estado: En proceso de admisión.`);
    }
}

const pedro = new Aspirante('Pedro', 17);
pedro.verificarEdad();
pedro.mostrarFicha();
