'use strict';

// DOM- DOCUMENT OBJECT MODEL


//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');


var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
var valor;

//Loop para crear el valor de los divs
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);

var contenidoEnTexto = todosLosDivs[1];
contenidoEnTexto.innerHTML = "He cambiado el texto";
contenidoEnTexto.style.background = "green";
contenidoEnTexto.style.padding = "15px";
contenidoEnTexto.style.color = "white";

//Conseguir elementos por su clase css

var divRojo = document.getElementsByClassName('rojo');
var div;
//Por tratarse de un arreglo cuando seleccionamos de esta menera, para poder modificar cualquier elemento
//de este array debemos realizar un bucle.
for(div in divRojo){
    if (divRojo[div].className == "rojo") {
        divRojo[div].style.background = "red";
    }
}

var divAmarillo = document.getElementsByClassName('amarillo');
divAmarillo[0].style.background ="yellow";



//Diferencias entre la funcion textContent VS innerHTML
//innderHTML puede desplegar y manipular el texto
//textContent solo puede mostrarnos el texto

//Query Selector
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);

var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);

//Cuando usamos querySelector, no nos entrega un array
// como lo hace getElementsByClassName y todos sus derivados
// Para seleccionar todos los elementos de una clase se
//recomienda usar getElementsByClassName o en su caso
//usar querySelectorAll