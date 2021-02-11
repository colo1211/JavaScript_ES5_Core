'use strict';
// 변수를 만든 것을 다른 파일에서 사용이 가능함.
const odd= '홀수입니다.';
const even = '짝수입니다.';

// 다른 파일에서 쓰고 싶은 파일을 담아서 넘겨준다.
module.exports={ // 객체 형식으로 넘겨준다. (2개 이상)
    odd, // odd : odd,
    even, // even : even
};
