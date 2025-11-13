// Hero Slider
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Auto Slide
function autoSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
let slideInterval = setInterval(autoSlide, 5000);

// Next/Prev Buttons
next.addEventListener("click", () => {
  clearInterval(slideInterval);
  current = (current + 1) % slides.length;
  showSlide(current);
  slideInterval = setInterval(autoSlide, 5000);
});

prev.addEventListener("click", () => {
  clearInterval(slideInterval);
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  slideInterval = setInterval(autoSlide, 5000);
});


// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("open");
});

// Animate hamburger into X
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  const spans = hamburger.querySelectorAll("span");
  if (hamburger.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translateY(8px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    spans[0].style.transform = "";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "";
  }
});


// Scroll animation
const fadeElements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Form submission (demo)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent successfully.");
  this.reset();
});
