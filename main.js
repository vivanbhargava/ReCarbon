let currentIndex = 1;
showSlide(currentIndex);

function changeSlide(n) {
  showSlide(currentIndex += n);
}

function currentSlide(n) {
  showSlide(currentIndex = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) currentIndex = 1;
  if (n < 1) currentIndex = slides.length;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[currentIndex - 1].classList.add("active");
  dots[currentIndex - 1].classList.add("active");
}