const display         = document.querySelector("#dispaly");
const list =  document.querySelectorAll("#display > span");
const startBtn        = document.querySelector("#startBtn");
const recordBtn       = document.querySelector("#recordBtn");
const resetBtn        = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

let count = 0;
let running = false;
let currInterval;

startBtn.addEventListener("click", e => {
    if (!running) {
        currInterval = window.setInterval(() => {
            count++;
            output();
            document.querySelectorAll("#display > span")[2].innerText = attachZero(count % 100);
        }, 10);
        running = true;
        startBtn.innerText = "Stop";
    } else {
        clearInterval(currInterval);
        running = false;
        startBtn.innerText = "Start";
    }
});

/* 시계 출력 함수 */
function output(){
    let minute = Math.floor(count / 100 / 60 );
    let second = Math.floor(count / 100 % 60);
    let ms = count % 100;

    minute = attachZero(minute);
    second = attachZero(second);
    ms     = attachZero(ms);

    console.log(minute, second, ms);
    // minute의 값과 화면에 출력된 분이 다를 경우
    if(list[0].innerText != minute){
        list[0].innerText = minute;
    }
    // second의 값과 화면에 출력된 초가 다를 경우
    if(list[1].innerText != second){
        list[1].innerText = second;
    }
    list[2].innerText = ms;

    return `${minute}:${second}.${ms}`;
}

// 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 경우
function attachZero(num){
    if(num < 10){
        return "0" + num;
    }
    return "" + num;
}

resetBtn.addEventListener("click", ()=>{
    clearInterval(currInterval);
    count = 0;
    output();
    startBtn.innerText = "Start";
    running = false;
});

recordBtn.addEventListener("click", ()=>{
    const li = document.createElement("li");
    li.innerHTML = output();
    recordContainer.appendChild(li);
});