{
  let slides = Array.from(document.querySelectorAll(".slider__slide"));

  let listBlock = document.querySelector(".slider__list");
  let paginationBlock = document.querySelector(".slider__pagination");

  let activeSlide = 1;

  //creating pagination and adding attributes
  for (let i = 0; i < slides.length; i++) {
    slides[i].dataset.order = i + 1;

    let el = document.createElement("button");
    el.className = "slider__pagination-bullet";
    el.innerHTML = "<span class='slider__pagination-circle'></span>";
    el.dataset.order = i + 1;
    el.tabIndex = "0";
    paginationBlock.append(el);
  }

  let paginationBullets = Array.from(
    document.querySelectorAll(".slider__pagination-bullet")
  );

  updateSlider();

  function updateSlider() {
    if (
      document.querySelector(".slider__slide--active") &&
      document.querySelector(".slider__slide--active").dataset.order + 1 == activeSlide
    )
      return;
    if (document.querySelector(".slider__slide--active")) {
      document
        .querySelector(".slider__slide--active")
        .classList.remove("slider__slide--active");
      document
        .querySelector(".slider__pagination-bullet--active")
        .classList.remove("slider__pagination-bullet--active");
    }
    slides[activeSlide - 1].classList.add("slider__slide--active");
    paginationBullets[activeSlide - 1].classList.add("slider__pagination-bullet--active");
  }

  function sliderHandler(e) {
    if (!e.target.closest(".slider__pagination-bullet")) return;
    activeSlide = e.target.closest(".slider__pagination-bullet").dataset.order;
    updateSlider();
  }

  paginationBlock.addEventListener("click", sliderHandler);

  let autoplay = setInterval(function () {
    if (activeSlide >= slides.length) {
      activeSlide = 1;
    } else {
      activeSlide += 1;
    }
    updateSlider();
  }, 4000);
}