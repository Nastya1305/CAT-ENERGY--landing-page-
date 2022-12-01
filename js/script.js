"use strict";

//---------------------------------------------------------------------------------- МЕНЮ-БУРГЕР

const menuBurger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu");

if (menuBurger) {
    menuBurger.addEventListener('click', function (e) {
        menuBurger.classList.toggle("_close");
        menu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });
}


// работа с ссылками меню 
const menuLinks = document.querySelectorAll(".menu__link");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
}

function onMenuLinkClick(e) {

    // переход по ссылкам

    if (menuBurger.classList.contains("_close")) {
        menuBurger.classList.remove("_close");
        menu.classList.remove("_active");
        document.body.classList.remove("_lock");
    }
    e.preventDefault();
}


//---------------------------------------------------------------------------------- СЛАЙДЕР BEFORE AFTER

document.querySelectorAll(".image-slider").forEach(function (slider) {
    let range = slider.querySelector("input");
    let beforeBlock = slider.querySelector(".image-slider__before");
    let afterBlock = slider.querySelector(".image-slider__after");

    let beforeImg = slider.querySelector(".image-slider__before img");
    let afterImg = slider.querySelector(".image-slider__after img");


    range.oninput = function () {
        beforeBlock.style.width = this.value + "%";
        afterBlock.style.width = (100 - this.value) + "%";
        beforeImg.style.transform = `translateX(${100 - this.value}%)`;
        afterImg.style.transform = `translateX(${-this.value}%)`;
    };
});


//---------------------------------------------------------------------------------- КАРТА

ymaps.ready(init);
function init() {
    let desktopCenter = [59.938732, 30.319367];

    var myMap = new ymaps.Map("map", {
        center: desktopCenter,
        zoom: 16.4
    }),

        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Cat Energy'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/location/map-pin.png',
            iconImageSize: [92, 105],
            iconImageOffset: [-46, -105]
        });

    window.addEventListener('resize', function () {
        let windowWidth = document.documentElement.clientWidth;
        if (windowWidth <= 1140) { //tablet, mobile
            myMap.setCenter(myPlacemark.geometry.getCoordinates());
            myMap.behaviors.disable('drag');
        } else {
            myMap.setCenter(desktopCenter);
            myMap.behaviors.enable('drag');
        }

        if (windowWidth <= 690) { //mobile
            myPlacemark.options.set({
                iconImageSize: [54, 62],
                iconImageOffset: [-27, -62]
            });
        } else {
            myPlacemark.options.set({
                iconImageSize: [92, 105],
                iconImageOffset: [-46, -105]
            });
        }
    });

    myMap.geoObjects.add(myPlacemark);
}
