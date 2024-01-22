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