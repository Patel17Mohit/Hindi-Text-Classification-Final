/* ==========================================
   SEARCH.JS
   Hindi NLP Documentation Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card");

    if (!searchInput) return;

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase().trim();

        cards.forEach(card => {

            const text = card.textContent.toLowerCase();

            if (text.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});