'use strict';
function printHello(){
    console.log('hello');
}
printHello(); // 호출

function log(메세지){
    console.log(`value: ${메세지}, 타입: ${typeof 메세지}`);
}

log ('hello@');
log(3);

function changeName(obj){
    obj.name = 'coder';
}

const ellie = {
    name : 'ellie'
};
console.log(ellie);
changeName(ellie);
console.log(ellie);
//

function showMessage(message , from = 'unknown'){
    console.log(`${message}, by ${from}`)
}

showMessage('hi','where');

function printAll(...args){
    console.log(args);
    //1. for 문
    // for (let x=0;x<args.length;x++){
    //     console.log(args[x]);
    // }
    //2. of 문
    // for(let x of args){
    //     console.log(x);
    // }
    //3. forEach문
    // args.forEach((v)=> console.log(v));
}
printAll('kim','kyung','won'); // 배열로 들어가게 된다.

let 전역변수 = 'global'; // 전역변수
function printMessage(){
    let message = 'hello'; // 지역변수
    console.log(message);
    console.log(전역변수);
    function printAnother(){
        console.log(message);
        let anotherMessage = 'hello';
    }
    // console.log(anotherMessage); // Error : 밖에서는 안을 볼 수 없기 때문이다.
}
printMessage();


function sum(a,b){
    return a+b;
}

const result = sum(1,3);
console.log(result);
console.log(`sum : ${sum(1,2)}`);

const print = function(){ // Anonymous Function (익명함수)
    console.log('print');
};
const print_2 = function print(){ // Named Function (이름함수)
    console.log('print_2');
};

print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1,3));

function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function(){// 익명함수
    console.log('yes');
}
const printNo = function print(){ // 이름함수
    console.log('No');
}
randomQuiz('love you',printYes,printNo);
randomQuiz('1',printYes,printNo);

// Arrow Function

const simplePrint = function(){
    console.log('simple print!');
}

const simplePrint_2 = () => console.log('simple print!');

simplePrint_2();

const add = function (a,b){
    console.log(a+b);
}

const minus= (a,b)=>{ console.log (a-b)} ;
const devide = (a,b)=>{console.log(a/b)};
const multiply = (a,b)=>{console.log(a*b)};
const remainder = (a,b) =>{console.log(a%b)} ;

const add_2 = (a,b) => a+b;

console.log(add(1,1));
console.log(add_2(1,2));
//
const calculate = (command, a,b)=> {
    switch (command) {
        case '+': add(a,b); break;
        case '-': minus(a,b); break;
        case '*' : multiply(a,b); break;
        case '/' : devide(a,b); break;
        case '%' : remainder(a,b); break;
        default:
            throw Error('명령자 제대로 된거 입력해!');

    }
}
console.log(calculate('$',100,25));