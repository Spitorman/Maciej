$(document).ready(function () {

    var menu = $('.navbar');
    var navi = $('.navi');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navi').addClass('navtop');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
            $('.content').removeClass('navtop');
        }


    }

    document.onscroll = scroll;

});