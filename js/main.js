document.querySelectorAll('[data-include]').forEach(el => {
  fetch(el.getAttribute('data-include'))
    .then(res => res.text())
    .then(html => { el.outerHTML = html; });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section, footer');
  const scrollPos = window.scrollY + 200;
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      const id = sec.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});
