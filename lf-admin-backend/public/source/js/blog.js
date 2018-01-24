$(function() {
    const WIN = window;
    const DOC = document;
    const $articles = $('.blog__article');
    const articles = $articles.toArray();
    const $titlesList = $('#blog__article-list');
    const $articleTitles = $('#blog__article-titles');
    let activeArticleId = null;

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }

    function setArticleActive() {
        function setActive(artcl) {
            if (artcl.dataset.idtitle !== activeArticleId) {
                $('.blog__article-title').removeClass('active');
                $(`#${artcl.dataset.idtitle}`).addClass('active');
                activeArticleId = artcl.dataset.idtitle;
            }
        }

        if (WIN.pageYOffset < getCoords(articles[0]).top) {
            setActive(articles[0]);
        }
        else if (WIN.pageYOffset + WIN.innerHeight === DOC.body.offsetHeight) {
            setActive(articles[articles.length - 1]);
        }
        else {
            articles.forEach((article) => {
                const elemTop = getCoords(article).top;
                if (WIN.pageYOffset > elemTop - 150) {
                    setActive(article);
                }
            });
        }
    }

    function setActiveTitle() {
        const elemChords = getCoords($articleTitles[0]);

        if (WIN.pageYOffset >= elemChords.top - 30) {

            $titlesList.css({
                'position': 'fixed',
                'top': 30 + 'px',
                'left': elemChords.left + 'px'
            })
        }
        else {
            $titlesList.css({
                'position': 'static'
            })
        }
    }

    if ($titlesList.length && $articles.length) {
        $titlesList.css({
            'width': $titlesList.outerWidth()
        });

        $(WIN).scroll(() => {
            setActiveTitle();
            setArticleActive();
        });

        setActiveTitle();
        setArticleActive();
    }
});
