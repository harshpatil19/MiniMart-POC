document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit' , (e) =>{
        e.preventDefault();

      alert('Login Successfully');
  window.location.href = 'home.html';
    })
})