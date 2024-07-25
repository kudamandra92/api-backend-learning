const service = require("../services/user-service");

module.exports = {
  get: (req, res) => {
    return service
      .fetch()
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  },
};
