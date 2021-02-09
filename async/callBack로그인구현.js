class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if (id === 'ellie' && password === 'dream' || id === 'coder' && password === 'academy'){
                onSuccess(id);
            }else {
                onError(new Error('조회된 ID가 없습니다.'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user === 'ellie'){
                onSuccess({name : 'ellie', role: 'admin'});
            }else {
                onError(new Error(`${user}님 께서는 접근 권한이 존재하지 않습니다.`));
            }
        },1000);
    }
}

const id = prompt('ID를 입력하세요');
const password = prompt('PassWord를 입력하세요');

const newUser = new UserStorage();
newUser.loginUser(id , password,
    (user)=>{
        newUser.getRoles(user, (userId)=>{
            alert(`${userId.name} 님! ${userId.role}이 있습니다!`);
        }, (error)=>{ // 접근 권한이 없습니다.
            alert(error);
        });
    },
    (error)=>{alert(error)}); // 조회 가능한 ID가 없습니다.