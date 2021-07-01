! function ($) {
    "use strict";
    $(".icons-menu").on("click", function () {
        if ($(".icons-menu").hasClass("bx-x") && $("#sidebar").hasClass("show")) {
            $("#sidebar").removeClass("show")
            $(".icons-menu").removeClass("bx-x").addClass("bx-menu")
        }
        else {
            $("#sidebar").addClass("show")
            $(".icons-menu").removeClass("bx-menu").addClass("bx-x")
        }
    })
}(jQuery);