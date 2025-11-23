document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupérer tous les éléments nécessaires
    const mainElement = document.querySelector('main');
    const bodyElement = document.body; // Récupération simplifiée du body
    const delayOne = 1000;
    const delayTwo = 1000;
    // Cibles pour le changement de rayon (pas besoin de tableaux séparés)
    const bone = document.getElementById('Bone');
    const btwo = document.getElementById('Btwo');



    // 2. Ajouter l'écouteur d'événement au clic sur 'main'
    mainElement.addEventListener('click', () => {

        mainElement.classList.add('main-expanded');
        bone.classList.add('no-radius');

        setTimeout(() => {
            btwo.classList.add('fullscreen');
        }, delayOne);

        setTimeout(() => {
            mainElement.classList.add('LogoMax');
            mainElement.classList.remove('LogoMin');
        }, delayTwo);





    });
});