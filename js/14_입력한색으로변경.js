const box3 = document.querySelectorAll('#box3');
const input3 = document.querySelectorAll('#input3');
const btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
    for (let i = 0; i < input3.length; i++) {
        const color = input3[i].value;
        box3[i].style.backgroundColor = color;
    }
});
