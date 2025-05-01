// js/main.js

// 1. AOS
AOS.init({ 
    once: true, 
    duration: 800, 
    offset: 200, 
    easing: 'ease-in-out-cubic' 
  });
  
  // 2. Footer año dinámico
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // 3. Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const dt = document.documentElement;
    dt.dataset.theme = dt.dataset.theme === 'dark' ? '' : 'dark';
  });
  
  // 4. Filtro de portafolio
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      document.querySelectorAll('.portfolio-item').forEach(item => {
        item.classList.toggle('hide', !(cat === 'all' || item.dataset.category === cat));
      });
    });
  });
  
  // 5. Back to Top
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    back.classList.toggle('show', window.scrollY > window.innerHeight);
  });
  back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  
  // 6. Inicializar Swiper (Testimonios)
  new Swiper('.swiper-container', {
    loop: true,
    autoplay: { delay: 5000 },
    pagination: { el: '.swiper-pagination', clickable: true }
  });
  
  // 7. Preloader hide
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    if (pre) pre.style.display = 'none';
  });
  
  // 8. Newsletter modal
  window.addEventListener('load', () => {
    setTimeout(() => {
      const btn = document.getElementById('newsletterBtn');
      if (btn) btn.click();
    }, 10000);
  });
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('¡Gracias por suscribirte!');
      bootstrap.Modal.getInstance(document.getElementById('newsletterModal')).hide();
    });
  }
  
  // 9. Service Worker register
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
  