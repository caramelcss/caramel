/* eslint-disable no-invalid-this */
var $ = window.$ || window.jQuery;

$(document).ready(function () {
    var $nav = $("nav");
    var $global = $(document);

    $nav.on("click", ".collapse", function (event) {
        event.stopPropagation();
        event.preventDefault();

        $(this).parent($nav).toggleClass("open");
        $global.one("click", function () {
            return $nav.removeClass("open");
        });
    });

    $(".dropdown").on("click", function (event) {
        event.stopPropagation();
        event.preventDefault();

        var $self = $(this);
        $self.toggleClass("open");
        $global.one("click", function () {
            return $self.removeClass("open");
        });
    });

    // Alert Dismissables
    $(".dismiss").click(function () {
        $(this).closest("#close").fadeOut(300, function () {
            $(this).remove();
        });
    });

    $(window).resize();
});