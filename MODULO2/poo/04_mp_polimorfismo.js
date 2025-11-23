class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log("Empleado realizando tareas institucionales");
    }

    calcularVacaciones() {
        return this.salario * 0.15;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class Docente extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class Coordinador extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}

const docente = new Docente("Pedro", 2000);
const coordinador = new Coordinador("Juan", 1200);

docente.trabajar();
coordinador.trabajar();

console.log(docente.calcularVacaciones());
console.log(coordinador.calcularVacaciones());
console.log(docente.horasExtra(5));
console.log(coordinador.horasExtra(4));
