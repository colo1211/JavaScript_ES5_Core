'use strict';
//async & await
// promise를 깔끔하게 사용 할 수 있는 방법

// 1. async
// function fetchUser(){
//     // 네트워크로 부터 요청받아오는데 10초가 걸리는 코드 있다고 가정
//     return new Promise((resolve, reject) => {
//       resolve('ellie');
//     })
// }

async function fetchUser(){
    // 네트워크로 부터 요청받아오는데 10초가 걸리는 코드 있다고 가정
    return 'ellie';
}
// promise를 사용하지 않고도 자동적으로 promise와 역할을 동일하게 수행하는 'async', 함수명 앞에 async만 붙여주면 된다.

const user = fetchUser(); // 비동기 처리를 하지 않으면 네트워크가 지연되면 아래에 존재하는 코드들은 계속 대기(비효율적)
user.then(console.log);

// 2. await : async가 붙은 함수 내에서만 사용 가능하다.
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms)); // ms초가 지나면 resolve를 호출
}

async function getApple(){
    await delay(2000); // await을 쓰게 되면 delay가 끝날 때 까지 apple을 return 하지 않고 기다린다.
    // throw 'error'; // 에러 발생
    return 'apple'; // 3초 후 사과 리턴
}

async function getBanana(){
    await delay(1000);
    return 'banana'; // 3초 후 바나나 리턴
}
// 위의 코드와 동일
// function getBanana(){
//     return delay(3000).then(()=>'banana');
// }

// // Promise 지옥...
// function pickFruits(){
//     return getApple().then(apple=>{
//             return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
//
// pickFruits().then(console.log);

async function pickFruits(){ // try, catch 를 통해서 Error Handling도 가능
    const apple = await getApple(); // 3초
    const banana = await getBanana(); // 3초
    return `${apple}, ${banana}`; // 합해서 6초 -> 병렬적으로 처리가 필요할 수 있다.
}

pickFruits().then(console.log);


// 3. useful Promise APIs

// Promise.all : 병렬적으로 처리, 배열로 간주된다.
function pickAllFruits(){ // 3초
    return Promise.all([getApple(),getBanana()])
        .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);


// 첫번째 과일만
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}
pickOnlyOne().then(console.log); // 바나나 출력(바나나 1초, 사과 2초)