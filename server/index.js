const express = require('express');
var cors = require('cors');
const port = 3001;
const path = require('path');
const router = require('./router.js');
const parser = require('body-parser');

const app = express();

//172.17.0.2

app.use(parser.json())
app.use(cors())

app.use('/overview', router)

app.use(express.static(path.join(__dirname, '../public')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))