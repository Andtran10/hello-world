'use strict';

let usersName = '';
let userInput = '';
let idString = '';

function newUsersName() {
    usersName = prompt("What is your name?");
    while (usersName == null || usersName == '') {
        if (usersName == null) {
            usersName = confirm("skip?");
            usersName = '';
            return usersName;
        } else {
            usersName = prompt("input anything plz.");
        }

    }
    return usersName;
}


function welcomeMess(usersName) {
    if (usersName !== null && usersName !== '') {
        document.write("Helloooooooo " + usersName + "!");
    }
    else {
        document.write(" Enjoy your stay");
    }

}

function change() {
    document.getElementById("Osun").style.color = changeColor();

}

function changeColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);

}

function moonTime() {
    let howManyMoons = prompt("how many moons do you want to see?");
    for (let i = 0; i < howManyMoons; i++ ){
        document.write('<img class="loop-moon" src ="moon.jpg" alt="moon exploding" />');

    }

}