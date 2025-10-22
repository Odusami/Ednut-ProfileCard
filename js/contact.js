document.addEventListener("DOMContentLoaded", () => {
  console.log("Contact page script loaded!");
    // Contact form validation
const contactForm = document.getElementById("contact-form");
const successMessage = document.querySelector(
  '[data-testid="test-contact-success"]'
);

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Reset previous states
  const errorMessages = document.querySelectorAll(".error-message");
  const inputs = document.querySelectorAll(".form-control");

  errorMessages.forEach((msg) => msg.classList.remove("show"));
  inputs.forEach((input) => input.classList.remove("error"));
  successMessage.classList.remove("show");

  // Get form values
  const name = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate name
  if (!name) {
    document.getElementById("name-error").classList.add("show");
    document.getElementById("full-name").classList.add("error");
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    document.getElementById("email-error").classList.add("show");
    document.getElementById("email").classList.add("error");
    isValid = false;
  }

  // Validate subject
  if (!subject) {
    document.getElementById("subject-error").classList.add("show");
    document.getElementById("subject").classList.add("error");
    isValid = false;
  }

  // Validate message
  if (!message || message.length < 10) {
    document.getElementById("message-error").classList.add("show");
    document.getElementById("message").classList.add("error");
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    successMessage.classList.add("show");

    //Hide after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 3000);

    contactForm.reset();

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

// Real-time validation for better UX
const formInputs = document.querySelectorAll(".form-control");
formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    const errorId = this.getAttribute("aria-describedby");
    const errorElement = document.getElementById(errorId);

    // Skip validation if field is empty (handled on submit)
    if (!this.value.trim()) return;

    // Validate based on input type
    let isValid = true;

    if (this.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(this.value);
    } else if (this.id === "message") {
      isValid = this.value.length >= 10;
    }

    // Show/hide error
    if (isValid) {
      this.classList.remove("error");
      errorElement.classList.remove("show");
    } else {
      this.classList.add("error");
      errorElement.classList.add("show");
    }
  });
});

});

