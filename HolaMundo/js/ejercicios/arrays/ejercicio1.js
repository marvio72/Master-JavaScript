'use strict';

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(Se valorará el uso de funciones)
*/

/*********************************************************
 * 1. PIDA 6 NUMEROS POR PANTALLA Y LOS META EN UN ARRAY *
 *********************************************************/
var contador = 0;
var num = 0;
var arreglo = [];
do {
    num = parseInt(prompt("Introduce un numero",1));
    if (isNaN(num)) { 
        arreglo.push(parseInt(0));
    }else{
        arreglo.push(parseInt(num));
    }
    contador++;
} while (contador < 6);


/*********************************************************************************************
 * 2. MOSTRAR EL ARRAY ENTERO(TODOS SUS ELEMENTOS) EN EL CUERPO DE LA PAGINA Y EN LA CONSOLA *
 *********************************************************************************************/
function numeros(arreglos){
    let resultado = "";
    for (let arreglo in arreglos) {
        resultado += "<li>"+arreglo+" - "+arreglos[arreglo]+"</li>";
    }
    return resultado;
}
var resultado = '';
function muestra(array,comentario=''){
    var valores = `
    <h3>Valores de el Array ${comentario}</h3>
    <ul style="list-style:none;">
        ${numeros(array)}
    </ul>
    `;
    resultado += valores;
    return resultado;
}
function comenta_arreglo(array, comentario = "",posicion = "",indice="") {
    let valores = `
    <h3>${comentario}</h3>
    <p><strong>${array}</strong></p>
    <h3>${posicion}</h3>
    <p><strong>${indice}</strong></p>
    `;
    resultado += valores;
    return resultado;
}
// forin para consolog
function numeros_consola(arreglos) {
    let resultado = "";
    for (let array in arreglos) {
        resultado += array + " - " + arreglos[array] + '\n';
    }
    return resultado;
}

muestra(arreglo);
console.log(numeros_consola(arreglo));

/****************************
 * 3. ORDENARLO Y MOSTRARLO *
 ****************************/
//Para ordenar los numeros se necesita realizarlo de esta manera.
var ordenar = arreglo.sort(function(a,b){return a - b;});

document.getElementById('resultado').innerHTML = muestra(ordenar, "Ordenado");
console.log(numeros_consola(ordenar));

/************************************
 * 4. INVERTIR SU ORDEN Y MOSTRARLO *
 ************************************/
var inverso = ordenar.reverse();
document.getElementById('resultado').innerHTML = muestra(inverso, "Inverso");
console.log(numeros_consola(inverso));

/***********************************************
 * 5. MOSTRAR CUANTOS ELEMENTOS TIENE EL ARRAY *
 ***********************************************/
var elementos = arreglo.length;
document.getElementById('resultado').innerHTML = comenta_arreglo(elementos, "Registros en el arreglo");
console.log("Existen "+elementos+" elementos en el arreglo");

// 6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice

do {
    var busca = parseInt(prompt("¿Qué número buscas?"));
} while (isNaN(busca));

var busqueda = arreglo.find(array => array == busca);
if (busqueda == undefined) {
    document.getElementById('resultado').innerHTML = comenta_arreglo(busca, "No encontrado!!!");
    console.log("El numero "+busca+" no existe!!");
}else{
    var indice = arreglo.findIndex(array => array == busqueda);
    document.getElementById('resultado').innerHTML = comenta_arreglo(busca, "Se encontró!!!","En la posición",indice);
    console.log("El numero " + busca + " si existe en la posición "+indice);
}

