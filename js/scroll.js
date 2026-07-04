/* ==========================================
   SCROLL.JS
   Hindi NLP Documentation Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       READING PROGRESS BAR
    ========================================== */

    const progressBar = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        if (progressBar) {

            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const progress = (scrollTop / scrollHeight) * 100;

            progressBar.style.width = progress + "%";
        }

    });

    /* ==========================================
       REVEAL ELEMENTS ON SCROLL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".card, .about-card, .workflow-card, .application-card, .research-card"
    );

    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(item => {

        item.classList.add("hidden");

        revealObserver.observe(item);

    });

    /* ==========================================
       NAVBAR SHADOW
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 20) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    });

    /* ==========================================
       SMOOTH SCROLL FOR INTERNAL LINKS
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    /* ==========================================
       SCROLL TO TOP
    ========================================== */

    const topButton = document.querySelector(".back-to-top");

    if (topButton) {

        topButton.addEventListener("click", (e) => {

            e.preventDefault();

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

});