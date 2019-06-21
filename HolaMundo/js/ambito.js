'use strict';

//El alcance de las variables dentro de una función solo es valida dentro de estas
//No podemos llamar a una variable que fue declarada en una función y tratar de 
//usarla fuera de la función
//En cambio si declaramos una variable fuera de la función, si podremos usarla dentro de esta.


function holaMundo(texto) {
    var hola_mundo = "Texto dentro de función";

    console.log(texto);
    console.log(numero.toString()); //Funcion que convierte un numero a un string
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);
// console.log(hola_mundo); Nos marca que la variable no esta definida porque fue creada dentro de la función