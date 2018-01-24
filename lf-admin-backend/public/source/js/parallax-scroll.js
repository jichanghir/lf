{
    const DOC = document;
    const WIN = window;

    const parallaxContainer = DOC.getElementById('bg-parallax-scroll');
    if (parallaxContainer) {
        const layers = parallaxContainer.children;

        const moveLayers = (e) => {
            [].slice.call(layers).forEach((layer, index) => {
                const scrollVal = 0 - WIN.pageYOffset * (index/10);

                const transformString = `translateY(${scrollVal}px)`;
                layer.style.transform = transformString;
            });
        };

        WIN.addEventListener('scroll', moveLayers);

        DOC.addEventListener('DOMContentLoaded', () => {
            [].slice.call(layers).forEach((layer, index) => {
                const height = DOC.documentElement.clientHeight * 2;
                layer.firstElementChild.style.height = height + 'px';
            });
        });
    }
};
