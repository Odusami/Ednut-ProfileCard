document.addEventListener("DOMContentLoaded", () => {
  //  Load the navigation HTML
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("main-nav-container").innerHTML = data;
      initNav(); // Initialize nav behavior after it’s loaded
    })
    .catch(err => console.error("Failed to load nav:", err));
});

function initNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const currentPage = window.location.pathname.split("/").pop();

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


  // Close menu when clicking a nav link
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    // If menu is open and click is outside both navLinks and hamburger
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      navLinks.classList.remove("active");
    }
  });
}
