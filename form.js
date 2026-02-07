function saveAndContinue() {
  const data = {
    name: document.querySelector('input[placeholder="Full Name"]').value,
    title: document.querySelector('input[placeholder="Job Title"]').value,
    email: document.querySelector('input[placeholder="Email"]').value,
    phone: document.querySelector('input[placeholder="Phone Number"]').value,
    location: document.querySelector('input[placeholder="Location"]').value,
    linkedin: document.querySelector('input[placeholder="LinkedIn / GitHub URL"]').value,
    objective: document.querySelector('textarea[placeholder*="career"]').value,
    skills: document.querySelector('textarea[placeholder*="Technical"]').value,
    softSkills: document.querySelector('textarea[placeholder*="Soft"]').value,
    projects: document.querySelector('textarea[placeholder*="Projects"]').value,
    experience: document.querySelector('textarea[placeholder*="experience"]').value,
    education: document.querySelector('textarea[placeholder*="Educational"]').value,
    certifications: document.querySelector('textarea[placeholder*="Certifications"]').value
  };

  localStorage.setItem("resumeData", JSON.stringify(data));

  // 👉 move to template page
  window.location.href = "resume-builder.html";
}
