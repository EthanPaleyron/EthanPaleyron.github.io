const audio = document.querySelector("audio");
const icon = document.querySelector("#volume > img");

// function playAudioOnce(event) {
//   audio.play();
//   icon.src = "public/icon/volume-high.svg";

//   document.querySelector("body").removeEventListener("click", playAudioOnce);
// }

// document.querySelector("body").addEventListener("click", playAudioOnce);

let isFading = false;
let volumeBool = false;

document.querySelector("#volume").addEventListener("click", (e) => {
  //   e.stopPropagation();

  if (isFading) return;

  if (volumeBool) {
    icon.src = "public/icon/volume-xmark.svg";
    isFading = true;
    let volumeFadeOut = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        clearInterval(volumeFadeOut);
        volumeBool = false;
        isFading = false;
      }
    }, 50);
  } else {
    audio.play();
    icon.src = "public/icon/volume-high.svg";
    isFading = true;
    let volumeFadeIn = setInterval(() => {
      if (audio.volume < 0.95) {
        audio.volume += 0.05;
      } else {
        audio.volume = 1;
        clearInterval(volumeFadeIn);
        volumeBool = true;
        isFading = false;
      }
    }, 50);
  }
});
