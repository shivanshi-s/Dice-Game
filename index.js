var randomNumber1 = Math.random();
randomNumber1 *=6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomNumber2 = Math.random();
randomNumber2 *=6;
randomNumber2 = Math.floor(randomNumber2)+1;

console.log(randomNumber1);

if (randomNumber1 == 1)
{
    document.getElementsByClassName("img1")[0].setAttribute("src","./assets/dice1.png")
}
else if (randomNumber1 == 2)
{
    document.getElementsByClassName("img1")[0].setAttribute("src","./assets/dice2.png")
}
else if (randomNumber1 == 3)
{
    document.getElementsByClassName("img1")[0].setAttribute("src","./assets/dice3.png")
}
else if (randomNumber1 == 4)
{
    document.getElementsByClassName("img1")[0].setAttribute("src","./assets/dice4.png")
}
else if (randomNumber1 == 5)
{
    document.getElementsByClassName("img1")[0].setAttribute("src","./assets/dice5.png")
}


if (randomNumber2 == 1)
{
    document.getElementsByClassName("img2")[0].setAttribute("src","./assets/dice1.png")
}
else if (randomNumber2 == 2)
{
    document.getElementsByClassName("img2")[0].setAttribute("src","./assets/dice2.png")
}
else if (randomNumber2 == 3)
{
    document.getElementsByClassName("img2")[0].setAttribute("src","./assets/dice3.png")
}
else if (randomNumber2 == 4)
{
    document.getElementsByClassName("img2")[0].setAttribute("src","./assets/dice4.png")
}
else if (randomNumber2 == 5)
{
    document.getElementsByClassName("img2")[0].setAttribute("src","./assets/dice5.png")
}

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else
    document.querySelector("h1").innerHTML = "It's a Tie!"

/*
random number will generate the same way ---
Alternative solution to loops : 

 var randomDiceImage = "dice" + randomNumber1 + ".png";

 change string based on random no by src ---------------

var randomImageSource = "assets/"+ randomDiceImage; //assets/dice1.png

changing attributes ---------

var img = document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); 

Second image ------------------
var randomNumber2...blah blah.
var randomImageSource2 = "assets/dice"+randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)
*/
function Refresh() {
    window.parent.location = window.parent.location.href;
    }