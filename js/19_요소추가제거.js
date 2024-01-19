// const input = document.querySelector('input');

// const createBox = document.querySelector('#plus');
const createInput = document.querySelector('#plus');
const btnCalc = document.querySelector('#calc');
const container = document.querySelector('.container');


createInput.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "number";
    input.classList.add("val");
    // console.log(input);
    container.appendChild(input);
});

btnCalc.addEventListener("click", () => {
    const iValue = document.querySelectorAll('.val');
    console.log(iValue);
    let result = 0;
    for(i = 0; i < iValue.length; i++){
        if(iValue[i].value == '' || isNaN(iValue[i].value)){
            alert("값을 제대로 입력하");
            return;
        }
        result += parseInt(iValue[i].value);
    }
    alert(result);
});



