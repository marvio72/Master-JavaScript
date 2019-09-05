$(document).ready(function(){
    // 'use strict';

    // SLIDER
    if (window.location.href.indexOf('index') > -1) {
        $(".galeria").bxSlider({
          mode: "fade",
          captions: false,
          slideWidth: 1200,
          responsive: true,
          pager: true
        });
    }
    

    // POSTS
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
        {
            title: 'Prueba de titulo',
            date: 'Publicado el ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim soluta qui hic, suscipit corrupti illum optio autem temporibus recusandae eius repellendus libero doloremque ab! Beatae doloribus a illo, consequatur non ipsa saepe earum fugit reprehenderit quia neque laboriosam harum cum veritatis doloremque quod dignissimos, vel architecto nulla maiores, ex nemo laudantium odio magni. Quidem doloremque veniam corporis nostrum voluptas.'
        },
        {
            title: 'Prueba de titulo',
            date: 'Publicado el ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim soluta qui hic, suscipit corrupti illum optio autem temporibus recusandae eius repellendus libero doloremque ab! Beatae doloribus a illo, consequatur non ipsa saepe earum fugit reprehenderit quia neque laboriosam harum cum veritatis doloremque quod dignissimos, vel architecto nulla maiores, ex nemo laudantium odio magni. Quidem doloremque veniam corporis nostrum voluptas.'
        },
        {
            title: 'Prueba de titulo',
            date: 'Publicado el ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim soluta qui hic, suscipit corrupti illum optio autem temporibus recusandae eius repellendus libero doloremque ab! Beatae doloribus a illo, consequatur non ipsa saepe earum fugit reprehenderit quia neque laboriosam harum cum veritatis doloremque quod dignissimos, vel architecto nulla maiores, ex nemo laudantium odio magni. Quidem doloremque veniam corporis nostrum voluptas.'
        },
        {
            title: 'Prueba de titulo',
            date: 'Publicado el ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim soluta qui hic, suscipit corrupti illum optio autem temporibus recusandae eius repellendus libero doloremque ab! Beatae doloribus a illo, consequatur non ipsa saepe earum fugit reprehenderit quia neque laboriosam harum cum veritatis doloremque quod dignissimos, vel architecto nulla maiores, ex nemo laudantium odio magni. Quidem doloremque veniam corporis nostrum voluptas.'
        },
        {
            title: 'Prueba de titulo',
            date: 'Publicado el ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim soluta qui hic, suscipit corrupti illum optio autem temporibus recusandae eius repellendus libero doloremque ab! Beatae doloribus a illo, consequatur non ipsa saepe earum fugit reprehenderit quia neque laboriosam harum cum veritatis doloremque quod dignissimos, vel architecto nulla maiores, ex nemo laudantium odio magni. Quidem doloremque veniam corporis nostrum voluptas.'
        },
        {
            title: 'Prueba de titulo',
            date: 'Publicado el ' + moment().format("dddd D") + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore enim soluta qui hic, suscipit corrupti illum optio autem temporibus recusandae eius repellendus libero doloremque ab! Beatae doloribus a illo, consequatur non ipsa saepe earum fugit reprehenderit quia neque laboriosam harum cum veritatis doloremque quod dignissimos, vel architecto nulla maiores, ex nemo laudantium odio magni. Quidem doloremque veniam corporis nostrum voluptas.'
        }
    ];

    posts.forEach((item, index) => {
      var post = `
            <article class="post">
            <h2>${item.title} ${index + 1}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">
                Leer más
            </a>
            </article>`;

      $("#posts").append(post);
    });
    }
    

    

    /*==============================================================================================
    SELECTOR DEL TEMA
    ==============================================================================================*/
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
        localStorage.setItem("tema","css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
        localStorage.setItem("tema", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
        localStorage.setItem("tema", "css/blue.css");
    });

    /*==============================================================================================
    MANTENER EL TEMA QUE HABIAMOS SELECCIONADO
    ==============================================================================================*/
    function tema(){
        theme.attr("href", localStorage.getItem("tema"));
    }

    $(window).on("load",tema);


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

         about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong><br>");
         about_parrafo.append('<a href="#" id="logout">Cerrar Sesión</a>');

         $("#login").hide();
         $("#logout").click(function (e) { 
             e.preventDefault();
             localStorage.removeItem("nombre");
             location.reload();
         });
     }

});
    