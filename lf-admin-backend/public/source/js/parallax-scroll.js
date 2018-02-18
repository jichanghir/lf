{
    const DOC = document;
    const WIN = window;

    if (WIN.screen.width >= 1200) {
        const parallaxContainer = DOC.getElementById('bg-parallax-scroll');
        const topSection = DOC.getElementById('top-section');

        //const docHeight = DOC.documentElement.clientHeight > 650 ? DOC.documentElement.clientHeight : 650;
        const docHeight = DOC.documentElement.clientHeight;


        if (topSection) {
            topSection.style.backgroundImage = 'none';
        }

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
                    const img = layer.children;
                    img[0].setAttribute('src', `/images/parallax/lr${index+1}.png`);

                    const height = docHeight * 2;
                    layer.firstElementChild.style.height = height + 'px';
                });
            });
        }
    }


};
