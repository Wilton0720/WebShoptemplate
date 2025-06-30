// Product data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 999.99,
        category: "smartphones",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop",
        description: "Latest iPhone with advanced camera system"
    },
    {
        id: 2,
        name: "MacBook Pro 16\"",
        price: 2399.99,
        category: "laptops",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
        description: "Powerful laptop for professionals"
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249.99,
        category: "audio",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
        description: "Wireless earbuds with noise cancellation"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        price: 899.99,
        category: "smartphones",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=300&fit=crop",
        description: "Android flagship with excellent camera"
    },
    {
        id: 5,
        name: "Dell XPS 13",
        price: 1299.99,
        category: "laptops",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
        description: "Compact and powerful ultrabook"
    },
    {
        id: 6,
        name: "Sony WH-1000XM5",
        price: 399.99,
        category: "audio",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
        description: "Premium noise-canceling headphones"
    },
    {
        id: 7,
        name: "iPad Pro 12.9\"",
        price: 1099.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
        description: "Professional tablet for creative work"
    },
    {
        id: 8,
        name: "Apple Watch Series 9",
        price: 429.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop",
        description: "Advanced smartwatch with health tracking"
    },
    {
        id: 9,
        name: "Google Pixel 8",
        price: 699.99,
        category: "smartphones",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        description: "AI-powered Android phone"
    },
    {
        id: 10,
        name: "Marshall Acton III",
        price: 279.99,
        category: "audio",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        description: "Vintage-style Bluetooth speaker"
    },
    {
        id: 11,
        name: "Surface Laptop 5",
        price: 1599.99,
        category: "laptops",
        image: "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?w=400&h=300&fit=crop",
        description: "Premium Windows laptop"
    },
    {
        id: 12,
        name: "Magic Keyboard",
        price: 179.99,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
        description: "Wireless keyboard for iPad"
    }
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus"></i> Add to Cart
        </button>
    `;
    return card;
}

// Function to get product by ID
function getProductById(id) {
    return products.find(product => product.id === id);
}

