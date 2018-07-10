import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/app';

const preloadedState = window.__preloadedState__;
delete window.__preloadedState__;

let renderMethod;
if(process.env.clientonly === 'clientonly') {
    renderMethod = render;
} else {
    renderMethod = hydrate;
}

const store = createStore(reducer, preloadedState);

renderMethod(
    <Provider store={store}>
        <BrowserRouter>
           <App />
       </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);