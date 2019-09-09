var bicicleta = {
  color: "rojo",
  modelo: "BMX",
  frenos: "De disco",
  velmax: "60km",
  cambiarColor: function(nuevo_color){
    this.color = nuevo_color;
    console.log(this);
  }
};

bicicleta.cambiarColor("negro");
