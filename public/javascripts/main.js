document.addEventListener("DOMContentLoaded", () => {
  const timerElement = document.getElementById("timer");
  const progressCircle = document.getElementById("progress-circle");
  let seconds = 59;
  const maxSeconds = 59;
  const circumference = 2 * Math.PI * 18; // Updated radius to 18 for smaller circle
  progressCircle.style.strokeDasharray = `${circumference}`;

  function updateTimer() {
    timerElement.textContent = seconds < 10 ? `0${seconds}` : seconds;

    // Calculate progress
    const offset = circumference - (seconds / maxSeconds) * circumference;
    progressCircle.style.strokeDashoffset = offset;

    // Decrease the seconds
    if (seconds === 0) {
      seconds = maxSeconds; // Reset to 59 seconds if 0
    } else {
      seconds--;
    }
  }

  setInterval(updateTimer, 1000);
});
