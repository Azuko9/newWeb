document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupérer tous les éléments nécessaires
    const mainElement = document.querySelector('main');
    const bodyElement = document.body; // Récupération simplifiée du body

    // Cibles pour le changement de rayon (pas besoin de tableaux séparés)
    const bone = document.getElementById('Bone');
    const btwo = document.getElementById('Btwo');
    const bthree = document.getElementById('Bthree');

    // Les éléments ciblés par les classes 'no-radius', 'bone-expanded', 'btwo-expanded', 'bthree-expanded'
    const radiusTargets = [bone, btwo, bthree];

    // 2. Ajouter l'écouteur d'événement au clic sur 'main'
    mainElement.addEventListener('click', () => {

        mainElement.classList.toggle('main-expanded');

        // --- LOGIQUE DE TEMPORISATION ---

        // 1. Vérifier l'état actuel pour déterminer le délai
        // On vérifie l'état du body, car 'background-expanded' est la classe qui a le délai.
        const isExpanded = bodyElement.classList.contains('background-expanded');

        // Si la classe est PRÉSENTE, on la SUPPRIME avec un délai court (0.1s).
        // Si la classe est ABSENTE, on l'AJOUTE avec un délai long (2s).
        const delay = isExpanded ? 100 : 2000;

        // ---------------------------------

        // A. Changements IMMÉDIATS (les propriétés sans délai)

        // Bascule la classe 'no-radius' (si elle a des transitions CSS, elles démarrent immédiatement)
        radiusTargets.forEach(element => {
            element.classList.toggle('no-radius');
        });

        // Bascule les classes d'expansion (si elles ont des transitions CSS, elles démarrent immédiatement)
        // Note: Vous pouvez les regrouper si l'effet est le même, mais je garde votre structure pour l'instant.
        bone.classList.toggle('bone-expanded');
        btwo.classList.toggle('btwo-expanded');
        bthree.classList.toggle('bthree-expanded');


        // B. Changements DÉCALÉS (avec setTimeout)

        // Applique la classe 'background-expanded' avec le délai déterminé
        setTimeout(() => {
            bodyElement.classList.toggle('background-expanded');
        }, delay);

    });
});