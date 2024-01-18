let box3 = document.querySelectorAll('#box3');
const input3 = document.querySelector('#input3');
const btn = document.querySelector('#btn');

input3.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
        box3.style.backgroundColor = input3.value
    }
});

btn.addEventListener("click", function(){
    box3.style.backgroundColor = input3.value
});

