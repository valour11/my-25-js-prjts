
const quotesParagraph = document.getElementById("quotes");
const button = document.getElementById("quote-btn");

button.addEventListener("click", quoteButton);

let index = 0;

function quoteButton(){
    
    let randomQuotes = [
    "he who dies, dies first --jim Rohn", "never give up --crdi B"
];
    for (let index = 0; index < randomQuotes.length; index++) {
        quotesParagraph.innerText = randomQuotes[0];
        
    }
}