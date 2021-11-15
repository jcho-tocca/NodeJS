let fs = require('fs');
let output = fs.createWriteStream('stdout.log');
let errorOutput = fs.createWriteStream('error.log');

let Console = require('console').Console;
let logger = new Console(output, errorOutput);

logger.info('info message');
logger.log('log message');

logger.warn('warning');
logger.error('error message');
