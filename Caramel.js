/*
 *	Caramel © 2014 : ALL RIGHTS RESERVED
 *
 *	PUBLISHED UNDER [ CC-NC 3.0 AU ]
 *	https://creativecommons.org/licenses/by-nc/3.0/au/
 *
 *  HTML/CSS    - @kurisubrooks
 *  JAVASCRIPT  - @Penagwin
 *  FONTAWESOME - @DaveGandy - http://fontawesome.io/
 */

$(document).ready(function() {

// Navbar Collapse
    
    //On resize style the nav bars
    $(window).resize(function() {
        if ($(window).width() >= 800) {
            $(".bar li").css({
                "display": "inline-block"
            });
            $(".bar .collapse").css({
                "display": "none"
            });

        } else {

            $(".bar .collapse").css({"display": "block"});
            $(".bar li").css({ "display": "none"});

            //$(".bar li").css({"display": "block"});
            $(".bar").css({"max-height": "inherit"});
        }
    });
    
    var buttonStage = false;
    $(".bar .collapse").click(function() {
        if (!buttonStage) {
            $(".bar li").css({"display": "block"});
            buttonStage = true;
        } else {
            $(".bar li").css({"display": "none"});

            buttonStage = false;
        }
    });

    //Force a resize to init.
    $(window).resize();
});