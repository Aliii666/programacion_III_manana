"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _11_herencia_1 = require("./11_herencia");

var vehiculoAcademy = new _11_herencia_1.Vehiculo('AliAcademy Mobile', 'Transporte Institucional');
console.log(vehiculoAcademy.marca);
console.log(vehiculoAcademy.tipo);
vehiculoAcademy.moverse();

var motoAcademy = new _11_herencia_1.Moto('AliAcademy Express', 'Entrega de Documentos');
console.log(motoAcademy.marca);
console.log(motoAcademy.tipo);
motoAcademy.moverse();
