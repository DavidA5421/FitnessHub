document.addEventListener("DOMContentLoaded", function () {

    const pruebaButton = document.getElementById("prueba");
    const inicioButton = document.getElementById("inicio");

    pruebaButton.addEventListener("click", function () {
        window.location.href = "hub.html"; 
    });

    inicioButton.addEventListener("click", function () {
        // redireccion a hub
        window.location.href = "log.html"; 
    });
});