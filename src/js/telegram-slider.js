window.addEventListener("DOMContentLoaded", () => {
  const slidesWrapper = document.querySelector(".telegram__slider-wrapper"),
    slidesField = document.querySelector(".telegram__slider-inner"),
    width = window.getComputedStyle(slidesWrapper).width,
    slides = document.querySelectorAll(".telegram__slide"),
    dotsWrapper = document.querySelector(".telegram__dots"),
    dotsArr = [];
  
  let slideIndex = 1,
      offset = 0;

  slidesField.style.width = 100 * slides.length + "%";
  
  slides.forEach(slide => {
    slide.style.width = width;
  });

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');

    dot.setAttribute('data-slide', i + 1);
    dot.classList.add("telegram__dot");
    
    if (i == 0) {
      dot.classList.add("telegram__dot--active");  
    }
    dotsWrapper.append(dot);
    dotsArr.push(dot);
  }

  dotsArr.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute('data-slide');

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
      if (dot.classList.contains("telegram__dot--active")) {
        dot.classList.remove("telegram__dot--active");
      }
    });
    dotsArr[slideIndex - 1].classList.add("telegram__dot--active");
  }

});