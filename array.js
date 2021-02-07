'use strict';

// Array 배열

//1. 배열 선언
const arr1 = new Array();
const arr2= [1,2];

// Index 위치를 이용하여 삽입/ 삭제/ 검색이 핵심

//2. Index 위치
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]); // 가장 마지막 인덱스

// 3. Loop
//1.
console.log('for of');
for (let x of fruits){
    console.log(x);
}
//2.
console.log('for 문');
for (let x=0;x<fruits.length;x++){
    console.log(fruits[x]);
}
//3.
console.log('forEach문');
fruits.forEach((value)=> console.log(value));


//4. 삽입, 삭제, 복사
// 맨 뒤에서 아이템 넣기 : push(' ')
fruits.push('melon');
fruits.push('peach');
console.log('넣은 후',fruits);
// 맨 뒤에서 아이템 하나를 빼기 : pop();
fruits.pop();
fruits.pop();
console.log('뺀 후',fruits);

// 앞에서 부터 원하는 데이터를 넣기 : unshift(' ', ' ');
fruits.unshift('mango');
console.log(fruits);
// 앞에서 부터 하나씩 데이터를 빼기 : shift();
fruits.shift();
console.log(fruits);
// shift, unshift는 매우 느리다. 안쓰는 것을 추천!

//앞부분과 뒷부분에서 삭제/추가 가능
// 지정된 위치에서 추가/삭제 가능? -> splice를 사용하면 가능하다.
fruits.push('strawberry', 'peach','lemon');
console.log(fruits);

// splice: 시작 인덱스, 몇개 지울 건지 갯수
// fruits.splice(1); // 갯수를 입력하지 않으면 시작 인덱스로부터 모든 것을 삭제한다.
fruits.splice(1,2);
console.log(fruits);

// splice를 통해서 추가도 가능
fruits.splice(1,1,'watermelon','melon'); // 인덱스 1에 위치한 peach를 삭제하고 수박과 멜론을 삽입
console.log(fruits);

// 2개의 배열 합치기, concat
const fruits2 = ['mogwa','cocoa'];
const newFruits= fruits.concat(fruits2);
console.log(newFruits); //'apple', 'watermelon', 'melon', 'lemon', 'mogwa','cocoa'

// Searching -> 배열.indexOf
// 만약 해당하는 값이 없다면 -1이 출력된다.
// find index
console.log(fruits);
console.log(fruits.indexOf('apple')); // 0번째 Index 에 위치함을 확인 할 수 있다.

// lastIndexOf 만약 apple이 2개라면 마지막에 있는 apple의 Index를 반환해준다.
fruits.push('apple');
console.log('마지막 사과',fruits.lastIndexOf('apple'));


// 배열명.includes(요소) -> 배열 내 존재하면 true, 없으면 false로 반환해준다.
console.log(fruits.includes('apple'));

