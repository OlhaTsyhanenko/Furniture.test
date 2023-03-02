let offset = 0;
const card = document.querySelectorAll('.hero__slider .hero__slider-line .hero__cards');
const slider = document.querySelector('.hero__slider-line');
let heroCount = 0;
let heroWidth;

function init() {
    // console.log('resize');
    heroWidth = document.querySelector('.hero__slider').offsetWidth;
    slider.style.width = heroWidth * card.length + 'px';

    card.forEach(item => {
        item.style.width = heroWidth + 'px';
        item.style.height = 'auto';
    });
    slider.style.transform = 'translate(-' + heroCount * heroWidth + 'px)';
}

window.addEventListener('resize', init);
init();

document.querySelector('.hero-prev').addEventListener('click', function () {
    heroCount--;
    document.querySelector('.hero-next').removeAttribute('disabled');
    document.querySelector('.hero-next').classList.remove('act');
    if (heroCount == 0) {
        document.querySelector('.hero-prev').setAttribute('disabled', true);
        document.querySelector('.hero-prev').classList.add('act');
    }
    slider.style.transform = 'translate(-' + heroCount * heroWidth + 'px)';
});

document.querySelector('.hero-next').addEventListener('click', function () {
    heroCount++;
    document.querySelector('.hero-prev').removeAttribute('disabled');
    document.querySelector('.hero-prev').classList.remove('act');
    if (heroCount >= card.length-1) {
        document.querySelector('.hero-next').setAttribute('disabled', true);
        document.querySelector('.hero-next').classList.add('act');
    }
    slider.style.transform = 'translate(-' + heroCount * heroWidth + 'px)';
});