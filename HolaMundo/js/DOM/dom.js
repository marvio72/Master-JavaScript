'use strict';

// DOM- DOCUMENT OBJECT MODEL

function cambia_color(identificador,color){
    let divisor = document.getElementById(identificador);
    divisor.style.background = color;
}

var caja = document.getElementById('micaja');
//Para seleccionar un elemento es mejor usar lo siguiente
//Con esto seleccionamos cualquier elemento como si fuera css
var caja = document.querySelector("#micaja")
caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS";
caja.style.background ="red";
caja.style.padding = "20px";
caja.style.color = "white";

//Invocando la función cambia_color
cambia_color("micaja","black");