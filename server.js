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
    fs.readFile(path.resolve(__dirname, 'build', 'index.html'), 'utf8', function (err, fileData) {
        if (err) throw err;

        axios.get('https://jsonplaceholder.typicode.com/photos/5')
            .then(({ data }) => {
                let appHTML = ReactDOMServer.renderToString(<App photo={data} />);
                let globalData = `<script>window.__photo__ = ${JSON.stringify(data)};</script>`;
                let document = fileData.replace('<!-- App -->', appHTML);
                document = document.replace('<!-- scripts -->', globalData);
                res.send(document);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));