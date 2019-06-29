'use strict';
window.addEventListener('load', function(){

     var formulario = document.querySelector("#formpeliculas");

     formulario.addEventListener('submit',function(){
        var titulo = document.querySelector("#addpelicula").value;
        
        if (titulo.length >= 1) {
            localStorage.setItem(titulo, titulo);
        }
     });

     

     var ul = document.querySelector("#peliculas-list");
     for (var i in localStorage) {
         
         if (typeof localStorage[i] == 'string') {
             var li = document.createElement("li");
             li.append(localStorage[i]);
             ul.append(li);
         }

     }

     var formularioB = document.querySelector("#formBorrar");
     formularioB.addEventListener('submit', function () {
         var titulob = document.querySelector("#delpelicula").value;
        
         if (titulob.length >= 1) {
             localStorage.removeItem(titulob);
         }
         
     });
});