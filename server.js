import React from 'react';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import App from './components/app';
var express = require('express');
var axios = require('axios');
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import serialize from 'serialize-javascript';
var app = express();

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/photo', function (req, res) {
    fs.readFile(path.resolve(__dirname, 'build', 'index.html'), 'utf8', function (err, fileData) {
        if (err) throw err;

        axios.get('https://jsonplaceholder.typicode.com/photos/5')
            .then(({ data }) => {
                const store = createStore(reducer);

                const action = {
                    type: 'CHANGE_PHOTO',
                    payload: data
                };

                store.dispatch(action);

                let appHTML = renderToString(
                    <Provider store={store}>
                        <App />
                    </Provider>
                );

                const preloadedState = store.getState();

                let globalStateScript = `<script>window.__preloadedState__ = ${serialize(preloadedState)};</script>`;

                let document = fileData.replace('<!-- App -->', appHTML);
                document = document.replace('<!-- scripts -->', globalStateScript);

                res.send(document);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
