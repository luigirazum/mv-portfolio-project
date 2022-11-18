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
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a standard
                  dummy text.`,
    featImage: 'imgs/img-placeholder-fw.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project'
  },
  {
    id: 'work1',
    name: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: '../imgs/placeholder-img.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://luigirazum.github.io/',
    sourceLink: 'https://github.com/luigirazum/mv-portfolio-project',
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
  }
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
          <a href="#" class="btn" onclick="showPopUp('${works[i].id}');">See Project</a>
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
          <a href="#" class="btn" onclick="showPopUp('${works[i].id}');">See Project</a>
        </div>
      </div>
    `;
    worksList.innerHTML += cardWorkTemplate;
  }
}
