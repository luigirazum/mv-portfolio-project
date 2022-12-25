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

const detailsMessage = `Click on the link below to see more details about
                      this project.`;
const inviteMessage = `Click on the links below to see the project source code
                      or the live running version.`;
const ghProfile = 'luigirazum';

function sourceLink() {
  return `https://github.com/${ghProfile}/${this.projectRepo}`;
}

function liveLink() {
  return `https://${ghProfile}.github.io/${this.projectRepo}/`;
}

// Array of project objects to load the content dynamically
const works = [
  {
    id: 'featureWork',
    name: 'Minimalist ToDo-List',
    description: `This is a simple minimalist ToDo App which you can use to track
                  your daily pending tasks. Adding, Deleting or Marking a task as
                  done in its very intuitive interface.`,
    featImage: 'imgs/screens/mintodolist-ss.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WebPack'],
    projectRepo: 'mv-mintodolist',
  },
  {
    id: 'work1',
    name: 'Awesome Books',
    description: `This is a Single Page App that allows you to do a list of Books and
                  its Author, that list persist even if you leave the App. You can Add
                  new books or Delete a book from the list clicking on its Delete button.
                  You can navigate through the App using the top menu.`,
    featImage: 'imgs/screens/awesomebooks-ss.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectRepo: 'mv-awesomebooks-es6',
  },
  {
    id: 'work2',
    name: 'Developer Week',
    description: `DevWeek is a project website that lists Conferences and Events for
                  Developers. It is composed by a Home page and an About page, in the Home
                  page besides viewing the main event details you can see a series of Cards
                  displaying information about the Speakers that will feature the Conferences.
                  The About page show general info about the event.`,
    featImage: 'imgs/screens/devweek-ss.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectRepo: 'mv-devweek',
  },
  {
    id: 'work3',
    name: 'Personal Portfolio Website',
    description: `This is my first completed project as Full-Stack Software Developer in training.
                  It is a Personal Portfolio Website that shows information about the creator, lists
                  the projects that the creator has made, you click on a project and a PopUp window
                  appears so you can go to the live version or the source code of the project. It is
                  still in development.`,
    featImage: 'imgs/screens/portfolio-ss.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectRepo: 'mv-portfolio-project',
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
  works[i].sourceLink = sourceLink;
  works[i].liveLink = liveLink;
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
            ${works[i].description} ${detailsMessage}
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
        ), center / 70% no-repeat
        url(${works[i].featImage});">
      <div class="right-block">
      <h3 class="title-post">${works[i].name}</h3>
          <p class="text-post">
            ${works[i].description} ${detailsMessage}
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
            <p>${work.description} ${inviteMessage}</p>
            <div class="popup-card-links">
              <ul>
                <li>
                  <a href="${work.liveLink()}">See Live</a>
                  <img src="imgs/live-pop-icon.png" alt="live project icon">
                </li>
                <li>
                  <a href="${work.sourceLink()}">See Source</a>
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