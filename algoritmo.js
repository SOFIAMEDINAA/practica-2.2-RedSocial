const emails = [];
const contrasenias = [];


function registrarUsuario() {
    const inputEmail = document.querySelector("#email").value
    const contraseniaInput = document.querySelector("#contraseña").value

    emails.push(inputEmail);
    contrasenias.push(contraseniaInput);


    console.log(emails);
    console.log(contrasenias);
}

