const fibonacciGenerator = require('../lib/fibonacci');
const consumeWithTimeout = require('../lib/consumer');

const fibIterator = fibonacciGenerator();

consumeWithTimeout(fibIterator, 5);