const {odd, even}= require('./var');
const checkOddOrEven= require('./func').checkOddOrEven; // 객체로 온 것 중에서 함수만

console.log(checkOddOrEven(10));

// 모듈화 : 파일들 간의 중복을 제거
// module.exports = {}, 파일 당 한번만 가능
// require로 받아온다.