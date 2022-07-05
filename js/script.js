const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.header__list a');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

function setActiveLink(id) {
  links.forEach((link) => {
    link.classList.remove('active');

    if (link.href.includes(id)) {
      link.classList.add('active');
    }
  });
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return

    setActiveLink(entry.target.id);
  });
}, options);

sections.forEach((section) => sectionObserver.observe(section));
