// require('newrelic');
const express = require('express');
var cors = require('cors');
const port = 3001;
const path = require('path');
const router = require('./router.js');
const parser = require('body-parser');

const app = express();

//172.17.0.2
app.use(express.static(path.join(__dirname, '../public')))

app.use(parser.json())
app.use(cors())

app.use('/overview', router)


app.use( '*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))//`${__dirname}/../dist/index.html`)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))