//detect mouse click
let buttonText;

function audioFile(string) {
    this.audio = new Audio(`./sounds/${string}`);
    audio.play();
}

const htmlButtons = document.querySelectorAll(".drum");
for (let i = 0; i < htmlButtons.length; i++)
    htmlButtons[i].addEventListener("click", function () {
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
function playAudio(key) {
    switch (key) {
        case "w":
            audioFile('tom-1.mp3');
            break;

        case "a":
            audioFile('tom-2.mp3');
            break;

        case "s":
            audioFile('tom-3.mp3');
            break;

        case "d":
            audioFile('tom-4.mp3');
            break;

        case "j":
            audioFile('crash.mp3');
            break;

        case "k":
            audioFile('snare.mp3');
            break;

        case "l":
            audioFile('kick-bass.mp3');
            break;

        default:
            break;
    }
}
//add animation to buttons
function animation(key) {
    if (key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
        let button = document.querySelector("." + key);
        button.classList.add("pressed");
        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100)
    }
}