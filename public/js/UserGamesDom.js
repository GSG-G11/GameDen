/* eslint-disable function-paren-newline */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */

window.onload = () => {
  getUserGames()
    .then(({ status, data }) => {
      if (status !== 200) {
        window.location.href = '/';
        return false;
      }
      const gamesContainer = querySelector('#user-games-container');
      return data.forEach(
        ({
          // description,
          game_name: gameName,
          game_url: gameUrl,
          game_id :gameId,
          image,
        }) => {
      
          const gameCard = createElement('div', 'game_user__card', gamesContainer);

          const imgCard = createElement('div', 'img_user__card', gameCard);
          const img = createElement('img', 'img_user__game', imgCard);
          img.src = image;

          const bodyCard = createElement('div', 'body__user__card', gameCard);

          const nameGame = createElement('h2', 'game__user__name', bodyCard);
          nameGame.textContent = gameName;

          const deleteGame = createElement(
            'button',
            'delete_game',
            bodyCard,
          );
          deleteGame.textContent = 'delete';
          deleteGame.addEventListener('click', () => {
            
            // send request to server to add game to user
            deleteUserGames(gameId)
              .then(() => {
                useAlert(
                  'Success',
                  'Game Deleted Successfully 😉',
                  'success',
                  'Ok',
                  'center',
                  2000,
                  false,
                );
                window.location.href = '/user/games/show';
              })
              .catch((error) => {
                useAlert('Error!', error, 'error', 'Ok', 'center', 2000, false);
              });
          });

          const goToGame = createElement(
            'button',
            'go_to_Game__url',
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
