const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

const moveToNextSlide = () => {
    slides[slidePosition].classList.remove('carousel-item-visible');
    slidePosition++;
    if (slidePosition > totalSlides-1) {
        slidePosition = 0;
    }
    slides[slidePosition].classList.add('carousel-item-visible');
};

setInterval(() => {
    moveToNextSlide();
}, 3000);