const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const btn4 = document.querySelector('.four');
const btn5 = document.querySelector('.five');
const submit = document.querySelector('#button');
const contain = document.querySelector('#contain');
const rate = document.querySelector('.rating');

contain.style.display = 'none';
contain.style.visibility = 'hidden';

const main = document.querySelector('.container');

let val = 0;

console.log(typeof(val));


btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'hsl(217, 12%, 63%)';
    btn1.style.color = 'white';

    if (val !==0) {
        changeBackground(val);
    }
    val = 1;
    console.log(val);
})

btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'hsl(217, 12%, 63%)'
    btn2.style.color = 'white';
    if (val !== 0) {
        changeBackground(val);
    }
    val = 2;
    console.log(val);
})

btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'hsl(217, 12%, 63%)'
    btn3.style.color = 'white';
    if (val !== 0) {
        changeBackground(val);
    }
    val = 3;
    console.log(val);
})

btn4.addEventListener('click', () => {
    btn4.style.backgroundColor = 'hsl(217, 12%, 63%)'
    btn4.style.color = 'white';
    if (val !== 0) {
        changeBackground(val);
    }
    val = 4;
    console.log(val);
})

btn5.addEventListener('click', () => {
    btn5.style.backgroundColor = 'hsl(217, 12%, 63%)'
    btn5.style.color = 'white';
    if (val !== 0) {
        changeBackground(val);
    }
    val = 5;
    console.log(val);
})

submit.addEventListener('click', () => {
    main.style.display = 'none';
    main.style.visibility = 'hidden'
    rate.innerText = val;
    contain.style.display = 'block';
    contain.style.visibility = 'visible';
})

function changeBackground(val) {
    switch (val) {
        case 1:
            btn1.style.backgroundColor = 'hsl(213, 19%, 18%)';
            break;
        case 2:
            btn2.style.backgroundColor = 'hsl(213, 19%, 18%)';
            break;
        case 3:
            btn3.style.backgroundColor = 'hsl(213, 19%, 18%)';
            break;
        case 4:
            btn4.style.backgroundColor = 'hsl(213, 19%, 18%)';
            break;
        case 5:
            btn5.style.backgroundColor = 'hsl(213, 19%, 18%)';
            break;
    }
}