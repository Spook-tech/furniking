{
  const buttons = Array.from(document.querySelectorAll('.reviews__button'));
  const buttonLeft = document.querySelector('.reviews__button-left');
  const buttonRight = document.querySelector('.reviews__button-right');
  const list = document.querySelector('.reviews__list');
  const slides = Array.from(document.querySelectorAll('.review'));

  let activeSlide = 1;

  buttonLeft.addEventListener('click', function (e) {
    activeSlide -= 1;
    updateSlider();
    console.log(activeSlide);
  });

  buttonRight.addEventListener('click', function (e) {
    activeSlide += 1;
    updateSlider();
    console.log(activeSlide);
  });

  function updateSlider() {
    if (activeSlide > slides.length) {
      activeSlide = slides.length;
    }
    if (activeSlide < 1) {
      activeSlide = 1;
    }
    list.style.transform = "translateX(-" + (activeSlide - 1) + "00%)"
  }
}