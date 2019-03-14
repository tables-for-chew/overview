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
        // console.log(i);
        var obj = {
          bucket: "restaurants",
          key: data[i].id_name,
          value: data[i]
        }
        var p = models.post(obj)
        // .then(() => {
        //   console.log('yay');
        // })
        .catch((err) => {
          console.log(err);
        })
        all.push(p);
        if (i % 100 === 0) {
          // console.log(i);
          await Promise.all(all);
          // console.log('hey good job', i);
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
    .then(() => {
      // console.log('deleted');
    })
    .catch((err) => {
      // console.log('uh oh', err)
    })
    all.push(p);
  }
  return(Promise.all(all))
}

// for (var j = 0; j <= 10; j++) {
//   console.log('loopin!', j);
//   makeFile(j);
// }

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
//   console.log('success')
//   process.exit();
// })
// .catch(() => {
//   console.log('fail')
// });


    // await fs.readFile(`jsonData/file${i}.json`)
    // .then((data) => {
    //   data = JSON.parse(data);
    //   for (var i in data) {
    //     // console.log(num);
    //     var obj = {
    //       bucket: "restaurants",
    //       key: data[i].id_name,
    //       value: data[i]
    //     }
    //     var p = models.post(obj)
    //     .then(() => {
    //       // console.log('posted', postNum)
    //     }).catch((err) => {
    //       // console.log('something went wrong', err)
    //     })
    //     all.push(p);
    //     if (i % 10000 === 0) {
    //       async() => {
    //         await Promise.all(all);
    //       }
    //       all = [];
    //     }
    //   }
    //   return Promise.all(all);
    // })
    // .then((data) => {
    //   console.log('oh?', data);
    // })
    // .catch((err) => {
    //   console.log('uh-oh', err);
    // })
    // console.log('read!');