
// declare all variables
const entireBody = document.getElementById("body-container");
const button = document.getElementById("click-btn");


// add event listeners
button.addEventListener("click", changeColors);

let index = 0;

function changeColors(){
    let colors = ["red", "blue", "orange", "yellow", "green"];
    
    entireBody.style.background = colors[index++];

    // to loop through the arrayS of colors
    if (index > colors.length - 1){
        index = 0;
    }
}

// thank You