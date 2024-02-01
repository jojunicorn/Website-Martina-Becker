<template>
    <body>
            <footer>
        <div class="footer-left">
            © Naturheilpraxis Martina Becker
        </div>
        <div class="footer-right">
            <ul>
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
                <li><a href="/disclaimer">Disclaimer</a></li>
            </ul>
        </div>
    </footer>
    </body>

</template>

<style scoped>
/* Reset default margin and padding */
body, ul {
    margin: 0;
    padding: 0;
}

/* Style for the footer */
footer {
    background-color: #71A02E; /* Green background color */
    height: 2cm; /* Adjust the height as needed */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem; /* Add padding to the sides */
    color: white; /* Text color */
    font-size: 1rem; /* Text size */
    left: 0; /* Stick to the left side */
    right: 0; /* Stick to the right side */
    bottom: 0; /* Stick to the bottom */

    /* Responsive styles for screens smaller than 768px (adjust as needed) */
    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically */
        height: auto; /* Auto height based on content */
        padding: 1rem; /* Increase padding for spacing */
        text-align: center; /* Center-align text */
    }
}

/* Style for the left side of the footer */
.footer-left {
    font-weight: bold; /* Bold text */

    /* Additional style for smaller screens */
    @media (max-width: 768px) {
        margin-bottom: 0.5rem; /* Add space below the text */
    }
}

/* Style for the right side of the footer */
.footer-right ul {
    list-style: none; /* Remove bullet points from the list */
    display: flex;

    /* Additional style for smaller screens */
    @media (max-width: 768px) {
        flex-direction: column; /* Stack items vertically */
        align-items: center; /* Center-align items */
    }
}

/* Style for the links in the footer */
.footer-right a {
    text-decoration: none; /* Remove underlines from links */
    color: white; /* Text color */
    margin-right: 1rem; /* Add spacing between links */

    /* Additional style for smaller screens */
    @media (max-width: 768px) {
        margin: 0.5rem 0; /* Add spacing around links */
    }
}

/* Style for the links on hover (optional) */
.footer-right a:hover {
    text-decoration: underline; /* Underline on hover (optional) */
}

</style>