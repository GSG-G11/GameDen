const { getAllGamesQuery } = require('../database/queries');

module.exports = {
  getAllGames: (req, res, next) => {
    getAllGamesQuery()
      .then((data) => {
        res.status(200).json({ status: 200, data: data.rows });
      })
      .catch((error) => next(error));
  },
};
