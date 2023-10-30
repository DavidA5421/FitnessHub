document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const iniciarButton = document.getElementById("iniciar");
    const registroButton = document.getElementById("registro");
    const errorText = document.getElementById("errorText");

    emailInput.addEventListener("input", habilitarBoton);
    passwordInput.addEventListener("input", habilitarBoton);

    function habilitarBoton() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (emailPattern.test(email) && password.length >= 6) {
            iniciarButton.removeAttribute("disabled");
            return true;
        } else {
            iniciarButton.setAttribute("disabled", "disabled");
            return false;
        }
    }  
    
    iniciarButton.addEventListener("click", function () {
        if (habilitarBoton()) {
            window.location.href = "hub.html";
        } else{
            errorText.textContent = "Email o contraseña incorrectas";
            errorText.style.display = "block";
        }
    })

    registroButton.addEventListener("click", function () {
        window.location.href = "register.html";
    })
});