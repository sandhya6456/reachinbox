
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


// Extract token from URL query string
// function getTokenFromURL() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get('token');
//   }
  
//   // Store token in local storage
//   function storeToken(token) {
//     localStorage.setItem('authToken', token);
//   }
  
//   // Initialize token storage if available in URL
//   function initializeToken() {
//     const token = getTokenFromURL();
//     if (token) {
//       storeToken(token);
//     }
//   }
  
//   // Call initializeToken when the page loads
//   document.addEventListener('DOMContentLoaded', initializeToken);


// function isTokenExpired(token) {
//     // You can use a library like jwt-decode to parse the token and check expiration
//     return false; // Replace with actual expiration check
//   }
  
//   // Handle token expiration
//   function handleToken() {
//     const token = getAuthToken();
//     if (token && isTokenExpired(token)) {
//       // Redirect to login or refresh token logic
//       window.location.href = '/login'; // Replace with actual login or refresh logic
//     }
//   }
  
//   // Call handleToken when the page loads
//   document.addEventListener('DOMContentLoaded', handleToken);
  
