var wordBlank = document.querySelector(".word-blanks");
var score = document.querySelector(".score");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var scoreButton = document.querySelector(".score-button")

var chosen = ""
var buttonDiv = document.querySelector("#button-div")
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenLetter = "";
var scoreCounter = 0;
var timer;
var timerCount;


// Array of words the user will guess
var letter = ["A", "B", "C", "D"];

// The init function is called when the page loads 


  

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;  
  timerCount = 30;
  
  startTimer()
  question1()
  }

// The winGame function is called when the win condition is met
function winGame() {
  wordBlank.textContent = "You are a true Husker Fan!!!🏆 ";
  if (scoreCounter = 40);
  startButton.disabled = false;
  
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  wordBlank.textContent = "You need to watch more Huskers!";
  if (scoreCounter <= 30);
  startButton.disabled = false;
  
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        winGame();
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}



// Creates blanks on screen
function question1 () {
  wordBlank.textContent = "What year did the Husker sell out streak start?";
  buttonDiv.classList.remove("hidden")
  button1.innerHTML = "A. 1962";
  button2.innerHTML = "B. 1961";
  button3.innerHTML = "C. 1963";
  button4.innerHTML = "D. 1964";
  button1.addEventListener("click", answer1);
  button2.addEventListener("click", answer1);
  button3.addEventListener("click", answer1);
  button4.addEventListener("click", answer1);

}

function answer1 (event) {
chosen = event.target.innerHTML
console.log("answer1 chosen", chosen)
if (chosen === "A. 1962"){console.log("correct")} 
else {console.log("incorrect")}
getScore ()
checkWin ()
question2 ()
}


function question2 () {
  wordBlank.textContent = "When did the Huskers win a last National Championship?";
  buttonDiv.classList.remove("hidden")
  button1.innerHTML = "A. 1999";
  button2.innerHTML = "B. 1997";
  button3.innerHTML = "C. 1993";
  button4.innerHTML = "D. 1992";
  button1.addEventListener("click", answer2);
  button2.addEventListener("click", answer2);
  button3.addEventListener("click", answer2);
  button4.addEventListener("click", answer2);

}

function answer2 (event) {
  chosen = event.target.innerHTML
  if (chosen === "B. 1997"){console.log("correct")} 
  else {console.log("incorrect")}
  
  question3 () 
  }
  
  function question3 () {
    wordBlank.textContent = "When did the Huskers win their first National Championship?";
    buttonDiv.classList.remove("hidden")
    button1.innerHTML = "A. 1963";
    button2.innerHTML = "B. 1971";
    button3.innerHTML = "C. 1970";
    button4.innerHTML = "D. 1968";
    button1.addEventListener("click", answer3);
    button2.addEventListener("click", answer3);
    button3.addEventListener("click", answer3);
    button4.addEventListener("click", answer3);
  
  }
  
  function answer3 (event) {
    chosen = event.target.innerHTML
    if (chosen === "C. 1970"){console.log("correct")} 
    else {console.log("incorrect")}
    
    question4 ()
    }

    function question4 () {
      wordBlank.textContent = "When did the Huskers win their last Conference Championship?";
      buttonDiv.classList.remove("hidden")
      button1.innerHTML = "A. 2001";
      button2.innerHTML = "B. 1999";
      button3.innerHTML = "C. 1997";
      button4.innerHTML = "D. 1996";
      button1.addEventListener("click", answer4);
      button2.addEventListener("click", answer4);
      button3.addEventListener("click", answer4);
      button4.addEventListener("click", answer4);
    
    }
    
    function answer4 (event) {
      chosen = event.target.innerHTML
      if (chosen === "B. 1999"){console.log("correct")} 
      else {console.log("incorrect")}
           
      }

  function getScore() {
    console.log("chosen", chosen)
    if (chosen === "A. 1962")  {
      scoreCounter = scoreCounter + 10;
    } 

    console.log("chosen", chosen)
    if (chosen === "B. 1997") {
      scoreCounter = scoreCounter + 10;
    }
    
    console.log("chosen", chosen)
    if (chosen === "C. 1970") {
      scoreCounter = scoreCounter + 10;
    }
    console.log("chosen", chosen)
    if (chosen === "B. 1999") {
      scoreCounter = scoreCounter + 10;
    }

    scoreButton.textContent = scoreCounter;
      
  };



function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (scoreCounter === 40) {
    // This value is used in the timer function to test if win condition is met
    isWin = true;
    console.log("win")
  }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
  // If the count is zero, exit function
  if (timerCount === 0) {
    return;
  }

  }
);

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);


// Calls init() so that it fires when page opened


// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetScore() {
  // Resets win and loss counts
    timerCount = 30
    console.log("You're a true Huskerfan!")
  
  clearInterval(timer);
  scoreCounter = 0;
  scoreButton.textContent = scoreCounter;
  startGame ()
  // Renders win and loss counts and sets them into client storage

}
// Attaches event listener to button
resetButton.addEventListener("click", resetScore);