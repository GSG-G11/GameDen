/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */

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
  } else {
    authUsername.textContent = '';
  }

  getAllGames()
    .then(({ status, data }) => {
      if (status !== 200) {
        window.location.href = '/';
        return false;
      }
      const gamesContainer = querySelector('#games-container');

      
      return data.forEach(
        ({
          description,
          game_name: gameName,
          game_url: gameUrl,
          id,
          image,
        }) => {
          const gameCard = createElement('div', 'game__card', gamesContainer);

          const imgCard = createElement('div', 'img__card', gameCard);
          const img = createElement('img', 'img__game', imgCard);
          img.src = image;

          const bodyCard = createElement('div', 'body__card', gameCard);

          const nameGame = createElement('h2', 'game__name', bodyCard);
          nameGame.textContent = gameName;

          const descriptionGame = createElement(
            'p',
            'game__description',
            bodyCard,
          );
          descriptionGame.textContent = description;

          const addGame = createElement(
            'button',
            'add_game__description',
            bodyCard,
          );
          addGame.textContent = 'Add Game';
          addGame.addEventListener('click', () => {
            // send request to server to add game to user
            addGameToUser(id)
              .then(() => {
                useAlert(
                  'Success',
                  'Game Added Successfully 😉',
                  'success',
                  'Ok',
                  'center',
                  2000,
                  false,
                );
              })
              .catch((error) => {
                useAlert('Error!', error, 'error', 'Ok', 'center', 2000, false);
              });
          });

          const goToGame = createElement(
            'button',
            'go_to_Game__description',
            bodyCard,
          );
          goToGame.textContent = 'Go To Game';
          goToGame.setAttribute(
            'onclick',
            `window.open('${gameUrl}', '_blank')`,
          );
        },
      );
    })
    .catch((error) => {
      window.location.href = '/';
    });
};
