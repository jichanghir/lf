$(function() {
    $('#link-block').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '#link-block--btn-prev',
        nextArrow: '#link-block--btn-next'
    });

    $('#img-block').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '#img-block--btn-prev',
        nextArrow: '#img-block--btn-next'
    });

    $('#nav-slider--prev').slick({
        infinite: true,
        speed: 500,
        vertical: true,
        cssEase: 'linear',
        prevArrow: '#nav-slider--prev--btn-prev',
        nextArrow: '#nav-slider--prev--btn-next'
    });

    $('#nav-slider--next').slick({
        infinite: true,
        speed: 500,
        vertical: true,
        cssEase: 'linear',
        prevArrow: '#nav-slider--next--btn-prev',
        nextArrow: '#nav-slider--next--btn-next'
    });

    $('#btn-prev').on('click', function() {
        $('#link-block--btn-prev, #img-block--btn-prev, #nav-slider--prev--btn-prev, #nav-slider--next--btn-next').trigger('click');
    });

    $('#btn-next').on('click', function() {
        $('#link-block--btn-next, #img-block--btn-next, #nav-slider--prev--btn-next, #nav-slider--next--btn-prev').trigger('click');
    });

});
