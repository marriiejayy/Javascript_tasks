
function countWords() {
    let text = document.getElementById('message').value;

    let charCount = text.length;

    let wordCount = 0;
    let words = text.trim().split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            wordCount++;
        }
    }

    let counter = document.getElementById('counter');
    counter.textContent = "Characters: " + charCount + " | Words: " + wordCount;
    // Challenge:Highlight the counter in red if the character count goes above 200.
    if (charCount > 200) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
}