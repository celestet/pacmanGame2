var foodEaten = 0;
var timeStart = 0;
var width = 40;
var height = 40;

function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+min)+min);
}


document.addEventListener("keydown", function(e) {
  var pacmanX = Number(document.getElementById("pacman").getAttribute("x"))
  var pacmanY = Number(document.getElementById("pacman").getAttribute("y"))
 if (e.keyCode == 37) {//left
  document.getElementById("pacman").setAttribute("x", pacmanX - 3)
 }
  else if(e.keyCode == 39) {//right
     document.getElementById("pacman").setAttribute("x", pacmanX + 3)
  }
  else if(e.keyCode == 38) {//up
     document.getElementById("pacman").setAttribute("y", pacmanY - 3)
  }
  else if(e.keyCode == 40) {//down
     document.getElementById("pacman").setAttribute("y", pacmanY + 3)
  }
  var pacman = document.getElementById("pacman")
    var pacmanFood = document.getElementById("pacmanFood")
     var pacmanFood2 = document.getElementById("pacmanFood2")
     var pacmanFood3 = document.getElementById("pacmanFood3")
     var pacmanFood4 = document.getElementById("pacmanFood4")
    //  var ghost = document.getElementById("ghost")

    var foodX = Number(document.getElementById("pacmanFood").getAttribute("x"))
 var foodY = Number(document.getElementById("pacmanFood").getAttribute("y"))
  var food2X = Number(document.getElementById("pacmanFood2").getAttribute("x"))
 var food2Y = Number(document.getElementById("pacmanFood2").getAttribute("y"))
 var food3X = Number(document.getElementById("pacmanFood3").getAttribute("x"))
var food3Y = Number(document.getElementById("pacmanFood3").getAttribute("y"))
var food4X = Number(document.getElementById("pacmanFood4").getAttribute("x"))
var food4Y = Number(document.getElementById("pacmanFood4").getAttribute("y"))
// var ghostX = Number(document.getElementById("ghost").getAttribute("x"))
// var ghostY = Number(document.getElementById("ghost").getAttribute("y"))


if (pacmanX > foodX) {
       pacmanFood.setAttribute("opacity", "1")
     }
     else {
       pacmanFood.setAttribute("opacity", "0")
     var randX = randomNumber(0,800);
          pacmanFood.setAttribute("x",randX)
          foodEaten = foodEaten + 1;
          document.getElementById("score").textContent = foodEaten;
     }

     if (pacmanY > foodY) {
       pacmanFood.setAttribute("opacity", "1")
     }
     else {
     pacmanFood.setAttribute("opacity", "0")
     var randX = randomNumber(0,800);
          pacmanFood.setAttribute("x",randX)
          foodEaten = foodEaten + 1;
          document.getElementById("score").textContent = foodEaten;
     }

     if (pacmanX > food2X) {
       pacmanFood2.setAttribute("opacity", "1")
     }
     else {
       pacmanFood2.setAttribute("opacity", "0")
       var randX = randomNumber(0,800);
            pacmanFood2.setAttribute("x",randX)
            foodEaten = foodEaten + 1;
            document.getElementById("score").textContent = foodEaten;
     }

     if (pacmanY > food2Y) {
       pacmanFood2.setAttribute("opacity", "1")
     }
     else {
       pacmanFood2.setAttribute("opacity", "0")
       var randX = randomNumber(0,800);
            pacmanFood2.setAttribute("x",randX)
            foodEaten = foodEaten + 1;
            document.getElementById("score").textContent = foodEaten;
     }

     if (pacmanX > food3X) {
       pacmanFood3.setAttribute("opacity", "1")
     }
     else {
       pacmanFood3.setAttribute("opacity", "0")
       var randX = randomNumber(0,800);
            pacmanFood3.setAttribute("x",randX)
            foodEaten = foodEaten + 1;
            document.getElementById("score").textContent = foodEaten;
     }

     if (pacmanY > food3Y) {
       pacmanFood3.setAttribute("opacity", "1")
     }
     else {
       pacmanFood3.setAttribute("opacity", "0")
       var randX = randomNumber(0,800);
            pacmanFood3.setAttribute("x",randX)
            foodEaten = foodEaten + 1;
            document.getElementById("score").textContent = foodEaten;
     }
     if (pacmanX > food4X) {
       pacmanFood4.setAttribute("opacity", "1")
     }
     else {
       pacmanFood4.setAttribute("opacity", "0")
       var randX = randomNumber(0,800);
            pacmanFood4.setAttribute("x",randX)
            foodEaten = foodEaten + 1;
            document.getElementById("score").textContent = foodEaten;
     }

     if (pacmanY > food4Y) {
       pacmanFood4.setAttribute("opacity", "1")
     }
     else {
       pacmanFood4.setAttribute("opacity", "0")
       var randX = randomNumber(0,800);
            pacmanFood4.setAttribute("x",randX)
            foodEaten = foodEaten + 1;
            document.getElementById("score").textContent = foodEaten;
     }



if(foodEaten == 10){
  document.getElementById("screen").pauseAnimations()
  var timeStop = Date.now();
  var timeDuration = timeStop - timeStart
  timeDuration = timeDuration / 1000
  document.getElementById("totalTime").textContent = timeDuration
}


  });
