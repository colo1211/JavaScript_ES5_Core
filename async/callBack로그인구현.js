class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (id === 'ellie' && password==='dream' || id === 'coder' && password === 'academy'){
                onSuccess(id);
            }else {
                onError(new Error('조회되는 ID가 없습니다.'));
            }
        },2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'});
            }else {
                onError(new Error('접근권한이 존재하지 않습니다.'));
            }
        },1000);
    }
}

const id = prompt('id를 입력하세요!');
const password = prompt('password를 입력하세요!');
const newUser= new UserStorage();

newUser.loginUser(id, password,
    (user)=>{
    newUser.getRoles(user,(userInfo)=> {
        console.log(userInfo);
        alert(`${userInfo.name}님!, ${userInfo.role} 권한이 있습니다!`);
    }, (error)=>{alert(error)});
}, (error)=>{alert(error)});