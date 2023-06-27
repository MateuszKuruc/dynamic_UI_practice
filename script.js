const menu = document.querySelector(".menu");
const dropDown = document.querySelector(".drop-down");

menu.addEventListener("click", () => {
  dropDown.classList.toggle("hideMenu");
});

const buttons = document.querySelectorAll("[data-carousel-button]");
const navButtons = document.querySelectorAll(".navButtons");

// auto slider

let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    const nextButton = document.querySelector(".next");
    nextButton.click(); // simulate a click on the next button
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// side buttons

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    stopAutoSlide();

    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel")
      .querySelector("[data-slides");

    const activeSlide = slides.querySelector("[data-active");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    const sliderNavDiv = document.querySelector(".sliderNav");
    const activeNav = sliderNavDiv.querySelector("[data-nav]");
    let navIndex = [...sliderNavDiv.children].indexOf(activeNav) + offset;

    if (navIndex < 0) navIndex = sliderNavDiv.children.length - 1;
    if (navIndex >= sliderNavDiv.children.length) navIndex = 0;

    sliderNavDiv.children[navIndex].dataset.nav = true;
    delete activeNav.dataset.nav;

    startAutoSlide();
  });
});

// dot buttons

navButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    stopAutoSlide();

    const sliderNav = document.querySelector(".sliderNav");
    const activeNav = document.querySelector("[data-nav]");

    const slides = document.querySelector("[data-slides]");
    const activeSlide = document.querySelector("[data-active]");

    const newActiveButtonIndex = index;

    const newActiveSlideIndex = newActiveButtonIndex;

    delete activeSlide.dataset.active;
    slides.children[newActiveSlideIndex].dataset.active = true;

    delete activeNav.dataset.nav;
    sliderNav.children[newActiveButtonIndex].dataset.nav = true;

    startAutoSlide();
  });
});

startAutoSlide();
