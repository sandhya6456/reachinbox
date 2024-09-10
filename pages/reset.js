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
});


// reset.js

// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggle = document.getElementById('theme');
//     const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
//     // Set initial theme based on user's preference or default
//     if (localStorage.getItem('theme') === 'dark' || darkMode) {
//       document.body.classList.add('dark-theme');
//       themeToggle.checked = true;
//     }
  
//     // Toggle theme on switch change
//     themeToggle.addEventListener('change', () => {
//       if (themeToggle.checked) {
//         document.body.classList.add('dark-theme');
//         localStorage.setItem('theme', 'dark');
//       } else {
//         document.body.classList.remove('dark-theme');
//         localStorage.setItem('theme', 'light');
//       }
//     });
//   });
  