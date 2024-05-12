//var for all drum buttons
const drumButtons = document.querySelectorAll(".drum");
//add click listener for all drum buttons
for (let i = 0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener("click", function() {
//set different sound for each button dependinng of innerHTML +animation
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
)}

//add keydown listener
document.addEventListener("keydown", function(event) {
//set different sound for keys +animation   
    makeSound(event.key);
    buttonAnimation(event.key);
    }
)

//this function makes different sounds depending on input (innerHTMS of buttons or pressed keys)
function makeSound(key) {
    switch(key){
        case "w":
                var crashSound = new Audio("./sounds/crash.mp3");
                crashSound.play();        
            break;
        case "a":
                var kickbassSound = new Audio("./sounds/kick-bass.mp3");
                kickbassSound.play();
            break;                    
        case "s":
                var snareSound = new Audio("./sounds/snare.mp3");
                snareSound.play();
            break;  
        case "d":
                var tom1Sound = new Audio("./sounds/tom-1.mp3");
                tom1Sound.play();
            break;  
        case "j":
                var tom2Sound = new Audio("./sounds/tom-2.mp3");
                tom2Sound.play();
            break;  
        case "k":
                var tom3Sound = new Audio("./sounds/tom-3.mp3");
                tom3Sound.play();
            break;  
        case "l":
                var tom4Sound = new Audio("./sounds/tom-4.mp3");
                tom4Sound.play();
            break;  
        default: console.log(key +" was pressed. No sound attached.");
            break;
    }
}

function buttonAnimation (currentKey) {
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add ("pressed");
   setTimeout(function() {
    activeButton.classList.remove ("pressed");
   }, 100)
}