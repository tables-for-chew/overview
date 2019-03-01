var db = require('../dbs/riakdb.js');
// var async = require('async');

module.exports = {
  get: function(data) {
    console.log('getting', data);
      return new Promise((resolve, reject) => {
        db.client.fetchValue(data, (err, result) => {
          if (err) {
            reject(err);
          } else {
            if (!result.isNotFound) {
              result = result.values.shift();
              result = result.value;
            }
            resolve(result);
          }
        })
      })
  },

  post: function(data) {
    return new Promise((resolve, reject) => {
      db.client.storeValue(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },

  put: function(data) {
    return new Promise((resolve, reject) => {
      db.client.storeValue(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    })
  },

  delete: function(data) { 
    return new Promise((resolve, reject) => {
      db.client.deleteValue(data, function (err, rslt) {
        if (err) {
          reject(err);
        } else {
          resolve(rslt);
        }
      })
    })
  }
}