// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Tambahin delay animasi buat card pas scroll
const animatedElements = document.querySelectorAll(".animate-fade-up");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0.2s";
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
