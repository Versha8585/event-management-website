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
