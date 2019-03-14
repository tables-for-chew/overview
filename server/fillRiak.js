var fs = require('fs');
var models = require('./models/riakModels.js');
var Promise = require('bluebird');
fs = Promise.promisifyAll(fs);

async function makeFile(j) {
    console.log(j);
    var data = fs.readFileSync(`jsonData/file${j}.json`)
    await (async () => {
      data = JSON.parse(data);
      var all = [];
      for (var i in data) {
        var obj = {
          bucket: "restaurants",
          key: data[i].id_name,
          value: data[i]
        }
        var p = models.post(obj)
        all.push(p);
        if (i % 100 === 0) {
          await Promise.all(all);
          all = [];
        }
      }
    })()
  }

async function emptyBucket() {
  var all = []
  for (var i = 0; i <= 800000; i++) {
    var obj = {
      bucket: 'restaurants',
      key: i.toString()
    }
    var p = models.delete(obj)
    all.push(p);
  }
  return(Promise.all(all))
}

(async () => {
  let date = new Date();
  for (var k = 0; k <= 100; k++) {
    await makeFile(k)
  }
  let date2 = new Date();
  console.log(date2 - date)
})()

// emptyBucket()
// .then(() => {
//   process.exit();
// })
// .catch(() => {
//   console.log('fail')
// });