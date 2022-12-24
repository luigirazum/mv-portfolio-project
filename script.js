const menuButton = document.querySelector('.menu_icon');
const mobileMenu = document.querySelector('#mobile_menu');
const closeMenu = document.querySelector('.btn-close');
const header = document.querySelector('.header');
const portfolioLink = document.querySelector('.portfolioLink');
const aboutLink = document.querySelector('.aboutLink');
const contactLink = document.querySelector('.contactLink');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.replace('hide_menu', 'show_menu');
  header.classList.replace('show_menu', 'hide_menu');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

portfolioLink.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

aboutLink.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

contactLink.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

// Array of project objects to load the content dynamically
const works = [
  {
    id: 'featureWork',
    name: 'Minimalist ToDo-List',
    description: `This is a simple minimalist ToDo App which you can use to track
                  your daily pending tasks. Adding, Deleting or Marking a task as
                  done in its very intuitive interface. Click on the the links below
                  to see the project source code or the live running version.`,
    featImage: 'imgs/screens/mintodolist-ss.png',
    technologies: ['CSS', 'HTML', 'JavaScript', 'WebPack'],
    liveLink: 'https://luigirazum.github.io/mv-mintodolist/',
    sourceLink: 'https://github.com/luigirazum/mv-mintodolist',
  },
  {
    id: 'work1',
    name: 'Profesional Art Printing Data',
    description: `This is a simple minimalist ToDo App which you can use to track
                  your daily pending tasks. Adding, Deleting or Marking a task as
                  done in its very intuitive interface.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'css', 'JavaScript'],
    liveLink: 'https://luigirazum.github.io/mv-mintodolist/',
    sourceLink: 'https://github.com/luigirazum/mv-mintodolist',
  },
  {
    id: 'work2',
    name: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'javascript', 'css'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project',
  },
  {
    id: 'work3',
    name: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'javascript', 'Ruby'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project',
  },
  {
    id: 'work4',
    name: 'Profesional Art Data Printing',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'css', 'Ruby'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project',
  },
  {
    id: 'work5',
    name: 'Healthcare Data Dashboard',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'javascript', 'bootstrap'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project',
  },
  {
    id: 'work6',
    name: 'My Website Portfolio',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project',
  },
];

// create li-tags for technologies in each card
function generateLiTags(technologies) {
  const liTagsList = document.createElement('ul');
  for (let i = 0; i < technologies.length; i += 1) {
    const liTag = document.createElement('li');
    liTag.className = 'tag';
    liTag.textContent = technologies[i];
    liTagsList.appendChild(liTag);
  }
  return liTagsList.innerHTML;
}

// Create Work Cards Dynamically
const worksList = document.querySelector('#portfolio .works');

for (let i = 0; i < works.length; i += 1) {
  if (works[i].id === 'featureWork') {
    const featWorkTemplate = `
      <div class="featured-work">
      <img
          src="${works[i].featImage}"
          alt="Featured Project Screenshot"
          />

        <div class="right-block">
          <h3 class="title-post">${works[i].name}</h3>
          <p class="text-post">
            ${works[i].description}
          </p>
          <ul class="tags">
          ${generateLiTags(works[i].technologies)}
          </ul>

          <div class="action">
          <a class="btn" onclick="showPopUp('${works[i].id}');">See Project</a>
          </div>
        </div>
      </div>
    `;
    worksList.innerHTML += featWorkTemplate;
  } else {
    const cardWorkTemplate = `
      <div class="card-works" style=
      "background:
         linear-gradient(
         180.45deg,
         rgba(38, 38, 38, 0) 0.75%,
         rgba(255, 165, 00, 0.9) 61.94%
        ),
        url(${works[i].featImage});">
      <div class="right-block">
      <h3 class="title-post">${works[i].name}</h3>
          <p class="text-post">
            ${works[i].description}
          </p>
          <ul class="tags">
          ${generateLiTags(works[i].technologies)}
          </ul>
        </div>

        <div class="action">
          <a class="btn" onclick="showPopUp('${works[i].id}');">See Project</a>
        </div>
      </div>
    `;
    worksList.innerHTML += cardWorkTemplate;
  }
}

function getWork(id) {
  for (let i = 0; i < works.length; i += 1) {
    if (works[i].id === id) {
      return works[i];
    }
  }
  return false;
}
// generar pop-up windows
function showPopUp(id = null) {
  if (id !== null) {
    const work = getWork(id);
    const popuptemplate = `
      <div class="popup-card" id="${work.id}">
        <div class="popup-card-header">
          <h3 class="popup-card-title">
            ${work.name}
            <a class="popup-card-close" onclick="closepopup('${work.id}');">
            <img src="imgs/close_icon.png" alt="close popup window"></a>
          </h3>
          <ul class="popup-card-tags">
           ${generateLiTags(work.technologies)}
          </ul>
        </div>
        <div class="popup-card-body">
          <div class="popup-card-img" style="background-image:
          url('${work.featImage}')"></div>
          <div class="popup-card-footer">
            <p>${work.description}</p>
            <div class="popup-card-links">
              <ul>
                <li>
                  <a href="${work.liveLink}">See Live</a>
                  <img src="imgs/live-pop-icon.png" alt="live project icon">
                </li>
                <li>
                  <a href="${work.sourceLink}">See Source</a>
                  <img src="imgs/gh-pop-icon.png" alt="github repository icon">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;

    const popUpList = document.querySelector('body article');
    popUpList.innerHTML += popuptemplate;
    popUpList.classList.replace('hide_menu', 'show_menu');
  }
}
showPopUp();

// create event for close 'x' buttons of popups
function closepopup(id = null) {
  if (id !== null) {
    const popUpList = document.querySelector('body #popup-window');
    const popUpCard = document.querySelector('body #popup-window .popup-card');
    popUpList.classList.replace('show_menu', 'hide_menu');
    popUpCard.parentNode.removeChild(popUpCard);
  }
}
closepopup();

// Form validation: email must be in lowercase
const contactForm = document.querySelector('.form');
const emailField = document.getElementById('email');
const errorField = contactForm.querySelector('.error');

const isValid = (email) => email.toLowerCase() === email;

emailField.addEventListener('input', () => {
  if (isValid(emailField.value)) {
    errorField.textContent = '';
    errorField.className = 'error';
  } else {
    errorField.textContent = 'Just lowecase letters allowed in email';
    errorField.className = 'error active';
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isValid(emailField.value)) {
    errorField.textContent = '';
    errorField.className = 'error';
    contactForm.submit();
  }
});