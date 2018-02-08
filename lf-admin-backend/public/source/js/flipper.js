{
    const DOC = document;
    const WIN = window;

    const flipper = DOC.getElementById('flipper');
    if (flipper) {
        DOC.addEventListener('DOMContentLoaded', () => {
            const flipperRotate = DOC.getElementsByClassName('flipper-rotate');

            if (flipperRotate.length) {
                for (let i = 0; i < flipperRotate.length; i++) {
                    flipperRotate[i].addEventListener('click', (e) => {
                        e.preventDefault();
                        flipper.classList.toggle('rotate');
                    });
                }
            }


            DOC.getElementsByTagName('body')[0]
                .addEventListener('click', (e) => {
                    if (!e.target.closest('#flipper') && !e.target.closest('.flipper-rotate')) {
                        if (flipper.classList.contains('rotate')) {
                            flipper.classList.remove('rotate');
                        }
                    }
                });
        });
    }
};
