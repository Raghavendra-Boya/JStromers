// Regex patterns
const patterns = {
  username: /^[A-Za-z]{3,}$/,                // only letters, min 3
  email: /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,}$/, // simple email
  phone: /^[0-9]{10}$/,                      // exactly 10 digits
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/ // strong password
};

// Validation function
function validate(field, regex, errorId, message) {
  let input = document.getElementById(field);
  let error = document.getElementById(errorId);

  if (regex.test(input.value)) {
    error.textContent = "✅ Valid";
    error.className = "success";
    input.style.borderColor = "green";
    return true;
  } else {
    error.textContent = "❌ " + message;
    error.className = "error";
    input.style.borderColor = "red";
    return false;
  }
}

// Password match check
function checkPasswordMatch() {
  let pass = document.getElementById("password").value;
  let confirm = document.getElementById("confirmPassword").value;
  let error = document.getElementById("confirmError");

  if (confirm === "") {
    error.textContent = "";
    return false;
  }

  if (pass === confirm) {
    error.textContent = "✅ Passwords match";
    error.className = "success";
    document.getElementById("confirmPassword").style.borderColor = "green";
    return true;
  } else {
    error.textContent = "❌ Passwords do not match";
    error.className = "error";
    document.getElementById("confirmPassword").style.borderColor = "red";
    return false;
  }
}

// Real-time validation listeners
document.getElementById("username").addEventListener("input", () =>
  validate("username", patterns.username, "userError", "Only letters, min 3 chars")
);
document.getElementById("email").addEventListener("input", () =>
  validate("email", patterns.email, "emailError", "Enter a valid email")
);
document.getElementById("phone").addEventListener("input", () =>
  validate("phone", patterns.phone, "phoneError", "Enter 10 digit number")
);
document.getElementById("password").addEventListener("input", () =>
  validate("password", patterns.password, "passError", "Min 6 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char")
);
document.getElementById("confirmPassword").addEventListener("input", checkPasswordMatch);

// On form submit
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valid =
    validate("username", patterns.username, "userError", "Only letters, min 3 chars") &&
    validate("email", patterns.email, "emailError", "Enter a valid email") &&
    validate("phone", patterns.phone, "phoneError", "Enter 10 digit number") &&
    validate("password", patterns.password, "passError", "Strong password required") &&
    checkPasswordMatch();

  if (valid) {
    alert("✅ Registration Successful!");
    document.getElementById("signupForm").reset();

    // Reset borders and messages
    document.querySelectorAll("input").forEach(i => i.style.borderColor = "#ccc");
    document.querySelectorAll(".error, .success").forEach(e => e.textContent = "");
  }
});
