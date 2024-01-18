function classTest(){

    /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나
    배열 전용 기능(메서드)를 제공하지 않음
    */
    const divs = document.getElementsByClassName("cls-test");

    console.log(divs);
    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "rgb(40,255,255)";
    divs[2].style.backgroundColor = "rgb(150,90,210)";
    
    for(let i = 0 ; i < divs.length ; i++){
        divs[i].innerText = `${i}번째 div 입니다`;
    }
}

let sum = 0;

function classTest2(){
    const inputList = document.getElementsByClassName("cls-test2");
    /* (중요) 
    요소들을 한 번에 얻어오게 되면 배열 형태로 반환 된다!
    -> 요소를 다루고 싶으면 index를 이용해서 
      배열 요소를 하나씩 꺼내서 다뤄야 함
    */

    for(let i = 0; i <inputList.length; i++){
        const value = parseInt(inputList[i].value);
        sum += value;
    }
    alert(`합계 : ${sum}`);
}

function tagNameTest(){
    // html문서 내에 존재하는 모든 li태그 얻어옴 배열로 반환
    const tagList = document.getElementsByTagName("li");

    for(let i = 0; i < tagList.length; i++){
        // tagList[i].innerText          : 작성된 내용 얻어오기
        // tagList[i].innerText = "abc"  : 내용으로 "abc" 대입하기
        console.log(tagList[i].innerText);
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
}

function nameTest(){
    // name 속성 값이 "hobby"인 요소를 모두 얻어와 hobbyList 에 저장
    const hobby = document.getElementsByName('hobby');
    let str = '';
    let count = 0; // 체크된 수 카운트
    for(let i = 0; i < hobby.length; i++){
        if(hobby[i].checked){
            str += hobby[i].value + " ";
            count++
        }
    }
    // #name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML
    = `${str}<br><br>선택된 취미 개수 : ${count}`;
}

function cssTest(){
/* 
    [요소 1개]
    1) document.querySelector("CSS 선택자");
            -> 선택자가 선택한 요소 중 첫 번째 요소를 반환

    [요소 n개 -> 배열]
    2) document.querySelectorAll("CSS 선택자");
        -> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환
*/
    const container = document.querySelector('[target-div="css-div"]');

    container.style.border = "10px solid red"

    // //첫 번째 자식 선택법
    // const div1=
    //  document.querySelector('[target-div="css-div"] > div:first-child');

    // 첫 번째 자식 div 선택 방법 2
    // -> querySeletor()의 첫 번째 요소만 선택한다는 특징 활용
    const div=
    document.querySelector('[target-div="css-div"] > div');


    // 두 번째 자식 div 선택
    const div2 
    = document.querySelector('[target-div="css-div"] > div:last-child');

    div2.innerText 
        = "첫 번째 요소가 아니면 querySelector() 특징 활용 못함";

    // 모든 자식 div 한 번에 선택
    const divList 
    = document.querySelectorAll('[target-div="css-div"] > div');

    console.log(divList);

    divList[0].style.fontFamily = '궁서';
    divList[1].style.fontSize = '10px';
    for(let i=0 ; i<divList.length ; i++){ // 순차 접근
        divList[i].onclick = function(){
            alert(`${i} 번째 인덱스 요소입니다`);
        }   
    } 
}

function readValue(){
    let bg = document.querySelector('#chatting-bg');
    let input = document.querySelector('#user-input');
    if(input.value.trim().length == 0){
        alert("제대로 입력해주세요.");
        input.value = "";
        input.focus();
        return;
    }
    bg.innerHTML += `<p><span>${input.value}</span></p>`

    // bg.scrollHeight : bg의 스크롤 전체 높이
    // bg.scrollTop    : 스크롤 윗부분 위치
    // bg.scrollTop = 값 : 스크롤 윗부분을 값 위치로 이동
    // 값이 너무 크면 맨 밑으로 이동
    bg.scrollTop = bg.scrollHeight;
    input.value = "";
    input.focus();
}

/* 아이디가 user-input인 요소에서
  키가 올라오는 동작이 발생했을 때(감지 되었을 때)
    올라온 키가 "Enter" 키 이면  readValue() 함수를 호출

*/

// keydown : 키가 눌러졌을 때 (+꾹 누르고 있으면 계속 인식된다) 
// keypress : 키를 누르고 있을 때
// keyup : 눌러지던 키가 떼어졌을 때 (1회만 인식)

document.querySelector("#user-input").addEventListener("keydown",function(e){
    // e : 발생한 이벤트 정보를 담고 있는 객체(이벤트 객체)
//    console.log(e.key); 
    if(e.key == 'Enter'){
        readValue();
    }
});