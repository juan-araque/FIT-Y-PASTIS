document.addEventListener("DOMContentLoaded", () => {
  // === 1. MODO CLARO / OSCURO (Bootstrap 5 nativo con Sol y Luna) ===
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  // Comprobar preferencia guardada (por defecto 'dark' para ajustarse a Fit y Pastis)
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-bs-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      
      htmlElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === "dark") {
      themeIcon.className = "bi bi-moon-stars-fill";
      themeToggle.setAttribute("aria-label", "Cambiar a Modo Claro");
    } else {
      themeIcon.className = "bi bi-sun-fill";
      themeToggle.setAttribute("aria-label", "Cambiar a Modo Oscuro");
    }
  }
});