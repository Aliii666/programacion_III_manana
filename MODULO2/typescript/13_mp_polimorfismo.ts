import { Vehiculo } from "./11_mp_herencia";

export class Camion extends Vehiculo {
    getCapacidadCarga(): void {
        console.log("Capacidad: Carga pesada asignada al transporte institucional de AliAcademy");
    }
}

const miCamion = new Camion("AliAcademy", "Unidad Logística");
console.log(miCamion.marca);
console.log(miCamion.tipo);
miCamion.moverse();
miCamion.getCapacidadCarga();
