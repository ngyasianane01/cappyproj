//NAV SCROLL EFFECT 
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

//MOBILE BURGER
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
  const spans = burger.querySelectorAll('span');
  if (navbar.classList.contains('menu-open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close menu on link click
document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    const spans = burger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

//SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

//STAT COUNTER
function formatNumber(n, target) {
  if (target >= 1_000_000) return (n / 1_000_000).toFixed(1).replace('.0', '') + 'M';
  if (target >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return Math.floor(n).toString();
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out-expo
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = eased * target;
    el.textContent = formatNumber(current, target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = formatNumber(target, target);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

//FEATURE CARD TILT
document.querySelectorAll('.feat-card, .testi-card, .result-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

//SMOOTH ANCHOR SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

//NEWSLETTER FORM
const newsletterBtn = document.querySelector('.newsletter-btn');
const newsletterInput = document.querySelector('.newsletter-input');

if (newsletterBtn && newsletterInput) {
  newsletterBtn.addEventListener('click', () => {
    const email = newsletterInput.value.trim();
    if (!email || !email.includes('@')) {
      newsletterInput.style.borderColor = '#ff6b6b';
      newsletterInput.placeholder = 'Enter a valid email';
      setTimeout(() => {
        newsletterInput.style.borderColor = '';
        newsletterInput.placeholder = 'Enter your email';
      }, 2000);
      return;
    }
    newsletterBtn.textContent = '✓';
    newsletterBtn.style.background = '#06d6a0';
    newsletterInput.value = '';
    newsletterInput.placeholder = 'You\'re subscribed!';
    setTimeout(() => {
      newsletterBtn.textContent = '→';
      newsletterBtn.style.background = '';
      newsletterInput.placeholder = 'Enter your email';
    }, 3000);
  });
}

//HERO PARALLAX 
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orbs = document.querySelectorAll('.hero__orb');
  orbs.forEach((orb, i) => {
    const speed = (i + 1) * 0.15;
    orb.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

//ACTIVE NAV LINK on scroll 
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.style.color = '');
      const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--accent)';
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));

// PAGE LOAD ANIMATION TRIGGER 
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    document.body.style.opacity = '1';
  });
});