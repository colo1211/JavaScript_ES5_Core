'use strict';
class UserStorage {
    loginUser(id,password){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (id === 'ellie' && password === 'dream' || id === 'coder' && password === 'academy'){
                    resolve(id);
                }else{
                    reject (new Error('조회할 수 없는 ID입니다.'));
                }
            },2000);
        })
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if (user === 'ellie'){
                    resolve({name:'ellie',role:'admin'});
                }else {
                    reject (new Error('관리 접근 권한이 없습니다.'));
                }
            },1000);
        })
    }
}

const id = prompt ('ID를 입력하세요');
const password = prompt('password를 입력하세요');
const userNew = new UserStorage();

userNew.loginUser(id,password)
     .then(userNew.getRoles) // .then((user)=>userNew.getRoles(user))
     .catch(alert) // '조회할 수 없는 ID입니다.' , .catch((user)=> alert(user)) // 생략가능
     .then((userFile)=>{
         alert(`${userFile.name}님! ${userFile.role}이 있습니다!`);
     })
     .catch(alert); // '접근권한이 없습니다!'