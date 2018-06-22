'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let const
// let [a,b,c] = [1,3,6];
// console.log(a,b,c); // 1 3 6
/*
let [a,[b,c],d] = ['a',[1,3],'b'];
console.log(a,b,c,d); // a 1 3 b
*/

/*
let [a,b = 3] = ['hello'];
console.log(a,b);
*/

/*
let {bar,foot} = {bar:"hello",foot:"es6"}
console.log(bar+foot);

let t1;
({t1} = {t1:1024});
console.log(t1);
*/

/*
let [a,b,c,d,e,f] = 'hello';
console.log(a); //h
console.log(b); //e
console.log(c); //l
console.log(d); //l
console.log(e); //o
*/

/*
let arr1 = ['a','b','c'];
let arr2 = [...arr1];
arr2.push('d');
console.log(arr1);
console.log(arr2);
*/

/*
let str = '技术小哥';
let blog = `我要成为很厉害的${str}`;
document.write(blog);
*/
/*
let a = 1;
let b = 2;
let result = `${a+b}`;
console.log(result);

let str = '技术小哥';
let blog = '我要成为很厉害的技术小哥';
// console.log(blog.indexOf(str)> 0);
// console.log(blog.includes(str));
console.log(blog.startsWith(str));
console.log(blog.endsWith(str));
*/

/*
let str = '技术小哥';
console.log(str.repeat(4)); // 技术小哥技术小哥技术小哥技术小哥
*/

// Binary 二进制  Octal 八进制
/*
let binary = 0B110110;
        // 1024 256 128 64 32 16 8 4 2 1                    
console.log(binary);
let octal = 0O666;
console.log(octal);
*/

/*
let json = {
    '0' : 'html',
    '1' : 'css',
    '2' : 'js',
    '3' : 'vue.js',
    length : 4
}

let arr = Array.from(json);
console.log(json);
console.log(arr);
*/

/*
// for...fo 方法
let arr = ['Tom','Jery','Bob','Alex','kara'];
for(let [index,val] of arr.entries()){
    console.log(index+':'+val);
}

let list = arr.entries();
console.log(list);
console.log(list.next().value);
console.log('----------------')
console.log(list.next().value)
console.log('****************')
console.log(list.next().value);
console.log('================')
*/

/*
let json = {
    a: 'Tom',
    b: 'Jery'
}
function fn({a,b}){
    console.log(a,b);
}
fn(json); // Tom Jery
*/

/*
let arr = ['Tom','Jery','Bob','Alex'];
function fun(a,b,c,d){
    console.log(a,b,c,d);
}
fun(...arr);
*/

/*
 // 同值相等    is严格相等
console.log(-0 === +0); // true
console.log(NaN === NaN); // false
console.log(Object.is(-0,+0)); // false
console.log(Object.is(NaN,NaN)) // true
*/

// let a = {a:'Tom'};
// let b = {b:'Jery'};
// let c = {c:'Bob'};
// console.log(Object.assign(a,b,c));

/*
let pro = new Proxy({
    add: function(val){
        return val + 100;
    },
    name: 'I am frontend'
},{
    get:function(target,key,property){
        console.log(target);
        return target[key];
    },
    set: function(target,key,value,receiver){
        console.log(`setting = ${key} = ${value}`);
        return target[key] = value;
    }
})

console.log(pro.name);
pro.name = '前端';
console.log(pro.name);
*/

/*
status = 1;
function step1(resolve,reject){
    console.log('第一步....')
    if(status == 1){
        resolve('第一步完成')
    }else{
        reject('第一步错误')
    }
}

function step2(resolve,reject){
    console.log('第二步....')
    if(status == 1){
        resolve('第二步完成')
    }else{
        reject('第二步错误')
    }
}

function step3(resolve,reject){
    console.log('第三步....')
    if(status == 1){
        resolve('第三步完成')
    }else{
        reject('第三步错误')
    }
}

new Promise(step1).then(function(val){
    console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
})
*/

var Codes = function () {
    function Codes() {
        _classCallCheck(this, Codes);
    }

    _createClass(Codes, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name(val) + ': skill-' + val);
        }
    }]);

    return Codes;
}();

var coding = new Codes();
coding.name('Tom');
coding.skill('web');
