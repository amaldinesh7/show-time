import { keyBy } from 'lodash';

const FETCH_MOVIES_INIT = 'FETCH_MOVIES_INIT'
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE'

const DELETE_MOVIE_INIT = 'DELETE_MOVIE_INIT';
const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
const DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE';

const ADD_MOVIE_INIT = 'ADD_MOVIE_INIT';
const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
const ADD_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE';

const UPDATE_MOVIE_INIT = 'UPDATE_MOVIE_INIT';
const UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS';
const UPDATE_MOVIE_FAILURE = 'UPDATE_MOVIE_FAILURE';

const UPDATE_RATING_INIT = 'UPDATE_RATING_INIT';
const UPDATE_RATING_SUCCESS = 'UPDATE_RATING_SUCCESS';
const UPDATE_RATING_FAILURE = 'UPDATE_RATING_FAILURE';


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
            responseIds.sort();
            const responseDict = keyBy(action.payload, 'id');
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

        case DELETE_MOVIE_INIT:
            return {
                ...state,
                status: apiStatuses.LOADING
            };

        case DELETE_MOVIE_SUCCESS:
            const newIds = state.ids.filter(id => id !== action.payload.id);
            const newDict = {};
            state.ids.forEach(id => {
                if (id !== action.payload.id) {
                    newDict[id] = state.dict[id];
                }
            })
            return {
                ...state,
                ids: newIds,
                dict: newDict
            };

        case DELETE_MOVIE_FAILURE:
            return {
                ...state,
                status: apiStatuses.DONE
            };

        case ADD_MOVIE_INIT:
            return {
                ...state,
                status: apiStatuses.LOADING
            };

        case ADD_MOVIE_SUCCESS:
            const newId = state.ids[state.ids.length - 1] + 1
            const new_Ids = [...state.ids, newId]
            const newDictAdd = { ...state.dict };
            newDictAdd[newId] = {
                'id': newId,
                'title': action.payload.title,
                'genre': action.payload.genre,
                'rating': action.payload.rating,
            };
            return {
                ...state,
                ids: new_Ids,
                dict: newDictAdd,
                status: apiStatuses.DONE
            };

        case ADD_MOVIE_FAILURE:
            return {
                ...state,
                status: apiStatuses.DONE
            };

        case UPDATE_MOVIE_INIT:
            return {
                ...state,
                status: apiStatuses.LOADING
            };

        case UPDATE_MOVIE_SUCCESS:
            const newDictUpdate = { ...state.dict };
            newDictUpdate[action.payload.id] = {
                'title': action.payload.title,
                'genre': action.payload.genre,
            };
            return {
                ...state,
                dict: newDictUpdate,
                status: apiStatuses.DONE
            };

        case UPDATE_MOVIE_FAILURE:
            return {
                ...state,
                status: apiStatuses.DONE
            };

        case UPDATE_RATING_INIT:
            return {
                ...state,
                status: apiStatuses.LOADING
            };

        case UPDATE_RATING_SUCCESS:
            const newDictRatingUpdate = { ...state.dict };
            newDictRatingUpdate[action.payload.id] = {
                ...state.dict[action.payload.id],
                'rating': action.payload.rating
            };
            return {
                ...state,
                dict: newDictRatingUpdate,
                status: apiStatuses.DONE
            };

        case UPDATE_RATING_FAILURE:
            return {
                ...state,
                status: apiStatuses.DONE
            };

        default:
            return state;
    }
}