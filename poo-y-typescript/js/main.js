var Main = /** @class */ (function () {
    function Main() {
        console.log("Aplicación JS cargada!!");
    }
    Main.prototype.getCarro = function () {
        return new Carro("Blanco", "Atos", "2007", "78000");
    };
    return Main;
}());
var main = new Main();
