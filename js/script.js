// Jaar in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobiel menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.textContent = isOpen ? '✕' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = '☰';
    navLinks.querySelectorAll('a').forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Typewriter effect
const words = ['Webdeveloper', 'Student IT', 'Frontend Designer'];
const typeElement = document.getElementById('typewriter');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  typeElement.textContent = currentWord.substring(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, isDeleting ? 1000 : 300);
  }
}
typeEffect();

// Contactformulier validatie
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    formMessage.textContent = 'Vul alle velden in.';
    formMessage.className = 'form-message error';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    formMessage.textContent = 'Vul een geldig e-mailadres in.';
    formMessage.className = 'form-message error';
    return;
  }

  formMessage.textContent = `Bedankt ${name}! Je bericht is (demo) verzonden.`;
  formMessage.className = 'form-message success';
  form.reset();
});

// Back to top
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});