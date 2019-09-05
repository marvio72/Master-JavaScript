$(document).ready(function () {
  'use strict';


  /*==============================================================================================
  SELECTOR DEL TEMA
  ==============================================================================================*/
  var theme = $("#theme");
  $("#to-green").click(function () {
    theme.attr("href", "css/green.css");
    localStorage.setItem("tema", "css/green.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
    localStorage.setItem("tema", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
    localStorage.setItem("tema", "css/blue.css");
  });

  /*==============================================================================================
  MANTENER EL TEMA QUE HABIAMOS SELECCIONADO
  // ==============================================================================================*/
  function tema() {
    theme.attr("href", localStorage.getItem("tema"));
  }

  $(window).on("load", tema);


  /*==============================================================================================
  SCROLL ARRIBA DE LA WEB
  ==============================================================================================*/
  $('.subir').click(function (e) {
    e.preventDefault();

    $("html, body").animate({
      scrollTop: 0
    }, 500);
  });

  /*==============================================================================================
  LOGIN FALSO
  ==============================================================================================*/
  $("#login form").submit(function (e) {
    e.preventDefault();
    var nombre = $("#name").val();
    localStorage.setItem("nombre", nombre);
    location.reload();
  });

  var form_name = localStorage.getItem("nombre");

  if (form_name != null && form_name != "undefined") {
    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong><br>");
    about_parrafo.append('<a href="#" id="logout">Cerrar Sesión</a>');

    $("#login").hide();
    $("#logout").click(function (e) {
      e.preventDefault();
      localStorage.removeItem("nombre");
      location.reload();
    });
  }

  /*==============================================================================================
  ACORDEON
  ==============================================================================================*/
  if (window.location.href.indexOf("about")) {
    $("#acordeon").accordion();
  }
  

});