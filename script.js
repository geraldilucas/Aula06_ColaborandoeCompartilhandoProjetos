document.addEventListener('DOMContentLoaded', () => {
    let indiceAtual = 0;
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
<<<<<<< HEAD
    let intervaloAutoPlay;
    function atualizarSlides() {
=======
    let IntervaloAutoPlay;
    function atualizar5slides() {
>>>>>>> 64974a3a1d7af66c80902663d73b333e83f1b56a
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === indiceAtual) {
                slide.classList.add('active');
<<<<<<< HEAD
            }
            else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual - 1)) {
                slide.classList.add('prev');
            }
            else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual - 1)) {
=======
            }    
            else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual -1)) {
                slide.classList.add('prev');
            }
            else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual +1)) {
>>>>>>> 64974a3a1d7af66c80902663d73b333e83f1b56a
                slide.classList.add('next');
            }
        });
    }
<<<<<<< HEAD
    function iniciarAutoPlay() {
        iniciarAutoPlay = setInterval(() => {
            indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
            atualizarSlides();
        }, 5000);
    }
    btnAnterior.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
        indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
        atualizarSlides();
        iniciarAutoPlay();
    });
    btnProximo.addEventListener('click', () => {
        clearInterval(intervaloAutoPlay);
        indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
        atualizarSlides();
        iniciarAutoPlay();
    });
    atualizarSlides();
    iniciarAutoPlay();
});
=======
    function iniciarAutoplay() {
        IntervaloAutoPlay = setInterval(() => {
            indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
            atualizar5slides();
        }, 5000);
    }
    btnAnterior.addEventListener('click', () => {
        clearInterval(IntervaloAutoPlay);
        indiceAtual = (indiceAtual > 0) ? indiceAtual - 1 : slides.length - 1;
        atualizar5slides();
        iniciarAutoplay();
    });
    btnProximo.addEventListener('click', () => {
        clearInterval(IntervaloAutoPlay);
        indiceAtual = (indiceAtual < slides.length - 1) ? indiceAtual + 1 : 0;
        atualizar5slides();
        iniciarAutoplay();
    });
    atualizar5slides();
    iniciarAutoplay();
});

>>>>>>> 64974a3a1d7af66c80902663d73b333e83f1b56a
