// Main JavaScript for the Amazon homepage

document.addEventListener('DOMContentLoaded', function() {
    // Handle cart count from localStorage
    updateCartCount();
    
    // Back to top functionality
    const backToTopButton = document.querySelector('.footer-panel1');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Search functionality
    const searchForm = document.querySelector('.nav-search');
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', function() {
            if (searchInput.value.trim()) {
                // In a real scenario, this would submit the search form
                console.log('Search for:', searchInput.value);
                window.location.href = 'products.html?search=' + encodeURIComponent(searchInput.value);
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && searchInput.value.trim()) {
                e.preventDefault();
                // In a real scenario, this would submit the search form
                console.log('Search for:', searchInput.value);
                window.location.href = 'products.html?search=' + encodeURIComponent(searchInput.value);
            }
        });
    }
    
    // Handle navigation to cart
    const cartIcon = document.querySelector('.nav-cart');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
});

// Function to update cart count adding total quantity
function updateCartCount() {
    const cartCount = document.querySelector('.cart-number');
    if (!cartCount) return;
    
    // Get cart items from localStorage
    let cart = JSON.parse(localStorage.getItem('amazonCart')) || [];
    
    // Calculate total quantity across all items
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Update the cart count display
    cartCount.textContent = totalQuantity;
}

// Local storage helpers for cart functionality
function getCartItems() {
    return JSON.parse(localStorage.getItem('amazonCart')) || [];
}

function getSavedItems() {
    return JSON.parse(localStorage.getItem('amazonSaved')) || [];
}

function addToCart(product) {
    let cart = getCartItems();
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex > -1) {
        // If the product exists, increment the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // Otherwise, add it with quantity 1
        product.quantity = 1;
        cart.push(product);
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('amazonCart', JSON.stringify(cart));
    
    // Update the cart count in the header
    updateCartCount();
    
    // Show a toast message
    showToast(`${product.title} added to cart!`);
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function saveForLater(product) {
    let savedItems = getSavedItems();
    
    // Check if product already exists in saved items
    const existingProductIndex = savedItems.findIndex(item => item.id === product.id);
    
    if (existingProductIndex === -1) {
        // Only add if it doesn't already exist
        savedItems.push(product);
    }
    
    // Save updated saved items to localStorage
    localStorage.setItem('amazonSaved', JSON.stringify(savedItems));
    
    // Show a confirmation message
    alert('Item saved for later!');
} 