const data = [
    {
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        text: `  “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        src: 'images/image-tanya.jpg',
    },
    {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        text: `  “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        src: 'images/image-john.jpg',
    },
];

const fieldText = document.querySelector('.card__text');
const fieldName = document.querySelector('.card__name');
const fieldJob = document.querySelector('.card__job');
const fieldImg = document.querySelector('.card__img');
const prev = document.querySelector('.card__prev');
const next = document.querySelector('.card__next');

let counter = 0;

prev.addEventListener('click', () => {
    counter--;
    if (counter < 0) counter = data.length - 1;
    changePerson();
});

next.addEventListener('click', () => {
    counter++;
    if (counter >= data.length) counter = 0;
    changePerson();
});

function changePerson() {
    fieldText.innerHTML = data[counter].text;
    fieldName.innerHTML = data[counter].name;
    fieldJob.innerHTML = data[counter].job;
    fieldImg.src = data[counter].src;
}
