// Typing animation
const textArray = [
  "Web Developer",
  "Website Content Coordinator",
  "Junior Front-End Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
  const text = textArray[textIndex];

  if (!deleting) {
    typingText.textContent = text.slice(0, ++charIndex);
    if (charIndex === text.length) {
      setTimeout(() => deleting = true, 1500);
    }
  } else {
    typingText.textContent = text.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }
  setTimeout(typeEffect, deleting ? 60 : 100);
}
typeEffect();

// Hamburger menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when a nav link is clicked
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// Modal + Gallery
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalRole = document.getElementById("modalRole");
const modalDescription = document.getElementById("modalDescription");
const modalTools = document.getElementById("modalTools");
const modalImage = document.getElementById("modalImage");

let images = [];
let index = 0;

document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = btn.dataset.title;
    modalRole.textContent = btn.dataset.role;
    modalDescription.textContent = btn.dataset.description;
    modalTools.textContent = btn.dataset.tools;
    images = JSON.parse(btn.dataset.images);
    index = 0;
    modalImage.src = images[index];
  });
});

document.getElementById("closeModal").onclick = () => modal.style.display = "none";
document.getElementById("prevImage").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  modalImage.src = images[index];
};
document.getElementById("nextImage").onclick = () => {
  index = (index + 1) % images.length;
  modalImage.src = images[index];
};

document.querySelector('#year').textContent = new Date().getFullYear();