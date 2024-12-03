const btncadastrar = document.getElementById("cadastrar");
const form = document.querySelectorAll("form");

form.addEventlistener("submit", (e) => {
    
    e.preventdefault();

    const emailcadastro = document.getElementById("email").value;
    const senhacadastro = document.getElementById("password").value;
    const senhaconfirma = document.getElementById("password_confirma").value;


    if (senhacadastro === senhaconfirma) {

        alert("cadastro realizado com sucesso !");

        // salvar em localstorage o valor do email cadastrado
        localStorage.setItem("emailcadastrado", emailcadastro);
        localStorage.setItem("senhacadastrado", senhacadastro);

        window.location.href = "../login.html";

    } else {

        alert("senhas não conferem !!!");

    }


});