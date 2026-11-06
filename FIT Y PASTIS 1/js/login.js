// ===== Popup Login - Lógica con estado de sesión =====
window.addEventListener('load', function () {
    var overlay = document.getElementById('login-overlay');
    var form = document.getElementById('login-form');
    var closeBtn = document.getElementById('login-close-btn');

    // Comprobar si el usuario ya inició sesión previamente
    var isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    // Si ya ha iniciado sesión, aseguramos que el overlay esté oculto
    if (overlay && isLoggedIn) {
        overlay.classList.add('hidden');
    }

    // Elementos que activan el modal
    var profileTriggers = document.querySelectorAll('.trigger-login, #nav-profile-btn, #btn-edit-user');
    profileTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            // Si ya está logueado y no está en perfil.html, lo llevamos a perfil.html sin mostrar popup
            if (sessionStorage.getItem('isLoggedIn') === 'true') {
                if (!window.location.pathname.endsWith('perfil.html')) {
                    window.location.href = 'perfil.html';
                }
                return;
            }

            // Si NO está logueado, mostramos el modal
            e.preventDefault();
            if (overlay) {
                overlay.classList.remove('hidden');
                var nameField = document.getElementById('login-name');
                if (nameField) nameField.focus();
            }
        });
    });

    // Cerrar con botón X
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', function () {
            overlay.classList.add('hidden');
        });
    }

    // Cerrar al hacer click fuera del modal
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
            }
        });
    }

    var nameInput = document.getElementById('login-name');
    var emailInput = document.getElementById('login-email');
    var passwordInput = document.getElementById('login-password');

    var errorName = document.getElementById('error-name');
    var errorEmail = document.getElementById('error-email');
    var errorPassword = document.getElementById('error-password');

    var nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]{2,}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var valid = true;

            // Limpiar errores previos
            errorName.textContent = '';
            errorEmail.textContent = '';
            errorPassword.textContent = '';
            nameInput.classList.remove('input-error');
            emailInput.classList.remove('input-error');
            passwordInput.classList.remove('input-error');

            // Validar nombre
            var nameVal = nameInput.value.trim();
            if (nameVal === '') {
                errorName.textContent = 'El nombre es obligatorio.';
                nameInput.classList.add('input-error');
                valid = false;
            } else if (!nameRegex.test(nameVal)) {
                errorName.textContent = 'Solo letras y espacios, mínimo 2 caracteres.';
                nameInput.classList.add('input-error');
                valid = false;
            }

            // Validar correo
            var emailVal = emailInput.value.trim();
            if (emailVal === '') {
                errorEmail.textContent = 'El correo es obligatorio.';
                emailInput.classList.add('input-error');
                valid = false;
            } else if (!emailRegex.test(emailVal)) {
                errorEmail.textContent = 'Introduce un correo válido.';
                emailInput.classList.add('input-error');
                valid = false;
            }

            // Validar contraseña
            var passVal = passwordInput.value;
            if (passVal === '') {
                errorPassword.textContent = 'La contraseña es obligatoria.';
                passwordInput.classList.add('input-error');
                valid = false;
            } else if (passVal.length < 6) {
                errorPassword.textContent = 'Mínimo 6 caracteres.';
                passwordInput.classList.add('input-error');
                valid = false;
            }

            // Si todo es válido:
            if (valid) {
                // 1. Guardamos la sesión en el navegador
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('userName', nameVal);

                // 2. Ocultamos el overlay
                overlay.classList.add('hidden');

                // 3. Si no estamos en perfil.html, redirigimos; si ya estamos, simplemente cerramos el popup
                if (!window.location.pathname.endsWith('perfil.html')) {
                    window.location.href = 'perfil.html';
                }
            }
        });
    }
});