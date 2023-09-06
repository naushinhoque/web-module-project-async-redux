import React from 'react';
import ReactDOM from 'react-dom';

import { SET_BREEDS, FETCH_BREEDS } from '../Action/actions';



const intialState = {
    breeds: [],
    isFetching: false,
    error: null
};

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case SET_BREEDS:
            return {
                ...state,
                breeds: action.payload
            }
        case FETCH_BREEDS:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        default:
            return state;
    }
}

export default reducer;