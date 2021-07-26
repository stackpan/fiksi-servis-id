! function ($) {
    "use strict";
    $(".icons-menu").on("click", function () {
        if ($("#sidebar").hasClass("show")) { $("#sidebar").removeClass("show") }
        else { $("#sidebar").addClass("show") }
    })
    $("#add-btn-close").on("click", function () {
        // 
    })

    var $contextMenu = $("#contextMenu");

    $("body").on("contextmenu", "table tr", function (e) {
        $contextMenu.css({
            display: "block",
            left: e.pageX,
            top: e.pageY
        });
        debugger;
        return false;
    });

    $('html').click(function () {
        $contextMenu.hide();
    });

    $("#contextMenu li a").click(function (e) {
        var f = $(this);
        debugger;
    });

}(jQuery);