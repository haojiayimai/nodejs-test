//__filename表示当前正在执行的脚本的文件名
console.log(__filename);

//__dirname表示当前执行脚本所在的目录
console.log(__dirname);

//setTimeout(cb,ms)在指定的毫秒数后执行指定函数cb（只执行一次）
function printHello() {
	console.log('hello Atom');
}
//2秒后执行以上函数
setTimeout(printHello, 2000);


//clearTimeout(t)参数t是通过setTimeout（）函数创建的定时器

clearTimeout();

//setInterval(cb.ms)在指定的毫秒数后执行指定函数cb（不停地调用函数，直到clearInterval()被调用或窗口被关闭
//setInterval(printHello, 2000);

//clearInterval();

//console 提供控制台标准输出
//log
//info
//error
//warn
//dir 对一个对象进行检查（inspect），并以易于阅读和打印的格式显示
//time表示计时开始
//timeEnd表示计时结束
//trace当前执行的代码在堆栈中的调用路径
//asset用于判断某个表达式或变量是否为真，接收两个参数，第一个是表达式，第二个是字符串。只有第一个参数为false，才会输出第二个参数，否则不会有结果



//process是一个全局变量，即global对象的属性
//exit
//beforeExit当node清空事件循环，并且没有其他安排时触发这个事件
//uncaughtException
//Signal
//console.info('program end');


//process属性
//stdout
//stderr
//stdin
//argv返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员时脚本文件名，其余成员是脚本文件的参数
//execPath返回执行当前脚本的Node二进制文件的绝对路径
//execArgv返回一个数组，成员是命令行下执行脚本时，在Node可执行文件与脚本文件之间的命令行参数
//env返回一个对象，成员为当前shell的环境变量
//exieCode进程退出时的代码，如果进程优先通过process.exit()退出，不需要指定退出码
//version Node的版本
//versions 一个属性，包含了node的版本和依赖
//config一个包含用来编译当前node执行文件的javascript配置选项的对象。
//pid 当前进行的进程号
//title 进行名
//arch 当前CPU的架构如'arm' 'ia32' 'x64'
//platform 运行程序所在的平台系统 'darwin' 'freebsd' 'linux' 'sunos' win32'
//mainModule require.main的备选方法
//
process.stdout.write('hello Atom' + '\n');

//通过参数读取
process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});

//获取当前执行路径
console.log(process.execPath);

//平台信息
console.log(process.platform);
