let input = document.querySelector('.input');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const btnC = document.querySelector('.clear-input');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = '';

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
                console.log(e.target.textContent)