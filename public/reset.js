// Function to display reset message
function displayResetMessage(message) {
    const resetMessageContainer = document.querySelector('.reset-message');
    resetMessageContainer.innerHTML = `
        <p>${message}</p>
    `;
}

// Retrieve reset data from localStorage and display it
document.addEventListener('DOMContentLoaded', function() {
    const resetData = JSON.parse(localStorage.getItem('resetData'));
    if (resetData) {
        displayResetMessage(resetData); // Display the reset message
    } else {
        console.error('No reset data found in localStorage');
    }

    const themeToggle = document.getElementById('themeToggle');
    const bodyElement = document.body;

    // Default to dark mode if stored in localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';
    
    if (darkModeEnabled) {
        bodyElement.classList.add('dark');
        themeToggle.checked = true; // Reflect checkbox state
    }

    // Theme toggle switch event listener
    themeToggle.addEventListener('change', function () {
        if (this.checked) {
            bodyElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            bodyElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});


