const burger = document.querySelector('.header__burger'),
    popup = document.querySelector('.header__popup'),
    cross = document.querySelector('.header__cross');

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


