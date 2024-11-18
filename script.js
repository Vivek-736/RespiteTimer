const WORK_MIN = 25;
const SHORT_BREAK_MIN = 5;
const LONG_BREAK_MIN = 20;
let reps = 0;
let timer;

function resetTimer() {
  clearTimeout(timer);
  document.getElementById("timer").innerText = "00:00";
  document.getElementById("title").innerText = "Respite Timer";
  document.getElementById("check-marks").innerText = "";
  reps = 0;
}

function startTimer() {
  reps++;
  let workSec = WORK_MIN * 60;
  let shortBreakSec = SHORT_BREAK_MIN * 60;
  let longBreakSec = LONG_BREAK_MIN * 60;

  if (reps % 8 === 0) {
    countDown(longBreakSec);
    document.getElementById("title").innerText = "Break";
    document.getElementById("title").style.color = "#e7305b";
  } else if (reps % 2 === 0) {
    countDown(shortBreakSec);
    document.getElementById("title").innerText = "Break";
    document.getElementById("title").style.color = "#e2979c";
  } else {
    countDown(workSec);
    document.getElementById("title").innerText = "Work";
    document.getElementById("title").style.color = "#9bdeac";
  }
}

function countDown(count) {
  let countMin = Math.floor(count / 60);
  let countSec = count % 60;

  if (countSec < 10) {
    countSec = `0${countSec}`;
  }

  if (countMin < 10) {
    countMin = `0${countMin}`;
  }

  document.getElementById("timer").innerText = `${countMin}:${countSec}`;
  if (count > 0) {
    timer = setTimeout(() => countDown(count - 1), 1000);
  } else {
    startTimer();
    let mark = "";
    let workSessions = Math.floor(reps / 2);
    for (let i = 0; i < workSessions; i++) {
      mark += "✅";
    }
    document.getElementById("check-marks").innerText = mark;
  }
}