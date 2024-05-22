document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentNode;
            const productName = product.querySelector('h3').textContent;
            const productPrice = product.querySelector('p').textContent;

            // Save item to localStorage
            const item = { name: productName, price: productPrice };
            const savedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            savedItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(savedItems));
        });
    });
});
