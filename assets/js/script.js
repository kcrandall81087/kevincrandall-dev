const footerParagraph = document.querySelector('.site-footer p');

if (footerParagraph && footerParagraph.textContent.includes('©')) {
  footerParagraph.textContent = `© ${new Date().getFullYear()} Kevin Crandall`;
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
