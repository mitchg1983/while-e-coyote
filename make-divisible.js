const prompt = require('prompt-sync')();

let x = Number(prompt ('Enter a value for X. '));
let y = Number(prompt ('Enter a value for Y. '));

console.log ('Your values are:', x, y);

let remainder = Number(x % y);

console.log ('Your remainder is', remainder);
console.log ('');


while (remainder !== 0) {
    x = x + 1;
    console.log (x);
    let remainder = Number(x & y);
    console.log ('Your remainder is', remainder);
}

console.log ('');

if (remainder === 0) {
    console.log (x, "is divisible by", y);
}