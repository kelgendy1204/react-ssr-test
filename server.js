import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import App from './components/app';
var express = require('express');
var axios = require('axios');
var app = express();

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/app', function (req, res) {
    fs.readFile(path.resolve(__dirname, 'build', 'index.html'), 'utf8', function (err, data) {
        const html = ReactDOMServer.renderToString(<App />);
        if (err) throw err;

        // axios.get('https://jsonplaceholder.typicode.com/photos/5')
        //     .then(() => {
                
        //     });

        // Inserts the rendered React HTML into our main div
        const document = data.replace('<!-- App -->', html);

        // Sends the response back to the client
        res.send(document);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));