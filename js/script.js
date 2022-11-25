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



