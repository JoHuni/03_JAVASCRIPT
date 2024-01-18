/* 인라인 이벤트 모델 확인 */
function check1(btn){
    // 매개 변수 : 함수 호출 시 ()내부에 작성된 값을
    // 전달 받아 저장하는 변수
    // 매개변수 btn == 클릭한 변수
    console.log(btn);
    const bgColor = btn.style.backgroundColor;
    // 처음에는 inline - style로 지정된 배경 색이 없어서 ""(빈칸)
    console.log(bgColor);

    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink";
      
    } else{
        btn.style.backgroundColor = "yellow";
    }
}

// 고전 이벤트 모델 확인
const test1a = document.querySelector('#test1-1');

/* *** 고전 이벤트 모델 작성법 *** */

// 요소.이벤트리스너 = 이벤트 핸들러

/* ******************************* */

test1a.onclick = function(){
    alert("고전 이벤트 모델 확인 버튼 클릭");
}

// 고전 이벤트 모델 제거
// 

document.querySelector("#test1-2").onclick = function(){

    // 기존 onclick의 이벤트 핸들러를
    // null로 덮어 씌움 (이벤트 제거)
    document.querySelector("#test1-1").onclick = null;
    alert("이벤트 제거됨");
};

/* 고전 이벤트 모델 단점 */

// #test1-3 요소를 얻어와 test1c 변수에 저장
const test1c = document.querySelector("#test1-3");

test1c.onclick = function(){
    test1c.style.backgroundColor = "red";
}

test1c.onclick = function(){
    test1c.style.color = "white"
}

// -> onclick에 저장된 값이 덮어씌워지면서
// 이전 코드가 사라지는 문제 발생

const test2 = document.querySelector("#test2");
/* *** 표준 이벤트 모델 작성법 *** */

// 요소.addEventListener("이벤트종류", 이벤트 핸들러(함수) );
 
test2.addEventListener( "click", function(){
    // 투명도 1(불투명) -> 0(투명)  0.01씩 줄이기
  
    // 현재 #test2의 투명도 확인
    let curr = test2.style.opacity;
  
    // 맨 처음에는 투명도 '' -> 1 대입
    if(curr == ''){
      test2.style.opacity = 1;
      curr = 1;
    }
  
    // 투명도 0.01 감소
    test2.style.opacity = curr - 0.1;
    if(test2.style.opacity < 0){
        test2.style.opacity = 1;
    }
  
  });


let count = 0;

test2.addEventListener("click", function(){
    count++
    this.innerHTML = '클릭!! ' + count;
    // if(count % 3 == 0){
    //     test2.style.backgroundColor = "aquamarine"
    // }else
    test2.style.backgroundColor = colorArr[count % colorArr.length];
});

function randomColor(){
    const str = "0123456789ABCDEF";
    let str2 = "#";
    for(let i = 0; i < 6; i++){
        str2 += str[Math.floor(Math.random() * 16 )]
    }
    return str2;
}
const colorArr = [];
for (let i = 0; i < 40; i++) {
    colorArr.push(randomColor());
}

const btn3 = document.querySelector('#btn3');
const input3 = document.querySelector('#input3');
const box3 = document.querySelector('#box3');

btn3.addEventListener("click", function(){
    box3.style.backgroundColor = input3.value;
});

input3.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
        box3.style.backgroundColor = input3.value;
    }
});

box3.addEventListener("click", function(e){
    if(e.target.style.backgroundColor == ''){
        input3.placeholder = '색깔을 입력해주세요';
    }
    else alert(`배경색 : ${e.target.style.backgroundColor}`);
});