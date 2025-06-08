
    
    
    
    
    
    
    function toggleElementDisplayOnClick(triggerElement, elementToToggle) {
        // Vérifie si les éléments existent
        if (!triggerElement || !elementToToggle) {
            console.error("Les éléments déclencheur ou à basculer n'existent pas.");
            return;
        }
    
        // Initialise l'état d'affichage de l'élément à basculer
      //  elementToToggle.style.display = "none"; // Cache l'élément au départ
    //
        // Ajoute un écouteur d'événement au clic sur l'élément déclencheur
        triggerElement.addEventListener("click", function() {
            // Inverse l'état d'affichage de l'élément à basculer
            if (elementToToggle.style.display === "none") {
                elementToToggle.style.display = "block"; // Affiche l'élément
            } else {
                elementToToggle.style.display = "none"; // Cache l'élément
            }
        });
    }
    
    // Exemple d'utilisation
    const triggerElement = document.getElementById("declencheur"); // Remplacez "declencheur" par l'ID de votre élément déclencheur
    const elementToToggle = document.getElementById("cible"); // Remplacez "cible" par l'ID de l'élément à basculer

    
    const bandElement = document.querySelector(".band");
    const contactElement = document.querySelector(".contact");
    const merchElement = document.querySelector(".merch");
    const tourElement = document.querySelector(".tour");
    toggleElementDisplayOnClick(triggerElement, bandElement);
    toggleElementDisplayOnClick(triggerElement, contactElement);
    toggleElementDisplayOnClick(triggerElement, merchElement);
    toggleElementDisplayOnClick(triggerElement, tourElement);
    toggleElementDisplayOnClick(triggerElement, elementToToggle);
