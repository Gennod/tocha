const burger = document.querySelector('.header__burger'),
    popup = document.querySelector('.header__popup'),
    loginBtn = document.querySelectorAll('[data-login]'),
    exitBtn = document.querySelectorAll('[data-exit]'),
    registrationBtn = document.querySelectorAll('[data-registration]'),
    headerBtns = document.querySelector('.header__btns'),
    headerList = document.querySelector('.header__list');


loginBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        login(e.target);

    });
});

exitBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        exit(e.target);
    });
});

registrationBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        registration(e.target);
    });
});

popup.addEventListener('click', (e) => {
    if (e.target.classList.contains("header__cross")) {
        isPopup(false);
        popup.innerHTML = `
        <nav class="header__menu">
            <button class="header__menu-btn btn btn--active" data-login>
                Вход
            </button>
            <button class="header__menu-btn btn" data-registration>Регистрация</button>
        </nav>
        <button class="header__cross"></button>
        `;
    }
    if (e.target.hasAttribute("data-exit")) {
        exit(e.target);
    }
    if (e.target.hasAttribute("data-login")) {
        login(e.target);
    }
    if (e.target.hasAttribute("data-registration")) {
        registration(e.target);
    }
    if (e.target.hasAttribute("data-logged")) {
        e.preventDefault();
        isPopup(false);

        loginBtn.forEach(btn => btn.style.display = 'none');
        registrationBtn.forEach(btn => btn.style.display = 'none');
        exitBtn.forEach(btn => btn.style.display = 'block');
        burger.style.display = 'none';
        headerBtns.style.display = 'flex';
        headerList.style.display = "flex";

        if (document.body.clientWidth <= 375) {
            burger.style.display = 'block';
            headerList.style.display = "none";

            popup.innerHTML = `
                <div class="container">
                    <ul class="header__list-popup">
                        <li class="header__list-popup-item header__list-popup-item--active"><a href="#" class="header__list-link">Подключение</a></li>
                        <li class="header__list-popup-item"><a href="#" class="header__list-link">Оплата</a></li>
                        <li class="header__list-popup-item"><a href="#" class="header__list-link">Контакты</a></li>
                        <li class="header__list-popup-item"><a href="#" class="header__list-link" data-exit>Выход</a></li>
                    </ul>
                </div>
                <button class="header__cross"></button>
            `;
        }
    }
});

burger.addEventListener('click', () => {
    isPopup(true);
})

function login(btn) {
    isPopup(true);

    popup.innerHTML = `
    <div class="container">
        <h2 class="header__popup-message">Вход</h2>
        <form class="header__registration-form">
            <input class="header__input" type="text" placeholder="Телефон" name="tel">
            <input class="header__input header__input--pseudo" type="password" placeholder="Пароль" name="password" id="after" required>
            <label for="after"></label>
            <a class="header__reminder" href="#">Напомнить пароль</a>
            <button class="header__btn header__btn--big btn" data-logged>Войти</button>
        </form>
    </div>
    <button class="header__cross"></button>
    `;
    
}

function exit(btn) {
    isPopup(false);
    loginBtn.forEach(btn => btn.style.display = 'block');
    registrationBtn.forEach(btn => btn.style.display = 'block');
    exitBtn.forEach(btn => btn.style.display = 'none');
    popup.innerHTML = `
    <nav class="header__menu">
        <button class="header__menu-btn btn btn--active" data-login>
            Вход
        </button>
        <button class="header__menu-btn btn" data-registration>Регистрация</button>
    </nav>
    <button class="header__cross"></button>
    `;
    if (document.body.clientWidth <= 375) {
        burger.style.display = 'block';
        headerBtns.style.display = 'none';
    } else {
        burger.style.display = 'none';
        headerBtns.style.display = 'flex';
        headerList.style.display = "none";
    }
}

function registration(btn) {
    isPopup(true);
    loginBtn.forEach(btn => btn.style.display = 'block');
    btn.style.display = 'block';
    exitBtn.forEach(btn => btn.style.display = 'none');
    popup.innerHTML = `
    <div class="container">
        <h2 class="header__popup-message">Регистрация</h2>
        <form class="header__registration-form">
            <input class="header__input" type="text" placeholder="Телефон" name="tel">
            <input class="header__input" type="email" placeholder="Электронная почта" name="email">
            <input class="header__input header__input--pseudo" id="password" type="password" placeholder="Пароль" name="password" required>
            <label for="password"></label>
            <input class="header__input header__input--pseudo" id="repeatPassword" type="password" placeholder="Повторите пароль" name="password" required>
            <label for="repeatPassword"></label>
            <button class="btn" type="submit" data-logged>
                Зарегистрироваться
            </button>
        </form>
    </div>
    <button class="header__cross"></button>
    `;
}

function isPopup(toggle) {
    if (toggle) {
        popup.classList.add("visible");
        document.body.style.overflow = "hidden";
    } else {
        popup.classList.remove("visible");
        document.body.style.overflow = "";
    }
}

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


