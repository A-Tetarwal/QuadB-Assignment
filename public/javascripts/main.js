document.addEventListener("DOMContentLoaded", () => {
  const timerElement = document.getElementById("timer");
  const progressCircle = document.getElementById("progress-circle");
  let seconds = 59;
  const maxSeconds = 59;
  const circumference = 2 * Math.PI * 18;
  progressCircle.style.strokeDasharray = `${circumference}`;

  function updateTimer() {
    timerElement.textContent = seconds < 10 ? `0${seconds}` : seconds;

    const offset = circumference - (seconds / maxSeconds) * circumference;
    progressCircle.style.strokeDashoffset = offset;

    if (seconds === 0) {
      seconds = maxSeconds;
    } else {
      seconds--;
    }
  }

  setInterval(updateTimer, 1000);
});

document.getElementById('inr-dropdown').addEventListener('click', () => {
    document.getElementById('inr-menu').classList.toggle('show');
});

document.getElementById('btc-dropdown').addEventListener('click', () => {
    document.getElementById('btc-menu').classList.toggle('show');
});
