document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit' , (e) =>{
        e.preventDefault();

        showToast('Login Successful');

        setTimeout(() => {
            showPage('homePage');
            form.request();
        }, 600);
    })
})