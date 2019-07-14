$(document).ready(function(){
    'use strict';

    //Mover un elemento por la pagina
    $(".elemento").draggable();
    
    
    //Darle tamaño dinamico  o redimencionar elementos con la clase .elemento
    $(".elemento").resizable();


    
    // Seleccionar y ordenar elementos
    $(".lista-seleccionable").selectable();
    

});