/* ==========================================
   NAVBAR JAVASCRIPT
   Hindi NLP Documentation Website
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Select Elements
    // ==========================

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.querySelector(".menu-toggle");
    const links = document.querySelectorAll(".nav-links a");

    // ==========================
    // Mobile Menu Toggle
    // ==========================

    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("show");
            menuToggle.classList.toggle("active");

        });

    }

    // ==========================
    // Close Menu After Clicking
    // ==========================

    links.forEach(link => {

        link.addEventListener("click", () => {

            if (navLinks.classList.contains("show")) {

                navLinks.classList.remove("show");

                if (menuToggle) {
                    menuToggle.classList.remove("active");
                }

            }

        });

    });

    // ==========================
    // Sticky Navbar
    // ==========================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("sticky");

        } else {

            navbar.classList.remove("sticky");

        }

    });

    // ==========================
    // Highlight Current Page
    // ==========================

    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

});