// Get form elements
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");


// Validate Name
function validateName() {

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        return false;
    }

    nameError.textContent = "";
    return true;
}


// Validate Email
function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email is required.";
        return false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email address.";
        return false;
    }

    emailError.textContent = "";
    return true;
}


// Validate Password
function validatePassword() {

    const password = passwordInput.value;

    if (password === "") {
        passwordError.textContent = "Password is required.";
        return false;
    }

    if (password.length < 6) {
        passwordError.textContent =
            "Password must be at least 6 characters.";
        return false;
    }

    passwordError.textContent = "";
    return true;
}


// Check all fields
function checkForm() {

    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();

    // Enable button only when all fields are valid
    submitBtn.disabled =
        !(nameValid && emailValid && passwordValid);
}


// Real-time validation
nameInput.addEventListener("input", checkForm);
emailInput.addEventListener("input", checkForm);
passwordInput.addEventListener("input", checkForm);


// Form submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (
        validateName() &&
        validateEmail() &&
        validatePassword()
    ) {

        successMessage.textContent =
            "Registration successful!";

        form.reset();

        submitBtn.disabled = true;
    }
});