const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Add click event
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});