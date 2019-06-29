'use strict';
window.addEventListener('load', function(){

    // Localstorage

    // Comprobar disponibilidad del localstorage
    if(typeof(Storage)  !== 'undefined'){
        console.log('Localstorage disponible');
    }else{
        console.log('Incompatible con localstorage');
    }

    // Guardar datos
    localStorage.setItem("titulo", "Curso de Symfony de Victor Robles");

    // Recuperar elemento
    document.querySelector("#pelicula").innerHTML = localStorage.getItem("titulo");

    // Guardar Objetos
    var usuario = {
        nombre: "Marco Ruvalcaba",
        email: "mruvalcaba@oversistemas",
        web: "oversistemas.com"
    };

    this.localStorage.setItem("usuario", JSON.stringify(usuario));

    //Recuperar objeto
    var userjs = JSON.parse(localStorage.getItem("usuario"));
    console.log(userjs);

    document.querySelector("#datos").append(" "+userjs.web+" "+userjs.nombre);

    //borrar localstorage por elemento
    localStorage.removeItem("usuario");

    //borrar todos lo indices de localstorage
    localStorage.clear();
});