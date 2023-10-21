window.onload = function() { 
    //Login
    let correo = document.getElementById("email");
    let contraseña = document.getElementById("password");
    let iniciarS = document.getElementById("start1");
    let t1 = document.getElementById("msg-error");

    iniciarS.addEventListener("click", function(event) {
        if (correo.value === "" && contraseña.value === "") {
            t1.innerHTML = "*Por favor, completa los campos de correo y contraseña.";
            event.preventDefault();
        } else if (correo.value === "") {
            t1.innerHTML = "*Por favor, completa el campo de correo.";
            event.preventDefault();
        } else if (!correo.value.includes("@gmail.com") && !correo.value.includes("@outlook.com")) { //!(correo.value.includes("@gmail.com") || correo.value.includes("@outlook.com")))
            t1.innerHTML = "*El correo debe tener una direccion valida";
            event.preventDefault();
        } else if (contraseña.value === "") {
            t1.innerHTML = "*Por favor, completa el campo de contraseña.";
            event.preventDefault();
        } else if (contraseña.value.length < 8) {
            t1.innerHTML = "*La contraseña debe tener al menos 8 caracteres.";
            event.preventDefault();
        } else {
                
        }
    });
};




