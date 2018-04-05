$(function() {
    let slideToShow = 1;
    if ($(document).width() >= 768) {
        slideToShow = 2;
    }
    $('#gossip-slider').slick({
        infinite: true,
        arrows: false,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        slidesToShow: slideToShow
    });
});
