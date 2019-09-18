// Clase (molde del objeto)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    return Camiseta;
}());
var camiseta = new Camiseta();
camiseta.color = "Rojo";
camiseta.modelo = "Polo";
camiseta.marca = "Lacoste";
camiseta.talla = "XL";
camiseta.precio = 350;
var playera = new Camiseta();
playera.color = "Azul";
playera.modelo = "Manga corta";
playera.marca = "Nike";
playera.talla = "lL";
playera.precio = 230;
console.log(camiseta, playera);
var Carro = /** @class */ (function () {
    function Carro() {
    }
    //Métodos ( Funcioness o acciones del objeto)
    Carro.prototype.setColor = function (color) {
        this.color = color;
    };
    Carro.prototype.getColor = function () {
        return this.color;
    };
    return Carro;
}());
var auto = new Carro();
auto.setColor("Blanco");
var coche = new Carro();
coche.setColor("Negro");
console.log(auto.getColor(), coche.getColor());
