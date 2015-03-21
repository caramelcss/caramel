/* 
 * Caramel (http://caramel.ga)
 * Copyright 2015, All Rights Reserved
 * GPL v2 License
 */

$(document).ready(function() {

    var $nav = $('.nav');

    $nav.on('click', '.menu', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.parents($nav).toggleClass('open');
    });

    $nav.on('click', '.dropdownitem', function(e){
        e.preventDefault();
        var $this = $(this);
        $this.parent('.dropdown').toggleClass('open');
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