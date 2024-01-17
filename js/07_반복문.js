function check1(){
    let result= "";

    for(let num = 1; num <= 5; num++){
        result += num;
    }
    console.log(result);
}

function check2(){
    for(let num = 1; num <= 10; num++){
       console.log(num)
    }
}

function check3(){
    for(let num = 1; num <= 20; num++){
       console.log(num)
    }
}

function check4(){
    for(let num = 5; num <= 15; num++){
       console.log(num)
    }
}

function check5(){
    for(let num = 1; num <= 30; num += 2){
       console.log(num);
    }
}
function check6(){
    let sum = 0;
    for(let num = 1; num <= 10; num++){
        sum += num
    }
    console.log(sum);
}

function sumFn(){
    const start = parseInt(document.getElementById('inputNumber1-1').value);
    const end = parseInt(document.getElementById('inputNumber1-2').value);
    const result1 = document.getElementById("result1");

    // const iNum1 = parseInt(inputNumber1.value);
    // const iNum2 = parseInt(inputNumber2.value);
    let sum = 0;
    for(let num = start; num <= end; num++){
        sum += num
    }
    result1.innerText = sum;
}

function excuteFn2(){
    const start = parseInt(document.getElementById('inputNumber2-1').value);
    const end = parseInt(document.getElementById('inputNumber2-2').value);
    const plus = parseInt(document.getElementById('inputNumber2-3').value);
    const result2 = document.getElementById("result2");
    result2.innerHTML = '';
    for(let num = start; num <= end; num += plus){
        result2.innerHTML += `<li>${num}</li>`;
    }
}

function check7(){
    for(let i = 1; i <= 9; i++){
        console.log(`2 x ${i} = ${2 * i}`);
    }
}

function excuteFn3(){
    const dan = parseInt(document.getElementById('input3').value);
    const result3 = document.getElementById('result3');
    result3.innerHTML = '';

    if(dan < 2 || dan > 9){
        alert('2부터 9사이의 숫자만 입력 가능합니다.');
        return;
    }

    for(let num = 1; num <= 9; num++){
        result3.innerHTML += `<li>${dan} x ${num} = ${dan * num}</li>`
    }
}

function excuteFn4() {
    const input = parseInt(document.getElementById("input4").value);
    const output = document.getElementById("output4").value;
    let result4 = document.getElementById("result4");
    let str = "";

    for (let num = 1; num <= 50; num++) {
        if(num % input == 0){
            str += output + " ";
        }
        else{
            str += num + " ";
        }
        if(num % 10 == 0){
            str += "<br>";
        }     
    }
    result4.innerHTML = str;
}

function check8(){
    let result5 = document.getElementById('result5');
    for(let j = 1; j <= 4; j++){
        let str = "";
        for(let i = 1; i <= 5; i++){
            str += i;
        }
        result5.innerHTML += `${str}<br>`
    }
}

function check9(){
    let result6 = document.getElementById('result6');
    for(let j = 1; j <= 5; j++){
        let str = "";
        for(let i = 1; i <= j; i++){
            str += i;
        }
        result6.innerHTML += `${str}<br>`
    }
}

function check10(){
    for(let num = 5; num >= -5; num -= 2){
        console.log(num);
    }
}

function check11(){
    let result = document.getElementById('result7');
    for(let i = 5; i >= 1; i--){
        let str = "";
        for(let j = 1; j <= i; j++){
            str += j;
        }
        console.log(str)
    }
}

function check12(){
    for(let j = 1; j <= 3; j++){
        let str = "";
        for(let i = 1; i <= j; i++){
            str += i;
        }
        console.log(str);
    }
    for(let i = 4; i >= 1; i--){
        let str = "";
        for(let j = 1; j <= i; j++){
            str += j;
        }
        console.log(str);
    }
}

function check13(){
    for(let i = 1; i <= 7; i++){
        let end = 0;
        if(i <= 4){
            end = i; 
        }
        else{
            end = 7 - i + 1;
        }
        let str = "";
        for(let j = 1; j <= end; j++){
            str += j;
        }
        console.log(str);
    }
}

function check14(){
    let count = 1;
    for(let i = 1; i <= 3; i++){
        let str = "";
        for(let j = 1; j <= 4; j++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }
}

function check15(){
    num = parseInt(document.getElementById('input15').value);
    result = document.getElementById('result15');


    let count = 0;
    for(let i = 0; i < 100; i++){
        if(i % num == 0){
            count++;
        }
    }
    result.innerText = `${num}의 배수 : ${count}개`;
}

function check16(){
    let count = 0;
    for(let i = 1; i <= 7; i++){
        if(i <= 4){
            count++;
        }
        else{
            count--;
        }
        let str = "";
        for(let j = 1; j <= count; j++){
            str += j;
        }
        console.log(str);
    }
    
}

function check17(){
    let val;
    while(val !== null){
        // !==, === : 자료형이랑 값 모두가 같은지 확인
        val = prompt("입력 후 확인");
        console.log(val);
    }
}

function check18(){
    const kimbab = 3000;
    const ramen = 3500;
    const tonkatsu = 5000;

    let kCount = 0;
    let rCount = 0;
    let tCount = 0;

    let input;
    while(input !== null){
        input = prompt('메뉴 번호를 입력하세요.');
        switch(input){
            case '1':
                kCount++;
                break;
            case '2':
                rCount++;
                break;
            case '3':
                tCount++;
                break;
            case null:
                alert('주문 완료!');
                break;
            default:
                alert('메뉴에 작성된 번호만 입력해주세요');
                break;
        }
    }
    alert(`김밥 : ${kCount}, 라면 : ${rCount}, 돈까스 : ${tCount}`);
    let sum = (kCount * kimbab) + (rCount * ramen) + (tCount * tonkatsu);
    alert(`총 가격 : ${sum}원 `)
}
function check19(){
    let num = 1;
    while(num < 11){
        console.log(num);
        num++;
    }

    console.log("---------------------");

    let num1 = 10;
    while(num1 >= 1){
        console.log(num1);
        num1--
    }
  
}
  
// 요소.innerText = "<li>문자열</li>";
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그를 해석하지 않고 그대로 보여줌)
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그를 해석해서 화면에 출력)




