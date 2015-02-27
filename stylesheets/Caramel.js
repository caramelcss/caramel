// Caramel 2015  - CC-NC 3.0 AU
// Javascript    - http://dev.penagw.in

$(document).ready(function() {

    $(".nav .bar").css({
        "display": "block"
    });

    // Navbar Window Resize
    $(window).resize(function() {
        if ($(window).width() >= 800) {
            $(".bar li").css({
                "display": "inline-block"
            });
            $(".bar .collapse").css({
                "display": "none"
            });

        } else {

            $(".bar .collapse").css({
                "display": "block"
            });
            $(".bar li").css({
                "display": "none"
            });
            $(".bar").css({
                "max-height": "inherit"
            });
        }
    });

    // On Expand Pressed
    $(".bar .collapse").click(function() {
        $(this).siblings('a').children('li').slideToggle('medium');

    });
    $(".dropdown").click(function() {
        $(this).children('.hidden').slideToggle('medium');

    });

    // Alert Dismissables
    $(".dismiss").click(function() {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
    });

    //Force a resize to init.
    $(window).resize();
});