let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Ensure the currentSlide wraps around
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Calculate the translateX value to show the correct slide
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Automatically change slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);

// Initially show the first slide
showSlide(currentSlide);
