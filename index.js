(function (){
const btnContainer = document.getElementById("btn-container");
const grid = document.getElementById("grid");

let color = "red";
let fontColor = "white";
btnContainer.addEventListener("click", (e) =>{
    switch(e.target.id){
        case "red-btn":
            color = "red";
            fontColor = "white";
            setButtonColors(e.target);
            break;
        case "blue-btn":
            color = "blue";
            fontColor = "white";
            setButtonColors(e.target);
            break;
        case "green-btn":
            color = "green";
            fontColor = "white";
            setButtonColors(e.target);
            break;
        case "yellow-btn":
            color = "yellow";
            fontColor = "black";
            setButtonColors(e.target);
            break;
        case "clear":
            let boxes = document.querySelectorAll(".box");
            boxes.forEach(b => b.style.backgroundColor = "unset");
            break;
    }
});

grid.addEventListener("mousedown", (e) => {
    if(e.buttons === 1) {
        e.target.style.backgroundColor = color;
    }
});

grid.addEventListener("mousemove", (e) => {
    if(e.buttons === 1) {
        e.target.style.backgroundColor = color;
    } else if (e.buttons === 2) {
        e.target.style.backgroundColor = "unset";
    }
});

grid.addEventListener("contextmenu", (e) => {
    e.target.style.backgroundColor = "unset";
    e.preventDefault();
});

function setButtonColors(clickedButton){
    let buttons = btnContainer.children;
    for(let i = 0; i < buttons.length; i++){
        let btn = buttons[i];
        if(btn.id != "clear") {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        }
    }

    clickedButton.style.backgroundColor = color;
    clickedButton.style.color = fontColor;
}

setButtonColors(btnContainer.children[0]);

}());