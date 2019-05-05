import {
    ADD_TO_LIST
} from '../actions/types';

const initialState = [
    'A',
    'Base',
    'React',
    'Redux',
    'Class'
];

const ListReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_LIST:
            return [...state, action.value];
        default:
            return state;
    }
}

export default ListReducer;