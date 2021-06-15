const prompt = require('prompt-sync')();

let number = Number(prompt('Please enter a number that is less than 100.'));

while (number <= 100) {
    number = number * 2;
}

console.log (number)