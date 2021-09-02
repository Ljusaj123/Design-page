const nav= document.querySelector('nav');
const hamburger= document.querySelector('.menu-burger');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('show');
});