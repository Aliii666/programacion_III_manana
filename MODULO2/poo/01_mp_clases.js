class Estudiante {
    constructor(nombre, carrera){
        this.nombre = nombre;
        this.carrera = carrera;
    }

    iniciarProceso(){
        console.log(`Proceso iniciado: ${this.nombre} ha comenzado el proceso de admisión para ${this.carrera}.`);
    }

    validarDocumentos(){
        console.log(`Validación: Revisando documentos de ${this.nombre} para la carrera de ${this.carrera}.`);
    }

    finalizarRegistro(){
        console.log(`Registro completado: ${this.nombre} ha finalizado su inscripción en ${this.carrera}.`);
    }
}

const aspirante = new Estudiante('Ana', 'Desarrollo de Software');
aspirante.iniciarProceso();
aspirante.validarDocumentos();
aspirante.finalizarRegistro();

console.log(`Nombre del aspirante: ${aspirante.nombre}`);
console.log(`Carrera seleccionada: ${aspirante.carrera}`);
