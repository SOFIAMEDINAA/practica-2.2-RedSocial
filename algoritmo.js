const emails = [];
const contrasenias = [];

let estadoUsuario = 0;

function registrarUsuario() {
    if (estadoUsuario == 0) {

        const inputEmail = document.querySelector("#email").value
        const contraseniaInput = document.querySelector("#contraseña").value

        emails.push(inputEmail);
        contrasenias.push(contraseniaInput + contraseniaInput);

        localStorage.setItem(inputEmail.value, JSON.stringify(contraseniaInput.value))

        console.log(emails);
        console.log(contrasenias);
    }

}



function logearUsuario() {
    const inputEmail = document.querySelector("#email").value
    const contraseniaInput = document.querySelector("#contraseña").value
    let contrasenia = inputEmail + contraseniaInput;

    if (localStorage.getItem(inputEmail.value, JSON.stringify(contrasenia.value))) {
        alert ("correctos");
      } else {
        alert("incorrectos");
      }

    /* if (emails.includes(inputEmail) && contrasenias.includes(contrasenia)) {
        if (emails.indexOf(inputEmail) == contrasenias.indexOf(contrasenia)) {
            alert("datos correctos")
        }
        else {
            alert("Datos incorrectos")
        }
    }
    /* else {
        alert("Datos incorrectos")
    } */ 
}















