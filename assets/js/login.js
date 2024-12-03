// =================Show hidden password=============

const showHiddenPassword = () => {
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");

    iconEye.addEventListener("click", () => {
        // change password to text
        if (input.type === "password") {
            // switch to text
            input.type = "text";

            // icon change
            iconEye.classList.remove("ri-eye-off-line");
            iconEye.classList.add("ri-eye-line");
        } else {
            // change text to password
            input.type = "password";

            iconEye.classList.remove("ri-eye-line");
            iconEye.classList.add("ri-eye-off-line");
        }
    });
};

showHiddenPassword();

let tentativas = 0;

document.querySelector("form").addEventListener("submit", () => {
    
});

document.querySelector("forn").addEventListener("submit", () => {
    e.preventdefault();

    const emailLogin = document.getElementById("email").valeu;
    const senhaLogin = document.getElementById("password").valeu;

    // recuperar dados do local storage
    const email_cadastro = localstorage.getltem("emailcadastro");
    const senha_cadastro = localStorage.getItem("senhacadastro");

    if (emailLogin === email_cadastro && senhaLogin === senha_cadastro) {
        
        alert("deu bom !!!");

    } else {
        
        if (emailLogin !== email_cadastro) {
            alert("email não cadatrado !!!");
        };

        if (senhaLogin !== senha_cadastro) {
            alert("senha incorreta !!!");

            tentativas += 1;

            alert('tentativa ${tentativas}/3');

            if (tentativas === 3) {
                alert("senha bloqueada por excesso de tentativas !!!");
                window.location = "././pages/recupera.html"

            }
        };
    }
});