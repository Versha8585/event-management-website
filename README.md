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
            <button id="theme-toggle">Toggle Theme</button>
        </nav>
    </header>

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
        <button onclick="addNewEvent()">+ Add Event</button>
        <div id="events-container">
            <!-- Events will be added dynamically here -->
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

        
    
        
               
        
               


