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
console.log(contenidoEnTexto);
//Conseguir elementos por su clase css

//Diferencias entre la funcion textContent VS innerHTML
//innderHTML puede desplegar y manipular el texto
//textContent solo puede mostrarnos el texto

