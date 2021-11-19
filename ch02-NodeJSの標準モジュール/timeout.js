function sayHello() {
	console.log('Hello World');
}

// 反復
setTimeout(function() {
	sayHello();
}, 2*1000);