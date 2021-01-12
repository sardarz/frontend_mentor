const btn = document.querySelector('.card__person-arrow');
const list = document.querySelector('.card__active');

btn.addEventListener('click', () => {
    list.classList.toggle('show');
})