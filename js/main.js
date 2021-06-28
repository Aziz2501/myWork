let sidebarSlider = new Swiper('.sidebar-slider', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    speed: 800,
    watchOverflow: true,
    autoplay: {
        delay: 3000,
        speed: 1000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
});


let photoSwiper = new Swiper('.photo-swiper', {
    spaceBetween: 20,
    slidesPerGroup: 1,
    watchOverflow: true,
    loop: true,
    slidesPerView: 4,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        950: {
            slidesPerView: 4,
        },
        // when window width is >= 480px
        745: {
            slidesPerView: 2,

        },
        // when window width is >= 640px
        540: {
            slidesPerView: 2,

        },

        320: {
            slidesPerView: 1,
        },

        200: {
            slidesPerView: 1,
        }
    }

});

let menuBtn = document.querySelector('.nav-toggle');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});


const navMenu = document.querySelector('.header__inner');


window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    if (scrollPos > 800) {
        navMenu.classList.add('black');
    } else {
        navMenu.classList.remove('black');
    };
});

document.addEventListener('DOMContentLoaded', function () {
    let scrollPos = window.scrollY;
    if (scrollPos > 800) {
        navMenu.classList.add('black')

    } else {
        navMenu.classList.remove('black')
    }
});


const tabsBtn = document.querySelectorAll('.tabs__btn');
const tabsItems = document.querySelectorAll('.tabs__item');


tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        };
    });
});


function linkMenuColor() {
    let linkMenu = color;
    linkMenu
}

const linkMenu = document.querySelector('.menu__link');

window.addEventListener("scroll", function (e) {
    let scrollPos = window.scrollY;

});

