/*
    {K:V, K:V, K:V, K:V, K:V, K:V...} 형태

    - (중요) Key는 무조건 문자열(string)
        -> "Key", 'key', key(""''같은 따옴표 작성 안해도 string으로 인식)

 */

// {} 객체 생성 + 다루기

const btn1 = document.querySelector('#btn1');

btn1.addEventListener("click", () => {

    // 1. 객체 생성
    //const product = {}; // 비어있는 객체 생성

    const product = {
      "productName" : "갤럭시북4프로",
      'brand' : "samsung",
      price : 2000000
    }; 
    console.log(product);

    // 2. 객체 내 key 값을 이용해 원하는 value 얻어오기

    // 1) 객체명.key
    console.log(product.productName, product.brand, product.price);
    // 2) 객체명["key"]
    console.log(product["productName"], product["brand"], product["price"]);

    // 3) 객체에 K:V 추가
    // 원하느 key 생각해두고
    // 객체명.key = value;
    // 객체명["key"] = value;   
    product.color = ["black", "red", "silver"];
    console.log(product);
    console.log(product.color[1]);

    product["storage"] = ["256GB", "512GB", "1TB"];
    console.log(product);
    
    // 4. 특정 key의 value 수정하기
    product.price = 1800000;
    console.log(product);

    delete product.productName;
    console.log(product);
});

/* method(메서드) */
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {

    const smartPhone = {}; // 비어있는 객체 생성
  
    smartPhone.modelName = "아이폰15프로맥스";
    smartPhone.price = 1700000;

    console.log(smartPhone);

    // 메서드(객체의 기능(함수)) 추가
    smartPhone.information = function(){
        const brand = "사과";
        /* 
            this 참조 변소
            - 작성되는 위치에 따라서 의미가 다름
            ex) <button onclick="testFn(this)"
            //  -> 이 때의 this는 클릭된 요소(버튼)

            ex) 객체명.메서드명 = function(){
                this.변수명 = "값";

                -> 이 때 this == 메서드가 작성된 객체
            }
         */
        console.log("모델명 : ", this.modelName);
        console.log("가격 : ", this.price);
        console.log("브랜드 : ", brand);

    }
    // 메서드 수행
    smartPhone.information();
    
    smartPhone.call = function(phoneNumber){
        console.log(`${phoneNumber}로 전화 거는 중.....`);
    }
    smartPhone.call('123412341234');

    // (참고) 메서드 생성 시 화살표 함수 + this 사용
    // -> 화살표 함수 내에서 this는 window 객체를 나타낸다.
    //  * 객체 메서드 작서 ㅇ시 funcion(){} 사용 권장.
    smartPhone.test1 = function(){
        console.log(this);
    }
    smartPhone.test1();

    smartPhone.test2 = () =>{
        console.log(this); //-> window 객체
    }

    smartPhone.test2()

});

/* 생성자 함수 */

// 1. 생성자 함수 선언 + 정의
// (중요) 생성자 함수의 이름은 무조건 대문자로 시작

/* 학생 객체 생성자 함수 */
function Student(name, grade, ban, number, score){
    // 속성
    // (전달 받은 값(매개 변수)을 현재 객체(this)에 속성으로 추가)
    this.name   = name;
    this.grade  = grade;
    this.ban    = ban;
    this.number = number;
    this.score  = score;
    // 기능
    this.introduce = function(){
        console.log(`${this.grade}학년 ${this.ban}반 ${this.number}번
        ${this.name} ${score}점 입니다.`)
    }
}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    const student1 = new Student("홍길동", 2, 4, 30, 90);
    console.log(student1.introduce());
    const student2 = new Student("김이박", 6, 6, 60, 60);
    console.log(student2.introduce());

    // 객체 배열(배열에 저장된 모든 요소가 객체)
    const studentList = [];
    studentList.push(student1);
    studentList.push(student2);
    studentList.push(new Student("존희", 1, 1, 30, 100));
    studentList.push(new Student("조니", 1, 1, 31, 1000));
    console.log(studentList)
    for(i = 0; i < studentList.length; i++){
        studentList[i].introduce();
    }
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", ()=>{
    const obj = {"id": "test01", "pw" : "1234", "number" : 9999};

    const str = JSON.stringify(obj);

    console.log("obj : ", obj);
    console.log("str : ", str);

    const str2 = '{"memberId":"user01","memberPw":"pass01","age":20}'
    const obj2 = JSON.parse(str2);
    console.log("obj : ", obj);
    console.log("str : ", str);

    fetch('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10')
    .then(response => response.json())
    .then( result => console.log(result.response.body.items[0].informGrade));
});