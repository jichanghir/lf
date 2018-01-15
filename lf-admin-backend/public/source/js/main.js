$(function() {
    const destination = $('#top-section').outerHeight();

    $('body').on('click', (e) => {
        if ($(e.target).closest('#top-section__down').length) {
            $('html, body').animate({ scrollTop: destination }, 700);
        }
    });

});
