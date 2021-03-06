const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// =============== Middlewares ===============
const bodyParser = require('body-parser');

// This module sets req.body variable of ay request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// =============== Static Directory ===============

// Here, static directory is set to /client/build 
// (This folder will be generated after running build in client folder, see README)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// =============== Endpoints ===============
app.use('/sayHello', (req, res) => {
    res.send({message: "Server says hello!"});
});


app.get('*', (req, res) => {
    res.sendFile('index.html', {root: __dirname + '/client/build'});
});


// =============== KICK OFF ===============
app.listen(port, () => console.log(`Listening on port ${port}`));
