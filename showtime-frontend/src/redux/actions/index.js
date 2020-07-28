import MoviesApi from '../../api/MoviesApi';

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


export const fetchMovies = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_MOVIES_INIT });
        try {
            const response = await MoviesApi.get('/allmovies');
            dispatch({ type: FETCH_MOVIES_SUCCESS, payload: response.data });
        } catch (e) {
            dispatch({ type: FETCH_MOVIES_FAILURE });
        }
    }
};

export const deleteMovie = (id) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MOVIE_INIT });
        try {
            await MoviesApi.delete(`/deletemovie/${id}`);
            dispatch({ type: DELETE_MOVIE_SUCCESS, payload: { id } });

        } catch (e) {
            dispatch({ type: DELETE_MOVIE_FAILURE });
        }
    }
};

export const addMovie = (title, genre, rating) => {
    return async (dispatch) => {
        dispatch({ type: ADD_MOVIE_INIT });
        try {
            await MoviesApi.post('/addmovie', {
                title: title,
                genre: genre,
                rating: rating
            });
            dispatch({
                type: ADD_MOVIE_SUCCESS, payload: {
                    title: title,
                    genre: genre,
                    rating: rating
                }
            });

        } catch (e) {
            dispatch({ type: ADD_MOVIE_FAILURE });
        }
    }
};

export const updateMovie = (id, title, genre) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MOVIE_INIT });
        try {
            await MoviesApi.put(`/updatemovie/${id}`, {
                title: title,
                genre: genre
            });
            dispatch({
                type: UPDATE_MOVIE_SUCCESS, payload: {
                    id: id,
                    title: title,
                    genre: genre,
                }
            });

        } catch (e) {
            dispatch({ type: UPDATE_MOVIE_FAILURE });
        }
    }
};

export const updateRating = (id, rating) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RATING_INIT });
        try {
            await MoviesApi.put(`/updaterating/${id}`, {
                rating: rating
            });
            dispatch({
                type: UPDATE_RATING_SUCCESS, payload: {
                    id: id,
                    rating: rating
                }
            });

        } catch (e) {
            dispatch({ type: UPDATE_RATING_FAILURE });
        }
    }
};