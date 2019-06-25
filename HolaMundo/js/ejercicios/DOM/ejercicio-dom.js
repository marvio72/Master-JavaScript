'use strict';
window.addEventListener('load', function(){

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = document.querySelector("#edad").value;
    
        var datos_usuario = ["Nombre: "+nombre, "Apellido: "+apellido, "Edad: "+edad];
        var indice;
        console.log(datos_usuario);
    
        for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);
        }    

        box_dashed.style.display = "block";
    });
});