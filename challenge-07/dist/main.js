const btn = document.querySelector('.main__btn');
const error = document.querySelector('.main__error');
const input = document.querySelector('.main__input');
const inputField = document.querySelector('.main__input-field');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

btn.addEventListener('click', () => {
    const text = input.value;
    if (!validateEmail(text)) {
        error.style.opacity = 1;
        inputField.classList.add('errorMsg');
    } else {
        error.style.opacity = 0;
        inputField.classList.remove('errorMsg');
    }
})