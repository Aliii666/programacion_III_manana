class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }

    trabajar() {
        console.log(`${this.nombre} está atendiendo solicitudes, gestionando estudiantes y apoyando procesos en AliAcademy...`);
    }

    calcularVacaciones() {
        return this.salario * 0.15;
    }

    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 2;
    }
}

class ProgramadorAcademico extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.20;
    }
    horasExtra(horas) {
        return ((this.salario / 30) / 8) * horas * 3;
    }
}

class DisenadorEducativo extends Empleado {
    calcularVacaciones() {
        return this.salario * 0.10;
    }
}

const progPedro = new ProgramadorAcademico('Pedro', 2000);
const diseJuan = new DisenadorEducativo('Juan', 1500);

progPedro.trabajar();
diseJuan.trabajar();

console.log(`${progPedro.nombre} - Vacaciones calculadas: $${progPedro.calcularVacaciones().toFixed(2)} (tiempo para capacitación tecnológica).`);
console.log(`${diseJuan.nombre} - Vacaciones calculadas: $${diseJuan.calcularVacaciones().toFixed(2)} (tiempo para diseño y creatividad).`);

console.log(`${progPedro.nombre} - Pago por horas extra (gestionando sistemas, 5 h): $${progPedro.horasExtra(5).toFixed(2)}.`);
console.log(`${diseJuan.nombre} - Pago por horas extra (creación de material visual, 4 h): $${diseJuan.horasExtra(4).toFixed(2)}.`);
