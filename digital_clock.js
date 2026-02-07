let is24Hour = false;

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const weekdayEl = document.getElementById("weekday");
const toggleBtn = document.getElementById("toggleFormat");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    if (!is24Hour) {
        ampmEl.textContent = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        ampmEl.style.display = "block";
    } else {
        ampmEl.style.display = "none";
    }

    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;

    weekdayEl.textContent = now.toLocaleDateString(undefined, {
        weekday: "long"
    });
}

toggleBtn.onclick = () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? "24H" : "12H";
};

updateClock();
setInterval(updateClock, 1000);
