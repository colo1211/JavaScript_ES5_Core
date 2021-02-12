'use strict';
// 1. Class
class Person{
    //constructor : 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //
    speak(){
        console.log(`${this.name}, hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name,ellie.age);
ellie.speak();

//2. Getter , Setter
class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this.newAge;
    }

    set age(value){ // set은 값을 설정해야 하기 때문에 value를 받아와야 한다.
        // if (value<0){
        //     throw Error('0보다 작은 값은 나이가 될 수 없습니다.');
        // }
        this.newAge = value<0 ? 0: value; // 0보다 작으면 0을 출력하고 아니라면 value를 출력
    }
}
const user1 = new User('김','경원',-1);
console.log(user1);

//3. public, private

class Experiment{
    publicField = 2;
    #privateField =0; // constructor을 쓰지 않고 #을 붙이면 private 변수로 설정된다. 외부에서 읽을수도, 변경할 수도 없다.
}

const experiment = new Experiment();
console.log(`public, private: ${experiment.publicField}`);
// console.log(`public, private: ${experiment.privateField}`);

// 4. static

class Article{
    static publisher = 'kyung won';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(this.publisher);
    }
}

const 기사1= new Article(1);
const 기사2= new Article(2);
// console.log(기사1.publisher); // undefined
console.log(Article.publisher); // static은 객체에 할당 되는 것이 아닌 클래스 자체에 할당된다.
Article.printPublisher(); // kyung won

// 5. 상속

class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(` 그릴게요! ${this.color} 색의 도형을!`);
    }

    getArea(){
        return this.height * this.width;
    }
}

class Triangle extends Shape{ // 상속: Rectangle 클래스는 Shape의 상속을 받는다. (재사용 가능)
    draw() {
        super.draw(); // 부모 클래스를 호출한다. super.
    }
    getArea() { // overwriting :덮어쓰기 -> 필요한 함수만 새로 재정의
        return (this.width*this.height)/2;
    }
};


const 삼각형 = new Triangle(10,10,'red');
console.log(삼각형.getArea(), 삼각형.draw());

//6. A instanceof B : A 객체는 B클래스를 이용하여 생성되었다.
console.log(삼각형 instanceof Shape); //True
console.log(삼각형 instanceof Triangle); //True
console.log(삼각형 instanceof Object); //True