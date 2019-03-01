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
            resolve(result.values);
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
      // db.client.ping((err, result) => {
      //   if (err) {
      //     reject(err);
      //   } else {
      //     resolve(result);
      //   }
      // })
    })
  },

  put: function(data) { 
      db.client.storeValue(data, function (err, rslt) {
      if (err) {
        console.log(err);
      }
    })
  },

  delete: function(data) { 
    db.client.deleteValue(data, function (err, rslt) {
      if (err) {
        console.log(err);
      }
    })
  }
}