const btn = document.querySelector('.main__toggle');
const body = document.querySelector('body');
btn.addEventListener('click', () => {
    body.classList.toggle('lightTheme');
})
console.log("hello");