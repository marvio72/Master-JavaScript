$(document).ready(function(){
    'use strict';

    //Mover un elemento por la pagina
    $(".elemento").draggable();
    
    
    //Darle tamaño dinamico  o redimencionar elementos con la clase .elemento
    $(".elemento").resizable();


    
    // Seleccionar y ordenar elementos
    // Se documenta para que funcione sortable
    // $(".lista-seleccionable").selectable();
    

    //Ordenar nuestra lista como queramos.
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista");
        }
    });

    //DROP
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function () {
            console.log("Has soltado algo dentro del area");
        }
    });

});