import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR
} from '../actions/index';

const initialState = {
    smurfs: [],
    isLoading: false,
    error: null
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                smurfs: [],
                isLoading: true,
                error: null
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: null
            };
        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                smurfs: [],
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    };
};