{
    const DOC = document;
    const WIN = window;

    if (WIN.screen.width >= 1200) {

        const parallaxContainer = DOC.getElementById('bg-parallax');
        if (parallaxContainer) {
            const layers = parallaxContainer.children;

            const moveLayers = (e) => {
                const initialX = (window.innerWidth / 2) - e.pageX;
                const initialY = (window.innerHeight / 2) - e.pageY;

                [].slice.call(layers).forEach((layer, index) => {
                    const divider = index / 100;
                    const posX = initialX * divider;
                    const posY = initialY * divider;

                    const transformString = `translate(${posX}px, ${posY}px)`;
                    layer.style.transform = transformString;
                });
            };

            WIN.addEventListener('mousemove', moveLayers);

            DOC.addEventListener('DOMContentLoaded', () => {
                [].slice.call(layers).forEach((layer, index) => {
                    const img = layer.children;
                    img[0].setAttribute('src', `/images/parallax/lr${index+1}.png`);

                    const width = DOC.documentElement.clientWidth * 1.2;
                    layer.firstElementChild.style.width = width + 'px';
                });
            });
        }
    }
};
