function openPage(page) {
  window.location.href = page;
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "auth.html";
}

/* ================= DARK MODE ================= */
const body = document.body;
const btn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  btn.textContent = "☀️";
}

function toggleTheme() {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    btn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    btn.textContent = "🌙";
  }
}
