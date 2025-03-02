# event-management-website
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

    <section class="hero">
        <h2>Welcome to College Event Management</h2>
        <p>Find and manage college events easily.</p>
        <button onclick="alert('Event Registration Coming Soon!')">Register Now</button>
    </section>

    <section class="event-list">
        <h2>Upcoming Events</h2>
        <div class="grid-container">
            <div class="event">
                <h3>Technical Fest</h3>
                <p>Join our annual tech fest and showcase your skills.</p>
            </div>
            <div class="event">
                <h3>Cultural Night</h3>
                <p>Experience a night of music, dance, and culture.</p>
            </div>
            <div class="event">
                <h3>Sports Meet</h3>
                <p>Participate in various sports activities and win prizes.</p>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 College Event Management</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
