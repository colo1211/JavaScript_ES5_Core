// JSON

// 1. Object -> JSON(string) : stringify (객체를 문자열화)
// stringify(Object)
let json = JSON.stringify(true);
console.log(`json:${json}, type: ${typeof json}`);//json:true, type: string

json = JSON.stringify(['apple','banana']); //["apple","banana"]
console.log(json);


const rabbit =  {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(), // Window API 로서, 그때의 시간을 담아준다.
    jump : ()=> {
        console.log(`${this.name} can jump!`);
    }
}
console.log(rabbit);
json = JSON.stringify(rabbit);
console.log(`rabbit JSON ${json}`);
//rabbit JSON {"name":"tori","color":"white","size":null,"birthDate":"2021-02-08T07:24:10.266Z"}
// JSON 자료형에 (jump) 함수는 제외되고 , symbol 자료형도 제외된다.

// 원하는 것만 변경
json = JSON.stringify(rabbit,['name','color']); // 뒤의 콜백함수를 이용하여 원하는 프로퍼티만 JSON으로 변환 가능하게 할 수 있다.
console.log(`rabbit JSON ${json}`);
//rabbit JSON {"name":"tori","color":"white"}

// callBack 함수를 활용
// json = JSON.stringify(rabbit,(key,value)=>{
//     console.log(`key:${key}, value:${value}`);
//     return value;
// })
// key:, value:[object Object]
// json.js:34 key:name, value:tori
// json.js:34 key:color, value:white
// json.js:34 key:size, value:null
// json.js:34 key:birthDate, value:2021-02-08T07:30:37.360Z

json = JSON.stringify(rabbit,(key,value)=>{
    return key === 'name' ? 'ellie' : value; // 만약 key가 name인 것이 있다면 그 값은 ellie로 변경
})
console.log(json);
//{"name":"ellie","color":"white","size":null,"birthDate":"2021-02-08T07:32:55.394Z"}

// 2. JSON(string) -> Object : parse (parsing: 문자열을 파스트리(객체)로 만드는 과정)
// parse(JSON)
console.clear();
json = JSON.stringify(rabbit); // 객체를 문자열(JSON)화
let obj = JSON.parse(json); // JSON(문자열)을 다시 객체(Object)화
console.log(obj);
// 다시 객체로 변경됨 {name: "tori", color: "white", size: null, birthDate: "2021-02-08T07:34:59.936Z"}
rabbit.jump();
// obj.jump(); // 객체를 JSON으로 변환 할 때는 함수, 심볼 자료형을 포함 X 따라서, JSON을 객체로 변경했을 때 함수는 존재하지 않는다.

console.log(obj.birthDate); // 처음 토끼 객체에서는 new Date() 라는 함수
// rabbit(객체) -> json(JSON) -> obj(객체) : 다시 변환 했을 때는 json 에서 이미 new Date()는 문자열로 굳어졌기 때문에 obj에 문자열로 전달
// 따라서, parse 에서 세밀하게 조종한다.
obj = JSON.parse(json,(key,value)=>{
    return key === 'birthDate' ? new Date(): value; // new Date() 대체하기 (문자열 -> 다시 new Date)
})
//
console.log(obj);
console.log(obj.birthDate.getDate()); // 8일이니까 8이 출력