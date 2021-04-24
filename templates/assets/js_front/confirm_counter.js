var butt = $(".button-enter-code");
var intervalFunc = null;
function startTimer() {
    var duration = 90
    var timer = duration, minutes, seconds;
    if (intervalFunc) clearInterval(intervalFunc);
    intervalFunc = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $('.timer-class').text(minutes + ":" + seconds)
        if (--timer < 0) {
            clearInterval(intervalFunc)
            $('.timer-class').text('')
            butt.addClass("activeButCode")

        }
    }, 1000);

    $(".stop-timer").click(function () {
        clearInterval(intervalFunc);
        $('.timer-class').text('');
    });
}

$(".button-start-timer").click(function () {
    startTimer()
});

$(".profile-add-code .button").click(function () {
    startTimer()
});

$(".button").click(function () {
    butt.removeClass("activeButCode");
});

