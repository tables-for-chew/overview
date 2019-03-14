var Riak = require('basho-riak-client')
var assert = require('assert');
var node1 = '54.172.131.160:8087';
var node2 = '18.212.13.26:8087';
var node3 = '3.85.79.99:8087';
// var node4 = '52.91.241.190:8087';
var nodes = [
  node1, node2, node3
];

var client = new Riak.Client(nodes, function (err, client) {
  console.log('Now inside Riak.Client');
  client.ping(function (err, rslt) {
      console.log('Now entered client.ping');
      if (err) {
        console.log('There is an error encountered in client.ping');
        throw new Error(err);
      } else {
        // On success, ping returns true
        console.log('client.ping has resulted in success!');
        assert(rslt === true);
      }
      // client.stop(function () {
      //     console.log('client is stopped');
      //     process.exit();
      // });
    })
  })
  // NB: at this point the client is fully initialized, and
  // 'client' and 'c' are the same object

// client.stop(function (err, rslt) {
//   // NB: you may wish to check err
//   process.exit();
// });

// console.log(client);

module.exports = client
// error: undefined error AFTER close: { Error: connect ECONNRESET 127.0.0.1:8087
//   at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1083:14)
// errno: 'ECONNRESET',
// code: 'ECONNRESET',
// syscall: 'connect',
// address: '127.0.0.1',
// port: 8087 }