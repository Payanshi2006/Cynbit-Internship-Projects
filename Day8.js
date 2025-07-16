  const form = document.getElementById("registrationForm");
  const passwordField = document.getElementById("password");
  const strengthDisplay = document.getElementById("passwordStrength");

  function checkPasswordStrength(password) {
    if (password.length < 6) {
      strengthDisplay.textContent = "Password must be min 6 characters";
      strengthDisplay.className = "password-strength";
    } else {
      strengthDisplay.textContent = "";
    }
  }

  passwordField.addEventListener("input", function () {
    checkPasswordStrength(passwordField.value);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(e => e.textContent = '');
    document.getElementById("successMessage").textContent = '';

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const branch = document.getElementById("branch").value.trim();
    const year = document.getElementById("year").value.trim();
    const password = passwordField.value.trim();

    let isValid = true;

    function showError(id, message) {
      document.getElementById(id).textContent = message;
      isValid = false;
    }

    if (!name) showError("errorName", "Name is required");
    if (!email) showError("errorEmail", "Email is required");
    else if (!email.includes("@")) showError("errorEmail", 'Email must contain "@"');
    if (!branch) showError("errorBranch", "Branch is required");
    if (!year) showError("errorYear", "Please select your year");
    if (!password) showError("errorPassword", "Password is required");
    else if (password.length < 6) showError("errorPassword", "Password must be at least 6 characters");

    if (isValid) {
      document.getElementById("successMessage").textContent = alert("Registration successful!");
      form.reset();
      strengthDisplay.textContent = '';
    }
  });
