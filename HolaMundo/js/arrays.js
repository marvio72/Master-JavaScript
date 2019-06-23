'use strict';

//Arrays, Arreglos, Matices

var nombre = "Marco Rafael";
var nombres = ["Marco Rafael","Zuriel Ruvalcaba", "Violeta González", "Jose Martin",52,true];
//como objeto
var lenguajes = new Array("PHP","JS","Go","Java","C#","C","Pascal");

 //
 // ─── DESPLEGAR EN LA PAGINA TODOS LOS COMPONENTES DE UN ARREGLO ─────────────────
 //


//  function elementos(arreglo){
//      let resultado = '';
//      for (let i = 0; i < arreglo.length; i++) {
//          resultado += "<li>"+arreglo[i]+"</li>";    
//      }
//      return resultado;
//  }
// //  console.log(elementos(nombres));

// /***********************
//  * BUCLE HECHO CON FOR *
//  ***********************/
//  var elementos = `
//     <h1>Lenguaje de programación JS 2019</h1>
//     <h2>Bucle hecho con For</h2>
//     <ul style="list-style:none;">
//         ${elementos(lenguajes)}
//     </ul>
//  `;

// /***************************
//  * BUCLE HECHO CON FOREACH *
//  ***************************/

//  function elementos_foreach(arreglo){
//      let resultado = "";
//      arreglo.forEach((elemento, indice) => {
//          resultado += "<li>"+indice+" - "+elemento+"</li>";
//      });
//      return resultado;
//  }

//  elementos += `
//     <h2>Bucle hecho con Foreach</h2>
//     <ul style="list-style:none;">
//         ${elementos_foreach(nombres)}
//     </ul>
//  `;

// /**************************
//  * BUCLE HECHO CON FOR IN *
//  **************************/

// function elementos_forin(arreglos){
// let resultado = "";
// for(let arreglo in arreglos){
//     resultado += "<li>"+arreglo+" - "+arreglos[arreglo]+"</li>";
// }
// return resultado;
// } 

// elementos += `
//     <h2>Bucle hecho con For in</h2>
//     <ul style="list-style:none;"
//         ${elementos_forin(lenguajes)}
//     </ul>    
// `;


// document.getElementById('resultado').innerHTML = elementos;

//Busquedas

var busqueda = lenguajes.find(function(lenguaje) {
    return lenguaje = "PHP";
})

console.log(busqueda);

// Manera Simplificada

var busqueda = lenguajes.find(lenguaje => lenguaje == 'JS');
console.log(busqueda);

// Si deseo buscar el indice
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == 'C#');
console.log(busqueda);

//Con esta funcion de busqueda nos devuelve un true o false si se comple la condición
var precios = [10,20,50,80,12];
var busqueda = precios.some(precio => precio > 50);
console.log(busqueda);