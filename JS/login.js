document.addEventListener('DOMContentLoaded', function () {
    var abrirModalBtn = document.getElementById('abrirModalBtn');
    var cerrarModalBtn = document.getElementById('cerrarModalBtn');
    var miModal = document.getElementById('miModal');
    var formularioLogin = document.getElementById('formularioLogin');

    abrirModalBtn.addEventListener('click', function () {
        miModal.style.display = 'block';
    });

    cerrarModalBtn.addEventListener('click', function () {
        miModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === miModal) {
            miModal.style.display = 'none';
        }
    });

     // Cierra el modal al presionar la tecla "Esc"
     window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && miModal.style.display === 'block') {
            miModal.style.display = 'none';
        }
    });


    
       
    
    

    formularioLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        //  validación y redireccionamiento
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === 'admin@test.com' && password === '123456') {
            localStorage.setItem('usuarioAutenticado', 'true');
            alert('Inicio de sesión exitoso');
            window.location.href = 'productos.html'; // Redireccionar a otra página
            miModal.style.display = 'none';
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });
});

 