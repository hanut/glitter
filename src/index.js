import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store/store";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
