const box3 = document.querySelectorAll('.box3');
const input3 = document.querySelectorAll('.input3');
/* const btn = document.querySelector('.btn');

btn.addEventListener("click", function(){
    for (let i = 0; i < input3.length; i++) {
        box3[i].style.backgroundColor = input3[i].value;
    }
}); */
document.querySelector('.btn').addEventListener("click", function(){
    for(let i = 0; i < box3.length; i++){
        box3[i].style.backgroundColor = input3[i].value;
    }
});

for (let i = 0; i < input3.length; i++) {
    input3[i].addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            box3[i].style.backgroundColor = input3[i].value;
            return;
        }
    });
}


