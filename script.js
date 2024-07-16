// Sample product data
const products = [
    { id: 1, name: 'Smartphone', category: 'Electronics', price: 499, rating: 4.5, image:'placeholder.jpg'},
    { id: 2, name: 'Jeans', category: 'Clothing', price: 59, rating: 4.0, image: 'placeholder.jpg' },
    { id: 3, name: 'Blender', category: 'Home Appliances', price: 99, rating: 4.8, image: 'placeholder.jpg' },
    { id: 4, name: 'Novel', category: 'Books', price: 19, rating: 4.2, image: 'placeholder.jpg' },
];

// Load products on page load
window.onload = function() {
    displayProducts(products);
}

// Function to display products
function displayProducts(productList) {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
    productList.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Function to search products
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) ||
        product.category.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Function to add product to cart
function addToCart(productId) {
    alert('Product added to cart!');
    // Implement further cart functionality here
}
