/* eslint-disable no-undef */

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  //  cleint side validation
  if (!email) {
    // emailInput.classList.add('error');

    emailInput.setAttribute('placeholder', 'Email is required');
  }

  if (!password) {
    // passwordInput.classList.add('error');
    passwordInput.setAttribute('placeholder', 'Password is required');
  }
  //  end client side validation

  // server side validation
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
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
      }
    })
    .catch((err) => console.log(err));
});
