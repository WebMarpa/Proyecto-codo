document.getElementById("header").innerHTML=` <div id="menu-nav">
<div class="contenido-nav">
    <div class="logo">
       <a href="#"><img src="img/logo marpa.svg" alt="Logo Marpa"></a>

    <div class="laser-logo"></div>

    </div>
    <nav id="nav" class="hide">
        <ul id="links">
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#equipo">Equipo</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav> 
    <!-- Botón Logout-->
    <button class="boton-logout" onclick="cerrarSesion()">Cerrar Sesión</button>
        
    
</div>
</div>
`
// Verificar si el usuario está autenticado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    var usuarioAutenticado = localStorage.getItem('usuarioAutenticado');

    if (!usuarioAutenticado || usuarioAutenticado !== 'true') {
        // Redirigir a la página de inicio de sesión si no está autenticado
        alert('Acceso no autorizado. Inicia sesión.');
        window.location.href = 'index.html';
    }
});

  // Función para cerrar sesión
  function cerrarSesion() {
    // Limpiar información de sesión en el Local Storage
    localStorage.removeItem('usuarioAutenticado');
    alert('Sesión cerrada. Redirigiendo a la página de inicio de sesión.');
    window.location.href = 'index.html';
}