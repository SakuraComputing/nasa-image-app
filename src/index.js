import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { setMedia } from './actions/media';

import * as serviceWorker from './serviceWorker';

const store = getAppStore();
const NasaApp = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(NasaApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
