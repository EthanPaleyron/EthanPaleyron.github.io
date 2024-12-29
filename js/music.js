const audio = new Audio("../public/snowfall.mp3");
const closePopup = document.querySelector("#closePopup");
const volume = document.querySelector("#volume");
const icon = document.querySelector("#volume > img");

closePopup.addEventListener("click", () => {
  audio.play(); // Assurez-vous que l'audio démarre avec une interaction utilisateur
});

let isFading = false;
let isPlay = true;

volume.addEventListener("click", (e) => {
  if (isFading) return;

  if (isPlay) {
    icon.src = "public/icon/volume-xmark.svg";
    icon.alt = "Remettre la musique";
    volume.title = "Remettre la musique";
    isFading = true;
    let volumeFadeOut = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        audio.pause(); // Met en pause l'audio
        clearInterval(volumeFadeOut);
        isPlay = false;
        isFading = false;
      }
    }, 50);
  } else {
    // Relance la musique uniquement si l'audio est en pause
    if (audio.paused) {
      audio.play();
      icon.src = "public/icon/volume-high.svg";
      icon.alt = "Couper la musique";
      volume.title = "Couper la musique";
    }
    isFading = true;
    let volumeFadeIn = setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume += 0.05;
      } else {
        audio.volume = 1;
        clearInterval(volumeFadeIn);
        isPlay = true;
        isFading = false;
      }
    }, 50);
  }
});
