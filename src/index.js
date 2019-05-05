import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import MainStore from './store/MainStore';

ReactDOM.render(
    <Provider store={MainStore} >
        <App />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
