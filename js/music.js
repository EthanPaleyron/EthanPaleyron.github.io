const audio = document.querySelector("audio");
const icon = document.querySelector("#volume > img");

function playAudioOnce(event) {
  audio.play();
  icon.src = "public/icon/volume-high.svg";

  // Retire l'événement après la première exécution
  document.querySelector("body").removeEventListener("click", playAudioOnce);
}

document.querySelector("body").addEventListener("click", playAudioOnce);

let isFading = false;

document.querySelector("#volume").addEventListener("click", (e) => {
  e.stopPropagation();

  if (isFading) return;

  if (audio.volume !== 0) {
    icon.src = "public/icon/volume-xmark.svg";
    isFading = true;
    let volumeFadeOut = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        clearInterval(volumeFadeOut);
        isFading = false;
      }
    }, 50);
  } else {
    icon.src = "public/icon/volume-high.svg";
    isFading = true;
    let volumeFadeIn = setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume += 0.05;
      } else {
        audio.volume = 1;
        clearInterval(volumeFadeIn);
        isFading = false;
      }
    }, 50);
  }
});
