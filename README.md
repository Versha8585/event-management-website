# event-management-websit
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>College Event Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <nav>
            <h1>Event Manager</h1>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h2>Welcome to College Event Management</h2>
        <p>Find and manage college events easily.</p>
    </section>

    <!-- Countdown Timer -->
    <section class="countdown">
        <h2>Next Event Starts In:</h2>
        <div id="timer">
            <span id="days">00</span>D :
            <span id="hours">00</span>H :
            <span id="minutes">00</span>M :
            <span id="seconds">00</span>S
        </div>
    </section>

    <!-- Upcoming Events -->
    <section class="event-list">
        <h2>Upcoming Events</h2>
        <div class="grid-container">
            <div class="event">
                <h3>Technical Fest</h3>
                <p>Date: April 15, 2025</p>
                <button onclick="openRSVPForm('Technical Fest')">RSVP</button>
            </div>
            <div class="event">
                <h3>Cultural Night</h3>
                <p>Date: May 5, 2025</p>
                <button onclick="openRSVPForm('Cultural Night')">RSVP</button>
            </div>
            <div class="event">
                <h3>Sports Meet</h3>
                <p>Date: June 10, 2025</p>
                <button onclick="openRSVPForm('Sports Meet')">RSVP</button>
            </div>
        </div>
    </section>

    <!-- RSVP Form -->
    <section id="rsvp-form-container" class="hidden">
        <div class="rsvp-form">
            <h2>RSVP for <span id="event-name"></span></h2>
            <form id="rsvpForm">
                <input type="text" id="name" placeholder="Your Name" required>
                <input type="email" id="email" placeholder="Your Email" required>
                <button type="submit">Submit RSVP</button>
            </form>
            <button onclick="closeRSVPForm()">Close</button>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 College Event Management</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

    
