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