const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < triggerBottom) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Header background enhancement on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(8,8,18,.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(10,10,20,.55)";
        header.style.boxShadow = "none";
    }
});

// Smooth active nav highlight
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Subtle parallax glow movement
const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");

window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glow1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    glow2.style.transform = `translate(-${x * 30}px, -${y * 30}px)`;
});