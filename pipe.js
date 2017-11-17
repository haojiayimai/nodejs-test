//管道流

var fs = require('fs');

//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

//管道流操作
//读取input.txt文件内容，并写入的output.txt文件中
readerStream.pipe(writerStream);

console.log('program end');
