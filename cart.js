document.addEventListener("DOMContentLoaded", displayCart);

function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContent = document.getElementById("cartContent");
    const totalPrice = document.getElementById("totalPrice");

    cartContent.innerHTML = "";

    let totalBill = 0;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <h2>Your Cart is Empty</h2>
                <p>Start shopping now!</p>
                <a href="home.html">
                    <button>Continue Shopping</button>
                </a>
            </div>
        `;

        totalPrice.textContent = "Total: ₹0";
        return;
    }

    cart.forEach((product, index) => {
        totalBill += product.price * 80;

        const productCard = document.createElement("div");
        productCard.classList.add("prod-info");

        productCard.innerHTML = `
            <img src="${product.images}" alt="${product.title}" class="pic">

            <div class="product-details">
                <h3>${product.title}</h3>
                <p>Price: ₹${Math.round(product.price * 80)}</p>
            </div>

            <button class="remove-btn" onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartContent.appendChild(productCard);
    });

    totalPrice.textContent = `Total: ₹${Math.round(totalBill)}`;
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}