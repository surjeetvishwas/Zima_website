// Automatic Carousel
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function cycleImages() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(cycleImages, 3000); // Change image every 3 seconds