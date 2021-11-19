let Person = function(){};

// 継承
let util = require('util');
let EventEmitter = require('events').EventEmitter;
util.inherits(Person, EventEmitter);

// オブジェクト
let p = new Person();

p.on('howAreYou', function() {
   console.log('Fine, Thank you and you?');
});

// イベント発火
p.emit('howAreYou');
