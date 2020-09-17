ctx.lineWidth = 5;
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.lineJoin = 'round';
let activeTool = 'pencil';
ctx.imageSmoothingEnabled = true;
ctx.imageSmoothingQuality = "high";
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let sticky = document.querySelector("#sticky");

let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");
let toggleP = false;
let toggleE = false;


function handleTool(tool) {
    if (tool == "pencil") {
        ctx.strokeStyle = "black";
        // if (activeTool == "pencil" && toggleP == false) {
        //     pencilOptions.classList.add("show");
        //     toggleP = true;
        // } else 
        if (activeTool == "pencil" && toggleP == true) {
            ctx.strokeStyle = "black";
            activeTool = "pencil";
            toggleP = false;
            pencilOptions.classList.remove("show");
        } else {
            activeTool = "pencil";
            toggleP = true;
            pencilOptions.classList.add("show");
            eraserOptions.classList.remove("show");

        }
    } else if (tool == "eraser") {
        ctx.strokeStyle = "white"
            // if (activeTool == "eraser" && toggleE == false) {
            //     eraserOptions.classList.add("show");
            //     toggleE = true;
            //} else
        if (activeTool == "eraser" && toggleE == false) {
            ctx.strokeStyle = "white";
            activeTool = "eraser";
            toggleE = true;
            eraserOptions.classList.remove("show");

        } else {
            activeTool = "eraser";
            toggleE = false;
            eraserOptions.classList.add("show");
            pencilOptions.classList.remove("show");


        }
    } else if (tool == "sticky") {
        createSticky();
    } else if (tool == "upload") {
        uploadFile();
    }else if (tool == "delete"){
        let stickyPad = document.querySelectorAll(".stickyPad");
        stickyPad.forEach(function(sticky){

            sticky.remove();
        })
        ctx.clearRect(0,0,board.width, board.height);
        pencilOptions.classList.remove("show");
        eraserOptions.classList.remove("show");
        undoArr.length =0;
        redoArr.length = 0;
        
    }else if (tool == "undo") {
        undoLast();
    } else if (tool == "redo") {
        redoLast();
    }



}

function changeColor(color) {
    ctx.strokeStyle = color;
}

let sliders = document.querySelectorAll("input[type='range']");
for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener("change", function() {
        let width = sliders[i].value;
        ctx.lineWidth = width;
    })
}

const hamburger = document.querySelector(".hamburger");
const toolPanel = document.querySelector(".tool-panel");
hamburger.addEventListener("click", function() {
    handleHamburger();
})
let isActive = true;

function handleHamburger() {
    if (isActive == true) {
        hamburger.classList.remove("is-active");
        toolPanel.classList.remove("add-animation");
    } else {
        hamburger.classList.add("is-active");
        toolPanel.classList.add("add-animation");
    }

    isActive = !isActive;
}