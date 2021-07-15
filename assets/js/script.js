! function ($) {
    "use strict";
    $(".icons-menu").on("click", function () {
        if ($("#sidebar").hasClass("show")) {$("#sidebar").removeClass("show")}
        else {$("#sidebar").addClass("show")}})
}(jQuery);