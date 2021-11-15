let util = require('util');

let str1 = util.format('%d + %d + %d', 1, 2, (1+2));
console.log(str1);

let str2 = util.format('%s %s', 'Hello', ' NodeJS');
console.log(str2);