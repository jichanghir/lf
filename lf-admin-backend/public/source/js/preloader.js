const preloader = (function () {
    const preloader = $('#preloader');

    const setPercent = (total, current) => {
        let percents = Math.ceil(current / total * 100);

        $('#preloader__percent').text(percents + '%');

        if (percents >= 100) {
            preloader.fadeOut();
        }
    }

    let loadImages = (images) => {
        if (!images.length) {
            preloader.fadeOut();
        }
        else {
            let percentTotal = 0;

            images.forEach((img) => {
                let fakeImg = $('<img>', {
                    attr: {
                        src: img
                    }
                });

                fakeImg.on('load error', () => {
                    percentTotal++;
                    setPercent(images.length, percentTotal);
                });
            });
        }
    }

    return {
        init() {
            const imgPath = $('*').map((index, element) => {
                let bg = $(element).css('background-image');
                let img = $(element).is('img');
                let path;

                if (bg !== 'none') {
                    path = bg.replace('url("', '').replace('")', '');
                }

                if (img) {
                    path = $(element).attr('src');
                }
                return path;
            });

            const imgs = imgPath.toArray();

            loadImages(imgs);
        }
    }
})();

$(function() {
    preloader.init();
});

