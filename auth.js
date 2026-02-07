let isLogin = false;

/* THEME */
function toggleTheme() {
  document.body.classList.toggle("dark");
}

/* SWITCH LOGIN / REGISTER */
function toggleMode() {
  isLogin = !isLogin;

  document.getElementById("nameField").style.display = isLogin ? "none" : "block";
  document.getElementById("confirmField").style.display = isLogin ? "none" : "block";

  document.getElementById("title").textContent = isLogin ? "Welcome back" : "Create your account";
  document.getElementById("subtitle").textContent = isLogin ? "Login to continue" : "Start your journey";

  document.getElementById("toggleText").textContent =
    isLogin ? "Don't have an account? Register" : "Already have an account? Login";
}

/* PASSWORD TOGGLE */
function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

/* SUBMIT */
function submitForm() {
  document.getElementById("success").style.display = "block";

  setTimeout(() => {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  }, 1200);
}
