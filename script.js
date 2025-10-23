// ======== MENSAJE DE BIENVENIDA ========
console.log("Bienvenido a Mi Primera Web");

// Mostrar un saludo cuando la página carga
window.addEventListener("load", () => {
  alert("👋 ¡Bienvenido a Mi Primera Web!");
});

// ======== INTERACTIVIDAD DEL MENÚ ========
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que recargue la página
    const texto = link.textContent;
    alert(`Has hecho clic en: ${texto}`);
  });
});
