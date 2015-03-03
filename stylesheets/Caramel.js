// Caramel 2015  - CC-NC 3.0 AU
// Javascript    - http://dev.penagw.in

$(document).ready(function() {
    
    var script = document.createElement('script');
    script.setAttribute("src", 'http://code.jquery.com/jquery-2.1.1.min.js');
    script.setAttribute("type", 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(script);

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
        $(this).closest("#note").fadeOut(500, function() {
            $(this).remove();
        });
    });

    //Force a resize to init.
    $(window).resize();
});
