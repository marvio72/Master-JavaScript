'use strict';

//PARAMETROS REST Y SPREAD

//Rest mete el resto de valores en un arreglo
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas){
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

//Spread
var frutas = ["Naranja","Manzana"];
listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");