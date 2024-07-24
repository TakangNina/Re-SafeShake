// Add this to your existing script tag or in a separate JS file

const API_URL = 'http://localhost:5000/api';

// Login form submission
document.querySelector('#loginModal form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#loginEmail').value;
  const password = document.querySelector('#loginPassword').value;

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Logged in successfully');
      loginModal.style.display = 'none';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while logging in');
  }
});

// Signup form submission
document.querySelector('#signupModal form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('#signupName').value;
  const email = document.querySelector('#signupEmail').value;
  const password = document.querySelector('#signupPassword').value;

  try {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Signed up successfully');
      signupModal.style.display = 'none';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while signing up');
  }
});

// Assistance request form submission
document.querySelector('#assistance-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const location = document.querySelector('#location').value;
  const disabilityType = document.querySelector('#disability-type').value;
  const message = document.querySelector('#message').value;

  try {
    const response = await fetch(`${API_URL}/assistance/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location, disabilityType, message }),
    });
    const data = await response.json();
    if (response.ok) {
      document.querySelector('#assistance-request').style.display = 'none';
      document.querySelector('#confirmation').style.display = 'block';
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while submitting the assistance request');
    document.addEventListener('DOMContentLoaded', (event) => {
        // ... (keep existing code)
    
        const signupModal = document.getElementById('signupModal');
        const signupBtn = document.getElementById('signupBtn');
        const signupForm = document.getElementById('signupForm');
        const signupMessage = document.getElementById('signupMessage');
    
        signupBtn.onclick = function() {
            signupModal.style.display = "block";
        }
    
        // Remove the close button functionality for signup
        // signupClose.onclick = function() {
        //     signupModal.style.display = "none";
        // }
    
        window.onclick = function(event) {
            if (event.target == loginModal) {
                loginModal.style.display = "none";
            }
            // Remove the ability to close signup modal by clicking outside
            // if (event.target == signupModal) {
            //     signupModal.style.display = "none";
            // }
        }
    
        const API_URL = 'http://localhost:5000/api';
    
        // Signup form submission
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.querySelector('#signupName').value;
            const email = document.querySelector('#signupEmail').value;
            const password = document.querySelector('#signupPassword').value;
    
            try {
                const response = await fetch(`${API_URL}/auth/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, password }),
                });
                const data = await response.json();
                if (response.ok) {
                    signupMessage.textContent = 'Signed up successfully! You can now close this window.';
                    signupMessage.style.color = 'green';
                    signupForm.reset();
                    // Add a close button after successful signup
                    const closeButton = document.createElement('button');
                    closeButton.textContent = 'Close';
                    closeButton.onclick = function() {
                        signupModal.style.display = 'none';
                    };
                    signupMessage.appendChild(closeButton);
                } else {
                    signupMessage.textContent = data.message;
                    signupMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error);
                signupMessage.textContent = 'An error occurred while signing up';
                signupMessage.style.color = 'red';
            }
        });
    
        // ... (keep the rest of your existing code)
    });
  }
});