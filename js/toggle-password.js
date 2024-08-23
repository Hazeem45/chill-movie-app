const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");
const confirmPasswordField = document.getElementById("confirm-password");
const toggleConfirmPassword = document.querySelector(".password-toggle-icon.password-register-2 i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  }
});

toggleConfirmPassword.addEventListener("click", function () {
  if (confirmPasswordField.type === "password") {
    confirmPasswordField.type = "text";
    toggleConfirmPassword.classList.remove("fa-eye-slash");
    toggleConfirmPassword.classList.add("fa-eye");
  } else {
    confirmPasswordField.type = "password";
    toggleConfirmPassword.classList.remove("fa-eye");
    toggleConfirmPassword.classList.add("fa-eye-slash");
  }
});
