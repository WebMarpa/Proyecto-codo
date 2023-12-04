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
    <a class="boton-logout" href="index.html">Cerrar Sesión</a>

    <!-- icono hamburguer menu responsive -->
    <div id="icono-nav" onclick="responsiveMenu()">
        <i class="fa-solid fa-bars"></i>
    </div>
    
    <!-- iconos redes sociales -->

    <div class="redes">
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/marpalaser/"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>

    </div>
</div>
</div>
`,
document.getElementById("foo").innerHTML=` <div class="copyright-texto">
<p>&#169 2023 MARPA Laser. Todos los derechos reservados.</p>
</div> `;