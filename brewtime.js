
let seconds = 4; // 4 mins
let countdown = 0; // set/clear interval
let isPaused = true;



const timerDisplay = document.querySelector(".timerDisplay");
const startButton = document.querySelector(".startButton");

const alarm = document.createElement('audio'); 
alarm.setAttribute("src", "/alarm.mp3");


// event listener for start  
startButton.addEventListener('click', () => {
    clearInterval(countdown);
    isPaused = !isPaused;
    if (!isPaused) {
        countdown = setInterval(timer, 1000);
    }
    
});

//event listener for reset


//Timer countdown

function timer(){
    seconds--; 
    if (seconds < 0 ) {
        clearInterval(countdown);
        
        alarm.play();
        countdown = setInterval(timer, 1000);
    }
}

//Countdown display in HTML

function countdownDisplay() {
    let minutes = Math.floor(seconds/60);
    let remainderSeconds = seconds % 60;
    timerDisplay.innerHTML = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function updateHTML() {
    countdownDisplay();
    

}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;
