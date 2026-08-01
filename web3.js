/*=========================================
            PAGE LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(() => {

                loader.remove();

            }, 500);

        }, 1500);

    }

});


/*=========================================
        STICKY NAVBAR
=========================================*/

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("open");

        navLinks.classList.toggle("active");

    });

}


/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) navLinks.classList.remove("active");

        if (menuBtn) menuBtn.classList.remove("open");

    });

});


/*=========================================
        ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.id;

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percent = (scrollTop / height) * 100;

    progressBar.style.width = percent + "%";

});


/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

if (topBtn) {

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}

console.log("Part 1 Loaded Successfully");

/*=========================================
        HERO SLIDER
=========================================*/

const heroSlides = document.querySelectorAll(".slide");

let heroIndex = 0;

function showHeroSlide() {

    if (heroSlides.length === 0) return;

    heroSlides.forEach(slide => {

        slide.classList.remove("active");

    });

    heroIndex++;

    if (heroIndex >= heroSlides.length) {

        heroIndex = 0;

    }

    heroSlides[heroIndex].classList.add("active");

}

if (heroSlides.length > 0) {

    heroSlides[0].classList.add("active");

    setInterval(showHeroSlide, 5000);

}


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(".reveal");

function revealElements() {

    revealItems.forEach(item => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();


/*=========================================
        COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function animateCounters() {

    const statsSection = document.querySelector(".stats");

    if (!statsSection || counterStarted) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = target / 120;

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target + "+";

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();


/*=========================================
        FAQ ACCORDION
=========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*=========================================
        TESTIMONIAL SLIDER
=========================================*/

const testimonialCards = document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function testimonialSlider() {

    if (testimonialCards.length === 0) return;

    testimonialCards.forEach(card => {

        card.classList.remove("active");

    });

    testimonialIndex++;

    if (testimonialIndex >= testimonialCards.length) {

        testimonialIndex = 0;

    }

    testimonialCards[testimonialIndex].classList.add("active");

}

if (testimonialCards.length > 0) {

    testimonialCards[0].classList.add("active");

    setInterval(testimonialSlider, 4000);

}

console.log("Part 2 Loaded Successfully");
/*=========================================
        PROJECT FILTER
=========================================*/

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(button => {

            button.classList.remove("active");

        });

        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        projects.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/*=========================================
        IMAGE LIGHTBOX
=========================================*/

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const viewBtns = document.querySelectorAll(".view-btn");
const closeBtn = document.querySelector(".close-lightbox");

viewBtns.forEach(btn => {

    btn.addEventListener("click", e => {

        e.preventDefault();

        if (!lightbox || !lightboxImg) return;

        lightbox.style.display = "flex";

        lightboxImg.src = btn.getAttribute("href");

    });

});

if (closeBtn) {

    closeBtn.onclick = () => {

        lightbox.style.display = "none";

    };

}

if (lightbox) {

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}


/*=========================================
        BEFORE AFTER SLIDER
=========================================*/

const imageBox = document.querySelector(".img-box");
const afterImage = document.querySelector(".after-wrapper");
const dragLine = document.querySelector(".slider-line");

if (imageBox && afterImage && dragLine) {

    let dragging = false;

    function moveSlider(x) {

        const rect = imageBox.getBoundingClientRect();

        let position = x - rect.left;

        position = Math.max(0, Math.min(position, rect.width));

        const percent = (position / rect.width) * 100;

        afterImage.style.width = percent + "%";

        dragLine.style.left = percent + "%";

    }

    dragLine.addEventListener("mousedown", () => {

        dragging = true;

    });

    window.addEventListener("mouseup", () => {

        dragging = false;

    });

    window.addEventListener("mousemove", e => {

        if (dragging) {

            moveSlider(e.clientX);

        }

    });

}


/*=========================================
        CONTACT FORM
=========================================*/

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = this.querySelector("input[type='text']").value.trim();

        const email = this.querySelector("input[type='email']").value.trim();

        const message = this.querySelector("textarea").value.trim();

        if(name==="" || email==="" || message===""){

            alert("Please fill all fields.");

            return;

        }

        alert("Thank You! We will contact you soon.");

        this.reset();

    });

}


/*=========================================
        NEWSLETTER
=========================================*/

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

const email=this.querySelector("input").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

alert("Subscribed Successfully!");

this.reset();

});

}


/*=========================================
        BUTTON RIPPLE
=========================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.classList.add("ripple");

const rect=button.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


console.log("Part 3 Loaded Successfully");
/*=========================================
        HERO PARALLAX EFFECT
=========================================*/

const heroSection = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    if (!heroSection) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroSection.style.backgroundPosition = `${x}px ${y}px`;

});


/*=========================================
        FLOATING SHAPES
=========================================*/

const shapes = document.querySelectorAll(".floating-shape");

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    shapes.forEach((shape, index) => {

        shape.style.transform =
            `translateY(${value * (0.08 + index * 0.03)}px)`;

    });

});


/*=========================================
        PROJECT CARD 3D EFFECT
=========================================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (rect.height / 2 - y) / 12;

        const rotateY = (x - rect.width / 2) / 12;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.04)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


/*=========================================
        DESIGNER CARD HOVER
=========================================*/

const teamCards = document.querySelectorAll(".team-card");

teamCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("active");

    });

});


/*=========================================
        SMOOTH FADE FOR SECTIONS
=========================================*/

const allSections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {

    threshold: 0.15

});

allSections.forEach(section => {

    sectionObserver.observe(section);

});


/*=========================================
        SCROLL DOWN BUTTON
=========================================*/

const scrollDown = document.querySelector(".scroll-down");

if (scrollDown) {

    scrollDown.addEventListener("click", () => {

        const about = document.querySelector("#about");

        if (about) {

            about.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}


/*=========================================
        LAZY IMAGE FADE
=========================================*/

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.onload = () => {

        img.classList.add("loaded");

    };

});


/*=========================================
        PAGE FADE IN
=========================================*/

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "1";

});


/*=========================================
        PREMIUM CONSOLE MESSAGE
=========================================*/

console.log("%cLUXE INTERIORS","font-size:24px;color:#d4af37;font-weight:bold;");
console.log("%cPremium Interior Design Website Loaded Successfully.","color:#888;font-size:14px;");
