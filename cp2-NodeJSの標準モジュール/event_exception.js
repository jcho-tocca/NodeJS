// uncaughtException 例外処理
process.on('uncaughtException', function(code) {
	console.log('uncaughtException Event : ', code);
});


// 定義されていない関数の呼び出し - uncaughtException 発生
sayHello();
