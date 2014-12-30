/**
 * Created by colin on 2014/12/30.
 */
 //  caller
function persion(){
	this.name="ctrip";
	child();
}

function child(){
	cosole.log(child.caller);
}

// callapply可以随便绑定对象，然后就可以实现对绑定对象

动态新增方法和属性
var obj=new Object();
function BindProperty(name,age){
	this.name=name;
	this.age=age;
}
BindProperty.call(obj,"ctrip",20);
BindProperty.apply(obj,["ctrip",20]);
//本来我的obj只是一个空对象，通过apply之后，我的obj对象具有name和age属性了

//arguments 
function say(name,age){
	name="colin";
	console.log("姓名"+arguments[0]+"年龄"+age);
}
say("ctrip",20);
say.arguments
say.constructor
say.arguments.callee //保持当前对象

//形参和arguments数据同步 模拟arguments
var Person={
	args:[]
};
Object.defineProperty(Person,"name",{
	get:function(){
		return this.args[0]
	},
	set:function(val){
		this.args[0]=val;
	}
})
Person.name="colin";
console.log(Person.args[0])

//闭包
function createComparison(propertyName) {
    return function (obj1, obj2) {
        var item1 = obj1[propertyName];
        var item2 = obj2[propertyName];

        if (item1 < item2)
            return -1;

        if (item1 > item2)
            return 1;

        if (item1 == item2)
            return 0;
    }
}

//比较name
var compare = createComparison("name");

var result = compare({ name: "d", age: 20 }, { name: "c", age: 27 });

//闭包 二
var arr=new Array();
function Person(){
	for(var i=0;i<10;i++){
		var item=function(num){
			return function(){
				return num;
			}
		}(i);
		arr.push(item);
	}
}
Person();
for( var i=0;i<arr.length;i++){
	console.log(arr[i]())
}

//异步加载js文件
function loadScript(url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";

	 //IE
	if (script.readyState) {
	    script.onreadystatechange = function () {
	        if (script.readyState == "loaded" || script.readyState == "complete") {
	            script.onreadystatechange = null;
	            callback();
	        }
	     }
	} else {
	     //非IE
	    script.onload = function () {
	        callback();
	    }
	 }
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

//判断是否为整数
function isInteger(obj) {
    return parseInt(obj, 10) === obj
}

//bind
function func(age) {
    console.log('name: ' + this.name + ', career: ' + age)
}
var person = {name: 'John McCarthy'}
var f1 = func.bind(person, 'computer scientist')
f1() // name: John McCarthy, career: computer scientist