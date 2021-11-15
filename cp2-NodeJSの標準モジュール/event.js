process.on('exit', function() {
   console.log('Exit イベント. on!');
});

// 一回のみ
process.once('exit', function() {
	console.log('Exit イベント. once!');
});

process.emit('exit');
process.emit('exit', 0);  // リスナー関数の引数 0
