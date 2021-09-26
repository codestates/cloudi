const db = require("../../models");
const axios = require("axios");

module.exports = {
  get: (req, res) => {
    db.stick.findAll({
      where: {
          id: 1
      }
    })
    .then(data => {
      let result = data[0].dataValues;
      result.stickImage = data[0].stickImage.toString();
      res.status(200).json(result)
    })
  }
}