function startTimer(duration, display) {
    var timer = 0, minutes, seconds;
    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (++timer >= duration || finish) {
            clearInterval(intervalId); // Stop the timer when the duration is reached
            addFinishTimer();
        }
    }, 1000);
}

function addFinishTimer() {
    let finishTimer = $("#finishTimer");
    const timer = $("#timer").text();
    finishTimer.append(timer);
}


$(document).ready(function() {
    var duration = 60 * 5; // 5 min
    var display = $('#timer');
    startTimer(duration, display);
});
