// const input = document.querySelector('input');

// const createBox = document.querySelector('#plus');
const createInput = document.querySelector('#plus');
const btnCalc = document.querySelector('#calc');
const container = document.querySelector('.container');
const bDelete = document.querySelectorAll('.bDelete');


createInput.addEventListener("click", () => {
    const container1 = document.createElement("div");
    container1.classList.add("container1");
    container1.innerHTML = '<input type="number" class="val"><button class="bDelete">x</button>';
    container.appendChild(container1);

    container1.querySelector('.bDelete').addEventListener("click", () => {
        container1.remove();
    });
});

btnCalc.addEventListener("click", () => {
    const iValue = document.querySelectorAll('.val');
    console.log(iValue);
    let result = 0;
    for(i = 0; i < iValue.length; i++){
        if(iValue[i].value == '' || isNaN(iValue[i].value)){
            alert("값을 제대로 입력하세요.");
            return;
        }
        result += parseInt(iValue[i].value);
    }
    alert(result);
});





