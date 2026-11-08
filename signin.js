const container = document.getElementById("container");

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");

const signupForm = document.getElementById("signupForm");
const signinForm = document.getElementById("signinForm");

// SHOW SIGN UP FORM
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

// SHOW SIGN IN FORM
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

// SIGN UP FORM SUBMISSION
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    alert("Welcome, " + name + "! Your registration form was submitted.");

    signupForm.reset();
});

// SIGN IN FORM SUBMISSION
signinForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    alert("Sign in form submitted for: " + email);

    signinForm.reset();
});