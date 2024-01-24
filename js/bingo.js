const win = document.querySelector("#win");
const createBtn = document.querySelector("#createBtn");
let containerCount = 0;
let container = null;
let rNum = [];

createBtn.addEventListener("click", () => {
    if (container) {
        container.remove();
        container = null;
        containerCount = 0;
    } else {
        containerCount++;
        container = document.createElement("div");
        const range = document.querySelector("#range");
        container.classList.add("container");
        document.body.appendChild(container);

        for (let i = 0; i < Number(range.value); i++) {
            const rangeInput = document.createElement("div");
            rangeInput.classList.add("row");
            container.appendChild(rangeInput);
            for (let j = 0; j < Number(range.value); j++) {
                const item = document.createElement("div");
                item.classList.add("items");
                rangeInput.appendChild(item);
                let randomNumber = createRandomNumber(range.value);
                while(rNum.includes(randomNumber)){
                    randomNumber = createRandomNumber(range.value);
                }           
                rNum.push(randomNumber);
                item.innerHTML = randomNumber;

                item.addEventListener("click", () => {
                    item.style.backgroundColor = "limegreen";
                });
            }
        }
    }
});

function createRandomNumber(num){
    return Math.floor(Math.random()* num * num + 1);
}
