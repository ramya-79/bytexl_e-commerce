let renderData = document.querySelector(".renderData");
let renderCartData = document.querySelector(".renderCartData");

// Function to render products
function renderProducts(products) {
    renderData.innerHTML = ""; // Clear previous products
    products.forEach((ele) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "product-card");

        let createImgEle = document.createElement("img");
        createImgEle.setAttribute("src", ele.image);
        createImgEle.setAttribute("class", "myImages");

        let createTitle = document.createElement("p");
        createTitle.textContent = ele.title;

        let createPriceEle = document.createElement("p");
        // Fix: use backticks for template literals
        createPriceEle.textContent = `$${ele.price}`; // Correct the price display

        let btnEle = document.createElement("button");
        btnEle.textContent = "Add to cart";

        productCard.appendChild(createImgEle);
        productCard.appendChild(createTitle);
        productCard.appendChild(createPriceEle);
        productCard.appendChild(btnEle);

        renderData.appendChild(productCard);

        // Add to cart functionality
        btnEle.addEventListener("click", () => addTocart(ele.image, ele.title, ele.price));
    });
}

// Function to add items to cart
function addTocart(img, title, price) {
    let cartItem = document.createElement("div");
    cartItem.setAttribute("class", "cart-item");

    let cartImgEle = document.createElement("img");
    cartImgEle.setAttribute("src", img);
    cartImgEle.setAttribute("class", "cartImgElement");

    let cartTitleEle = document.createElement("p");
    cartTitleEle.textContent = title;

    let cartPriceEle = document.createElement("p");
    // Fix: use backticks for template literals
    cartPriceEle.textContent = `$${price}`; // Correct the price display

    // Create remove button
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove-btn");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        renderCartData.removeChild(cartItem);
    });

    cartItem.appendChild(cartImgEle);
    cartItem.appendChild(cartTitleEle);
    cartItem.appendChild(cartPriceEle);
    cartItem.appendChild(removeBtn);

    renderCartData.appendChild(cartItem);
}

// Scroll to cart section when the cart icon is clicked
document.querySelector(".cart-icon").addEventListener("click", () => {
    document.getElementById("cartSection").scrollIntoView({ behavior: "smooth" });
});

// Fetch and display jewelry products
function fetchJewellery() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => res.json())
        .then(json => {
            renderProducts(json);
        });
}

// Fetch and display clothes products (Women's clothing)
document.getElementById("clothesBtn").addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
        .then(res => res.json())
        .then(json => {
            renderProducts(json);
        });
});

// Default to displaying jewelry products on initial load
document.addEventListener("DOMContentLoaded", () => {
    fetchJewellery();  // Fetch and display jewelry immediately on page load
});
