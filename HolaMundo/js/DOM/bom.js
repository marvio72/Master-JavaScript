'use strict';

// BOM- Browser Object Model

//Nos informa la Altura activa
console.log(window.innerHeight);
//Nos informa la anchura activa
console.log(window.innerWidth);

//Con el screen nos da la informacion total de los
//pixeles que tenemos realmente, no importando si lo
//tenemos en un tamaño pequeño o abierto en su totalidad

console.log(screen.width);
console.log(screen.height);

//Nos informa en que pagina url estamos mediante un objeto
console.log(window.location);
//Para ser mas especificos
console.log(window.location.href);

//funcion para redirigir una pagina usarlo en consola
function redirigir(url) {
    window.location.href = url;
}

//funcion para abrir una nueva pagina en una pestaña nueva
function abrirVentana(url){
    window.open(url,"","width=400,height=300");
}
