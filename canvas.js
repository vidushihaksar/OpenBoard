// press mouse
let isPenDown = false;
board.addEventListener("mousedown", function(e) {
        // begin path
        ctx.beginPath();
        // move to mouse pointers location
        let x = e.clientX;
        let y = e.clientY;
        let top = getLocation();
        y = Number(y) - top
        ctx.moveTo(x, y);
        console.log("Mouse down")
        console.log("Mouse down")
        isPenDown = true;
    })
    // on move
board.addEventListener("mousemove", function(e) {
    if (isPenDown) {
        console.log("MOuse move")
        console.log("Mouse move")
            // lineTo
        let x = e.clientX;
        let y = e.clientY;
        let top = getLocation();
        y = Number(y) - top;
        ctx.lineTo(x, y);
        // stroke
        ctx.stroke();
    }
})
board.addEventListener("mouseup", function() {
    window.addEventListener("mouseup", function() {
        // close Path
        console.log("MOuse up")
        console.log("Mouse up")
            // ctx.closePath();
        isPenDown = false;
    })
})

function getLocation() {
    let { top } = board.getBoundingClientRect();
    return top;
}