document.addEventListener("DOMContentLoaded", function () {

    const nombreInput = document.getElementById("nombre");
    const objetivoSelect = document.getElementById("objetivo");
    const registrarButton = document.getElementById("registrar");
    const cancelarButton = document.getElementById("cancelar");

    registrarButton.addEventListener("click", function () {
        console.log("Botón de registro clicado");
        const nombre = nombreInput.value;
        const objetivo = objetivoSelect.value;

        localStorage.setItem("nombre", nombre);
        localStorage.setItem("objetivo", objetivo);
        // redireccion a hub
        window.location.href = "hub.html"; 
    });

    cancelarButton.addEventListener("click", function () {
        // redireccion a hub
        window.location.href = "home.html"; 
        console.log("Botón de registro clicado");
    });
});