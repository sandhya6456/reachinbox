
document.getElementById('saveButton').addEventListener('click', function() {
  const pageContent = document.documentElement.outerHTML;
  const blob = new Blob([pageContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'index.html';  
  a.click();
  URL.revokeObjectURL(url);
});


// Function to check if the user is signed in
function isUserSignedIn() {
  // For example, checking if a token exists in local storage
  return localStorage.getItem('authToken') !== null;
}

// Event listener for Fetch Emails button
document.getElementById('fetch-emails-button').addEventListener('click', function() {
  if (!isUserSignedIn()) {
    alert("You can't access this unless you sign in.");
    return;
  }
  // Add code to fetch emails here
});

// Event listener for Reset Data button
document.getElementById('fetch-reset-button').addEventListener('click', function() {
  if (!isUserSignedIn()) {
    alert("You can't access this unless you sign in.");
    return;
  }
  // Add code to reset data here
});
