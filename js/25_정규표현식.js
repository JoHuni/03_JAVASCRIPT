const inputName = document.querySelector("#inputName");
const nameResult = document.querySelector("#nameResult");

//inputName이 입력되었을 경우
inputName.addEventListener("input", e => {
    console.log(e.key);
    //입력된 값
    const value = e.target.value;
    
    // 조건에 맞는 정규 표현식 객체 생성
    const regExp = /^[가-힣]{2,5}$/;

    // 정규식객체.test(문자열) :
    // - 문자열이 정규식에 일치하면 = true
    // - 아니면 false return;

    if(regExp.test(value)){
        nameResult.textContent = "유효한 이름 형식입니다."
        nameResult.style.color = "green";
        return;
    }
    else{
        nameResult.textContent = "이름 형식이 유효하지 않습니다.";
        nameResult.style.color = "red";
    }

    if(value.trim().length == ''){
        nameResult.textContent = '';
    }
});

/* 입력 받은 값이 휴대전화 번호가 맞는지 확인 */

const inputPhone = document.querySelector("#inputPhone");
const phoneResult = document.querySelector("#phoneResult");

inputPhone.addEventListener("input", e => {

  const value = e.target.value; // 입력한 값

  // 입력한 값이 없을 경우
  if(value.trim().length == 0){
    phoneResult.textContent = ""; // 출력 내용 삭제
    phoneResult.classList.remove("check", "uncheck"); // 클래스 제거
    e.target.value = ""; // 값으로 빈칸 대입
    return;
  }

  const regExp = /^01[01679]-\d{3,4}-\d{4}$/;

  if(regExp.test(value)){
    phoneResult.textContent = "유효한 번호 형식입니다."
    phoneResult.classList.add("check");
    phoneResult.classList.remove("uncheck");
  }
  else{
    phoneResult.textContent = "유효하지 않은 번호 형식입니다."
    phoneResult.classList.add("uncheck");
    phoneResult.classList.remove("check");
  }
});

