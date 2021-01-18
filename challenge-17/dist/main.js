const toggle = document.querySelector('.header__toggle-wrapper');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
    body.classList.toggle('nav-dropdown');
})