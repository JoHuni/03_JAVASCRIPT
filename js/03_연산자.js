// 변수 선언

// document(문서): HTML파일(문서)내에서
// get : 얻다
// Element : 요소
// ById : 아이디가 일치하는

// HTML 문서 내에서 ()내 아이디가 일치하는 요소를 얻어오겠다
const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const result = document.getElementById('calcResult');

const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const number3 = document.getElementById('num3');
const cResult = document.getElementById('total');

function plusFn(){
    // -> input 요소에 작성된 값은 무조건(문자열) 형태라서
    // 더했을 때 이어쓰기가 되는 문제 발생

    // [해결 방법]
    // 문자열(string)을 숫자로 변환하는 코드 수행
    // -> 데이터 파싱 : 데이터의 종류를 바꿈
    const value1 = parseInt(num1.value);
    const value2 = parseInt(num2.value);
    
    console.log(value1, value2);
    console.log("두 수의 합 : ", value1 + value2)

    console.log("두 수의 합 : ", Number(value1) + Number(value2));


    /* 두 수의 합을 아이디가 calcResult인 요소의
      내부 글자(HTML 요소 내용)으로 대입하기
    */
    calcResult = value1 + value2
    result.innerHTML = calcResult;
}

function calculate(operate){
    const value1 = parseInt(num1.value);
    const value2 = parseInt(num2.value);
    let calcResult;


    switch(operate){
        case "+":
            calcResult = value1 + value2;
            break;
        case "-":
            calcResult = value1 - value2;
            break;
        case "*":
            calcResult = value1 * value2;
            break;
        case "/":
            if(value2 == 0){
                alert("0으로 나눌 수 없습니다");
                return;
            }
            calcResult = value1 / value2;
            break;
        case "%":
            calcResult = value1 % value2;
            break;
        default:
            result = 0;
    }
    result.textContent = calcResult;
}

function calcPlus(){
    const iNum1 = parseInt(number1.value);
    const iNum2 = parseInt(number2.value);
    const iNum3 = parseInt(number3.value);

    calcResult = iNum1 + iNum2 + iNum3;
    cResult.textContent = calcResult;
}

let count = 0; /* 주의 : const로 선언하면 증감 불가 ㅋㅋ */
const result2 = document.getElementById('result2');

// 1증가 함수
function increase(){
    count++
    result2.textContent = count;
}

// 1감소 함수
function decrease(){
    count--
    result2.textContent = count;
}

function check1(){
    let count = 50;

    // 컴터한테 연산은 +-*/뿐만 아니라 코드 하나하나 실행하는 것도 연산임
    // -> 다른 연산보다 먼저 수행됨
    // -> count값이 먼저 증가, 감소된 후 콘솔에 출력됨

    console.log("++count : ", ++count);
    console.log("++count : ", ++count);
    console.log("++count : ", ++count);
    console.log("---------------------");
    console.log("--count : ", --count);
    console.log("--count : ", --count);
    console.log("--count : ", --count); 

    
    // 후위 연산(count++, count--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행 
    console.log("---------------------")
    console.log("count++ : ", count++); /* 50 출력 후 51로 증가 */
    console.log("count++ : ", count++);
    console.log("count++ : ", count++);

    console.log("count++ : ", count--);
    console.log("count++ : ", count--);
    console.log("count++ : ", count--);
}
