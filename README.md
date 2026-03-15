# Premium Amazon Clone

A high-performance, visually stunning front-end clone of the Amazon website. This project features a modern design system, seamless page transitions, and a fully functional Seller Portal with authentication guards.

## 🚀 Key Features

### 💎 Premium UI/UX
- **Dynamic Design System**: Built with CSS variables for consistent theming across all modules.
- **Glassmorphism & Micro-animations**: Subtle hover effects and smooth transitions for a high-end feel.
- **Sticky Navigation**: A persistent header ensures the search and cart are always accessible.
- **Toast Notifications**: Modern, non-intrusive feedback when items are added to the cart.
- **Responsive Layout**: Optimized for all screen sizes, from mobile to ultra-wide displays.

### 🏪 Seller & Customer Portals
- **Seller Central**: A dedicated portal (`sell.html`) for users to list their own products.
- **Auth Guard**: Dynamic authentication system that redirects unauthenticated users to the sign-in page before accessing seller features.
- **Dynamic Listings**: Products listed by users are instantly integrated into the main product grid using local storage persistence.

### 🛒 Advanced Cart System
- **Total Quantity Tracking**: Unlike basic clones, this cart tracks the total quantity of items across all products.
- **Local Persistence**: All cart and "Save for Later" data persists across browser sessions.
- **Dynamic Sorting & Filtering**: Real-time product sorting (price, rating, date) and category filtering.

## 🛠️ Technical Implementation
- **Architecture**: Decoupled HTML, CSS, and JS for modular growth.
- **State Management**: Mock persistence layer using `localStorage` for authentication and cart data.
- **Performance**: Optimized asset loading and manual cache-busting logic for consistent updates.

## 📂 Project Structure
- `index.html`: Premium homepage with category panels and dynamic entry points.
- `products.html`: Advanced product grid with real-time filtering and sorting.
- `sell.html`: The Seller Portal with listing forms and auth protection.
- `cart.html`: Comprehensive shopping cart with quantity management.
- `login.html`: Modern sign-in page with mock authentication logic.
- `css/styles_v4.css`: The core design system and shared styles.
- `js/products_v4.js`: Core logic for product rendering, cart management, and notifications.

## 🏃 How to Run
1. Simply run the provided `run.bat` file in the root directory.
2. Or open `index.html` in any modern web browser.

---
*Note: This project is a demonstration of advanced front-end capabilities and design synchronization.*