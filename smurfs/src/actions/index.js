import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const POST_SMURF = 'POST_SMURF';

export const fetchSmurfs = () => dispatch => {
    // return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });

        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data);
                dispatch({ 
                    type: FETCH_SMURFS_SUCCESS, 
                    payload: res.data });
            })
            .catch(err => {
                console.log('Error getting data', err.res);
                dispatch({ type: FETCH_SMURFS_ERROR, payload: err });
            });
    };

export function newSmurfs(smurf) {
    return dispatch => {
        dispatch({ type: POST_SMURF })

        axios
            .post('http://localhost:3333/smurfs', smurf);
    };
};