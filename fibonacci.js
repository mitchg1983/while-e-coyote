const prompt = require('prompt-sync')();

let n = prompt('Please enter a whole number... ');

let fib1 = 0;
let fib2 = 1;

let count = 0;

while (Number(n) > count) {
    const fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
    
    count = count + 1;

    console.log (fib1)
}