/* ================= THEME ================= */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  document.querySelector(".theme-toggle").textContent = dark ? "☀️" : "🌙";
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".theme-toggle").textContent = "☀️";
  }
};

/* ================= REGISTER ================= */
function register() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (!name.value.trim()) {
    nameError.textContent = "Please enter your full name";
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.textContent = "Please enter a valid email";
    valid = false;
  }

  if (!password.value || password.value !== confirm.value) {
    passwordError.textContent = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Account created successfully 🎉");
  }
}
