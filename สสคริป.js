// ---------- 1. Fade-in effect ----------
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    section.classList.add('fade-section');
    observer.observe(section);
  });
});



// ---------- 2. Typewriter Effect ----------
function typeWriterEffect(elementId, text, speed = 80) {
  let i = 0;
  const target = document.getElementById(elementId);
  function typing() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
window.onload = () => {
  typeWriterEffect("main-title", "เรซูเม่ (RESUME)");
};

// ---------- 3. Dark Mode Toggle ----------
const toggleBtn = document.createElement('button');
toggleBtn.innerText = "🌙 Toggle Dark Mode";
toggleBtn.classList.add('toggle-dark');
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ---------- 4. Floating Animation on Portfolio ----------
const portfolioImages = document.querySelectorAll('.portfolio img');
portfolioImages.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.classList.add('float-img');
  });
  img.addEventListener('mouseout', () => {
    img.classList.remove('float-img');
  });
});

// ---------- 5. Scroll to Top ----------
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆️ Top";
scrollBtn.classList.add('scroll-top');
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ---------- 6. Accordion Click Toggle ----------
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // ปิดอันอื่นก่อน
    document.querySelectorAll('.accordion-content').forEach(c => {
      if (c !== content) c.classList.remove('open');
    });

    // toggle อันที่คลิก
    content.classList.toggle('open');
  });
});

// ---------- 7. Certificate Image Popup ----------
const modal = document.getElementById('certificate-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.certificate-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// ปิด modal เมื่อคลิกนอกภาพ
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});