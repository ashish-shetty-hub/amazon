// Login Logic - handles mock authentication

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Simple mock authentication (any password works for this demo)
            if (email && password) {
                // Set logged in state
                localStorage.setItem('amazon_loggedIn', 'true');
                localStorage.setItem('amazon_user_email', email);
                
                // Check if there's a redirect pending
                const redirectTo = localStorage.getItem('redirectAfterLogin') || 'index.html';
                localStorage.removeItem('redirectAfterLogin'); // clean up
                
                alert('Sign-in successful!');
                window.location.href = redirectTo;
            }
        });
    }

    // Handle "Create Account" button (same logic for this mock)
    const createBtn = document.querySelector('.create-account-button');
    if (createBtn) {
        createBtn.addEventListener('click', function() {
            const email = document.getElementById('email').value;
            if (email) {
                localStorage.setItem('amazon_loggedIn', 'true');
                localStorage.setItem('amazon_user_email', email);
                window.location.href = 'index.html';
            } else {
                alert('Please enter an email address first.');
            }
        });
    }
});