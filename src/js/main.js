// loader

window.addEventListener('load', function () {
  const loader = document.querySelector('.loader-wrapper');
  // loader.className += ' hidden';
  loader.parentElement.removeChild(loader);
});

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

    hov.style.opacity = '1';
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

    hov.style.opacity = '0';
    // hov.style.left = '-50%';
  });
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

// filter projects

const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', (e) => {
  const value = e.target.value.toLowerCase();
  const projectContainer = document.querySelectorAll('.projects-grid__card');
  const projects = document.querySelectorAll('.card__title');

  Array.from(projects).forEach((project) => {
    const title = project.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(e.target.value) != -1) {
      project.style.display = 'block';
      project.parentNode.style.display = 'flex';
    } else {
      project.style.display = 'none';
      project.parentNode.style.display = 'none';
    }
  });
});

// filter designs

// switch projects type

const projectType = document.querySelector('.projects-type');
const gridContainer = document.querySelectorAll('.grid-container');

projectType.addEventListener('click', function (e) {
  if (e.target.classList == 'project-link') {
    const targetContainer = document.querySelector(e.target.dataset.target);
    gridContainer.forEach(function (grids) {
      if (grids == targetContainer) {
        grids.classList.add('active-projects');
        searchBar.placeholder = 'Search Designs';
      } else {
        grids.classList.remove('active-projects');
        searchBar.placeholder = 'Search Projects';
      }
    });
  }
});

// design modal/popup

const designsImg = document.querySelectorAll('.designs__img');
const designsCard = document.querySelectorAll('.designs-card');
const designsTitle = document.querySelectorAll('.card-design');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');

designsTitle.forEach((designs) => {
  designs.addEventListener('click', function () {
    modal.classList.add('open');
    modalImg.classList.add('open');

    const imgSrc = designs.getAttribute('data-image');
    modalImg.src = imgSrc;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    modalImg.classList.remove('open');
  }
});
