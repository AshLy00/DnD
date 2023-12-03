let cambiosNoGuardados = false;

// Detectar cambios no guardados
document.addEventListener("input", () => {
  cambiosNoGuardados = true;
});

// Mostrar el aviso al intentar salir de la página
window.addEventListener("beforeunload", (event) => {
  if (cambiosNoGuardados) {
    event.returnValue =
      "Tienes cambios no guardados. ¿Seguro que quieres salir?";
  }
});
