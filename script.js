document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento con el id "fechaActual"
    var fechaActualElement = document.getElementById("fechaActual");

    // Obtiene la fecha actual
    var fechaActual = new Date();

    // Formatea la fecha como quieras
    var opcionesDeFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesDeFecha);

    // Muestra la fecha en el elemento
    fechaActualElement.textContent = fechaFormateada;
});
