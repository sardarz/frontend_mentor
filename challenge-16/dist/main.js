const toggle = document.querySelector('.toggle');
const main = document.querySelector('.main');

toggle.addEventListener('click', () => {
    main.classList.toggle('monthly');
})