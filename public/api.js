
function getAuthToken() {
  const token = localStorage.getItem('authToken');
  console.log('Retrieved token:', token); // Verify token retrieval
  return token;
  }

  // Fetch with authentication
  function fetchWithAuth(url, options = {}) {
    // const token = getAuthToken();
    token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2FuZGh5YWt1bWFyaTIwMDgyMDAzQGdtYWlsLmNvbSIsImlkIjoxNDM2LCJmaXJzdE5hbWUiOiJTYW5kaHlhIiwibGFzdE5hbWUiOiJLdW1hcmkifSwiaWF0IjoxNzI1OTY3OTIyLCJleHAiOjE3NTc1MDM5MjJ9.-SDlp2zy5XB8vaskTj0EPLWxYONchKmbQ-Lyt5GBEtA"
    const headers = new Headers(options.headers || {});
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
    return fetch(url, { ...options, headers });
  }
  

// Function to fetch all emails
function fetchAllEmails() {
    return fetchWithAuth('https://hiring.reachinbox.xyz/api/v1/onebox/list')
      .then(response => response.json())
      .then(data => {
        console.log('All emails:', data);
        return data; // Return the data for further use
      })
      .catch(error => {
        console.error('Error fetching emails:', error);
        throw error; // Rethrow the error for handling elsewhere
      });
  }
  
  // Call the function to fetch emails
  fetchAllEmails();


document.getElementById('fetch-emails-button').addEventListener('click', function() {
    fetchAllEmails().then(emailData => {
        // Store email data in localStorage
        localStorage.setItem('emailData', JSON.stringify(emailData.data));
        // Redirect to the emails page
        window.location.href = 'emails.html'; // Redirect to the new page
    }).catch(error => {
        console.error('Error fetching emails:', error);
    });
});

function resetAllEmails() {
    return fetchWithAuth('https://hiring.reachinbox.xyz/api/v1/onebox/reset')
      .then(response => response.json())
      .then(data => {
        console.log('reset data:', data);
        return data; // Return the data for further use
      })
      .catch(error => {
        console.error('Error while reseting:', error);
        throw error; // Rethrow the error for handling elsewhere
      });
  }
  resetAllEmails();

  document.getElementById('fetch-reset-button').addEventListener('click', function() {
    resetAllEmails().then(resetData => {
        // Store reset message in localStorage
        localStorage.setItem('resetData', JSON.stringify(resetData.data));
        // Redirect to the reset page
        window.location.href = 'reset.html'; // Redirect to the new page
    }).catch(error => {
        console.error('Error while resetting:', error);
    });
});



  
  

