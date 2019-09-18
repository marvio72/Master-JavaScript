"use strict";
exports.__esModule = true;
var camisetas_1 = require("./camisetas");
var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada!!");
    }
    Main.prototype.getCarro = function () {
        return new camisetas_1.Carro("Blanco", "Atos", "2007", "78000");
    };
    return Main;
}());
var main = new Main();
