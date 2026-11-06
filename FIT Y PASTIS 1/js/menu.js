document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-btn");

    if (!menuButton) {
        return;
    }

    const overlay = document.createElement("div");
    overlay.className = "site-menu-overlay";
    overlay.id = "site-menu-overlay";
    overlay.setAttribute("aria-hidden", "true");

    const panel = document.createElement("div");
    panel.className = "site-menu-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "site-menu-title");

    panel.innerHTML = `
        <div class="site-menu-heading">
            <h2 id="site-menu-title">Menú</h2>
            <button class="site-menu-close" type="button" aria-label="Cerrar menú">
                <i class="bi bi-x-lg" aria-hidden="true"></i>
            </button>
        </div>
        <nav class="site-menu-navigation" aria-label="Menú">
            <section class="site-menu-group">
                <h3>Productos:</h3>
                <ul class="site-menu-placeholders" aria-label="Opciones de productos">
                    <li>Proteína</li>
                    <li>Creatina</li>
                    <li>Packs</li>
                    <li>Barritas</li>
                    <li>Energizantes</li>
                </ul>
            </section>
            <section class="site-menu-group">
                <h3>Perfil:</h3>
                <ul class="site-menu-placeholders" aria-label="Opciones de perfil">
                    <li>Datos personales</li>
                    <li>Pedidos</li>
                </ul>
            </section>
        </nav>
    `;

    overlay.append(panel);
    document.body.append(overlay);
    menuButton.setAttribute("aria-controls", overlay.id);
    menuButton.setAttribute("aria-expanded", "false");

    const closeButton = panel.querySelector(".site-menu-close");
    const menuIcon = menuButton.querySelector("i");
    let isOpen = false;

    function setMenuOpen(open) {
        isOpen = open;
        overlay.classList.toggle("is-open", open);
        overlay.setAttribute("aria-hidden", String(!open));
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
        document.body.classList.toggle("site-menu-open", open);
        menuIcon?.classList.toggle("bi-list", !open);
        menuIcon?.classList.toggle("bi-x-lg", open);

        if (open) {
            closeButton.focus();
        } else {
            menuButton.focus();
        }
    }

    menuButton.setAttribute("aria-label", "Abrir menú");
    menuButton.addEventListener("click", () => setMenuOpen(!isOpen));
    closeButton.addEventListener("click", () => setMenuOpen(false));

    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!isOpen) {
            return;
        }

        if (event.key === "Escape") {
            setMenuOpen(false);
        } else if (event.key === "Tab") {
            event.preventDefault();
            closeButton.focus();
        }
    });
});
