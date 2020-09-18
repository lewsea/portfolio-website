// mobile nav
function navigator() {
  const menu__hamburg = document.getElementById('menu__hamburg');
  const nav__list = document.getElementById('nav__list');

  if (menu__hamburg.classList.contains('fa-bars')) {
    menu__hamburg.classList.remove('fa-bars');
    menu__hamburg.classList.add('fa-times');
    nav__list.style.top = '0';
  } else {
    menu__hamburg.classList.remove('fa-times');
    menu__hamburg.classList.add('fa-bars');
    nav__list.style.top = '-1000%';
  }
}

// hover nav
const li = document.querySelectorAll('.li');
const sova = document.querySelectorAll('.sova');

li.forEach(function (lis) {
  lis.addEventListener('mousemove', function (e) {
    const hov = e.target.firstElementChild;

    hov.style.left = +e.offsetX + '%';
    hov.style.transform = 'translateX(-25px)';
  });
});

sova.forEach(function (sovas) {
  sovas.addEventListener('mousemove', function (e) {
    const hov = e.target.previousSibling;

    hov.style.left = +e.offsetX + '%';
    hov.style.transform = 'translateX(-12.5px)';
  });
});

li.forEach(function (lis) {
  lis.addEventListener('mouseleave', function (e) {
    const hov = e.target.firstElementChild;

    hov.style.left = '-50%';
  });
});

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

// scroll btn

window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
  scrollBtn.addEventListener('click', function () {
    window.scrollTo(0, 0);
  });
};
