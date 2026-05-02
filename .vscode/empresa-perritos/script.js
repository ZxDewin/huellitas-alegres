// Navegación responsiva
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Cerrar menú cuando se hace clic en un enlace
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
    });
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Inicializar EmailJS
emailjs.init('WTy-9UlgeUwFoFWDO');

// Cálculo del precio total
const formularioReserva = document.getElementById('reservaForm');
const mensajeExito = document.getElementById('mensaje-exito');
const precioTotalElemento = document.getElementById('precioTotal');

const preciosServicio = {
    guarderia: 45000,
    hospedaje: 120000,
    bano: 60000,
    entrenamiento: 50000,
    paseos: 15000,
    eventos: 0
};

function formatoPrecio(valor) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    }).format(valor);
}

function calcularPrecioTotal() {
    const servicio = document.getElementById('servicio').value;
    const duracion = Number(document.getElementById('duracion').value) || 1;
    const sesiones = Number(document.getElementById('sesiones').value) || 1;

    if (!servicio) {
        return 0;
    }

    if (servicio === 'eventos') {
        return null;
    }

    if (servicio === 'guarderia' || servicio === 'hospedaje') {
        return preciosServicio[servicio] * duracion;
    }

    return preciosServicio[servicio] * sesiones;
}

function actualizarPrecioTotal() {
    if (!precioTotalElemento) return;

    const total = calcularPrecioTotal();
    if (total === null) {
        precioTotalElemento.textContent = 'Consultar';
    } else {
        precioTotalElemento.textContent = formatoPrecio(total);
    }
}

const servicioInput = document.getElementById('servicio');
const duracionInput = document.getElementById('duracion');
const sesionesInput = document.getElementById('sesiones');

if (servicioInput) servicioInput.addEventListener('change', actualizarPrecioTotal);
if (duracionInput) duracionInput.addEventListener('input', actualizarPrecioTotal);
if (sesionesInput) sesionesInput.addEventListener('input', actualizarPrecioTotal);

actualizarPrecioTotal();

if (formularioReserva) {
    formularioReserva.addEventListener('submit', function(e) {
        e.preventDefault();

        // Obtener datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const nombrePerro = document.getElementById('nombre-perro').value;
        const raza = document.getElementById('raza').value;
        const edad = document.getElementById('edad').value;
        const servicio = document.getElementById('servicio').value;
        const fecha = document.getElementById('fecha').value;
        const duracion = document.getElementById('duracion').value;
        const sesiones = document.getElementById('sesiones').value;
        const notas = document.getElementById('notas').value;

        const precioTotal = calcularPrecioTotal();

        // Validaciones básicas
        if (!nombre || !email || !telefono || !nombrePerro || !raza || !edad || !servicio || !fecha) {
            alert('Por favor completa todos los campos requeridos');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingresa un email válido');
            return;
        }

        // Preparar datos para EmailJS
        const templateParams = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            nombrePerro: nombrePerro,
            raza: raza,
            edad: edad,
            servicio: servicio,
            sesiones: sesiones,
            fecha: fecha,
            duracion: duracion,
            precioTotal: precioTotal === null ? 'Consultar' : formatoPrecio(precioTotal),
            notas: notas || 'Sin notas adicionales'
        };

        // Enviar correo con EmailJS
        emailjs.send('service_hrngaee', 'template_57964y8', templateParams)
            .then(function(response) {
                // Mostrar mensaje de éxito
                mensajeExito.classList.add('mostrar');
                mensajeExito.innerHTML = `
                    <strong>¡Reserva enviada con éxito!</strong><br>
                    Hemos recibido tu solicitud de reserva para ${nombrePerro}.<br>
                    Nos pondremos en contacto a través de ${email} dentro de 24 horas para confirmar.
                `;

                // Guardar en localStorage también
                const reservas = JSON.parse(localStorage.getItem('reservas') || '[]');
                reservas.push({
                    nombre,
                    email,
                    telefono,
                    nombrePerro,
                    raza,
                    edad,
                    servicio,
                    fecha,
                    duracion,
                    notas,
                    fechaEnvio: new Date().toISOString()
                });
                localStorage.setItem('reservas', JSON.stringify(reservas));

                // Limpiar formulario
                formularioReserva.reset();

                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    mensajeExito.classList.remove('mostrar');
                }, 5000);
            })
            .catch(function(error) {
                // Mostrar error
                mensajeExito.classList.add('mostrar');
                mensajeExito.innerHTML = `
                    <strong style="color: #d32f2f;">Error al enviar la reserva</strong><br>
                    Por favor intenta de nuevo o contactanos directamente.<br>
                    <small>${error.text || 'Error desconocido'}</small>
                `;
                mensajeExito.style.background = '#ffebee';
                mensajeExito.style.color = '#c62828';
                mensajeExito.style.border = '1px solid #ef5350';

                setTimeout(() => {
                    mensajeExito.classList.remove('mostrar');
                    mensajeExito.style.background = '';
                    mensajeExito.style.color = '';
                    mensajeExito.style.border = '';
                }, 5000);
            });
    });
}

// Agregar efecto de scroll en la navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animar elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar tarjetas de servicios
document.querySelectorAll('.servicio-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observar elementos de contacto
document.querySelectorAll('.contacto-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Función para obtener las reservas guardadas (útil para depuración)
function obtenerReservas() {
    const reservas = localStorage.getItem('reservas');
    if (reservas) {
        console.log('Reservas guardadas:', JSON.parse(reservas));
        return JSON.parse(reservas);
    }
    console.log('No hay reservas guardadas');
    return [];
}

// Establecer fecha mínima en el input de fecha (hoy)
const inputFecha = document.getElementById('fecha');
if (inputFecha) {
    const hoy = new Date().toISOString().split('T')[0];
    inputFecha.setAttribute('min', hoy);
}

// Validación en tiempo real del email
const inputEmail = document.getElementById('email');
if (inputEmail) {
    inputEmail.addEventListener('blur', () => {
        const email = inputEmail.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email && !emailRegex.test(email)) {
            inputEmail.style.borderColor = '#ff6b6b';
        } else {
            inputEmail.style.borderColor = '#ddd';
        }
    });
}

// Validación de teléfono (solo números)
const inputTelefono = document.getElementById('telefono');
if (inputTelefono) {
    inputTelefono.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\d+\-\s()]/g, '');
    });
}

console.log('Happy Paws - Guardería Canina cargada correctamente! 🐾');
