const { join } = require('path');
const {
  getAllGamesQuery,
  addGameToUserQuery,
  getAllGamesUserQuery,
  deleteUserGamesQuery
} = require('../database/queries');
const { checkToken } = require('./tokenHandle');

const relativePath = `${__dirname}/../../public/error`;

module.exports = {
  getAllGames: (_, res) => {
    getAllGamesQuery()
      .then((data) => {
        res.status(200).json({ status: 200, data: data.rows });
      })
      .catch(() => res.status(500).sendFile(join(relativePath, '500.html')));
  },

  addGameToUser: ({ params, cookies }, res) => {
    const { accessToken } = cookies;

    try {
      return checkToken(accessToken, process.env.ACCESS_TOKEN_SECRET)
        .then((data) => {
          const { id: userId } = data;
          const { gameId } = params;
          addGameToUserQuery(userId, gameId)
            .then(({ rows }) => {
              res.status(200).json({ status: 200, data: rows });
            })
            .catch(() =>
              res
                .status(500)
                .clearCookie('accessToken')
                .clearCookie('username')
                .clearCookie('id')
                .sendFile(join(relativePath, '500.html')),
            );
        })
        .catch(() =>
          res
            .status(500)
            .clearCookie('accessToken')
            .clearCookie('username')
            .clearCookie('id')
            .sendFile(join(relativePath, '500.html')),
        );
    } catch (error) {
      return res.status(302).redirect('/');
    }
  },

  getAllGamesUser: ({ cookies }, res) => {
    const { accessToken } = cookies;

    try {
      return checkToken(accessToken, process.env.ACCESS_TOKEN_SECRET)
        .then((data) => {
          const { id } = data;
          getAllGamesUserQuery(id)
            .then(({ rows }) => {
              res.status(200).json({ status: 200, data: rows });
            })
            .catch(() =>
              res
                .status(500)
                .clearCookie('accessToken')
                .clearCookie('username')
                .clearCookie('id')
                .sendFile(join(relativePath, '500.html')),
            );
        })
        .catch(() =>
          res
            .status(500)
            .clearCookie('accessToken')
            .clearCookie('username')
            .clearCookie('id')
            .sendFile(join(relativePath, '500.html')),
        );
    } catch (error) {
      return res.status(302).redirect('/');
    }
  },

  showAllGamesUser: (req, res) => {
    try {
      res.status(301).sendFile(join(relativePath, '../userGames.html'));
    } catch (err) {
      res.status(500).sendFile(join(relativePath, '500.html'));
    }
  },
  
  showAllGames:(req, res) => {
    try {
      res.status(301).sendFile(join(relativePath, '../games.html'));
    } catch (err) {
      res.status(500).sendFile(join(relativePath, '500.html'));
    }
  },

  deleteUserGames : ({ params }, res)=>{
   const {gameId} =  params;
   deleteUserGamesQuery(gameId)
   .then(({ rows }) => {
     res.status(200).json({ status: 200, data: rows });
   })
   .catch(() =>
     res
       .status(500)
       .clearCookie('accessToken')
       .clearCookie('username')
       .clearCookie('id')
       .sendFile(join(relativePath, '500.html')),
   );
  }
};
