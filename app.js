// Example dynamic content from a mock API (using JSONPlaceholder)
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Fetch data from the API and update the home page
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const mainContentElement = document.getElementById('main-content');
        mainContentElement.innerHTML = `
            <section class="home">
                <h1>Welcome to Apple Showcase</h1>
                <p>${data.body}</p>
            </section>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to load products dynamically
function loadProducts() {
    const productsApiUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Fetch data from the products API
    fetch(productsApiUrl)
        .then(response => response.json())
        .then(products => {
            const mainContentElement = document.getElementById('main-content');
            mainContentElement.innerHTML = '<section class="products"><h2>Apple Products</h2></section>';

            // Create product cards dynamically
            const productsSection = document.querySelector('.products');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <div class="product-image">
                        <!-- Add product image here -->
                    </div>
                    <div class="product-details">
                        <h3>${product.title}</h3>
                        <p>${product.body}</p>
                    </div>
                `;
                productsSection.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Load home page by default
loadProducts();
// Function to load individual product details
function loadProductDetails(productId) {
    // Fetch data from the product API using the provided productId
    const productApiUrl = `https://jsonplaceholder.typicode.com/posts/${productId}`;

    // Fetch data from the product API
    fetch(productApiUrl)
        .then(response => response.json())
        .then(product => {
            const mainContentElement = document.getElementById('main-content');
            mainContentElement.innerHTML = `
                <section class="product-details">
                    <div class="container">
                        <h2 class="text-center mb-4">${product.title}</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <img src="https://via.placeholder.com/400" class="img-fluid" alt="Product Image">
                            </div>
                            <div class="col-md-6">
                                <p>${product.body}</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        })
        .catch(error => console.error('Error fetching product details:', error));
}

// Load individual product details (replace '1' with the actual product ID)
loadProductDetails(1);
// Function to load content for the About Us page
function loadAboutContent() {
    const aboutContent = `
        <section class="about">
            <div class="container">
                <h2 class="text-center mb-4">About Us</h2>
                <p>
                    Apple Inc. is an American multinational technology company that designs, manufactures, 
                    and markets consumer electronics, computer software, and online services. The company was 
                    founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976.
                </p>
                <p>
                    At Apple, we are committed to creating innovative products with cutting-edge technology. 
                    Our mission is to enrich people's lives through our user-friendly and aesthetically pleasing 
                    devices, software, and services.
                </p>
            </div>
        </section>
    `;
    document.getElementById('main-content').innerHTML = aboutContent;
}

// Load content for the About Us page
loadAboutContent();
