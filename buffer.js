//创建Buffer类
//var buffer = new Buffer(10)//10字节
//var buffer = new Buffer([1,2,3,4])
//var buffer = new Buffer('www.runoob.com')

//写入缓存区
//var buf = new Buffer(256);
//buf.write('www.runoob.com');
//返回值：buffer中对象的实际长度


//读取数据
//buf.toString([encoding[,start[,end]]);
//buf.toString('utf8',0,5);


//将Buffer转换为Json对象
//bug.toJson()


//缓冲区合并
//Buffer.concat(list[,totalLength])
//var buf1 = new Buffer('a');
//var buf2 = new Buffer('b');
//var buf3 = Buffer.concat([buf1,buf2]);


//缓冲区比较
//buf.compare(otherBuffer);
//返回值：返回一个数值（<0 =0 >0)buf在otherBuffer之前，相同，之后


//拷贝缓冲区
//bug.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])


//缓冲区裁剪
//bug.slice([start[,end]])


//缓冲区长度
//buf.length()



var buffer1 = new Buffer('runoob');

//剪切缓冲区
var buffer2 = buffer1.slice(0,2);

console.log("buffer1 content: " + buffer1.toString());
console.log("buffer2 content: " + buffer2.toString());

