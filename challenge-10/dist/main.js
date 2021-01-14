function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const btn = document.querySelector('.main__btn');
const emailInput = document.querySelector('.main__email');
const errorMsg = document.querySelector('.main__errorMsg');

btn.addEventListener('click', () => {
    const text = emailInput.value;

    if (!validateEmail(text)) {
        emailInput.style.borderColor = "hsl(354, 100%, 66%)";
        errorMsg.style.maxHeight = errorMsg.scrollHeight + "px";
        errorMsg.classList.add('errorMargin')
    } else {
        emailInput.style.borderColor = "hsl(223, 100%, 88%)";
        errorMsg.style.maxHeight = 0;
        errorMsg.classList.remove('errorMargin')
    }
})