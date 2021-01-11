const items = document.querySelectorAll('.card__item');
const hiddenItems = document.querySelectorAll('.card__hidden');
const arrows = document.querySelectorAll('.card__arrow-down');
const paragraphs = document.querySelectorAll('.card__visible p');
items.forEach((el, idx) => {
    el.addEventListener('click', () => openMenu(idx, hiddenItems));
});

function openMenu(idx, arr) {
    arr.forEach((el) => {
        el.style.maxHeight = 0;
    });
    arrows.forEach((el) => {
        if (el !== arrows[idx]) {
            el.classList.remove('arrowDown');
        }
    });
    paragraphs.forEach(el => {
        if (el !== paragraphs[idx]) {
            el.classList.remove('bold-and-blue');
        }
    })
    if (arrows[idx].classList.contains('arrowDown')) {
        arr[idx].style.maxHeight = 0;        
        arrows[idx].classList.remove('arrowDown');
        paragraphs[idx].classList.remove('bold-and-blue');
    } else {
        arr[idx].style.maxHeight = arr[idx].scrollHeight + 'px';
        arrows[idx].classList.add('arrowDown');
        paragraphs[idx].classList.add('bold-and-blue');
    }
}
