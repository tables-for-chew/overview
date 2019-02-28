var models = require('../models/models1.js');
var models2 = require('../models/models2.js');
//This will be fixed later when the models are more fleshed out

module.exports = {
  overview: {
    get: function (req, res) {
      models.get()
      .then((data) => {
        res.json(data)
      })
      .catch((error) => {
        res.send(error)
      })
    },
    post: function (req, res) {
      models.post()
      .then((data) => {
        console.log('its posted!', data);
        res.json('its posted!')
      })
      .catch((err) => {
        res.send(err)
      })
    },
    put: function (req, res) {
      models.put()
      .then((data) => {
        console.log('its updated!')
        res.json('update complete')
      })
      .catch((error) => {
        res.send(error)
      })
    },
    delete: function (req, res) {
      models.delete()
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