/* 
 * Caramel (http://caramel.ga)
 * Copyright 2015, All Rights Reserved
 * GPL v2 License
 */

$(document).ready(function() {

    var $nav = $('.nav');

    $nav.on('click', '.collapse', function(){
        $(this).parents('ul').toggleClass('open');
    });

    $nav.on('click', '.dropdown', function(e){
        e.preventDefault();
        $(this).parents('li').find('> ul').toggleClass('open');
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