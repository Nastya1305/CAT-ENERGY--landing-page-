document.querySelectorAll(".image-slider").forEach(function (slider) {
    let range = slider.querySelector("input");
    let beforeBlock = slider.querySelector(".image-slider__before");
    let afterBlock = slider.querySelector(".image-slider__after");

    let beforeImg = slider.querySelector(".image-slider__before>img");
    let afterImg = slider.querySelector(".image-slider__after>img");


    range.oninput = function () {

        beforeBlock.style.width = this.value + "%";
        afterBlock.style.width = (100 - this.value) + "%";
        beforeImg.style.transform = `translateX(${100 - this.value}%)`;
        afterImg.style.transform = `translateX(${-this.value}%)`;
    };
});



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
        if (windowWidth <= 1140) {
            myMap.setCenter(myPlacemark.geometry.getCoordinates());
        } else {
            myMap.setCenter(desktopCenter);
        }

        if (windowWidth <= 690) {
            myPlacemark.options.set({
                iconImageSize: [54, 62],
                iconImageOffset: [-27, -62]
            });
            myMap.behaviors.disable('drag');
        } else {
            myPlacemark.options.set({
                iconImageSize: [92, 105],
                iconImageOffset: [-46, -105]
            });
            myMap.behaviors.enable('drag');
        }
    });

    myMap.geoObjects.add(myPlacemark);
}
