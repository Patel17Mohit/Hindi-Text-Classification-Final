/* ==========================================
   SCRIPT.JS
   Hindi NLP Documentation Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {

        if(backToTop){

            if(window.scrollY > 400){

                backToTop.classList.add("show");

            }else{

                backToTop.classList.remove("show");

            }

        }

    });

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       CARD FADE-IN ANIMATION
    ========================================== */

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show-card");

            }

        });

    },{

        threshold:0.15

    });

    cards.forEach(card=>{

        observer.observe(card);

    });

    /* ==========================================
       BUTTON RIPPLE EFFECT
    ========================================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button=>{

        button.addEventListener("click",function(e){

            const ripple=document.createElement("span");

            ripple.classList.add("ripple");

            const rect=this.getBoundingClientRect();

            ripple.style.left=(e.clientX-rect.left)+"px";
            ripple.style.top=(e.clientY-rect.top)+"px";

            this.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

    /* ==========================================
       FOOTER YEAR
    ========================================== */

    const year=document.getElementById("year");

    if(year){

        year.textContent=new Date().getFullYear();

    }

    /* ==========================================
       OPTIONAL PAGE LOADER
    ========================================== */

    const loader=document.querySelector(".loader");

    if(loader){

        window.addEventListener("load",()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);

        });

    }

});