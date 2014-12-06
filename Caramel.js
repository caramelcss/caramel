// Caramel 2014  - CC-NC 3.0 AU
// Javascript    - http://dev.penagw.in

$(document).ready(function() {

    $(".nav .bar").css({"display": "block"});   
     //On resize style the nav bars
        $(window).resize(function() {
            if ($(window).width() >= 600) {
                $(".bar li").css({
                    "display": "inline-block"
                });
                $(".bar .collapse").css({
                    "display": "none"
                });

            } else {

                $(".bar .collapse").css({"display": "block"});
                $(".bar li").css({ "display": "none"});
                $(".bar").css({"max-height": "inherit"});
            }
        }); 

        //On Expand Pressed
        $(".bar .collapse").click(function() {
            $(this).siblings('a').children('li').slideToggle('medium');

        });
        $(".dropdown").click(function() {
            $(this).children('.hidden').slideToggle('medium');

        });
        //Force a resize to init.
        $(window).resize();
    });
