// firstQuestion.html
var firstCodingTitle = document.querySelector("#firstCodingTitle");

var firstNewEl = document.createElement("h3");

firstNewEl.textContent = "Commonly used data types DO NOT Include:";

firstCodingTitle.append(firstNewEl);

setTime();

// We only want to start the timer if totalSeconds is > 0
if (totalSeconds > 0) {
    /* The "interval" variable here using "setInterval()" begins the recurring increment of the
       secondsElapsed variable which is used to check if the time is up */
    interval = setInterval(function () {
        secondsElapsed++;

        // So renderTime() is called here once every second.
        renderTime();
    }, 1000);

}