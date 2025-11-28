document.addEventListener("DOMContentLoaded", () => {
  // 1. Variables et éléments
  const mainElement = document.querySelector("main");
  const menuElement = document.getElementById("horizontalMenu");
  const delayOne = 1000;
  const delayTwo = 2500;
  const delayThree = 3500;
  const bone = document.getElementById("Bone");
  const bback = document.getElementById("Bback");

  // 2. Écouteur d'événement au clic sur 'main'
  mainElement.addEventListener("click", () => {
    // --- PREMIER CLIC : Lancement de l'animation d'expansion ---

    mainElement.classList.add("main-expanded");
    bone.classList.add("no-radius");

    setTimeout(() => {
      bback.classList.add("fullscreen");
      mainElement.classList.add("LogoMax");
      mainElement.classList.remove("LogoMin");
    }, delayOne);

    setTimeout(() => {
      mainElement.classList.remove("LogoMax");
      mainElement.classList.add("LogoMenu");
      mainElement.classList.add("main-menu");
    }, delayTwo);

    setTimeout(() => {
      menuElement.classList.add("menu-visible");
    }, delayThree);
  });
});
