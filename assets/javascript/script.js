document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const cartCount = document.getElementById("cart-count");
  const supportBar = document.querySelector(".support-bar");
  const supportValue = document.getElementById("support-value");
  const supportButton = document.querySelector(".support-btn");
  const addButtons = document.querySelectorAll(".add-to-bag");
  const reveals = document.querySelectorAll(".reveal");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  let itemCount = 0;
  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      itemCount += 1;
      cartCount.textContent = itemCount;
      button.textContent = "Added";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = "Add to bag";
        button.disabled = false;
      }, 1200);
    });
  });

  if (supportButton && supportBar && supportValue) {
    supportButton.addEventListener("click", () => {
      const currentWidth = parseInt(supportBar.style.width || "62", 10);
      const nextWidth = Math.min(currentWidth + 8, 100);
      supportBar.style.width = `${nextWidth}%`;
      supportValue.textContent = `${nextWidth}%`;
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((section) => observer.observe(section));
});
