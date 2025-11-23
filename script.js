document.addEventListener('DOMContentLoaded', () => {
    // 1. Variables et éléments
    const mainElement = document.querySelector('main');
    const delayOne = 1000;
    const delayTwo = 1000;
    const bone = document.getElementById('Bone');
    const btwo = document.getElementById('Btwo');

    // Fonction pour créer le menu une seule fois
    function createMenu() {
        if (document.getElementById('horizontalMenu')) {
            return document.getElementById('horizontalMenu'); // Retourne le menu existant
        }

        const menu = document.createElement('nav');
        menu.id = 'horizontalMenu';
        menu.classList.add('horizontal-menu');

        const menuItems = ['Accueil', 'Services', 'À Propos', 'Contact'];

        menuItems.forEach(text => {
            const item = document.createElement('a');
            item.href = `#${text.toLowerCase().replace(' ', '-')}`;
            item.classList.add('menu-item');
            item.textContent = text;
            menu.appendChild(item);
        });

        // Insérer le menu après l'élément 'main'
        mainElement.after(menu);
        return menu;
    }

    // Créer le menu dès le chargement (il est initialement caché par CSS)
    const menuElement = createMenu();

    // 2. Écouteur d'événement au clic sur 'main'
    mainElement.addEventListener('click', () => {

        // --- PREMIER CLIC : Lancement de l'animation d'expansion ---
        if (!mainElement.classList.contains('main-expanded')) {

            mainElement.classList.add('main-expanded');
            bone.classList.add('no-radius');

            setTimeout(() => {
                btwo.classList.add('fullscreen');
            }, delayOne);

            setTimeout(() => {
                mainElement.classList.add('LogoMax');
                mainElement.classList.remove('LogoMin');
            }, delayTwo);

        }

        // --- DEUXIÈME CLIC (et suivants) : Afficher/Masquer le menu ---
        else {
            // mainElement a déjà la classe 'main-expanded' (l'animation est faite)

            // On bascule la classe 'menu-visible' pour l'affichage/masquage
            menuElement.classList.toggle('menu-visible');
            mainElement.classList.add('displayNone');
        }
    });
});