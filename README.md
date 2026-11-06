# Fit y Pastis - Tienda de Suplementación Deportiva

# == IMPORTANTE ==
# La carpeta de estilos scss se llama /mi_scss/
# pero esta todo bien enlazado en los htmls

# - Páginas del Proyecto

index.html: Portada con carrusel de ofertas, barra animada de descuentos y productos destacados.

productos.html: Catálogo general con etiquetas de descuento, filtros y precios.

cesta.html: Carrito de compras con selector de cantidad y resumen de pedido.

perfil.html: Datos del usuario, direcciones y opciones de cuenta.


# - Estilos y SCSS

Los estilos los he organizado en archivos SCSS modulares dentro de bootstrap-5.3.8/mi_scss/:

_variables.scss: Colores y fuentes (Russo One y Michroma).

_mixins.scss: Utilidades y animación del banner en movimiento.

_layout.scss: Plantilla, modo claro/oscuro, cabecera y pie de página.

_components.scss: Tarjetas de productos, cuadrículas y banner de descuentos.

_views.scss: Estilos específicos del carrusel, carrito, perfil y ventana de login.

miestilo.scss: Archivo principal que junta todos los anteriores y compila en miestilo.css.


# - Funcionalidades

script.js: Botón de sol/luna que cambia el tema y lo recuerda con localStorage.

login.js: Popup con validación de nombre, correo y contraseña. Si todo es correcto, guarda la sesión en sessionStorage y te lleva a perfil.html

menu.js: Menu hamburgesa (offCanvas en el lado derecho), desplegable

# - Validaciones W3C
Capturas de pantalla de la validación sin errores:

1. Validación index.html
<img width="1917" height="868" alt="Captura de pantalla 2026-11-06 125101" src="https://github.com/user-attachments/assets/745f1c8b-eb32-43f2-acc3-a5ba6def83e8" />

2. Validación productos.html
<img width="1917" height="863" alt="Captura de pantalla 2026-11-06 125124" src="https://github.com/user-attachments/assets/a29e4b7f-32c3-4124-8664-dfdd586fef71" />

3. Validación cesta.html
<img width="1917" height="866" alt="Captura de pantalla 2026-11-06 124841" src="https://github.com/user-attachments/assets/4985aa14-be8e-45d9-884c-c86c3ea4dac1" />

4. Validación perfil.html
<img width="1917" height="866" alt="Captura de pantalla 2026-11-06 125112" src="https://github.com/user-attachments/assets/7b4669d0-e350-4513-8ae5-76a71b667eac" />

5. Validación CSS (miestilo.css)
<img width="1917" height="867" alt="Captura de pantalla 2026-11-06 125203" src="https://github.com/user-attachments/assets/641807fc-8fd5-4464-9ff2-f394c3b84e51" />
