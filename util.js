//util是一个Node.js核心模块，提供常用函数的集合
//
var util = require('util');

function Base() {
	this.name = 'base';
	this.base = 1995;
	this.sayHello = function() {
		console.log('Hello '+ this.name);
	};
}
Base.prototype.showName = function() {
	console.log(this.name);
};

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();

console.log(objSub);

//util.inspect
function Person() {
	this.name = 'byvoid';
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));


//util.isArray

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

//util.isRegExp(object) 如果给定的参数是object是一个正则表达式返回true，否则返回false
//util.isDate(object) 如果给定的参数是一个日期返回true，否则返回false
//util.isError(object)如果给定的参数是一个错误对象返回true，否则返回false
