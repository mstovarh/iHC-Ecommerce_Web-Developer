window.onload = function() {
    //Logup
    let correo = document.getElementById("email");
    let contraseña = document.getElementById("password");
    let nombreR = document.getElementById("nameR");
    let apellidoR = document.getElementById("lastnameR");
    let correoVerificado= document.getElementById("checkEmail");
    let contrVerficado= document.getElementById("checkPassword");
    let registrarU = document.getElementById("start2");
    let t2 = document.getElementById("msg-error");

    registrarU.addEventListener("click", function(event){
        if (nombreR.value === "" && apellidoR.value === "" && correo.value === "" && contraseña.value === "" && correoVerificado.value === "" && contrVerficado.value === "") {
            t2.innerHTML = "*Por favor, completa los campos";
            event.preventDefault();
        } else if (nombreR.value === "") {
            t2.innerHTML = "*Por favor, completa el campo de nombre.";
            event.preventDefault();
        } else if (apellidoR.value === "") {
            t2.innerHTML = "*Por favor, completa el campo de apellido.";
            event.preventDefault();
        } else if (correo.value === "") {
            t2.innerHTML = "*Por favor, completa el campo de correo.";
            event.preventDefault();
        } else if (!correo.value.includes("@gmail.com") && !correo.value.includes("@outlook.com")) {
            t2.innerHTML = "*El correo debe tener una direccion valida";
            event.preventDefault();
        } else if (contraseña.value === "") {
            t2.innerHTML = "*Por favor, completa el campo de contraseña.";
            event.preventDefault();
        } else if (contraseña.value.length < 8) { 
            t2.innerHTML = "*La contraseña debe tener al menos 8 caracteres.";
            event.preventDefault();
        } else if (correoVerificado.value === "") {
            t2.innerHTML = "*Por favor, completa el campo de verificacion de correo.";
            event.preventDefault();
        } else if (!correoVerificado.value.includes("@gmail.com") && !correoVerificado.value.includes("@outlook.com")) {
            t2.innerHTML = "*El correo debe tener una direccion valida";
            event.preventDefault(); 
        } else if (contrVerficado.value === "") {
            t2.innerHTML = "*Por favor, completa el campo de verificacion de contraseña.";
            event.preventDefault();
        } else if (contrVerficado.value.length < 8) { 
            t2.innerHTML = "*La contraseña debe tener al menos 8 caracteres.";
            event.preventDefault();
        } else if (correo.value !== correoVerificado.value) {
            t2.innerHTML = "*Los correos no coinciden";
            event.preventDefault();
        } else if (contraseña.value !== contrVerficado.value) {
            t2.innerHTML = "*Las contraseñas no coinciden";
            event.preventDefault();
        } else {

        }
    });    
};



