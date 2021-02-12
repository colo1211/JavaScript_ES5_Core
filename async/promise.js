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
        resolve('ellie'); // 성공! , 당장 실행 X , then으로 호출할 때 수행
        // reject(new Error('no found network'));
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
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve (1)
    },1000)
})

fetchNumber
    .then((value)=>value*2) //((value)=>{return value*2}) //2
    .then((value)=>value*3) //((value)=>{return value*3}) //6
    .then((value)=>{ // 6이 전달 1초 후 6-1을 전달 , then에서는 값을 전달해도 되고 새로운 Promise를 리턴해도 된다.
        return new Promise(((resolve, reject) => {
            setTimeout(()=>resolve(value-1),1000)
        }))
    })
    .then((value)=>console.log(value)); // 5 출력

// 4. Error handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('hen')},1000);
    })

const getEgg = (hen)=>
    new Promise(((resolve, reject) => {
        setTimeout(()=>reject(new Error(`${hen} + egg`)),1000);
        }))

const cook = (egg) =>
    new Promise(((resolve, reject) => {
        setTimeout(()=>resolve(`${egg} + cook`),1000);
    }))

getHen()
    .then(getEgg)// .then(hen => getEgg(hen)) , 한가지만 받아서 전달하는 경우 생략 가능 (암묵적으로)
    .then((egg)=> cook(egg))
    .catch(error => { return 'bread';}) // 비록 달걀을 받아오는 것을 실패했지만 에러가 발생하면 빵으로 리턴해서 최종적으로 에러가 안나게끔
    .then(cook)//.then(egg=> cook(egg))
    .then(value => console.log(value))
    .catch(console.log); // 제일 마지막에 에러 처리를 위한 catch













