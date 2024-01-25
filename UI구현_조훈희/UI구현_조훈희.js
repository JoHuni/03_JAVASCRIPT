const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");
const items = document.querySelectorAll(".items");
const phoneNumber = document.querySelector("#phoneNumber");
const saveNumber = document.querySelector(".saveNumber");
let rateBtnCount = 0;

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        phoneNumber.textContent += items[i].textContent;

        if(phoneNumber.textContent.length > 15){
            phoneNumber.textContent = phoneNumber.textContent.substring(0,15);
        }
    });
}

addBtn.addEventListener("click", () => {
    if (phoneNumber.textContent.trim().length != 0) {
        const checkNum = document.querySelectorAll(".numList");
        for(i = 0; i < checkNum.length; i++){
            if( phoneNumber.textContent ==checkNum[i].textContent){
                alert('이미 등록된 번호입니다.');
                return;
            }
        }

        const row2 = document.createElement("div");
        row2.classList.add("row2");

        const span = document.createElement("span");
        span.classList.add("numList");
        span.textContent = phoneNumber.textContent;

        const rateBtn = document.createElement("button");
        rateBtn.textContent = "☆";
        rateBtn.id = "rateBtn";

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "x";
        cancelBtn.id = "cancelBtn";

        row2.appendChild(span);
        row2.appendChild(rateBtn);
        row2.appendChild(cancelBtn);
        saveNumber.appendChild(row2);

        rateBtn.addEventListener("click", () => {
            rateBtnCount++
            if(rateBtnCount == 1){
                rateBtn.textContent = "★";
                rateBtn.style.color = "orange";
                span.style.color = "red";
            }
            else{
                rateBtn.textContent = "☆";
                rateBtn.style.color = "";
                span.style.color = "";
                rateBtnCount = 0;
            }
        });
        cancelBtn.addEventListener("click", () => {
            const removeRow = cancelBtn.parentElement;
            removeRow.remove();
        });
        phoneNumber.textContent = "";
    }
});

resetBtn.addEventListener("click", () => {
    phoneNumber.textContent = "";
});

document.addEventListener("keydown", e => {
    console.log(e.key);
    if (e.key === "Delete") {
        phoneNumber.textContent = "";
    }
    else if(e.key == "Backspace"){
        phoneNumber.textContent = phoneNumber.textContent.slice(0, -1);
    }
    else if(e.key == 'Enter'){
        addBtn.click();
    }
    else if (Number(e.key) == 0 || Number(e.key) <= 9 || e.key == '*' || e.key == "#") {
        
        phoneNumber.textContent += e.key;
        const index = Number(e.key) - 1;

        if (index >= 0 && index <= items.length) {
            items[index].style.backgroundColor = "lightgray";
        }
        else if(e.key == "#"){
            items[9].style.backgroundColor = "lightgray";
        }
        else if(e.key == "*") {
            items[11].style.backgroundColor = "lightgray";
        }
        else if(items[10]){
            items[10].style.backgroundColor = "lightgray";
        }
    }
});

document.addEventListener("keyup", e => {
    items.forEach(item => {
        setTimeout(() => {
            item.style.backgroundColor = "";
        }, 500);
    });
});

