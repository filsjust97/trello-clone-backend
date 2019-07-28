// app.js
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const list = require('./routes/list.route');
const card = require('./routes/card.route');
const project = require('./routes/project.route');


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://trello:filipe1997@ds153947.mlab.com:53947/trello';
let mongoDB = dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize our express app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/lists', list);
app.use('/cards', card);
app.use('/project', project);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});