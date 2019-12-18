'use strict';

const express = require('express');

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.static('./public'));

server.get('/test', (request, response) => {
    response.send("Your test worked");
});

server.get('/data', (request, response) => {
    let cats = [
        {name: "Sherry"},
        {name: "Instance"},
        {name: "Newton"}
    ];

    response.send(cats);
});

server.listen( PORT, () => console.log("listening on 5000!"));

