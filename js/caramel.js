/* eslint-disable no-invalid-this */
const $ = window.$ || window.jQuery;

$(document).ready(() => {
    const $nav = $("nav");
    const $global = $(document);

    $nav.on("click", ".collapse", function(event) {
        event.stopPropagation();
        event.preventDefault();

        $(this).parent($nav).toggleClass("open");
        $global.one("click", () => $nav.removeClass("open"));
    });

    $(".dropdown").on("click", function(event) {
        event.stopPropagation();
        event.preventDefault();

        const $self = $(this);
        $self.toggleClass("open");
        $global.one("click", () => $self.removeClass("open"));
    });

    // Alert Dismissables
    $(".dismiss").click(function() {
        $(this).closest("#close").fadeOut(300, function() {
            $(this).remove();
        });
    });

    $(window).resize();
});
