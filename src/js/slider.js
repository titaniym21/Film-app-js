function initSlider(prevBtn, nextBtn, sliderContainer) {
    prevBtn.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: -260,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: 260,
            behavior: 'smooth'
        });
    });
}


module.exports = initSlider;

