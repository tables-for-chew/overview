var db = require('../dbs/riakdb.js');

module.exports = {
  get: function(data) {
    return new Promise((resolve, reject) => {
      db.fetchValue(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          if (!result.isNotFound) {
            result = result.values.shift();
            result = result.value;
          }
          resolve(result);
        }
      });
    });
  },

  post: function(data) {
    return new Promise((resolve, reject) => {
      db.storeValue(data, (err, result) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(data.key);
        }
      });
    });
  },

  put: function(data) {
    return new Promise((resolve, reject) => {
      db.storeValue(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },

  delete: function(data) { 
    return new Promise((resolve, reject) => {
      db.deleteValue(data, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}