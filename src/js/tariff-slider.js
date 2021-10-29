window.addEventListener("DOMContentLoaded", () => {
  const slidesWrapper = document.querySelector(".tariffs__slider-wrapper"),
    slidesField = document.querySelector(".tariffs__slider-inner"),
    width = window.getComputedStyle(slidesWrapper).width,
    slides = document.querySelectorAll(".tariffs__slide"),
    dotsWrapper = document.querySelector(".tariffs__dots"),
    dotsArr = [];
  
  let slideIndex = 1,
      offset = 0;

  slidesField.style.width = 100 * slides.length + "%";
  
  slides.forEach(slide => {
    slide.style.width = width;
  });

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');

    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add("tariffs__dot");
    
    if (i == 0) {
      dot.classList.add("tariffs__dot--active");  
    }
    dotsWrapper.append(dot);
    dotsArr.push(dot);
  }

  dotsArr.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      refreshDots();

    });
  });

  let intervalId = setInterval(() => {
    offset += +slides[0].style.width.slice(0, slides[0].style.width.length - 2);
    slidesField.style.transform = `translateX(-${offset}px)`;
    slideIndex += 1;
    if (slideIndex > slides.length) {
      slidesField.style.transform = `translateX(-${0}px)`;
      slideIndex = 1;
      offset = 0;
    }
    refreshDots();
  }, 3000);

  function refreshDots() {
    dotsArr.forEach(dot => {
      if (dot.classList.contains("tariffs__dot--active")) {
        dot.classList.remove("tariffs__dot--active");
      }
    });
    dotsArr[slideIndex - 1].classList.add("tariffs__dot--active");
  }

});