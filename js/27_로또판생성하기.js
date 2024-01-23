const button = document.querySelector("#createLotto");
let container = null;
let intervalCount = 0;


button.addEventListener("click", () => {
    intervalCount++
    if(intervalCount == 1){
        
    }
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    if (container) {
        container.remove();
    }
    
    let count = 1;
    let itemCount = 0;

    for(let i = 0; i < 9; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let j = 0; j < 5; j++) {
            const item = document.createElement("div");
            item.classList.add("item");
            item.innerHTML = count++;

            item.addEventListener("click", () =>{
                if(item.style.backgroundColor == 'orange'){
                    item.style.backgroundColor = '';
                    itemCount--;
                }
                else if(itemCount < 6){
                    item.style.backgroundColor = "orange";
                    itemCount++;
                }
            });
            row.appendChild(item);
        }
        container.appendChild(row);
    }
});