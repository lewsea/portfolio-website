// switch about panels

const aboutLinks = document.querySelector('.about__links');
const aboutPanel = document.querySelectorAll('.about-panel');

aboutLinks.addEventListener('click', function (e) {
  if (e.target.classList == 'about-links') {
    const targetPanel = document.querySelector(e.target.dataset.target);
    aboutPanel.forEach(function (panels) {
      if (panels == targetPanel) {
        panels.classList.add('about-active');
      } else {
        panels.classList.remove('about-active');
      }
    });
  }
});
