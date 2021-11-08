const grid = document.createElement("div"),
    slider = document.createElement("div"),
    container = document.querySelectorAll(".container")[3],
    burger = document.querySelector('.header__burger'),
    popup = document.querySelector('.header__popup'),
    cross = document.querySelector('.header__cross');


grid.innerHTML = `
  <div class="telegram__grid">
  <div class="lines">
      <img width="100%" src="./assets/icons/lines.svg" alt="lines">
  </div>
  <div class="telegram__column">
      <div class="telegram__step">1</div>
      <div class="telegram__subtitle">Telegram bot</div>
      <div class="telegram__descr">Вы создаёте Telegram бота для вашего сайта</div>
      <img width="233" height="471" class="telegram__img" src="./assets/img/iphoneX-1.png" alt="iphoneX-1">
  </div>
  <div class="telegram__column telegram__column--big">
      <div class="telegram__step">2</div>
      <div class="telegram__subtitle">Подключение Tocha</div>
      <div class="telegram__descr">Tocha подключает Telegram бота к вашиму сайту</div>
      <img width="233" height="471" class="telegram__img" src="./assets/img/iphoneX-2.png" alt="iphoneX-2">
  </div>
  <div class="telegram__column">
      <div class="telegram__step">3</div>
      <div class="telegram__subtitle">Telegram-чат</div>
      <div class="telegram__descr">Консультант отвечает на вопросы посетителей сайта</div>
      <img width="233" height="471" class="telegram__img" src="./assets/img/iphoneX-3.png" alt="iphoneX-3">   
  </div>
  </div>
`;

slider.innerHTML = `
<div class="telegram__slider">
<div class="telegram__slide">
    <div class="telegram__step">1</div>
    <h3 class="telegram__subtitle">Telegram bot</h3>
    <p class="telegram__descr">Вы создаёте Telegram бота для вашего сайта</p>
    <img width="233" height="471" class="telegram__img" src="./assets/img/iphoneX-1.png"
        alt="iphoneX-1">
</div>
<div class="telegram__slide">
    <div class="telegram__step">2</div>
    <h3 class="telegram__subtitle">Подключение Tocha</h3>
    <p class="telegram__descr">Tocha подключает Telegram бота к вашиму сайту</p>
    <img width="233" height="471" class="telegram__img" src="./assets/img/iphoneX-2.png"
        alt="iphoneX-2">
</div>
<div class="telegram__slide">
    <div class="telegram__step">3</div>
    <h3 class="telegram__subtitle">Telegram-чат</h3>
    <p class="telegram__descr">Консультант отвечает на вопросы посетителей сайта</p>
    <img width="233" height="471" class="telegram__img" src="./assets/img/iphoneX-3.png"
        alt="iphoneX-3">
</div>
</div>
</div>
`;

if (window.innerWidth <= 670) {
  container.append(slider);
} else {
  container.append(grid);
}

burger.addEventListener('click', () => {
    popup.classList.add("visible");
    document.body.style.overflow = "hidden";
})


cross.addEventListener('click', () => {
    popup.classList.remove("visible");
    document.body.style.overflow = "";
    
})

$(document).ready(function () {
    $(".tariffs__slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    dots: true,
                },
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                },
            },
        ],
    });
    $(".reviews__slider").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    dots: true,
                },
            },
        ],
    });
    $(".telegram__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
    });
});


