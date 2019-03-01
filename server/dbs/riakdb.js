var Riak = require('basho-riak-client')
var nodes = [
  'localhost:8087',
];

var client = new Riak.Client(nodes)
  // NB: at this point the client is fully initialized, and
  // 'client' and 'c' are the same object

// client.stop(function (err, rslt) {
//   // NB: you may wish to check err
//   process.exit();
// });
// console.log(client);

module.exports = {
  client: client
}