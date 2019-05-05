import { combineReducers } from 'redux';

import ListReducer from './ListReducer';

const Reducers = combineReducers({
    list: ListReducer
});

export default Reducers;