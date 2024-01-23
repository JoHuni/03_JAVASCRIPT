document.querySelector("#move").addEventListener("click", e => {
    // e.preventDefault() : 요소의 기본 이벤트 막기(제거)
    // prevent : 하지 못하게 막다
    // default : 기본, 기본 값

    e.preventDefault();
});

document.inputForm.addEventListener("submit", e => {
    const test = document.querySelectorAll("#form > input");
    for(let i = 0; i < test.length; i++){
        if(test[i].value.trim().length == ''){
            e.preventDefault();
            alert("작성되지 않은 input이 존재합니다");
            return;
        }
    }
});

const onsubmitTest = () => {

    const radio = document.querySelector("[name='submitRadio']:checked");
  
    // 체크된 라디오 버튼이 없을 경우
    if(radio == null) return false;
  
    // 제출 O 선택
    if(radio.value == "O") return true;
    
    // 제출 X 선택
    return false;
  };


  document.querySelector("#btn3").addEventListener("click", ()=>{

    const input = document.querySelector("#inputTest");
  
    if(input.value.trim().length > 0){
        document.inputForm3.submit();
    }
  
  });

