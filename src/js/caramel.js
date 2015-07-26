/*
 *  Caramel (http://caramel.ga)
 *  Copyright 2015, All Rights Reserved
 *  License - GNU GPL v2
 */

$(document).ready(function() {

    var $nav = $('.nav');
    var $outside = $(document);

    $nav.on('click', '.menu', function(e){
        e.stopPropagation();
        e.preventDefault();

        var $this = $(this);
        $this.parents($nav).toggleClass('open');

        $outside.one('click', function(e) {
            $nav.removeClass('open');
        });
    });

    $nav.on('click', '.dropdownitem', function(e){
        e.stopPropagation();
        e.preventDefault();

        var $this = $(this);
        $this.parent('.dropdown').toggleClass('open');

        $outside.one('click', function(e) {
            $nav.removeClass('open');
        });
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
