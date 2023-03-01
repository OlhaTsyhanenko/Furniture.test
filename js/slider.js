const cards = document.querySelectorAll('.slider .slider-line .benefits__wrapper');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    // console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * cards.length + 'px';

    cards.forEach(item => {
        if (window.innerWidth >= 1920) {
            item.style.width = width / 3 - 15 +'px';
            item.style.height = 'auto';
        }
        else if (window.innerWidth >= 768) {
            item.style.width = width / 2 - 15 +'px';
            item.style.height = 'auto';
        }
        else {
           item.style.width = width + 'px';
            item.style.height = 'auto';
        }

    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    document.querySelector('.slider-next').removeAttribute('disabled');
    document.querySelector('.slider-next').classList.remove('notactive');
    if (count == 0) {
        document.querySelector('.slider-prev').setAttribute('disabled', true);
        document.querySelector('.slider-prev').classList.add('notactive');
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    document.querySelector('.slider-prev').removeAttribute('disabled');
    document.querySelector('.slider-prev').classList.remove('notactive');
    if ((window.innerWidth >= 1920) && (count >= cards.length-3)) {
        document.querySelector('.slider-next').setAttribute('disabled', true);
        document.querySelector('.slider-next').classList.add('notactive');
    }
    if ((window.innerWidth >= 768) && (count >= cards.length-2)) {
        document.querySelector('.slider-next').setAttribute('disabled', true);
        document.querySelector('.slider-next').classList.add('notactive');
    }
    if (count >= cards.length-1) {
        document.querySelector('.slider-next').setAttribute('disabled', true);
        document.querySelector('.slider-next').classList.add('notactive');
    }
    rollSlider();
});

function rollSlider() {
    if (window.innerWidth >= 1920) {
        sliderLine.style.transform = 'translate(-' + (count * (width/3 + 15)) + 'px)';
    }
    else if (window.innerWidth >= 768) {
        sliderLine.style.transform = 'translate(-' + (count * (width/2 + 15)) + 'px)';
    } else {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
}