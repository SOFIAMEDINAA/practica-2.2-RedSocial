const emails = [];
const contrasenias = [];

let estadoUsuario = 0;


/**
 * guarda los registros de usuarios en el local Store
 */
function registrarUsuario() {
    estadoUsuario == 0

        const inputEmail = document.querySelector("#email").value
        const contraseniaInput = document.querySelector("#contraseña").value

        emails.push(inputEmail);
        contrasenias.push(contraseniaInput + contraseniaInput);

        /* localStorage.setItem(inputEmail.value, JSON.stringify(contraseniaInput.value)) */

        console.log(emails);
        console.log(contrasenias);
    }




/**
 * verifica si el usuario y contraseña son correctos
 */
function logearUsuario() {
    const inputEmail = document.querySelector("#email").value
    const contraseniaInput = document.querySelector("#contraseña").value
    let contrasenia = inputEmail + contraseniaInput;
    /* 
        if (localStorage.getItem(inputEmail.value, JSON.stringify(contraseniaInput.value))) {
            alert ("correctos");
          } else {
            alert("incorrectos");
          } */

    if (emails.includes(inputEmail) && contrasenias.includes(contrasenia)) {
        if (emails.indexOf(inputEmail) == contrasenias.indexOf(contrasenia)) {
            window.location.href = "https://www.google.com"
        }
        else {
            alert("Datos incorrectos")
        }
    }
    else {
        alert("Datos incorrectos")
    }
}















