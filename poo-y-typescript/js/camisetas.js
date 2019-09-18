var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Clase Hija
var Deportivo = /** @class */ (function (_super) {
    __extends(Deportivo, _super);
    function Deportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deportivo.prototype.setSuperCargado = function (superCargado) {
        this.superCargado = superCargado;
    };
    Deportivo.prototype.getSuperCargado = function () {
        return this.superCargado;
    };
    return Deportivo;
}(Carro));
var auto = new Carro("Negro", "Fiesta", 2016, 255000);
console.log(auto);
var superCargado = new Deportivo("Blanco", "Neon", 2005, 25000);
superCargado.setSuperCargado(true);
superCargado.setColor("Rojo");
console.log(superCargado);
