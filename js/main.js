const nombre = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const form = document.getElementById('form_contact');
const paragraft = document.getElementById('warnings');
const textarea = document.getElementById('textarea');
const petNumber = document.getElementById('pet-number');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let warning = '';
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regexPhone = /^\d{10}$/;

    // Validación del nombre
    if (nombre.value.length < 6) {
        warning += 'El nombre no es válido <br>';
        entrar = true;
    }

    // Validación del teléfono
    if (!regexPhone.test(phone.value)) {
        warning += 'El teléfono no es válido <br>';
        entrar = true;
    }

    // Validación del email
    if (!regexEmail.test(email.value)) {
        warning += 'El email no es válido <br>';
        entrar = true;
    }

    // Validación de los radio buttons
    const catDogSelected = document.querySelector('input[name="cat-dog"]:checked');
    if (!catDogSelected) {
        warning += 'Por favor selecciona si prefieres perros o gatos <br>';
        entrar = true;
    }

    // Validación del textarea
    if (textarea.value.trim() === '') {
        warning += 'Por favor escribe en qué podemos ayudarte <br>';
        entrar = true;
    }

    // Mostrar advertencias o mensaje de enviado
    if (entrar) {
        paragraft.innerHTML = warning;
    } else {
        paragraft.innerHTML = 'Enviado';
    }
});