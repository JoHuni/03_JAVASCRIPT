// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 문자열.toLowerCase() : 소문자
// 문자열.toUpperCase() : 대문자

// 문서 자체에 이벤트리스너를 가져옴
document.addEventListener("keydown", function(e){
    let idx;
    console.log(e.key.toLowerCase());
    switch(e.key.toLowerCase()){
        case 'q':
            idx = 0;
            break;
        case 'w':
            idx = 1;
            break;
        case 'e':
            idx = 2;
            break;
        case 'r':
            idx = 3;
            break;
        default: 
            return;
    }
    // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
    keys[idx].style.backgroundColor = "blueviolet";
});

document.addEventListener("keyup", function(e){
    let idx;
    switch(e.key.toLowerCase()){
        case 'q':
            idx = 0;
            break;
        case 'w':
            idx = 1;
            break;
        case 'e':
            idx = 2;
            break;
        case 'r':
            idx = 3;
            break;
        default: 
            return;
    }
    keys[idx].style.backgroundColor = "white";
});