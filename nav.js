// nav
$(document).ready(function(){

    $('#bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#bar').removeClass('fa-times');
        $('.nav').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.nav a').removeClass('active');
                $('.nav').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

});










