function createSticky() {
    // <div class="stickyPad">
    //     <div class="nav-bar">
    //         <div class="close"></div>
    //         <div class="minimize"></div>
    //     </div>
    //     <div class="textbox">
    //         <textarea name="" id="" cols="30" rows="10"></textarea></div>
    // </div>
    // create 
    let textBox = createBox();
    // let stickyPad = document.querySelector("stickyPad")
    // stickyPad.style.display = "block";
    let textarea = document.createElement("textarea");
    textBox.appendChild(textarea);
    textBox.style.display = "block";
}