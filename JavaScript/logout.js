document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) { // check if button exists
        logoutBtn.addEventListener('click', () => {
            alert('Logged out successfully');
            window.location.href = 'login.html';
        });
    }
});
