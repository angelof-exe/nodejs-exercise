const number = document.getElementById('number');
const btnIncrease = document.getElementById('increaseButton');
const btnDecrease = document.getElementById('decreaseButton');
const btnReset = document.getElementById('resetButton');

btnIncrease.addEventListener('click', function () {
    number.textContent++;
})

btnDecrease.addEventListener('click', function () {
    number.textContent--;
})

btnReset.addEventListener('click', function () {
    number.textContent = 0;
})

