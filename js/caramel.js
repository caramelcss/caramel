const $ = window.$ || window.jQuery;

document.addEventListener("DOMContentLoaded", () => {
    const nav = $("nav");
    const context = $(document);

    nav.on("click", ".collapse", event => {
        event.stopPropagation();
        event.preventDefault();

        $(this).parents(nav).toggleClass("open");

        context.one("click", () => nav.removeClass("open"));
    });

    nav.on("click", ".dropdownitem", event => {
        event.stopPropagation();
        event.preventDefault();

        $(this).parent(".dropdown").toggleClass("open");

        context.one("click", () => nav.removeClass("open"));
    });

    // Alert Dismissables
    $(".dismiss").click(() => $(this).closest("#close").fadeOut(300, () => $(this).remove()));

    $(window).resize();
});
