'use strict';

// Promise는 비동기적 수행을 할 때 CallBack함수 대신에 유용하게 사용 할 수 있는 JS의 Object
// Promise Point 1.State(상태)  2.Producer(제공자)/Consumer(소비자)
// 1. State : pending(수행중, 보류중) -> fullfilled(성공적으로 완료) or rejected(거부)
// 2. Producer vs Consumer

// 1. Producer
// 새로운 Promise를 만들때, (바로, 자동적으로) 동기적으로 실행된다.
const promise = new Promise((resolve, reject) => {
    // heavy한 일을 진행 ex) 네트워크로 부터 데이터를 받아옴 (비동기적으로 진행)
    console.log('doing Something');
    setTimeout(()=>{
        // resolve('ellie'); // 성공! , 당장 실행 X , then으로 호출할 때 수행
        reject(new Error('no found network'));
    },2000);
});

// 2. Consumers : then, catch, finally
promise
    .then((value)=>{ // value에는 resolve(then) 콜백함수에서 전달된 값이 들어가게 된다.
    console.log(value);
    })
    .catch((value)=>{ // value에는 reject(catch) 콜백함수에서 전달된 값이 들어가게 된다.
        console.log(value);
    })
    .finally(()=>{ // 성공 실패와 상관없이 프로미스에 붙어서 출력 가능.
        console.log('프로미스 끝!');
    })
//Chaining -> api들을 묶고 묶어서 사용한다.

// 3. Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1);
    },1000);
})

fetchNumber
    .then((value)=> value*2) // 2
    .then((value)=> value*3) // 6
    .then((value)=> {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(value-1)
            },1000);
        })
    }) // 5
    .then((value)=>console.log(value)); // 5 출력

// 4. Error handling
