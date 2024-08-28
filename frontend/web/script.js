const apiUrl = 'http://localhost:8080';

// Get products
fetch(`${apiUrl}/products`)
    .then(response => response.json())
    .then(products => {
     const productList = document.getElementById('product-list');
        products.forEach(product => {
            const listItem = document.createElement('li');
            listItem.textContent = product.name;
            productList.appendChild(listItem);
        });});

// Submit review
document.getElementById('review-form').addEventListener('submit', event => {
    event.preventDefault();
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
    fetch(`${apiUrl}/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating, review })
    })
    .then(response => response.json())
    .then(review => {
        const reviewList = document.getElementById('review-list');
        const reviewItem = document.createElement('li');
        reviewItem.textContent = review.review;
        reviewList.appendChild(reviewItem);
    });
});

// makes payment
document.getElementById('payment-form').addEventListener('submit', event => {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expirationMonth = document.getElementById('expiration-month').value;
    const expirationYear = document.getElementById('expiration-year').value;
    const cvc = document.getElementById('cvc').value;
    fetch(`${apiUrl}/pay`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify({ cardNumber, expirationMonth, expirationYear, cvc }) })
    .then(response => response.json())
    .then(payment => {
        alert('Payment successful!');
    });});
