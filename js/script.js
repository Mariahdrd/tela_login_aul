const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const passaword_input = document.getElementById('passaword-input');
const error_message = document.getElementById('errror_message');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert(email_input.value)
    error_mensage.innerText = passaword_input.value;
});
    
