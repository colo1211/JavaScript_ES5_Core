'use strict';
// 1. 문자열 합치기
console.log('my'+' cat');
console.log('1'+2);
console.log(`string litaral: 1+2 = ${1+2}`);

// 2. 숫자연산자
console.log(5%2); // 나머지 값
console.log(5**2); //  제곱

// 3. 증감연산자
let count = 2;
const preIncrement = ++count;
// counter = counter+1;
console.log(`count:${count}, preIncrement:${preIncrement}`);

const postIncrement = count++;
console.log(`count:${count}, postIncrement:${postIncrement}`);

// 4. 할당연산자
let x=3;
let y=6;

x+=y;// x=x+y; 9
x-=y;// x=x-y; 3
x*=y; // x=x*y; 18
x/=y; // x=x/y; 3
console.log(x);

// 5. 논리연산자 ||, &&, !

const value1= true;
const value2= 4<2 ;

console.log(`or: ${value1||value2||check()}`); // 하나라도 true면 true

function check(){
    for(let i =0; i<10; i++){
     console.log('$'); // $ 10번 출력(의미X)
    }
    return true;  // 결국 true 출력
}

console.log(`and : ${value1&&value2&&check()}`); // false

// 6. Equality == , ===
const stringFive = '5';
const numberFive = 5;

console.log(stringFive==numberFive);
console.log(stringFive === numberFive);

// 객체

const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); // true

// Equality 연습

console.log(0==false); // true, 0은 false
console.log(0===false); // false, 0은 number 타입
console.log(''==false); // true, ''은 false
console.log(''===false); // false, '' 은 String 타입
console.log(null==false); // true, null은 false
console.log(null===false);//false

// Ternary 연산자: ?
// 조건? true:false
const name = 'ellie';
console.log(name === 'ellie' ? 'yes':'no');

//Switch
const browser = 'Chrome';
switch(browser){
    case 'IE':
        console.log('goaway');
        break;
    case 'Chrome':
    case 'firefox':
        console.log('love you!');
        break;
    default:
        console.log('hello');
        break;
}

// Loops
// While : 조건이 맞을 때만 실행한다.
let i =3;
while(i>0){
    console.log(i);
    i--;
}

// i는 현재 0
//do-while: 조건이 맞던 틀리던 일단 한번 실행한다.
do {
    console.log(i)
    i--;
}while(i>0);

//for문
for (let i =3; i>0;i--){
    console.log(i);
}

