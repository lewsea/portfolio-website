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
