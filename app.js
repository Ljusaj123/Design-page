const nav = document.querySelector('.navigation__menu');
const menu = document.querySelector('.menu__toggle');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
    menu.classList.toggle('is-active');
});