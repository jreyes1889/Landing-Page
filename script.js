function scrollToSection() {

    document.getElementById('servicios').scrollIntoView({
        behavior: 'smooth'
    });

}


// MENU RESPONSIVE

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {

    nav.classList.toggle('active');

});


// ANIMACIONES AL HACER SCROLL

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// BOTON SCROLL TOP

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = 'block';

    } else {

        scrollTopBtn.style.display = 'none';

    }

});

scrollTopBtn.addEventListener('click', () => {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'

    });

});


// FORMULARIO

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Mensaje enviado correctamente 🚀');

    form.reset();

});