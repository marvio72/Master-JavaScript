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

    //Efectos 
    $("#mostrar").click(function(){
        // $(".caja-efectos").fadeToggle();
        // $(".caja-efectos").toggle("explode");
        // $(".caja-efectos").toggle("blind");
        // $(".caja-efectos").toggle("slide");
        // $(".caja-efectos").toggle("drop");
        // $(".caja-efectos").toggle("fold");
        // $(".caja-efectos").toggle("puff");
        // $(".caja-efectos").toggle("shake", "slow");
        $(".caja-efectos").toggle("shake", 4000);

    });

    //Tooltips
    // $(document).tooltip();

    //Cuadros de dialogo
    $("#lanzar-popup").click(function () {
        $("#popup").dialog();
    });

    //Calendario
    $("#calendario").datepicker();
    

});