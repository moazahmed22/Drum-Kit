//detect mouse click
let buttonText ;
let tom1 = new Audio("./sounds/tom-1.mp3");
let tom2 = new Audio("./sounds/tom-2.mp3");
let tom3 = new Audio("./sounds/tom-3.mp3");
let tom4 = new Audio("./sounds/tom-4.mp3");
let crash = new Audio("./sounds/crash.mp3");
let snare = new Audio("./sounds/snare.mp3");
let kickBass = new Audio("./sounds/kick-bass.mp3");


const htmlButtons = document.querySelectorAll(".drum");
for (let i = 0; i < htmlButtons.length; i ++)
    htmlButtons[i].addEventListener("click",function () {
    buttonText = this.innerHTML;
    animation(buttonText);
    playAudio(buttonText);
})
//detect keyboard
document.addEventListener("keydown", (event) => {
    animation(event.key);
    playAudio(event.key);
})
//playAudio function
function playAudio (key) {
    switch (key) {
        case "w":
            tom1.play();
            break;

        case "a":
            tom2.play();
            break;

        case "s":
        tom3.play();
            break;

        case "d":
            tom4.play();
            break;

        case "j":
            crash.play();
            break;

        case "k": 
            snare.play();
            break;
            
        case "l":
            kickBass.play();        
            break;
            
        default:
            break;
    }
}
//add animation to buttons
function animation (key) {
    if (key === "w"|| key === "a"||key === "s"||key === "d"||key === "j"||key === "k"||key === "l"){
        let button = document.querySelector("."+key);
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        } ,100)
    }
}