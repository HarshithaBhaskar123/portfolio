const typing = document.getElementById("typing");
const roles = ["Computer Science Student", "Java Developer", "Full Stack Learner", "Problem Solver"];
let roleIndex = 0, charIndex = 0, deleting = false;
function typeRole() {
  const role = roles[roleIndex];
  typing.textContent = role.substring(0, charIndex);
  if (!deleting && charIndex < role.length) {
    charIndex++;
    setTimeout(typeRole, 85);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeRole, 1200);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 40);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 250);
  }
}
typeRole();
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
