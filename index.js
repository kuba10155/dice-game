var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomDiceNumber1 = "images/dice" + randomNumber1 + ".png";
var randomDiceNumber2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceNumber1);
document.querySelector(".img2").setAttribute("src", randomDiceNumber2);

if(randomNumber1 > randomNumber2){
  document.querySelector(".container h1").textContent = "🚩 Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector(".container h1").textContent = "Player 2 Wins! 🚩";
}
else{
  document.querySelector(".container h1").textContent = "Draw!";
}
