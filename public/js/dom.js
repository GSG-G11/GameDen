/* eslint-disable valid-typeof */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */



const authContainer = querySelector('#auth-container');
const logoutContainer = querySelector('#logout-container');
const authUsername = querySelector('#auth-username');

window.onload = () => {
  const cookies =
    document.cookie &&
    document.cookie
      .split('; ')
      .find((row) => row.startsWith('username='))
      .split('=')[1];

  if (cookies) {
    authUsername.textContent = cookies;
    logoutContainer.classList.remove('hidden');
    authContainer.classList.add('hidden');
  } else {
    authUsername.textContent = '';
    authContainer.classList.remove('hidden');
    logoutContainer.classList.add('hidden');
  }
};
