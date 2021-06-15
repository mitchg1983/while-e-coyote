const prompt = require('prompt-sync')();

let repeater = prompt('Enter a string.');

while (repeater.length < 10) {
    repeater = repeater + repeater
}

console.log (repeater)