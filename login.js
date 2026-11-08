// =============================
// PAWS FRONT PAGE ANIMATIONS
// =============================

document.addEventListener("DOMContentLoaded", function () {

    // SELECT ELEMENTS
    const categories = document.querySelectorAll(".category");
    const impact = document.querySelector(".impact");
    const impactCards = document.querySelectorAll(".impact-card");

    // ADD REVEAL CLASS TO CATEGORY CARDS
    categories.forEach(function (card) {
        card.classList.add("reveal");
    });

    // ADD REVEAL CLASS TO IMPACT SECTION
    if (impact) {
        impact.querySelector("h2").classList.add("reveal");
    }

    // ADD REVEAL CLASS TO IMPACT CARDS
    impactCards.forEach(function (card) {
        card.classList.add("reveal");
    });

    // SCROLL ANIMATION OBSERVER
    const observer = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    // Stop observing after animation
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    // OBSERVE ALL REVEAL ELEMENTS
    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach(function (element, index) {

        // Stagger animation timing
        element.style.transitionDelay = (index % 4) * 0.12 + "s";

        observer.observe(element);

    });

});