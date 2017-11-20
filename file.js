//Nodejs 提供了类似UNIX标准的文件操作API
//
var fs = require('fs');

//方法具有异步和同步两个版本
//异步函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息（error）
//建议大家使用异步方法，性能更高，速度更快，没有阻塞
//
//打开文件
//fs.open(path, flag[,model, callback)
//path 文件的路径
//r r+ rs rs+ w wx w+ wx+ a ax a+ ax+
//r 读
//w 写
//a以追加模式打开文件，如果不存在则创建
//rwa  +x如果文件路径存在，则失败
//rwa  ++如果文件不存在则创建
//flags文件打开的行为
//mode设置文件模式（权限），文件创建默认权限为0666(可读可写）
//callback回调函数，带有两个参数如：callback（err,fd)
//
//
//获取文件信息
//fs.stat(path, callback)
//path 文件路径
//callback 回调函数：两个参数（err，stats）stats是fs.Stats对象
//stats类方法：
fs.stat('/Users/haoshiwei/Documents/codes/nodejs/test/main.js',function(err, stats) {
	console.log(stats.isFile());
})


//删除文件
//fs.unlink(path,callback)
//创建目录
//fs.mkdir(path[,mode],callback)
//path文件路径
//mode设置目录权限，默认为0777
//callback回调函数，没有参数
//console.log('创建目录/Users/haoshiwei/Documents/codes/nodejs/test/tmp');
//fs.mkdir("/Users/haoshiwei/Documents/codes/nodejs/test/tmp/", function(err) {
//	if(err) {
//		return console.error(err);
//	}
//	console.log('目录创建成功');
//});


//读取目录
//fs.readdir(path,callback)
//path文件路径
//callback回调函数，带有两个参数，err,files.err为错误信息，files为目录下的文件数组列表
console.log('查看/tmp目录');

fs.readdir("/Users/haoshiwei/Documents/codes/nodejs/test//tmp/",function(err,files) {
	if(err) {
		return console.error(err);
	}
	files.forEach(function (file) {
		console.log(file);
	});
});
//
//删除目录
//fs.rmdir(path,callback)
//path文件路径
//callback回调函数，没有参数
//
