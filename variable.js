'use strict';

let globalName = '전역변수';
{
    let name = 'elle';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// console.log(name);
console.log(globalName);

const count =18;
const size = 18.1;

console.log(`value: ${count} size: ${typeof count}`);
console.log(`value: ${size} size: ${typeof size}`);

const infinity = 1/0;
const negative_infinity = -1/0;
const nAn = 'not a number'/2; // 문자열/숫자 -> NaN 숫자가 아니다.

console.log(infinity);
console.log(negative_infinity);
console.log(nAn);

const a= 213421413132313213132133132131222222222222222222222222222222222222n;
console.log(`a:${a} type:${typeof a}`);


//string
const char = 'c'; // 문자
const brendan = 'brendan';//문자열
const greeting = `hi ${brendan}`; // 변수를 선언할 때도 가능하다.
console.log(`value:${char}, type:${typeof char}`);
console.log(`value:${brendan}, type:${typeof brendan}`);
console.log(`value:${greeting}, type:${typeof greeting}`);


//Boolean
const canRead = true;
const test = 3< 1; //false

console.log(`value : ${canRead}, type:${typeof canRead}`);
console.log(`value : ${test}, type:${typeof test}`);

// null
let nothing = null;
console.log(`value:${nothing}, type:${typeof nothing}`);

//undefined
let x;
console.log(`value:${x}, type:${typeof x} `);


//Symbol
const symbol1= Symbol('id');
const symbol2= Symbol('id');
console.log(symbol1===symbol2); // false

const gSymbol1 = Symbol.for ('id');
const gSymbol2 = Symbol.for ('id');
console.log(gSymbol1===gSymbol2);//true

console.log(symbol1.description);

//Dynamic
let text = 'hello';
console.log(text.charAt(0));
console.log(`value:${text}, type :${typeof text}`);

text=1;
console.log(`value:${text}, type :${typeof text}`);

text = '7'+5;
console.log(`value:${text}, type :${typeof text}`);

text = '7'/'5';
console.log(`value:${text}, type :${typeof text}`);


// console.log(text.charAt(0)); // String이 아니게 됨 -> Error
// JS는 Runtime 도중 타입이 변경되기 때문

//Object
const kyungwon ={
    name : 'kyungwon',
    age :25,
};
console.log(kyungwon);
kyungwon.age = 26;
console.log(kyungwon);