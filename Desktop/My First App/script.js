document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slider');
        const totalSlides = slides.children.length;

        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Attach event listeners after the DOM is ready
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
});

