const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let autoSlideInterval; 

  // active slide
  slides[currentSlide].classList.add('active');

  // slider - arrows
  document.querySelector('.arrow-left').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Törli az automatikus lapozás időzítőjét
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  });

  document.querySelector('.arrow-right').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Törli az automatikus lapozás időzítőjét
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  });

  // slider - 5 sec.
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000); // slider-5 sec.
  }

  // first auto slide
  startAutoSlide();