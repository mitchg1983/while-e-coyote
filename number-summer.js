const prompt = require('prompt-sync')();

let input = prompt ('Enter a number please; type -done- when you are finished');

let total = 0;

while (input !== 'done') {
    total = total + Number(input);
    input = prompt ('Enter another number please; type -done- if you are finished')
}

console.log('Your sum is:', total);