window.onload = function () {
  const mainElement = document.querySelector("main");
  setTimeout(() => {
    mainElement.classList.add("slide-in-left-active");
  }, 100); // Ajoute un petit délai pour que l'animation démarre après le chargement
};
