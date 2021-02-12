// 콜백 헬 -> 프로미스 체이닝
'use strict';
class UserStorage {
    loginUser(id, password) {
        return new Promise(((resolve, reject) => {
            setTimeout(()=>{
                if (id === 'ellie' && password === 'dream' || id === 'coder' && password === 'academy'){
                    resolve(id);
                }else {
                    reject(new Error('조회된 ID가 없습니다.'));
                }
            },2000);
        }))
    }

    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (user === 'ellie'){
                    resolve({name : 'ellie', role: 'admin'});
                }else {
                    reject(new Error(`${user}님 께서는 접근 권한이 존재하지 않습니다.`));
                }
            },1000);
        })
    }
}

const id = prompt('ID를 입력하세요');
const password = prompt('PassWord를 입력하세요');

const newUser = new UserStorage();
newUser.loginUser(id , password) // 로그인 성공하면
.then((user) => newUser.getRoles(user)) // id를 getRoles에 전달
.then((message)=> alert(`${message.name}님! 당신은 ${message.role}이 있습니다.`))
.catch(alert);