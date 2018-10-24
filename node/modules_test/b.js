exports.done = false;
var a = require('./a');
console.log('在b.js中，a.done=%j', a.done);
exports.done = true;
console.log('b.js 执行完毕');
