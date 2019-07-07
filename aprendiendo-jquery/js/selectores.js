$(document).ready(function() {
    'use strict';

    /*==============================================================================================
    SELECTOR DE ID
    ==============================================================================================*/

    $("#rojo").css("background", "red")
        .css("color", "white");

    $("#amarillo").css("background", "yellow")
        .css("color", "green");

    $("#verde").css("background", "green")
        .css("color", "white");

     /*==============================================================================================
     SELECTOR DE CLASES
     ==============================================================================================*/

    var mi_clase = $(".zebra");
    //ver todos los elementos que tiene la clase .zebra
    console.log(mi_clase);
    // Nos muestra como un objeto uno de los elementos que contiene la clase .zebra
    console.log(mi_clase.eq(1));
    // Nos muestra el elemento de forma selectiva como si fuera un elemento de un array
    console.log(mi_clase[0]);
    
    //Agregandole estilos.
  
    $(".sin_borde").click(function(){
        console.log("Click dado!");
        $(this).addClass("zebra");
    });

    /*==============================================================================================
    SELECCIONAR ETIQUETAS
    ==============================================================================================*/

    var parrafos = $('p').css("cursor","pointer");

    // cuando le damos un click aumenta o disminuye el tamaño de la fuente
    // Los hasClass () método comprueba si alguno de los elementos seleccionados tienen un nombre de clase especificada.
    parrafos.click(function(){
        var that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande');
        }else{
            that.removeClass('grande');
        }
    });

    /*==============================================================================================
    SELECTORES DE ATRIBUTO
    ==============================================================================================*/

    $("[title='Google']").css("background","#a10a10")
                         .css("color","white");   
    $("[title='Facebook']").css("background","#23f2d2");

    /*==============================================================================================
    OTROS
    ==============================================================================================*/

    //Agregamos un margen superior
    //Seleccionamos todos los parrafos y todos los ancle.
    $("p, a").addClass("margen-superior");

    /*==============================================================================================
    FIND Y PARENT
    ==============================================================================================*/

    //De esta manera podemos identificar que elementos tiene la clase .resaltado
    var encontrar = $("#caja").find(".resaltado");
    console.log('encontrar: ', encontrar);

    //El parent nos sirve para tener acceso a nuestros elementos padres de una etiqueta a otra.
    //El selector: eq () selecciona un elemento con un número de índice específico.
    var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find("[title='Google']");
    console.log('busqueda: ', busqueda);

    //Fijemonos que la clase que buscamos esta dentro del div y dentro del ul es necesario ir hasta el div para encontrar a todos los elementos
    var buscar = $("#elemento2").parent().parent().find(".resaltado");
    console.log('buscar: ', buscar);
});