$(document).ready(function() {
    $('.top a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    $('.qa-card').click(function () {
        $(this).find('.ans').slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('button').find('.minus').attr("src", "../images/icon_minus.svg");
        } else {
            $(this).find('button').find('.minus').attr("src", "../images/icon_plus.svg");
        }
    });

});