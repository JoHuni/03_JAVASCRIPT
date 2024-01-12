/* if - 양수인지 검사 */
const input1 = document.getElementById("input1");

function check1(){

  const value = Number(input1.value); // 입력 받은 값

  if(value > 0){ // value가 0보다 커서 true인 경우
    alert("양수 입니다.");
  }

  // value가 0 보다 같거나 작아서 true인 경우
  // -> value가 양수가 아닌 경우
  if(value <= 0){ 
    alert("양수가 아닙니다");
  }
}


/* if - else  -> 홀/짝 판별하기 */
function check2(){

  // 난수 발생 : Math.random()
  // 난수 범위 : 0 <= Math.random() < 1

  // 0 ~ 100 사이 난수
  const randomNumber = Math.floor(Math.random() * 101);

  if(randomNumber % 2 == 1){ // 홀수
    alert(`${randomNumber} 은/는 홀수 입니다.`);
  }

  else{ // 홀수가 아닌 경우 == 짝수
    alert(`${randomNumber} 은/는 짝수 입니다.`);
  }
}

function check3(){
    const randomNumber = Math.floor(Math.random() * 7) - 3;
    let message = randomNumber + "은/는 "
    if(randomNumber == 0){
        alertmessage += "0입니다";
    }
    else if(randomNumber > 0){
        message += "양수입니다";
    }
    else{
        message += "음수입니다";
    }
    alert(message);
}

const inputAge = document.getElementById('inputAge');
function check4(){
    const age = parseInt(inputAge.value);
    if(inputAge.value == '') {
      alert("값을 입력해주세요.");
      return;
    } 
 
    if(!(age >= 0 && age <= 150)){
      alert("잘못 입력하셨습니다.");
    } else if (age <= 13) {
      alert("어린이입니다");
    } else if (age <= 19) {
      alert("청소년입니다");
    } else {
      alert("어른입니다.");
    }  
  }

  function calc(op){
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = document.getElementById('calcResult');
  
    let calcResult;

    // if(op == '+'){  // op가 '+'인 경우
    //   calcResult.innerText = v1 + v2;
      
    // } else if(op == '-'){ // op가 '-' 경우
    //   calcResult.innerText = v1 - v2;
  
    // } else if(op == '*'){
    //   calcResult.innerText = v1 * v2;
  
    // } else if(op == '/'){
    //   calcResult.innerText = v1 / v2;
  
    // } else if(op == '%'){
    //   calcResult.innerText = v1 % v2;
  
    // } else{
    //   calcResult.innerText = "잘못된 연산자";
    // }
  
    switch(op){
      case '+':
        calcResult = num1 + num2;
        break;
      case '-':
        calcResult = num1 - num2;
        break;
      case '*':
        calcResult = num1 * num2;
        break;
      case '/':
        calcResult = num1 / num2;
        break;
      case '%':
        calcResult = num1 % num2;
        break;
      case '@':
        if(v1 > v2){ result = 1;}
        else{ result = 2}
        break;
      default:
        calcResult = "잘못된 연산자";
        break;
    }
    result.innerText = calcResult;
  }
