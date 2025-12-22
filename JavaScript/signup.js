document.addEventListener('DOMContentLoaded' , () =>{
  const form = document.getElementById('registerForm');

  form.addEventListener('submit' , (e) =>{
    e.preventDefault();

  alert('Registered successfully');
  window.location.href = 'login.html';
  })


})