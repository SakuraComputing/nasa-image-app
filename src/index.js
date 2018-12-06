import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';

import * as serviceWorker from './serviceWorker';

const store = getAppStore();
const NasaApp = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(NasaApp, document.getElementById('root'));

serviceWorker.unregister();
