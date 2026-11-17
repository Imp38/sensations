// Sensations: navbar behaviour
// Closes the mobile menu and scrolls smoothly when a link to a section on the same page is clicked.
document.querySelectorAll(".navbar-collapse .nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        // Only act on links that point to a section on the same page
        if (href && href.startsWith("#") && href.length > 1) {
            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });

                // Collapse the menu if it is open
                const menu = document.querySelector(".navbar-collapse");
                menu.classList.remove("show");
            }
        }
    });
});