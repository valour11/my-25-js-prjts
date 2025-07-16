
// declare all variables
const entireBody = document.getElementById("body-container");
const button = document.getElementById("click-btn");
const hexCode = document.getElementById("hex-code");

// add event listeners
button.addEventListener("click", changeColors);

let index = 0;

// function to change the background color
function changeColors(){
    // let colors = ["red", "blue", "orange", "yellow", "green", "plum", "violet"];

    let hexCodes = ["#ff0000", "#0000ff", "#ffa500", "#ffff00", "#457563", "#dda0dd", "#ee82ee"];

    hexCode.innerText = hexCodes[index++];
    
    entireBody.style.background = hexCodes[index++];

    // to loop through the arrayS of colors
    if (index > hexCodes.length - 1){
        index = 0;
    }
}
