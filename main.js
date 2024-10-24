//HTMLの要素を取得して変数に格納する
const time = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//変数を宣言する
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

//時間を表示する
function displayTime() {
    elapsedTime = Date.now() - startTime; 

    let currentTime = new Date(elapsedTime);

    let hour = String(currentTime.getHours()-9).padStart(2, "0");
    let minute = String(currentTime.getMinutes()).padStart(2, "0");
    let second = String(currentTime.getSeconds()).padStart(2, "0");
    let millisecond = String(currentTime.getMilliseconds()).slice(0,2);

    time.textContent = `${hour}:${minute}:${second}:${millisecond}`;
}

//スタートで計測開始
startButton.addEventListener("click", function() {
    if (timerInterval === null) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(displayTime, 10);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
});

//ストップで計測止める
stopButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timerInterval = null;
    startButton.disabled = false;
    stopButton.disabled = true;
});

//リセットで表示を0に戻す
resetButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    time.textContent = "00:00:00:00";
    startButton.disabled = false;
    stopButton.disabled = true; 
});
