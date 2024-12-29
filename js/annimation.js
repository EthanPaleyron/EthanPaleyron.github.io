const popup = document.querySelector("#popup");
const closePopup = document.querySelector("#closePopup");
const slideInLeft = document.querySelector(".slide-in-left");
const slideInRight = document.querySelector(".slide-in-right");
const volumeButton = document.querySelector(".volume-button");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show-popup");
  popup.classList.add("close-popup");
  slideInLeft.classList.remove("hidden");
  document.querySelector("footer").classList.remove("hidden");
  setInterval(() => {
    popup.classList.add("hidden");
  }, 600);

  setTimeout(() => {
    document.querySelector("header > img").classList.add("header-mobile");
  }, 500);
  setTimeout(() => {
    document.querySelector(".pp").classList.add("pp-mobile-active");
  }, 1500);

  setTimeout(() => {
    slideInLeft.classList.add("slide-in-left-active");
  }, 200);
  setTimeout(() => {
    slideInRight.classList.add("slide-in-right-active");
  }, 1200);
  setTimeout(() => {
    volumeButton.classList.add("volume-button-active");
  }, 2000);
  setInterval(() => {
    document.body.classList.remove("overflow-y-hidden");
  }, 2000);
});
