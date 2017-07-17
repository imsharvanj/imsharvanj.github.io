var numSquare = 6;
var colors = generateColor(numSquare);

var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click",function(){
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numSquare = 3;
  colors = generateColor(numSquare);
  pickedColor = pickColor();
  h1.style.background = "steelblue";
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  for (var i = 0; i <  squares.length; i++) {

     if(colors[i]){
      squares[i].style.background = colors[i];
     }
     else {
       squares[i].style.display = "none";
     }
  }

});
hard.addEventListener("click",function(){
  easy.classList.remove("selected");
  hard.classList.add("selected");
  numSquare = 6;
  colors = generateColor(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  h1.style.background = "steelblue";
  for (var i = 0; i <  numSquare; i++) {
     squares[i].style.background = colors[i];
    squares[i].style.display = "block";
}
});

reset.addEventListener("click",function(){
  reset.textContent = "New Colors";
  message.textContent = "";
  h1.style.background = "steelblue";
  colors = generateColor(numSquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
}

});

colorDisplay.textContent = pickedColor;



  for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click",function(){
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
      message.textContent = "Correct";
      changeColor(clickedColor);
      reset.textContent = "Play Again";
    }
    else {
      message.textContent = "Wrong!! Try Again";
      this.style.background = "#232323";
    }

  });
}


function changeColor(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
  h1.style.background = color;
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateColor(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor(){
  var r =  Math.floor(Math.random() * 256);
  var g =  Math.floor(Math.random() * 256);
  var b =  Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")";
}
