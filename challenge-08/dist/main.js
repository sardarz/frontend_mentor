// DO NOT FORGET TO TRY TO ADD PADDING TO MAIN DIV TO SEE HOW IT WILL WORK WITH MAX-WIDTH
const btnClaim = document.querySelector('.main__btn-claim');
let inputs = Array.from(document.querySelectorAll('input'));
let warns = Array.from(document.querySelectorAll('.main__warn'));
let errors = Array.from(document.querySelectorAll('.main__error'));

btnClaim.addEventListener('click', (evt) => {
    evt.preventDefault();
    let email = inputs[2].value;
    if (inputs.some((el) => el.value === '') || !validateEmail(email)) {
        warns.forEach((el) => (el.style.opacity = 1));
        errors.forEach((el) => (el.style.opacity = 1));
        inputs.forEach((el) => {
            el.classList.add('redBorder');
            el.placeholder = "";
        });
        inputs[2].classList.add('redPlaceholder');
        inputs[2].placeholder = 'email@example.com';
    } else {
        warns.forEach((el) => (el.style.opacity = 0));
        errors.forEach((el) => (el.style.opacity = 0));
        inputs[2].classList.renove('redPlaceholder');
        inputs.forEach((el) => el.classList.remove('redBorder'));
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
