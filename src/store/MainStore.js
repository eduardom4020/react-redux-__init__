import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [];

const MainStore = createStore(() => ({}), composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default MainStore;