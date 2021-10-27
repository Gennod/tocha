/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**********************************!*\
  !*** ./src/js/reviews-slider.js ***!
  \**********************************/
window.addEventListener("DOMContentLoaded", () => {
  const slidesWrapper = document.querySelector(".reviews__slider-wrapper"),
        slidesField = document.querySelector(".reviews__slider-inner"),
        width = window.getComputedStyle(slidesWrapper).width,
        slides = document.querySelectorAll(".reviews__slide"),
        dotsWrapper = document.querySelector(".reviews__dots"),
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
    dot.classList.add("reviews__dot");

    if (i == 0) {
      dot.classList.add("reviews__dot--active");
    }

    dotsWrapper.append(dot);
    dotsArr.push(dot);
  }

  dotsArr.forEach(dot => {
    dot.addEventListener("click", e => {
      const slideTo = e.target.getAttribute('data-slide');
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsArr.forEach(dot => {
        if (dot.classList.contains("reviews__dot--active")) {
          dot.classList.remove("reviews__dot--active");
        }
      });
      dotsArr[slideIndex - 1].classList.add("reviews__dot--active");
    });
  });
});
}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*********************************!*\
  !*** ./src/js/tariff-slider.js ***!
  \*********************************/
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
    dot.addEventListener("click", e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsArr.forEach(dot => {
        if (dot.classList.contains("tariffs__dot--active")) {
          dot.classList.remove("tariffs__dot--active");
        }
      });
      dotsArr[slideIndex - 1].classList.add("tariffs__dot--active");
    });
  });
});
}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!***********************************!*\
  !*** ./src/js/telegram-slider.js ***!
  \***********************************/
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
    dot.addEventListener("click", e => {
      const slideTo = e.target.getAttribute('data-slide');
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      dotsArr.forEach(dot => {
        if (dot.classList.contains("telegram__dot--active")) {
          dot.classList.remove("telegram__dot--active");
        }
      });
      dotsArr[slideIndex - 1].classList.add("telegram__dot--active");
    });
  });
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map