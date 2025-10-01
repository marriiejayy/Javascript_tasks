// Use document.getElementById() to find the paragraph  
function colorChanger() {
   document.getElementById('text').textContent = "color has been changed to Yellow"
    //  Use `style.color` to change the text  
    document.getElementById('text').style.color = "yellow";
}
    

let colors = ["red", "blue", "green", "azure", "pink", "purple"];
let firstColor = 0;

function changeBackgroundColor() {
  //  next color
  let chosenColor = colors[firstColor];

  document.body.style.backgroundColor = chosenColor;
  document.getElementById("message").textContent =
    "Background color changed to " + chosenColor;

  // loop through colors
  firstColor = (firstColor + 1) % colors.length;
}


   


