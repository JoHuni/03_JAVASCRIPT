const inputText = document.querySelector("#inputText");
const button = document.querySelector("#button");
const box2 = document.querySelector(".box2");
const setWidth = document.querySelector("#setWidth");
const setHeight = document.querySelector("#setHeight");
const fontSize = document.querySelector("#setfont-size");
const normal = document.querySelector("#normal");
const bold = document.querySelector("#bold");
const fontColor = document.querySelector("#set-fontColor");
const bgColor = document.querySelector("#set-backgroundColor");
const alignLeft = document.querySelector("#align-left");
const alignCenter = document.querySelector("#align-center");
const alignRight = document.querySelector("#align-right");
const alignUp = document.querySelector("#align-up");
const alignMid = document.querySelector("#align-mid");
const alignDown = document.querySelector("#align-down");

button.addEventListener("click", () => {
    box2.textContent = inputText.value;
    box2.style.width = setWidth.value + "px";
    box2.style.height = setHeight.value + "px";
    box2.style.fontSize = fontSize.value + "px";
    if (normal.checked) {
        box2.style.fontWeight = "normal";
    } else if (bold.checked) {
        box2.style.fontWeight = "bold";
    } else {
        box2.style.fontWeight = "normal";
    }
    box2.style.color = fontColor.value;
    box2.style.backgroundColor = bgColor.value;
    if (alignLeft.checked) {
        box2.style.justifyContent = "flex-start";
    } else if (alignCenter.checked) {
        box2.style.justifyContent = "center";
    } else if (alignRight.checked) {
        box2.style.justifyContent = "flex-end";
    } else {
        box2.style.justifyContent = "flex-start";
    }
    if (alignUp.checked) {
        box2.style.alignItems = "flex-start";
    } else if (alignMid.checked) {
        box2.style.alignItems = "center";
    } else if (alignDown.checked) {
        box2.style.alignItems = "flex-end";
    } else {
        box2.style.alignItems = "flex-start";
    }
});