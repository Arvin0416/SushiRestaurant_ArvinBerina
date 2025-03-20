let index = 1;
const slides = document.querySelectorAll(".review-card");
const totalSlides = slides.length;
const carousel = document.getElementById("carousel");

function updateCarousel() {
    const offset = index * (-100 / 3) + (100 / 3) * 0.7;
    if (window.innerWidth <= 768) {
        // Vertical scrolling (for mobile screens)
        carousel.style.transform = `translateY(${offset}%)`;
    } else {
        // Horizontal scrolling (for large screens)
        carousel.style.transform = `translateX(${offset}%)`;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle("bg-[#1A1A1A]", i === index);
        slide.classList.toggle("bg-[#1A1A1A]/40", i !== index);
    });
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
}

setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
updateCarousel();
