const audio = new Audio("../public/snowfall.mp3");
audio.loop = true;
const closePopup = document.querySelector("#closePopup");
const volume = document.querySelector("#volume");
const icon = document.querySelector("#volume > img");

let isFading = false;
let isPlaying = false;
let volumeLevel = 1;

closePopup.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    icon.src = "public/icon/volume-high.svg";
    icon.alt = "Couper la musique";
    volume.title = "Couper la musique";
  }
});

volume.addEventListener("click", (e) => {
  if (isFading) return;

  if (isPlaying) {
    icon.src = "public/icon/volume-xmark.svg";
    icon.alt = "Remettre la musique";
    volume.title = "Remettre la musique";
    isFading = true;

    let volumeFadeOut = setInterval(() => {
      if (volumeLevel > 0.05) {
        volumeLevel -= 0.05;
        audio.volume = volumeLevel;
      } else {
        audio.pause();
        audio.volume = 0;
        clearInterval(volumeFadeOut);
        isPlaying = false;
        isFading = false;
      }
    }, 50);
  } else {
    audio.play();
    icon.src = "public/icon/volume-high.svg";
    icon.alt = "Couper la musique";
    volume.title = "Couper la musique";
    isFading = true;

    let volumeFadeIn = setInterval(() => {
      if (volumeLevel < 0.95) {
        volumeLevel += 0.05;
        audio.volume = volumeLevel;
      } else {
        audio.volume = 1;
        clearInterval(volumeFadeIn);
        isPlaying = true;
        isFading = false;
      }
    }, 50);
  }
});
