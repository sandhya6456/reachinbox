// Function to display emails on the new page
function displayEmails(emailData) {
    const emailList = document.querySelector('.email-list');
    emailList.innerHTML = ''; // Clear the list if any

    emailData.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.classList.add('email-item');
        
        // Add email details
        emailItem.innerHTML = `
            <div class="email-header">
                <strong>From:</strong> ${email.fromName} (${email.fromEmail})<br>
                <strong>To:</strong> ${email.toEmail}<br>
                <strong>Subject:</strong> ${email.subject}<br>
                <strong>Date:</strong> ${new Date(email.sentAt).toLocaleString()}
            </div>
            <div class="email-body">
                ${email.body}
            </div>
            <hr>
        `;
        emailList.appendChild(emailItem); // Add the email item to the list
    });
}

// Retrieve email data from localStorage and display it
document.addEventListener('DOMContentLoaded', function() {
    const emailData = JSON.parse(localStorage.getItem('emailData'));
    if (emailData) {
        displayEmails(emailData);
    } else {
        console.error('No email data found in localStorage');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const rootElement = document.documentElement;
  
    // Default to dark mode
    const darkModeEnabled = localStorage.getItem('darkMode') !== 'disabled';
    
    if (darkModeEnabled) {
      rootElement.classList.add('dark');
      themeToggle.checked = true; // Reflect checkbox state
    }
  
    // Theme toggle switch event listener
    themeToggle.addEventListener('change', function () {
      if (this.checked) {
        rootElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        rootElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
});


  



