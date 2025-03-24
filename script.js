// script.js - No changes needed, remains as previous version
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.overlay');
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.height = '80px';
            navbar.style.background = '#ffffffe6';
            navbar.style.backdropFilter = 'blur(5px)';
        } else {
            navbar.style.height = '100px';
            navbar.style.background = '#ffffff';
            navbar.style.backdropFilter = 'none';
        }
    });

    overlay.addEventListener('click', () => {
        document.getElementById('sidebar-toggle').checked = false;
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('sidebar-toggle').checked = false;
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    let autoSlide = setInterval(nextSlide, 5000);

    document.querySelector('.slider').addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    document.querySelector('.slider').addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });

    showSlide(currentSlide);

    const aboutSlides = document.querySelectorAll('.about-slide');
    const aboutPrevBtn = document.querySelector('.about-prev');
    const aboutNextBtn = document.querySelector('.about-next');
    let currentAboutSlide = 0;

    function showAboutSlide(index) {
        aboutSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextAboutSlide() {
        currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;
        showAboutSlide(currentAboutSlide);
    }

    function prevAboutSlide() {
        currentAboutSlide = (currentAboutSlide - 1 + aboutSlides.length) % aboutSlides.length;
        showAboutSlide(currentAboutSlide);
    }

    aboutNextBtn.addEventListener('click', nextAboutSlide);
    aboutPrevBtn.addEventListener('click', prevAboutSlide);

    let autoAboutSlide = setInterval(nextAboutSlide, 4000);

    document.querySelector('.about-slider').addEventListener('mouseenter', () => {
        clearInterval(autoAboutSlide);
    });

    document.querySelector('.about-slider').addEventListener('mouseleave', () => {
        autoAboutSlide = setInterval(nextAboutSlide, 4000);
    });

    showAboutSlide(currentAboutSlide);

    const boxes = document.querySelectorAll('.box, .menu-box');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-popup');

    function openPopup(popup) {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePopup(popup) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (window.innerWidth <= 768) {
        boxes.forEach(box => {
            box.addEventListener('click', () => {
                const popupId = box.getAttribute('data-popup');
                const popup = document.getElementById(popupId);
                openPopup(popup);
            });
        });

        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const popup = button.closest('.popup');
                closePopup(popup);
            });
        });

        popups.forEach(popup => {
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup(popup);
                }
            });
        });
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            popups.forEach(popup => closePopup(popup));
        }
    });
});