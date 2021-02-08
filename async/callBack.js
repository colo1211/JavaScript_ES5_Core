'use strict';

// 자바스크립트는 동기적(Synchronous)인 언어(순차적 실행)
// Hoisting(호이스팅) 이후에 순차적으로 실행되는 언어
// Hoisting : 자동적으로 변수 선언(var) or 함수 선언이 가장 위로 자동으로 올라가게 된다.

// 비동기적 콜백
function printWithDelay(print,timeout){ // 함수의 선언은 Hoisting 되기 때문에 가장 최상단으로 올라간다.
    setTimeout(print,timeout);
}

// 동기적(즉각적) 콜백
function printImmediately(print){ // 함수의 선언은 Hoisting 되기 때문에 가장 최상단으로 올라간다.
    print();
}

console.log('1'); // 동기
setTimeout(()=> console.log('2'),1000); // 비동기, 콜백(나중에 다시 불러줘!), 브라우저 API이기 때매 브라우저에게 전달, 1초 후 실행
console.log('3'); // 동기
printImmediately(()=> console.log('hello')); //동기, 함수도 객체이기 때문에 매개변수로 전달이 가능하다.
printWithDelay(()=>console.log('비동기 콜백'),2000); // 비동기


// 콜백 지옥 체험 , 백엔드와 통신한다고 가정
// 클래스 역할
// 1. 사용자에게 ID와 PW를 입력받아온다.
// 2. Server 로그인
// 3. Role 부여
// 4. 사용자의 Object를 출력

class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=> {
            if (id === 'ellie' && password === 'dream' ||
            id === 'coder' && password === 'academy'){
                onSuccess(id); // ID와 PW가 일치한다면 onSuccess를 콜백으로 불러와준다.
            }else {
                onError(new Error('404 not Found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }

}

const userStorage = new UserStorage();
const id = prompt('아이디를 입력하세요');
const password = prompt('비밀번호를 입력하세요');
userStorage.loginUser(id, password,
    (user)=>{
        userStorage.getRoles(user,(userWithRole)=>{
            alert(`${userWithRole.name}, 님 ${userWithRole.role}의 권한이 있습니다.`);
        }, (error)=>{
            console.log(error);
        })
    } ,
    (error) => console.log(error)
);