import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/app';

const preloadedState = window.__preloadedState__;
delete window.__preloadedState__;

const store = createStore(reducer, preloadedState);

ReactDOM.hydrate(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('app')
);