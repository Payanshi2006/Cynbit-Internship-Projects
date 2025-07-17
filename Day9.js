const form = document.getElementById('registrationForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('Confirm-password');
    const phone = document.getElementById('phone');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmError = document.getElementById('confirmError');
    const phoneError = document.getElementById('phoneError');
    const strengthText = document.getElementById('strengthIndicator');

    const patterns = {
      email: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
      phone: /^\+91\d{10}$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/
    };

    function validate(input, pattern, errorBox) {
      const isValid = pattern.test(input.value.trim());
      input.classList.toggle('error', !isValid);
      input.classList.toggle('success', isValid);
      errorBox.style.display = isValid ? 'none' : 'block';
      return isValid;
    }

    function validateConfirmPassword() {
      const isMatch = password.value === confirmPassword.value;
      confirmPassword.classList.toggle('error', !isMatch);
      confirmPassword.classList.toggle('success', isMatch);
      confirmError.style.display = isMatch ? 'none' : 'block';
      return isMatch;
    }

    email.addEventListener('blur', () => validate(email, patterns.email, emailError));
    phone.addEventListener('blur', () => validate(phone, patterns.phone, phoneError));
    password.addEventListener('blur', () => validate(password, patterns.password, passwordError));
    confirmPassword.addEventListener('blur', validateConfirmPassword);

    password.addEventListener('input', () => {
      const val = password.value;
      strengthText.textContent = `Strength: ${strength}`;
      strengthText.className = `strength ${strength.toLowerCase()}`;
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const isEmailValid = validate(email, patterns.email, emailError);
      const isPhoneValid = validate(phone, patterns.phone, phoneError);
      const isPasswordValid = validate(password, patterns.password, passwordError);
      const isConfirmValid = validateConfirmPassword();

      if (isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid && form.checkValidity()) {
        alert("Form submitted successfully!");
        form.reset();
        strengthText.textContent = '';
        [email, password, confirmPassword, phone].forEach(input => input.classList.remove('success'));
      } else {
        form.reportValidity();
      }
    });
