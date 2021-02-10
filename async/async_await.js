'use strict';
//async & await
// promise를 깔끔하게 사용 할 수 있는 방법, 동기적으로 실행되는 것 처럼 보이게 만들어주는 도구(syntactic sugar)

// 1. async 비동기
// function fetchUser(){
// //     사용자의 데이터를 백엔드로부터 요청받아오는데 10초가 걸리는 코드 있다고 가정
// //     Promise: 언제 데이터가 들어 올지 모르지만 유저의 데이터가 준비되는 대로 then을 붙여놓으면 그리로 전송해줄께!
//     return new Promise((resolve, reject) => {
//       resolve('ellie');
//     })
// }

// 위의 Promise코드와 동일(자동 변환) async를 쓰면 자동으로 Promise로 변환된다.
async function fetchUser(){
    // 네트워크로 부터 요청받아오는데 10초가 걸리는 코드 있다고 가정
    return 'ellie';
}
const user = fetchUser(); // 비동기 처리를 하지 않으면 네트워크가 지연되면 아래에 존재하는 코드들은 계속 대기(비효율적)
user.then(console.log);//ellie
// promise를 사용하지 않고도 자동적으로 promise와 역할을 동일하게 수행하는 'async', 함수명 앞에 async만 붙여주면 된다.

// 2. await : async가 붙은 함수 내에서만 사용 가능하다.
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms)); // ms초가 지나면 resolve를 반환
}

async function getApple(){
    await delay(2000); // await을 쓰게 되면 delay가 끝날 때 까지 apple을 return 하지 않고 기다린다.
    // throw 'error'; // 에러 발생
    return 'apple'; // 2초 후 사과 리턴
}

async function getBanana(){
    await delay(1000);
    return 'banana'; // 1초 후 바나나 리턴
}
// 위의 코드와 동일 // 1초 후에 바나나를 리턴
// function getBanana(){
//     return delay(1000).then(()=>'banana');
// }



// 과일들을 한번에 따오는 함수
// function pickFruits(){
//     return getApple().then(apple=>{
//             return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }
//
// pickFruits().then(console.log);
// // Promise 지옥...


// async를 활용하면 아래와 같이 개선 가능하다.
async function pickFruits(){ // try, catch 를 통해서 Error Handling도 가능
    const apple = await getApple();// 1초
    const banana = await getBanana(); // 2초
    return `${apple}, ${banana}`; // 합해서 3초 -> 병렬적으로 처리가 필요할 수 있다.
}

pickFruits().then(console.log);

// 병렬 처리 방법 1
// async function pickFruits(){ // try, catch 를 통해서 Error Handling도 가능
//     const applePromise = getApple(); // 미리 받아두고
//     const bananaPromise = getBanana();
//     // 한번에 처리
//     const apple = await applePromise;// 1초
//     const banana = await bananaPromise; // 2초
//     return `${apple}, ${banana}`; // 합해서 3초 -> 병렬적으로 처리가 가능하다.
// }

// 병렬 처리 방법 2 API 활용 Promise.all() -> 모든 프로미스를 받을 때까지 기다려 주는 API (배열로 처리 가능, 병렬처리)

// 3. useful Promise APIs
// Promise.all : 병렬적으로 처리, 배열로 간주된다.
function pickAllFruits(){ // 3초
    return Promise.all([getApple(),getBanana()]) // 두개가 다 받아지면!
        .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);

// 첫번째 과일만
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}
pickOnlyOne().then(console.log); // 바나나 출력(바나나 1초, 사과 2초)