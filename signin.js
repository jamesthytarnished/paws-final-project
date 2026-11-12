
const container = document.getElementById("container");

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");

// SHOW SIGN UP FORM
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

// SHOW SIGN IN FORM
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
