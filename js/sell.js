// Seller Page Logic - handles product submission and auth protection

document.addEventListener('DOMContentLoaded', function() {
    // 1. Auth Guard - Check if user is logged in
    const isLoggedIn = localStorage.getItem('amazon_loggedIn') === 'true';
    
    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        // Store current URL to redirect back after login
        localStorage.setItem('redirectAfterLogin', 'sell.html');
        window.location.href = 'login.html';
        return;
    }

    // 2. Form Submission
    const sellForm = document.getElementById('sell-product-form');
    if (sellForm) {
        sellForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('p-title').value;
            const price = parseFloat(document.getElementById('p-price').value);
            const category = document.getElementById('p-category').value;
            const image = document.getElementById('p-image').value || 'img/box1.png';
            const desc = document.getElementById('p-desc').value;

            // Create new product object (mimicking a database save)
            const newProduct = {
                id: Date.now(), // unique ID
                title: title,
                price: price,
                image: image,
                rating: 5,
                ratingCount: 0,
                isPrime: false,
                categories: [category],
                description: desc,
                dateAdded: new Date().toISOString().split('T')[0]
            };

            // In a real app, this would be an API call
            // For now, we'll add it to a "mock_listings" list in localStorage
            let listings = JSON.parse(localStorage.getItem('amazon_mock_listings')) || [];
            listings.push(newProduct);
            localStorage.setItem('amazon_mock_listings', JSON.stringify(listings));

            // Feedback and redirect
            alert('Congratulations! Your product "' + title + '" has been listed successfully.');
            sellForm.reset();
            window.location.href = 'products.html';
        });
    }

    // Update nav info if logged in
    const userEmail = localStorage.getItem('amazon_user_email');
    const navUserHello = document.getElementById('nav-user-hello');
    if (navUserHello && userEmail) {
        navUserHello.textContent = 'Hello, ' + userEmail.split('@')[0];
    }
});
