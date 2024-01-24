const button = document.querySelector("#createLotto");
let containerCount = 0;
let container;

button.addEventListener("click", () => {
    containerCount++;

    if (containerCount == 1) {
        container = document.createElement("div");
        container.classList.add("container");
        document.body.appendChild(container);
        const containerColor = document.querySelector(".container");
        let count = 1;
        let itemCount = 0;

        for (let i = 0; i < 9; i++) {
            const row = document.createElement("div");
            row.classList.add("row");

            for (let j = 0; j < 5; j++) {
                const item = document.createElement("div");
                item.classList.add("item");
                item.innerHTML = count++;
                item.addEventListener("click", () => {
                    if (item.style.backgroundColor == 'orange') {
                        item.style.backgroundColor = '';
                        itemCount--;
                    } else if (itemCount >= 6) {
                        alert("숫자는 6개까지만 선택 가능합니다.");
                    } else {
                        item.style.backgroundColor = "orange";
                        itemCount++; 
                    }
                });
                // item.addEventListener("click", e => {
                //     e.target.classList.toggle("active");
                // });
                row.appendChild(item);
            }
            container.appendChild(row);
        }
        containerColor.addEventListener("click", () =>{
            container.style.backgroundColor = randonColor();
        });
    } 
    else {
        container.remove();
        containerCount = 0;
    }
});

function randonColor(){
    const rColor = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += rColor[Math.floor(Math.random() * 16)];
    }
    return color;
}
