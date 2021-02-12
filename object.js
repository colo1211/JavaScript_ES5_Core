'use strict';

// 객체 아닐 때
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}
//
// 객체일때
const ellie = {name : 'ellie', age : 35};
function printf(person){
    console.log(person.name);
    console.log(person.age);
}
printf(ellie);

ellie.hasJob = true; // 동적 타입 언어이기 때문에 선언 이후에 추가가 가능 But 유지보수 힘듦

console.log(ellie);

delete ellie.hasJob; // 동적 타입이기 때문에 나중에 삭제도 가능

console.log(ellie);

//2. Computed Properties
console.log(ellie.name);
ellie['hasJob']=true; //
console.log(ellie['name']); // 배열에서 데이터를 받아오는 것처럼 가능 (단, String Type으로!)
console.log(ellie);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie,'name');

const person1 = {name: 'bob',age:2};
const person2 = {name: 'steve',age:3};
const person3 = {name: 'jobs',age:4};

// function makePerson(name,age){
//     return {
//         name,
//         age,
//     };
// }

// Constructor Function(생성자 함수) , Factory Pattern(팩토리 패턴)
function Person(name, age){
    // this ={};
    this.name = name;
    this.age = age;
    // return this;
}
const person4 = new Person('kim',10);
console.log(person4);

console.log('name' in Person); // true

// for in(객체) vs for of(배열)
for (let key in person1){ // 객체 내의 key 값을 사용하고 싶을 때
    console.log(key); // name, age
}

const arr = [1,2,3,4,5];
for (let i in arr){
    console.log(i);
}

// 참조 vs 복사
const user = {name : 'ellie', age : 20};
const user2 = user; // 객체는 참조관계를 가진다.
user2.name = 'coder'; //user2를 변경하면 user value 도 변경된다.
console.log(user.name);

// 복사방법 1.
const user3 ={};
for (let x in user){
    user3[x] = user[x];
}

user3.name = 'kim';
console.log(` user3의 이름을 Kim 으로 변경하였습니다. ${user3}`);
console.log(`그런데도 user는 user3과 참조관계가 아닌 복사 관계이기 때문에 이름이 그대로 ${user.name} 입니다.`);

// // 복사방법 2.
// const user4 ={};
// Object.assign(user4, user3);
// console.log(user4);

const user4 = Object.assign({},user3);
console.log(user4);

const fruit1 = {color:'red'};
const fruit2 = {color:'yellow',size: 'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed); // yellow, big
