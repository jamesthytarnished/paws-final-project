
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // PAWS FRONT PAGE SCROLL ANIMATIONS
    // =====================================

    const categories = document.querySelectorAll(".category");
    const impact = document.querySelector(".impact");
    const impactCards = document.querySelectorAll(".impact-card");

    categories.forEach(function (card) {
        card.classList.add("reveal");
    });

    if (impact) {
        const heading = impact.querySelector("h2");

        if (heading) {
            heading.classList.add("reveal");
        }
    }

    impactCards.forEach(function (card) {
        card.classList.add("reveal");
    });

    const revealElements = document.querySelectorAll(".reveal");

    // Check browser support
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }

                });

            },
            { threshold: 0.15 }
        );

        revealElements.forEach(function (element, index) {
            element.style.transitionDelay =
                (index % 4) * 0.12 + "s";

            observer.observe(element);
        });

    } else {
        revealElements.forEach(function (element) {
            element.classList.add("show");
        });
    }


    // =====================================
    // FIND A PET & ALL ABOUT PETS DROPDOWNS
    // =====================================

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach(function (dropdown) {

        const button = dropdown.querySelector(".dropdown-toggle");

        if (!button) return;

        // OPEN AND CLOSE MAIN DROPDOWN
        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const isAlreadyOpen = dropdown.classList.contains("open");

            // Close all main dropdowns first
            dropdowns.forEach(function (otherDropdown) {
                otherDropdown.classList.remove("open");

                const otherButton =
                    otherDropdown.querySelector(".dropdown-toggle");

                if (otherButton) {
                    otherButton.setAttribute("aria-expanded", "false");
                }

                // Close expanded subcategories
                otherDropdown.querySelectorAll(".about-group").forEach(
                    function (group) {
                        group.classList.remove("open");

                        const groupButton =
                            group.querySelector(".about-group-toggle");

                        if (groupButton) {
                            groupButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }
                    }
                );
            });

            // Open selected dropdown if it was previously closed
            if (!isAlreadyOpen) {
                dropdown.classList.add("open");
                button.setAttribute("aria-expanded", "true");
            }

        });

    });


    // =====================================
    // ALL ABOUT PETS SUBCATEGORIES
    // =====================================

    const aboutGroups = document.querySelectorAll(".about-group");

    aboutGroups.forEach(function (group) {

        const groupButton =
            group.querySelector(".about-group-toggle");

        if (!groupButton) return;

        groupButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isAlreadyOpen = group.classList.contains("open");

            // Close other subcategories in the same menu
            const parentMenu = group.closest(".about-menu");

            if (parentMenu) {
                parentMenu.querySelectorAll(".about-group").forEach(
                    function (otherGroup) {

                        otherGroup.classList.remove("open");

                        const otherButton =
                            otherGroup.querySelector(".about-group-toggle");

                        if (otherButton) {
                            otherButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        }

                    }
                );
            }

            // Toggle selected category
            if (!isAlreadyOpen) {
                group.classList.add("open");

                groupButton.setAttribute("aria-expanded", "true");
            }

        });

    });


    // =====================================
    // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    // =====================================

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".nav-dropdown")) {

            dropdowns.forEach(function (dropdown) {

                dropdown.classList.remove("open");

                const button =
                    dropdown.querySelector(".dropdown-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }

            });

            aboutGroups.forEach(function (group) {
                group.classList.remove("open");

                const button =
                    group.querySelector(".about-group-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }
            });

        }

    });


    // =====================================
    // CLOSE DROPDOWNS USING ESCAPE KEY
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            dropdowns.forEach(function (dropdown) {

                dropdown.classList.remove("open");

                const button =
                    dropdown.querySelector(".dropdown-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }

            });

            aboutGroups.forEach(function (group) {

                group.classList.remove("open");

                const button =
                    group.querySelector(".about-group-toggle");

                if (button) {
                    button.setAttribute("aria-expanded", "false");
                }

            });

        }

    });

});
