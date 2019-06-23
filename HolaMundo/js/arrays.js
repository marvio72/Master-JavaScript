'use strict';

//Arrays, Arreglos, Matices

var nombre = "Marco Rafael";
console.log('nombre: ', nombre);
var nombres = ["Marco Rafael","Zuriel Ruvalcaba", "Violeta González", "Jose Martin",52,true];
console.log('nombres: ', nombres);

//como objeto
var lenguajes = new Array("PHP","JS","Go","Java","C#","C","Pascal");

 console.log(nombres);
 console.log(lenguajes);console.log();

 //Sacar un valor especifico del array
 //Los indices inician desde el cero
 console.log(nombres[2]);

 //Ver la longitud de un array
 console.log(nombre.length);
 console.log(nombres.length);
 console.log(lenguajes.length);console.log();

 //Capturar el numero de elemento que deseamos mediante un prompt
//  var elemento = parseInt(prompt("¿Qué elemento del array quieres?",0));
//  if (elemento >= nombres.length) {
//     alert("No existe ese indice en el arreglo");  
//  }else{
//     alert(nombres[elemento]);
//  }

 //
 // ─── DESPLEGAR EN LA PAGINA TODOS LOS COMPONENTES DE UN ARREGLO ─────────────────
 //


 function elementos(arreglo){
     let resultado = '';
     for (let i = 0; i < arreglo.length; i++) {
         resultado += "<li>"+arreglo[i]+"</li>";    
     }
     return resultado;
 }
//  console.log(elementos(nombres));

/***********************
 * BUCLE HECHO CON FOR *
 ***********************/
 var elementos = `
    <h1>Lenguaje de programación JS 2019</h1>
    <h2>Bucle hecho con For</h2>
    <ul style="list-style:none;">
        ${elementos(lenguajes)}
    </ul>
 `;

/***************************
 * BUCLE HECHO CON FOREACH *
 ***************************/

 function elementos_foreach(arreglo){
     let resultado = "";
     arreglo.forEach((elemento, indice) => {
         resultado += "<li>"+indice+" - "+elemento+"</li>";
     });
     return resultado;
 }

 elementos += `
    <h2>Bucle hecho con Foreach</h2>
    <ul style="list-style:none">
        ${elementos_foreach(nombres)}
    </ul>
 `;

  document.getElementById('resultado').innerHTML = elementos;