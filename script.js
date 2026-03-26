document.addEventListener('DOMContentLoaded', () => {
    let indiceAtual = 0;
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.anterior');
    const btnProximo = document.querySelector('.proximo');
    let IntervaloAutoPlay;
    function atualizar5slides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev', 'next');
            if (index === indiceAtual) {
                slide.classList.add('active');
            }    
            else if (index === (indiceAtual === 0 ? slides.length - 1 : indiceAtual -1)) {
                slide.classList.add('prev');
            }
            else if (index === (indiceAtual === slides.length - 1 ? 0 : indiceAtual +1)) {
                slide.classList.add('next');
            }
        });
    }
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

