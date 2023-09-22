'use strict'

alert("Welcome");

const usersName = prompt("What is your name");
console.log(usersName);

 document.write("Hi " + usersName + " Welcome to my page")


/* function visitPage() {
    window.location='https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    
} */

function changeColor() {
    document.getElementById("Osun").style.color = "green";
}

if (usersName == "Andrew"){
    document.write(" Helloooooooo");
} else if (usersName == null){
    document.write(" You lazy bum")
} else {
    document.write(" Enjoy your stay")
}


