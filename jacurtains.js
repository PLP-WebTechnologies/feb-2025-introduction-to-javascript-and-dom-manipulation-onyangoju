// Function to change the text content of the welcome message dynamically
function changeText() {
    const textElement = document.querySelector("header p");
    textElement.textContent = "We offer the best quality and comfort for your home decor!";
}

// Function to add a new product to the product list
function addProduct() {
    const productList = document.querySelector('.product-list');
    const newProduct = document.createElement('li');
    newProduct.classList.add('product-item');
    newProduct.textContent = "Cozy Pillows";
    productList.appendChild(newProduct);
}

// Function to remove the last product from the product list
function removeProduct() {
    const productList = document.querySelector('.product-list');
    if (productList.children.length > 0) {
        productList.removeChild(productList.lastElementChild);
    } else {
        alert("No more products to remove!");
    }
}
