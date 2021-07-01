! function ($) {
    "use strict";

    // $(".navbar-toggle").on("click", function () {
    //     $(this).toggleClass("open"),
    //     $("#navigation").slideToggle(500)
    // }),

    // $(".navigation-menu>li").slice(-1).addClass("last-elements"),

    // $(".menu-arrow").on("click", function (n) {
    //     $(window).width() < 992 && (
    //         n.preventDefault(),
    //         $(this).parent("li").toggleClass("open").find(".menu-li:first").toggleClass("open")
    //     )
    // }),

    // $(".navigation-menu a").each(function () {
    //     this.href == window.location.href && (
    //         $(this).parent().addClass("active"),
    //         $(this).parent().parent().parent().addClass("active"),
    //         $(this).parent().parent().parent().parent().parent().addClass("active")
    //     )
    // }),

    // $(".dropdown-menu-li a").click(function () {
    //     $(this).parent().hasClass("open") ? 
    //     (
    //         $(this).siblings(".menu-li").removeClass("open"),
    //         $(this).parent().removeClass("active open rotate")
    //     ):
    //     (
    //         $(this).siblings(".menu-li").addClass("open"),
    //         $(this).parent().addClass("active open rotate")
    //     )
    // }),


    // $(".mouse-down").on("click", function (n) {
    //     var e = $(this);
    //     $("html, body").stop().animate({
    //         scrollTop: $(e.attr("href")).offset().top - 72
    //     }, 1500, "easeInOutExpo"), n.preventDefault()})

    // $(window).scroll(function () {
    //     $(window).scrollTop() >= 50 ? 
    //         $(".sticky").addClass("nav-sticky bg-white") :
    //         $(".sticky").removeClass("nav-sticky bg-white")})
    
    $("#icons-menu").on("click", function () {
        if($(this).hasClass("bx-x") && $("#map").hasClass("map-menu-open")) {
            $("#map").removeClass("map-menu-open")
            $(this).removeClass("bx-x")
            $("#map").addClass("map")
            $(this).addClass("bx-menu")
        }
        else {
            $(this).removeClass("bx-menu")
            $("#map").removeClass("map")
            $(this).addClass("bx-x")
            $("#map").addClass("map-menu-open")
        }
    })
}(jQuery);