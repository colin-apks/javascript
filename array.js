/*
	数组去重方法一
*/
Array.prototype.unique=function () {
   	//先排序
    this.sort(function(a,b){
    	return a-b;
    });
    var temp =[];
    for(var i = 0; i < this.length; i++) {
        if( this[i] !== this[i+1]) {
	       temp.push(this[i]);
	    }
        
    }
    return temp;
  
}
/*
	数组去重方法二 网上找的没看懂
*/
Array.prototype.unique = function () {
    return this.sort().join(",,").replace(/(,|^)([^,]+)(,,\2)+(,|$)/g,"$1$2$4").replace(/,,+/g,",").replace(/,$/,"").split(",");
}
var arr=[13,4,13,23,5,77,568,34,13,5];
arr.unique()

Array.prototype.unique= function() {
    var temp = {}, len = this.length;
    for(var i=0; i < len; i++)  {
        var tmp = this[i];
        if(!temp.hasOwnProperty(tmp)) {
            temp[this[i]] = "my god";
        }
    }
  
    len = 0;
    var tempArr=[];
    for(var i in temp) {
        tempArr[len++] = i;
    }
    return tempArr;
}
var arr=[13,4,13,23,5,77,568,34,13,5];
arr.unique()