// index.html
var codingTitle = document.querySelector("#codingTitle");
var paraEl = document.querySelector("#codingPara");
var startButton = document.querySelector("#start");

var newEl = document.createElement("h3");
var newP = document.createElement("p");

newEl.textContent = "Coding Quiz Challenge";
newP.textContent =
  "Try to answer the following code-related questions within the time limit. " +
  "Keep in mind that incorrect answers will penalize your score/time by ten seconds!";


codingTitle.append(newEl);
paraEl.append(newP);

function startQuiz(){
    
}

startButton.addEventListener("click", startQuiz)

