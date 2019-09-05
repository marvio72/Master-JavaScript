$(document).ready(function(){
    'use strict';

    // SLIDER
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true,
        pager: true
    });

    // POSTS
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

    posts.forEach((item,index) => {
        var post = `
            <article class="post">
            <h2>${item.title} ${index+1}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">
                Leer más
            </a>
            </article>`;

            $("#posts").append(post);
    });

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

});
    