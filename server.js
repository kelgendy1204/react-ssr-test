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
import { StaticRouter } from 'react-router';
import serialize from 'serialize-javascript';
var app = express();

app.use(express.static(path.resolve(__dirname, './build')));

app.get('/', function (req, res) {
    console.log('home');
    fs.readFile(path.resolve(__dirname, 'build', 'web.html'), 'utf8', function (err, fileData) {
        if (err) throw err;

        const store = createStore(reducer);

        let context = {};

        let appHTML = renderToString(
            <Provider store={store}>
                <StaticRouter
                location={req.originalUrl}
                context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        if (context.url) {
            res.writeHead(301, {
                Location: context.url
            });
            res.end();
        }

        const preloadedState = store.getState();

        let globalStateScript = `<script>window.__preloadedState__ = ${serialize(preloadedState)};</script>`;

        let document = fileData.replace('<!-- App -->', appHTML);
        document = document.replace('<!-- scripts -->', globalStateScript);

        res.send(document);
    });
});

app.get('/photo', function (req, res) {
    console.log('photo');
    fs.readFile(path.resolve(__dirname, 'build', 'web.html'), 'utf8', function (err, fileData) {
        if (err) throw err;

        axios.get('https://jsonplaceholder.typicode.com/photos/5')
            .then(({ data }) => {
                const store = createStore(reducer);

                const action = {
                    type: 'CHANGE_PHOTO',
                    payload: data
                };

                store.dispatch(action);

                let context = {};

                let appHTML = renderToString(
                    <Provider store={store}>
                        <StaticRouter
                        location={req.originalUrl}
                        context={context}>
                            <App />
                        </StaticRouter>
                    </Provider>
                );

                if (context.url) {
                    res.writeHead(301, {
                        Location: context.url
                    });
                    res.end();
                }

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

app.get('/post', function (req, res) {
    console.log('post');
    fs.readFile(path.resolve(__dirname, 'build', 'web.html'), 'utf8', function (err, fileData) {
        if (err) throw err;

        axios.get('https://jsonplaceholder.typicode.com/posts/5')
            .then(({ data }) => {
                const store = createStore(reducer);

                const action = {
                    type: 'CHANGE_POST',
                    payload: data
                };

                store.dispatch(action);

                let context = {};

                let appHTML = renderToString(
                    <Provider store={store}>
                        <StaticRouter
                        location={req.originalUrl}
                        context={context}>
                            <App />
                        </StaticRouter>
                    </Provider>
                );

                if (context.url) {
                    res.writeHead(301, {
                        Location: context.url
                    });
                    res.end();
                }

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

const Port = 3200;

app.listen(Port, () => console.log(`Example app listening on port ${Port}!`));
