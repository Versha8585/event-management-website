// Countdown Timer
function startCountdown(eventDate) {
    let countDownDate = new Date(eventDate).getTime();

    setInterval(function () {
        let now = new Date().getTime();
        let timeLeft = countDownDate - now;

        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
}

startCountdown("April 15, 2025 00:00:00");

// RSVP Form
function openRSVPForm(eventName) {
    document.getElementById("event-name").innerText = eventName;
    document.getElementById("rsvp-form-container").classList.remove("hidden");
}

function closeRSVPForm() {
    document.getElementById("rsvp-form-container").classList.add("hidden");
}

// Handle RSVP Form Submission
document.getElementById("rsvpForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("RSVP Submitted!");
    closeRSVPForm();
});

// Add New Event
function addNewEvent() {
    let eventName = prompt("Enter Event Name:");
    let eventDate = prompt("Enter Event Date (e.g., July 20, 2025):");

    if (eventName && eventDate) {
        let container = document.getElementById("events-container");
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerHTML = `<h3>${eventName}</h3><p>Date: ${eventDate}</p><button onclick="openRSVPForm('${eventName}')">RSVP</button>`;
        container.appendChild(eventDiv);
    }
}

// Mobile Menu Toggle
document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


   
