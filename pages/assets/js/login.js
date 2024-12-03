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