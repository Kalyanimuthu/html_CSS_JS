/* ================= LOAD DATA FROM STORAGE ================= */
const data = JSON.parse(localStorage.getItem("resumeData"));

if (!data) {
  alert("No resume data found. Please fill the form first.");
  window.location.href = "resume-form.html";
}

/* ================= DOM ELEMENTS ================= */
const pName = document.getElementById("pName");
const pTitle = document.getElementById("pTitle");
const pContact = document.getElementById("pContact");
const pObjective = document.getElementById("pObjective");
const pExperience = document.getElementById("pExperience");
const pEducation = document.getElementById("pEducation");

const pSkills = document.getElementById("pSkills");
const pSoftSkills = document.getElementById("pSoftSkills");
const pProjects = document.getElementById("pProjects");
const pCertifications = document.getElementById("pCertifications");

/* ================= RENDER HEADER ================= */
pName.textContent = data.name || "Your Name";
pTitle.textContent = data.title || "Job Title";

pContact.textContent = [
  data.email,
  data.phone,
  data.location,
  data.linkedin
].filter(Boolean).join(" | ");

/* ================= RENDER TEXT SECTIONS ================= */
pObjective.textContent = data.objective || "";
pExperience.textContent = data.experience || "";
pEducation.textContent = data.education || "";

/* ================= RENDER LIST SECTIONS ================= */
renderList(data.skills, pSkills, ",");
renderList(data.softSkills, pSoftSkills, ",");
renderList(data.projects, pProjects, "\n");
renderList(data.certifications, pCertifications, "\n");

/* ================= HELPERS ================= */
function renderList(text, element, separator) {
  element.innerHTML = "";
  if (!text) return;

  text.split(separator).forEach(item => {
    if (item.trim()) {
      const li = document.createElement("li");
      li.textContent = item.trim();
      element.appendChild(li);
    }
  });
}

/* ================= CATEGORY VIEW ================= */
function showCategory(category) {
  document.querySelectorAll(".templates").forEach(t =>
    t.classList.add("hidden")
  );
  document.getElementById(category).classList.remove("hidden");
}

/* ================= TEMPLATE SELECTION ================= */
function selectTemplate(type, model, color, el) {
  const resume = document.getElementById("resume");

  resume.className = `resume ${type} ${model} ${color}`;

  document.querySelectorAll(".tpl").forEach(t =>
    t.classList.remove("active")
  );

  el.classList.add("active");
}

/* ================= PDF ================= */
function downloadPDF() {
  window.print();
}
