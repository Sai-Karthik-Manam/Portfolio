// Portfolio JavaScript - Enhanced Version

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Sai Karthik Manam's Portfolio!");

  // Auto-hide header on scroll
  let lastScrollTop = 0;
  const header = document.querySelector("header");
  const scrollThreshold = 100; // Start hiding after scrolling 100px

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add scrolled class for transparency effect
    if (scrollTop > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Auto-hide logic
    if (scrollTop > scrollThreshold) {
      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide header
        header.classList.add("hidden");
      } else {
        // Scrolling up - show header
        header.classList.remove("hidden");
      }
    } else {
      // At the top of page - always show header
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      
      // Check if it's an internal anchor link
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Show header when navigating
          header.classList.remove("hidden");
          
          targetElement.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });

    // Hover effects
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "rgba(191, 162, 219, 0.15)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "transparent";
    });
  });

  // Highlight active section in navigation
  const sections = document.querySelectorAll("section[id]");
  
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.style.fontWeight = "500";
          link.style.borderBottom = "none";
          
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.style.fontWeight = "700";
            link.style.borderBottom = "2px solid #7A5C98";
          }
        });
      }
    });
  });

  // Add animation to cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all cards
  const cards = document.querySelectorAll(
    ".project-card, .education-card, .experience-card, .testimonial-card, .skill"
  );
  
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Back to top button functionality
  createBackToTopButton();
});

// EmailJS Form Submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const statusElement = document.getElementById("form-status");
  statusElement.textContent = "Sending...";
  statusElement.style.color = "#7A5C98";

  emailjs.sendForm("Karthik's_service_id", "karthik's_template_id", this)
    .then(() => {
      statusElement.textContent = "✅ Message sent successfully! I'll get back to you soon.";
      statusElement.style.color = "#198754";
      form.reset();
      
      // Clear status after 5 seconds
      setTimeout(() => {
        statusElement.textContent = "";
      }, 5000);
    }, (error) => {
      statusElement.textContent = "❌ Failed to send. Please try again later or email me directly.";
      statusElement.style.color = "#dc3545";
      console.error("EmailJS Error:", error);
      
      // Clear error after 5 seconds
      setTimeout(() => {
        statusElement.textContent = "";
      }, 5000);
    });
});

// Create Back to Top Button
function createBackToTopButton() {
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = "↑";
  backToTopBtn.setAttribute("id", "backToTop");
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #7A5C98;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  `;

  document.body.appendChild(backToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.opacity = "1";
      backToTopBtn.style.pointerEvents = "auto";
    } else {
      backToTopBtn.style.opacity = "0";
      backToTopBtn.style.pointerEvents = "none";
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Hover effect
  backToTopBtn.addEventListener("mouseenter", () => {
    backToTopBtn.style.transform = "scale(1.1)";
    backToTopBtn.style.backgroundColor = "#5e437b";
  });

  backToTopBtn.addEventListener("mouseleave", () => {
    backToTopBtn.style.transform = "scale(1)";
    backToTopBtn.style.backgroundColor = "#7A5C98";
  });
}

// Add typing effect to tagline (optional enhancement)
function typewriterEffect() {
  const tagline = document.querySelector(".tagline");
  if (!tagline) return;
  
  const text = tagline.textContent;
  tagline.textContent = "";
  tagline.style.opacity = "1";
  
  let i = 0;
  const speed = 50;
  
  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  // Start typing after a brief delay
  setTimeout(type, 500);
}

// Uncomment to enable typewriter effect
// typewriterEffect();