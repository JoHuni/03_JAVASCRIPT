// setTimeout(함수, 지연시간(ms))
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
    window.setInterval(()=>{
        alert("3초 기달");
    }, 3000);
    window.setTimeout(()=>{
        alert("0.5초 기달");
    }, 500);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
  window.setInterval( () => {
    const span = document.querySelector("#box2 > span");
    span.innerHTML = Number(span.innerHTML) + 1;
  } , 1000 );
  e.target.disabled = true
});
/* clearInterval( Interval ) */
const target3 = document.querySelector("#target3");
const start3  = document.querySelector("#start3");
const stop3  = document.querySelector("#stop3");
let curInterval;

start3.addEventListener("click", e => {
    curInterval = setInterval(()=>{
        target3.innerHTML = Number(target3.innerHTML) + 1;
    } , 100); // 100,
    e.target.disabled = true;
});

stop3.addEventListener("click", ()=> {
    clearInterval(curInterval);
    start3.disabled = false;
});

/* 팝업창 열기 */
const openPopup1 = document.querySelector("#openPopup1");

openPopup1.addEventListener("click", () => {
  window.open("23_스톱워치.html");
});

/* 진짜 팝업창 열기 */
const openPopup2 = document.querySelector("#openPopup2");
openPopup2.addEventListener("click", () => {
    window.open("23_스톱워치.html", "_blank", "popup");
  });

/* 팝업창 + 옵션 */
const openPopup3 = document.querySelector("#openPopup3");
openPopup3.addEventListener("click", () => {
    let options = [];
    options.push("width=400");
    options.push("height=400");

    // 팝업창 띄우는 위치를 지정
    // 메인 모니터에서만 적용
    options.push("left=500");
    options.push("top=100");

    window.open("23_스톱워치.html", "_blank", options.toString());
  });

const openPopup4 = document.querySelector("#openPopup4");
openPopup4.addEventListener("click", () => {
    const options = [];

    options.push("width=300");
    options.push("height=300");
    options.push("left=500");
    options.push("top=100");

    window.open("22_팝업창.html", "_blank", options.toString());

});

