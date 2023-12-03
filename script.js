//let cambiosNoGuardados = false;

// Detectar cambios no guardados
//document.addEventListener("input", () => {
// cambiosNoGuardados = true;
//});

// Mostrar el aviso al intentar salir de la página
//window.addEventListener("beforeunload", (event) => {
//  if (cambiosNoGuardados) {
//    event.returnValue =
//      "Tienes cambios no guardados. ¿Seguro que quieres salir?";
//  }
//});

function loadImage(event) {
  const image = document.getElementById("uploadedImage");
  const input = event.target;

  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      image.src = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function imprimirPDF() {
  window.print();
}
document
  .getElementById("formulario_dnd")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const personaje = formData.get("Personaje");
    const jugador = formData.get("Jugador");
    const trasfondo = formData.get("Trasfondo");
    const raza = formData.get("Raza");
    const clasenivel = formData.get("Clase");
    const exp = formData.get("Puntos");
    const armadura = formData.get("Armadura");
    const iniciativa = formData.get("Iniciativa");
    const velocidad = formData.get("Velocidad");
    const bonificador = formData.get("Bonificador");
    const inspiracion = formData.get("Inspiracion");
    const percepcion = formData.get("Percepcion");
    const fuerza = formData.get("Fuerza");
    const fuerzamodificador = formData.get("FuerzaModificador");
    const destreza = formData.get("Destreza");
    const destrezamodificador = formData.get("FuerzaDestreza");

    const selectedInterests = form.querySelectorAll(
      'input[name="interests"]:checked'
    );
    const interests = Array.from(selectedInterests).map((input) => input.value);

    console.log("NOMBRE DEL PERSONAJE:", personaje);
    console.log("NOMBRE DEL JUGADOR:", jugador);
    console.log("TRASFONDO:", trasfondo);
    console.log("RAZA:", raza);
    console.log("CLASE Y NIVEL:", clasenivel);
    console.log("CLASE DE ARMADURA:", armadura);
    console.log("INICIATIVA:", iniciativa);
    console.log("VELOCIDAD:", velocidad);
    console.log("BONIFICADOR:", bonificador);
    console.log("INSPIRACIÓN:", inspiracion);
    console.log("PERCEPCIÓN:", percepcion);
    console.log("FUERZA:", fuerza, "MODIFICADOR:", fuerzamodificador);
    console.log("FUERZA:", destreza, "MODIFICADOR:", destrezamodificador);
  });
