// 1. Console Greeting
document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Sai Karthik Manam's Portfolio!");

  // 2. Alert on Form Submission
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission
    alert("Thank you for your message! I’ll get back to you soon.");
    form.reset();
  });

  // 3. Highlight nav links on hover using JS
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "#E8D9FF";
    });
    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "transparent";
    });
  });

  // 4. Scroll to Contact Section on GitHub Link Click (for demo)
  const contactLink = document.querySelector('a[href="#contact"]');
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
  }
});



const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("Karthik's_service_id", "karthik's_template_id", this)
    .then(() => {
      document.getElementById("form-status").textContent = "✅ Message sent successfully!";
      form.reset();
    }, (error) => {
      document.getElementById("form-status").textContent = "❌ Failed to send. Please try again later.";
      console.error("EmailJS Error:", error);
    });
});

