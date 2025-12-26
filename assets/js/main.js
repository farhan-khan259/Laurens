
AOS.init();

function scrollToSection(sectionID) {
    const section = document.getElementById(sectionID);
    section.scrollIntoView({ 'block': 'start' });
}

const menu = document.getElementById('menu');
const overlay = document.getElementById('menuOverlay');

function toggleMenu(action) {
    if (action === 'open') {
        menu.style.transform = `translateY(0px)`;
        overlay.classList.add('overlaying');
        menu.style.bottom = '0%';
    }
    else {
        overlay.classList.remove('overlaying');
        menu.style.bottom = '-100%';
    }

    const tabs = document.querySelectorAll('nav li');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            toggleMenu('close');
        })
    })
}

let lastScrollY = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
        header.style.position = 'unset';
        header.style.boxShadow = 'unset';
    }
    else if (currentScrollY < lastScrollY) {
        header.style.position = 'sticky';
        header.style.boxShadow = '0px 0px 4px rgba(0,0,0,0.3)';
    }

    if (currentScrollY < 10) {
        header.style.position = 'unset';
        header.style.boxShadow = 'unset';
    }

    lastScrollY = currentScrollY;
});


function toggleFaq(id) {
    const current_faq = document.getElementById('faq' + id);
    document.querySelectorAll('.section11 .block:not(#faq' + id + ')').forEach(faq => faq.classList.remove('expanded'));
    current_faq.classList.toggle('expanded');
}


document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".logo-wrapper");
    const logos = Array.from(track.children);

    // Duplicate logos 3 times
    for (let i = 0; i < 3; i++) {
        logos.forEach(logo => {
            const clone = logo.cloneNode(true);
            track.appendChild(clone);
        });
    }
});





// new testimonials
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.pagination-dots');

    // Calculate total slides
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Create pagination dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    // Update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });

        // Update button states
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updateSlider();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlider();
        }
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Initialize slider
    updateSlider();
});