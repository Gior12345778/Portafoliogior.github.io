// Inicializa los contadores de "Me gusta" y "No me gusta" desde localStorage
let contadorGusta = localStorage.getItem('gusta') ? parseInt(localStorage.getItem('gusta')) : 0;
let contadorNoGusta = localStorage.getItem('no_me_gusta') ? parseInt(localStorage.getItem('no_me_gusta')) : 0;

let contadorGusta1 = localStorage.getItem('gusta1') ? parseInt(localStorage.getItem('gusta1')) : 0;
let contadorNoGusta1 = localStorage.getItem('no_me_gusta1') ? parseInt(localStorage.getItem('no_me_gusta1')) : 0;

let contadorGusta2 = localStorage.getItem('gusta2') ? parseInt(localStorage.getItem('gusta2')) : 0;
let contadorNoGusta2 = localStorage.getItem('no_me_gusta2') ? parseInt(localStorage.getItem('no_me_gusta2')) : 0;

// Función para actualizar los contadores en la interfaz
function actualizarContadores() {
    document.getElementById("gusta").innerText = `(${contadorGusta})`;
    document.getElementById("no_me_gusta").innerText = `(${contadorNoGusta})`;

    document.getElementById("gusta1").innerText = `(${contadorGusta1})`;
    document.getElementById("no_me_gusta1").innerText = `(${contadorNoGusta1})`;

    document.getElementById("gusta2").innerText = `(${contadorGusta2})`;
    document.getElementById("no_me_gusta2").innerText = `(${contadorNoGusta2})`;
}

// Llama a la función para mostrar los valores guardados al cargar la página
actualizarContadores();

// Funciones para incrementar los contadores y guardar en localStorage
function meGusta() {
    contadorGusta++;
    localStorage.setItem('gusta', contadorGusta);
    actualizarContadores();
}

function NomeGusta() {
    contadorNoGusta++;
    localStorage.setItem('no_me_gusta', contadorNoGusta);
    actualizarContadores();
}

function meGusta1() {
    contadorGusta1++;
    localStorage.setItem('gusta1', contadorGusta1);
    actualizarContadores();
}

function NomeGusta1() {
    contadorNoGusta1++;
    localStorage.setItem('no_me_gusta1', contadorNoGusta1);
    actualizarContadores();
}

function meGusta2() {
    contadorGusta2++;
    localStorage.setItem('gusta2', contadorGusta2);
    actualizarContadores();
}

function NomeGusta2() {
    contadorNoGusta2++;
    localStorage.setItem('no_me_gusta2', contadorNoGusta2);
    actualizarContadores();
}



document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert('Gracias por tu mensaje, ' + name + '. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Simple carousel for testimonials
const testimonials = document.querySelector('.testimonial-carousel');
let isDown = false;
let startX;
let scrollLeft;

testimonials.addEventListener('mousedown', (e) => {
    isDown = true;
    testimonials.classList.add('active');
    startX = e.pageX - testimonials.offsetLeft;
    scrollLeft = testimonials.scrollLeft;
});

testimonials.addEventListener('mouseleave', () => {
    isDown = false;
    testimonials.classList.remove('active');
});

testimonials.addEventListener('mouseup', () => {
    isDown = false;
    testimonials.classList.remove('active');
});

testimonials.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - testimonials.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    testimonials.scrollLeft = scrollLeft - walk;
});


