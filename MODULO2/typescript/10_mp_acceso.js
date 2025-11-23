class Estudiante {
    constructor(nombre, carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
    }
    registrar() {
        console.log(this.nombre + " inscrito en la carrera " + this.carrera);
    }
    estudiar() {
        console.log(this.nombre + " está estudiando " + this.carrera);
    }
    graduarse() {
        console.log(this.nombre + " se ha graduado de " + this.carrera);
    }
}
var alumno = new Estudiante("Ana López", "Desarrollo de Software");
alumno.registrar();
alumno.estudiar();
alumno.graduarse();
