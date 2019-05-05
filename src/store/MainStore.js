import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Reducers from '../reducers';

const middlewares = [];

const MainStore = createStore(Reducers, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default MainStore;