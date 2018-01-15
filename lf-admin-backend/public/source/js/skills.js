$(function() {
    const WIN = window;
    const $skills = $('.skills');

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }

    if ($skills.length) {
        const elemTop = getCoords($skills[0]).top;

        $(WIN).scroll(() => {

            const h = WIN.pageYOffset + WIN.innerHeight;

            if (h > elemTop + 200) {
                $skills.removeClass('clear');
            }
        })
    }
});
