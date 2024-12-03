document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    const emailRecupera = document.getElementById("email").value;
    const emailcadastro = localStorage.getItem("emailcadastro");
    const senhaRecupera = document.getElementById("password").value;
    const confirmaSenha = document.getElementById("password_confirma").value;

    if (emailcadastro === emailRecupera) {
        
        if (senhaRecupera === confirmaSenha) {

            alert("nova senha cadastrada com sucesso !!!");

        } else {
           
            localStorage.setItem("novasenha")
            
            alert("e-mail invalido !!!");

        }

    } else {
        
        alert("email não são iguais !!!");

    }
});