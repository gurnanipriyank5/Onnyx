const loginEmail = document.getElementById('loginEmail');
    const loginEmailError = document.getElementById('loginEmailError');
    if (loginEmail) {
        loginEmail.addEventListener("input", () => {
            loginEmailError.textContent =
                loginEmail.value.includes("@") ? "" : "Invalid Email";
        });
    }
const signupEmail = document.getElementById('signupEmail');
    const signupEmailError = document.getElementById('signupEmailError');
    if (signupEmail) {
        signupEmail.addEventListener("input", () => {
            signupEmailError.textContent =
                signupEmail.value.includes("@") ? "" : "Invalid Email";
        });
    }
const contactEmail = document.getElementById('contactEmail');
    const contactEmailError = document.getElementById('contactEmailError');
    if (contactEmail) {
        contactEmail.addEventListener("input", () => {
            contactEmailError.textContent =
                contactEmail.value.includes("@") ? "" : "Invalid Email";
        });
    }
