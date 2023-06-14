const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const btn4 = document.querySelector(".four");
const btn5 = document.querySelector(".five");
const container = document.querySelector("#container");
const contain = document.querySelector("#contain");
const submit = document.querySelector("#button");
const rating = document.querySelector(".rating");

contain.style.display = 'none';

let val = 0

btn1.addEventListener('click', () => {
    btn1.classList.toggle('toggle');
    btn2.classList.remove('toggle');
    btn3.classList.remove('toggle');
    btn4.classList.remove('toggle');
    btn5.classList.remove('toggle');
    val = 1;
})

btn2.addEventListener('click', () => {
    btn2.classList.toggle('toggle');
    btn1.classList.remove('toggle');
    btn3.classList.remove('toggle');
    btn4.classList.remove('toggle');
    btn5.classList.remove('toggle');
    val = 2;
})

btn3.addEventListener('click', () => {
    btn3.classList.toggle('toggle');
    btn1.classList.remove('toggle');
    btn2.classList.remove('toggle');
    btn4.classList.remove('toggle');
    btn5.classList.remove('toggle');
    val = 3;
})

btn4.addEventListener('click', () => {
    btn4.classList.toggle('toggle');
    btn1.classList.remove('toggle');
    btn2.classList.remove('toggle');
    btn3.classList.remove('toggle');
    btn5.classList.remove('toggle');
    val = 4;
})

btn5.addEventListener('click', () => {
    btn5.classList.toggle('toggle');
    btn1.classList.remove('toggle');
    btn2.classList.remove('toggle');
    btn3.classList.remove('toggle');
    btn4.classList.remove('toggle');
    val = 5;
})

submit.addEventListener('click', () => {
    if (val < 1 || val > 5) {
        alert('Please choose a rating!');
    } else {
        container.style.display = 'none';
        contain.style.display = 'block';
        rating.innerText = val;
}

})

