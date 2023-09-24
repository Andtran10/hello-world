'use strict'

alert("Welcome");

const usersName = prompt("What is your name");
console.log(usersName);

 document.write("Hi " + usersName + " Welcome to my page")


/* function visitPage() {
    window.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    
} */

function change() {
    document.getElementById("Osun").style.color = changeColor();

}

function changeColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);

}










if (usersName == "Andrew"){
    document.write(" Helloooooooo");
} else if (usersName == null){
    document.write(" You lazy bum")
} else {
    document.write(" Enjoy your stay")
}


