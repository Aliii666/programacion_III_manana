class RolAcademico {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerAccion() {
        console.log(`${this.nombre}: Participando en actividades académicas generales dentro de AliAcademy.`);
    }
}

class Tutor extends RolAcademico {
    hacerAccion() {
        console.log(`${this.nombre}: Guiando a estudiantes, resolviendo dudas y supervisando el avance académico.`);
    }
}

const tutor = new Tutor('Ana');
const rolGeneral = new RolAcademico('Asistente Académico');

tutor.hacerAccion();
rolGeneral.hacerAccion();
