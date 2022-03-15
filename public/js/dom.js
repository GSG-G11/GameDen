/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const username = querySelector('#auth-username');
const authContainer = querySelector('#auth-container');
const logoutContainer = querySelector('#logout-container');
const authUsername = querySelector('#auth__username');

window.onload = () => {
  const cookies =
    document.cookie &&
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('username='))
      .split('=')[1];

  if (cookies) {
    authContainer.style.display = 'none';
    authUsername.textContent = cookies;
    logoutContainer.style.display = 'block';
  } else {
    authUsername.textContent = '';
    authContainer.style.display = 'block';
    logoutContainer.style.display = 'none';
  }
};
