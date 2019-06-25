'use strict';
window.addEventListener('load', function(){

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");

    box_dashed.style.display = "none";

    formulario.addEventListener('submit', function(){
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);

        function errores(campo){
            var error = document.querySelector(campo);
            error.style.background = "red";
            error.style.padding = "2px";
            error.style.color = "white";
            error.style.fontSize = "14px";
        }

        if (nombre.trim() == null || nombre.trim().length == 0) {
            document.querySelector("#error_nombre").innerHTML = "El nombre no es Válido<br>";
            errores("#error_nombre");
            return false;
        }else{
            document.querySelector("#error_nombre").style.display = "none";
            
        }
        if (apellido.trim() == null || apellido.trim().length == 0) {
            document.querySelector("#error_apellido").innerHTML = "El apellido no es Válido<br>";
            errores("#error_apellido");
            return false;
        }else{
            
            document.querySelector("#error_apellido").style.display = "none";
        }
        if (isNaN(edad) || edad == null || edad <= 0) {
            document.querySelector("#error_edad").innerHTML = "La edad no es válida<br>";
            errores("#error_edad");
            return false;
        }else{
            document.querySelector("#error_edad").style.display = "none";
        }


    
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