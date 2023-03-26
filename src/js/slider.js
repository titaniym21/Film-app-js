function initSlider(prevBtn, nextBtn, sliderContainer) {
    prevBtn.addEventListener('click', () => {
        console.log('prevBtn');
        sliderContainer.scrollBy({
            left: -260,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        console.log('nextBtn');
        sliderContainer.scrollBy({
            left: 260,
            behavior: 'smooth'
        });
    });
}



module.exports = initSlider;

