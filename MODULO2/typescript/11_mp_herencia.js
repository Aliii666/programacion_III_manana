"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = exports.Vehiculo = void 0;

var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("El vehículo ".concat(this.marca, " (").concat(this.tipo, ") está en movimiento."));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;

var Moto = /** @class */ (function (_super) {
    var __extends = function (d, b) {
        for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Moto;
}(Vehiculo));
exports.Moto = Moto;
