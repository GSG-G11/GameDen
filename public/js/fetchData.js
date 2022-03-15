/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */

const registerNewUser = async (username, email, password, confirmPassword) => {
  const data = { username, email, password, confirmPassword };
  const options = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  };
  const response = await fetch('/api/register', options);
  return response.json();
};
