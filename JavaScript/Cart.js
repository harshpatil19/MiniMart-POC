document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.querySelector('.checkoutBtn');

  checkoutBtn.addEventListener('click', () => {
    alert('Order placed successfully');
    window.location.href = 'Checkout.html';
  });
});
