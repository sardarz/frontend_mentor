const toggle = document.querySelector('.header__toggle-wrapper');
const mobileNav = document.querySelector('.mobile-nav-list');
const body = document.querySelector('body')
toggle.addEventListener('click', () => {
    body.classList.toggle('nav-btn');
})