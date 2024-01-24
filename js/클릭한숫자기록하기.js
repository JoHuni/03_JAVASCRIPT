const result = document.querySelector("#result");
const items = document.querySelectorAll(".item");
const reset = document.querySelector("#reset");

items.forEach(item => {
    item.addEventListener("click", () => {
        const clickedNumber = item.textContent;
        result.textContent += clickedNumber;
        if (result.textContent.length > 10) {
            alert('10개까지만 입력 가능합니다.');
            result.textContent = result.textContent.slice(0, 10); 
            return;
        }
    });
});

// for(let i = 0; i < items.length; i++){
//     const item = items[i];
//     item.addEventListener("click", ()=>{
//        const cNum = item.textContent;
//        result.textContent += cNum; 
//        if(result.textContent.length > 10){
//         alert("10개만해")
//         result.textContent = result.textContent.slice(0, 10);
//         }
//     });
// }

reset.addEventListener("click",() => {
    result.textContent = "";
});

document.addEventListener("keydown", e => {
    if(e.key == 'Delete'){
        result.textContent = "";
        return;
    }
    if(Number(e.key) == 0 || Number(e.key) <= 9){
        const cNum = e.key;
        result.textContent += cNum;
        if(result.textContent.length > 10){
            alert("그만");
            result.textContent = result.textContent.slice(0, 10);
            return;
        }
    }
});