var models2 = require('../models/riakModels.js');
module.exports = {
  overview: {
    get: function (req, res) {
      models2.get({bucket: req.body.bucket, key: req.body.key, convertToJs: true})
      .then((data) => {
        res.send(data)
      })
      .catch((error) => {
        console.log('error', error);
        res.send(error)
      })
    },
    post: function (req, res) {
      models2.post(req.body)
      .then((data) => {
        console.log('its posted!', data);
        res.json('its posted!')
      })
      .catch((err) => {
        res.send(err)
      })
    },
    put: function (req, res) {
      models2.put(req.body)
      .then((data) => {
        console.log('its updated!')
        res.json('update complete')
      })
      .catch((error) => {
        res.send(error)
      })
    },
    delete: function (req, res) {
      models2.delete({bucket: req.body.bucket, key: req.body.key})
      .then((data) => {
        console.log('its deleted!');
        res.json('its deleted!')
      })
      .catch((err) => {
        res.send(err)
      })
    }
  },
}