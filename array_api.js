//
'use strict';
// 1. 주어진 배열을 문자열로 변환
// join('(구분자)') : 배열 -> 문자열
{
    const fruits = ['apple', 'banana', 'orange'];
    const stringFruits = fruits.join(',and ');
    console.log(`value: ${stringFruits} type: ${typeof stringFruits}`);
}
// 2. 주어진 문자열을 배열로 변환
// split('(구분자)',?return 받을 배열의 사이즈) : 문자열 -> 배열로 변환해준다.
{
    const fruits = 'apple, kiwi, banana, cherry';
    const newFruits = fruits.split(',',3);
    console.log(newFruits);
}

// 3. 배열의 순서를 거꾸로 정렬하기
// reverse() : 배열 자체를 순서를 변경해준다.
{
    const array= [1,2,3,4,5];
    const newArray = array.reverse();
    console.log(newArray); //5,4,3,2,1
    console.log(array); // 5,4,3,2,1
}

// 4.array에서 첫번째, 두번째 요소만 삭제하고 새로운 배열을 만들어라
// slice(a,b) : a이상 b미만 의 요소를 가져와서 새로운 배열을 만들 수 있다.
// splice는 배열의 원본을 건드린다.
// slice는 배열의 원본을 건드리지 않고 리턴해준다.
{
    const array = [1, 2, 3, 4, 5];
    const newArray= array.slice(2,5);
    console.log(array);
    console.log(newArray);
}
{
    class Student {
        constructor(name, age, enrolled, score) {
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88),
    ];

    // 5. 90점인 학생을 검색
    // find() 함수, callBack함수는 boolean 타입을 리턴한다. -> 조건에 맞는 것 하나만 리턴.
    // 첫번째로 찾아진 아이를 return/ 찾지 못하면 undefined
    {
        const result = students.find(function(student){
            return student.score === 90; // 90이면 True를 리턴 아니면 False를 리턴
        })
        console.log(result);
    }

    // students.forEach(function(student){
    //     if (student.score===90) {
    //         console.log(student.name);
    //     }
    // })

    // 6. 수업에 등록한 학생들만 골라서 새로운 배열을 만들어라
    // 조건에 맞는 것 여러개 리턴
    // filter : find와는 다르게 조건에 맞는 True인 것들 찾아서 여러개 리턴
    {
        let enrollStudent = students.filter((student)=> student.enrolled===true);
        console.log('enrolled:',enrollStudent);
    }
    {
        // 7. 학생들의 점수만 들어있는 새로운 배열을 만들어라
        // map: callBack 함수를 호출하여 map 내에서 가공된 데이터들을 원하는 새로운 배열에 Mapping
        const studentScore = students.map(function (student) {
            return student.score;
        })
        console.log(`학생들의 점수 배열: ${studentScore}`);
        // const studentScore= [];
        // students.forEach((student,index)=> studentScore[index]=student.score);
        // console.log(`학생들의 점수 모음 배열: ${studentScore}`);
    }
    {
        // 8. 50점 보다 낮은 점수를 가진 학생의 존재유무
        // 배열명.some: 조건에 부합하는 것이 하나라도 있다면 True를 반환
        const result = students.some(function(student){
            return student.score<50;
        })
        console.log(result); // true
        // 배열명.every: 조건에 모두 부합해야 True를 반환한다.
        const result2 = students.every(function(student){
            return student.score>=50;
        })
        console.log(result2); // false, 모든 학생이 50점을 넘지는 않는다.

    }
    {
        // 9. 모든 학생들의 평균을 구하여라
        // reduce(callBack, 시작 값) : index를 줄여나간다는 의미 -> 누적된 합
        // current는 순차적으로 순회한다.
        // previous는 시작값을 전달받는다.
       const result = students.reduce(function(previous , current ){
           return previous+current.score;
       },0)
        console.log(`result: ${result}`);
    }

    {
        // 10. 함수들의 모든 점수들을 문자열로 변환
        const result= students.map(function (student){
            return student.score;
        }).join(',');
       console.log(result);
    }
    {
        // 11. 10번의 result을 오름차순으로 정렬하라
        // sorted(a,b) a-b (<0) : 오름차순 |
        const result= students.map(function (student){
            return student.score;
        }).sort(function (a,b){return a-b;}).join();
        console.log(`result:${result}`);
    }
}
{
    // reduce 함수
    const arr = [1,2,3,4,5,6,7,8,9,10];
    let initialValue=0;
    const result = arr.reduce(function(prev, curr){
        // console.log('-----');
        // console.log(prev, curr);
        return prev+curr;
    },initialValue) // prev에는 처음에 initialValue가 전달된다.
    console.log(result);
}