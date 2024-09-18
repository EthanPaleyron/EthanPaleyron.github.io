const audio = document.querySelector("audio");
const icon = document.querySelector("#volume > img");

function playAudioOnce(event) {
  audio.play();
  icon.src = "public/icon/volume-high.svg";

  // Retire l'événement après la première exécution
  document.querySelector("body").removeEventListener("click", playAudioOnce);
}

document.querySelector("body").addEventListener("click", playAudioOnce);

document.querySelector("#volume").addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche l'événement de se propager au body
  if (audio.volume !== 0) {
    icon.src = "public/icon/volume-xmark.svg";
    let volumeFadeOut = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        clearInterval(volumeFadeOut);
      }
    }, 50);
  } else {
    icon.src = "public/icon/volume-high.svg";
    let volumeFadeIn = setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume += 0.05;
      } else {
        audio.volume = 1;
        clearInterval(volumeFadeIn);
      }
    }, 50);
  }
});
