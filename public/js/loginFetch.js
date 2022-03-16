/* eslint-disable no-undef */
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');
const emailErrorMessage = document.querySelector('.email-error-messsage');
const passwordErrorMessage = document.querySelector('.password-error-messsage');

  //  cleint side validation 
emailInput.addEventListener('focusout', (e) => {
  const email = document.getElementById('email').value;
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(email) || email.length <= 0) {
    emailErrorMessage.textContent = 'Please Enter a valid E-mail';
  } else {
    emailErrorMessage.textContent = '';
  }
});

passwordInput.addEventListener('focusout', (e) => {
  const password = document.getElementById('password').value;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!regexPassword.test(password) || password.length <= 0) {
    passwordErrorMessage.textContent =
      'Please Enter a valid Password,The password contain symbols, numbers and letters (uppercase, lowercase)';
  }
  else {
    passwordErrorMessage.textContent = '';
  }
})
 //  end client side validation

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // server side validation
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        window.location = '/';
      } else if (res.errorType === 'passwordError') {
        document.querySelector('.password-error-messsage').textContent = res.message;
        console.log(res);
      } else if (res.errorType === 'emailError') {
        emailErrorMessage.textContent = res.message;
        console.log(res);
      } else{
        console.log(res);
      }
    })
    .catch((err) => console.log(err, 2));
});
// protected routes query to get all the games from database
