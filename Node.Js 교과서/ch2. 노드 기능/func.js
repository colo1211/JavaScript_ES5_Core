const value = require('./var'); // 1. './': 현재폴더 , 2. '../': 부모폴더 , 3. '../../' : 조상폴더
console.log(value);

// 다른 파일에 있는 변수들을 모듈화 해서 가져오기
// 방법 1. 노가다
// const odd = value.odd; // 홀수
// const even = value.even; // 짝수

// 방법 2. 구조분해할당
const {odd, even}= value;

function checkOddOrEven(number){
    if (number%2 ===1) return odd;
    else return even;
}

console.log(checkOddOrEven(2));

// module.exports 는 파일에서 단 한번만 사용이 가능하다.
module.exports= {
    checkOddOrEven
};