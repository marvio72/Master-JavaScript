"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    //Métodos ( Funcioness o acciones del objeto)
    function Carro(color, marca, modelo, precio) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    Carro.prototype.setColor = function (color) {
        this.color = color;
    };
    Carro.prototype.getColor = function () {
        return this.color;
    };
    return Carro;
}());
exports.Carro = Carro;
