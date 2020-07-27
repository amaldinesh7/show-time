import { keyBy } from 'lodash';

const FETCH_MOVIES_INIT = 'FETCH_MOVIES_INIT'
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

const DELETE_MOVIE_INIT = 'DELETE_MOVIE_INIT';
const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

const apiStatuses = {
    LOADING: 'LOADING',
    DONE: 'DONE'
}

const initialMoviesState = {
    ids: [],
    dict: {},
    status: apiStatuses.DONE
};

export default (state = initialMoviesState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_INIT:
            return {
                ...state,
                status: apiStatuses.LOADING
            };

        case FETCH_MOVIES_SUCCESS:
            const responseIds = action.payload.map(res => res.id);
            const responseDict = keyBy(action.payload, 'id');
            console.log("Dict --->",responseDict);
            return {
                ids: responseIds,
                dict: responseDict,
                status: apiStatuses.DONE
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                status: apiStatuses.DONE
            };
        default:
            return state;
    }
}