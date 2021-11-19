console.time('TIMER');

let sum = 0;
for(let i = 1 ; i < 100000; i++ ) {
	sum += i;
}
console.log('sum : ', sum);

console.timeEnd('TIMER');