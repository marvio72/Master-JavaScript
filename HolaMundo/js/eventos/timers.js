'use strict';

window.addEventListener('load', function(){
    //Timers
    function intervalo() {
        let tiempo = setInterval(function () {
            console.log("Set interval ejecutado");
            var encabezado = document.querySelector('h1');
            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "30px";
            } else {
                encabezado.style.fontSize = "50px";
            }
        }, 2000);
        return tiempo;
    }

    var tiempo = intervalo();


    // var tiempo = intervalo();
    var stop = document.querySelector("#stop");

    stop.addEventListener('click', function(){
        alert('Haz parado el intervalo en bucle');
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener('click', function(){
        alert('Haz iniciado el intervalo en bucle');
        intervalo();
    });

    //setTimeout solo se ejecuta una vez.
});

