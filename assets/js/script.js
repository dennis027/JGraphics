// Select all the custom dots
const dots = document.querySelectorAll('.custom-indicators .dot');

// Select the carousel
const carousel = document.querySelector('#carCarousel');

// Listen to the 'slid' event
carousel.addEventListener('slid.bs.carousel', function (event) {
  // Remove the 'active' class from all dots
  dots.forEach((dot) => dot.classList.remove('active'));

  // Add the 'active' class to the dot corresponding to the current slide
  dots[event.to].classList.add('active');
});
