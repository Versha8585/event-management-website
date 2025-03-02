// Countdown Timer for Next Event
function startCountdown(eventDate) {
    let countDownDate = new Date(eventDate).getTime();

    setInterval(function() {
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

// Start Countdown for First Event
startCountdown("April 15, 2025 00:00:00");

// RSVP Form Functions
function openRSVPForm(eventName) {
    document.getElementById("event-name").innerText = eventName;
    document.getElementById("rsvp-form-container").classList.remove("hidden");
}

function closeRSVPForm() {
    document.getElementById("rsvp-form-container").classList.add("hidden");
}

// Handle RSVP Form Submission
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    alert(`Thank you, ${name}! Your RSVP for ${document.getElementById("event-name").innerText} has been recorded.`);
    closeRSVPForm();
});

// Dynamic Event List (DOM Manipulation)
const events = [
    { name: "Technical Fest", date: "April 15, 2025" },
    { name: "Cultural Night", date: "May 5, 2025" },
    { name: "Sports Meet", date: "June 10, 2025" }
];

function loadEvents() {
    let container = document.getElementById("events-container");
    container.innerHTML = ""; // Clear existing events

    events.forEach(event => {
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");

        eventDiv.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <button onclick="openRSVPForm('${event.name}')">RSVP</button>
        `;

        container.appendChild(eventDiv);
    });
}

loadEvents(); // Load events initially

// Add New Event Dynamically
function addNewEvent() {
    let eventName = prompt("Enter Event Name:");
    let eventDate = prompt("Enter Event Date (e.g., July 20, 2025):");

    if (eventName && eventDate) {
        events.push({ name: eventName, date: eventDate });
        loadEvents();
        alert("New event added successfully!");
    }
}

// Dark/Light Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
