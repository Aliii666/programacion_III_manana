import { Vehiculo, Moto } from "./11_herencia";

const vehiculoAcademy = new Vehiculo('AliAcademy Mobile', 'Transporte Institucional');
console.log(vehiculoAcademy.marca);
console.log(vehiculoAcademy.tipo);
vehiculoAcademy.moverse();

const motoAcademy = new Moto('AliAcademy Express', 'Entrega de Documentos');
console.log(motoAcademy.marca);
console.log(motoAcademy.tipo);
motoAcademy.moverse();
